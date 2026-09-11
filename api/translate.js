export default async function handler(req, res) {

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    if (req.method === "OPTIONS") {
        return res.status(200).end();
    }

    if (req.method !== "POST") {
        return res.status(405).json({
            error: "Method not allowed."
        });
    }

    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
        return res.status(500).json({
            error: "Gemini API key is not configured on the server."
        });
    }

    try {

        const {
            text,
            source,
            target
        } = req.body || {};

        if (
            !text ||
            typeof text !== "string" ||
            !text.trim()
        ) {
            return res.status(400).json({
                error: "Text is required."
            });
        }

        const systemInstruction = `
You are the translation engine for Boba Break Study.

Your job is to translate naturally between:

- Traditional Chinese used in Taiwan
- Indonesian
- Vietnamese
- Tagalog
- Thai
- English

IMPORTANT RULES:

1. Preserve the original meaning.
2. Do NOT translate word-for-word if that sounds unnatural.
3. Use natural everyday language.
4. When translating into Taiwan Mandarin, always use Traditional Chinese.
5. Never use Simplified Chinese.
6. Use Taiwan-specific vocabulary and phrasing when appropriate.
7. Preserve the original tone:
   - casual
   - polite
   - formal
   - friendly
   - emotional
8. Do not add information that is not in the original.
9. Do not explain the translation unless explicitly requested.
10. Return only the translated text.

Source language:
${source || "auto-detect"}

Target language:
${target || "auto-detect"}
`;

        const model = "gemini-3.6-flash";

        const endpoint =
            "https://generativelanguage.googleapis.com/v1beta/models/" +
            model +
            ":generateContent?key=" +
            encodeURIComponent(apiKey);

        const geminiResponse = await fetch(endpoint, {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({

                systemInstruction: {
                    parts: [
                        {
                            text: systemInstruction
                        }
                    ]
                },

                contents: [
                    {
                        role: "user",
                        parts: [
                            {
                                text: text.trim().slice(0, 8000)
                            }
                        ]
                    }
                ],

                generationConfig: {
                    maxOutputTokens: 1000,
                    thinkingConfig: {
                        thinkingLevel: "low"
                    }
                }

            })

        });

        const data = await geminiResponse.json();

        if (!geminiResponse.ok) {

            console.error(
                "Gemini API error:",
                data
            );

            return res.status(
                geminiResponse.status
            ).json({
                error:
                    data?.error?.message ||
                    "Gemini API request failed."
            });
        }

        const translation =
            data?.candidates?.[0]?.content?.parts
                ?.map(part => part.text || "")
                .join("")
                .trim();

        if (!translation) {

            return res.status(502).json({
                error:
                    "Gemini returned an empty response."
            });
        }

        return res.status(200).json({
            translation
        });

    } catch (error) {

        console.error(
            "Server error:",
            error
        );

        return res.status(500).json({
            error:
                "The AI server encountered an unexpected error."
        });
    }
}