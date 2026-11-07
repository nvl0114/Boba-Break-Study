// ============================================================
// Boba Break Study — Master Lesson Database
// ============================================================

const allLessonsData = {

// ========================================================
// LESSON 1 — Daily Greetings & Polite Expressions
// ========================================================
1: {
    grammar: [
        {
            id: "greeting-ni-hao",
            name: "你好 / 妳好",
            category: "Greeting",
            explanation: "你好 is the general way to say hello. 妳 is the form of 你 used for girls, and 好 means good.",
            examples: ["你好！", "妳好！"]
        },
        {
            id: "greeting-nin-hao",
            name: "您好 / 你們好",
            category: "Formal & Group Greeting",
            explanation: "您好 is the polite, formal way to say hello. To greet more than one person, add 們 to 你 to make 你們好, meaning \"hello, everyone.\"",
            examples: ["您好！", "你們好！"]
        },
        {
            id: "apologizing",
            name: "對不起 / 不好意思",
            category: "Apologizing",
            explanation: "對不起 means \"I'm sorry.\" 不好意思 can mean \"sorry\" or \"excuse me,\" and is very common in everyday Taiwan conversation.",
            examples: ["對不起！", "不好意思！"]
        },
        {
            id: "meiguanxi",
            name: "沒關係",
            category: "Replying to an Apology",
            explanation: "沒關係 means \"it's okay\" or \"no problem.\" Use it to reply when someone apologizes to you.",
            examples: ["對不起！ — 沒關係。", "不好意思！ — 沒關係。"]
        },
        {
            id: "xiexie",
            name: "謝謝",
            category: "Thanking",
            explanation: "謝謝 means \"thank you.\" It is the basic way to thank someone in any situation.",
            examples: ["謝謝！"]
        },
        {
            id: "bukeqi-buhui",
            name: "不客氣 / 不會",
            category: "Replying to Thanks",
            explanation: "In Taiwan, both 不客氣 and 不會 can be used to respond to 謝謝. 不客氣 is the standard expression, while 不會 is more casual and commonly used in everyday conversation in Taiwan.",
            examples: ["謝謝！ — 不客氣。", "謝謝！ — 不會。"]
        },
        {
            id: "goodbye",
            name: "再見 / 掰掰",
            category: "Saying Goodbye",
            explanation: "再見 is the more standard way to say goodbye, while 掰掰 is casual and commonly used in everyday conversations in Taiwan.",
            examples: ["再見！", "掰掰！"]
        }
    ],
    vocabulary: [
        { hanzi: "你", pinyin: "nǐ", meaning: "you (general)", category: "Pronoun" },
        { hanzi: "妳", pinyin: "nǐ", meaning: "you (for girls)", category: "Pronoun" },
        { hanzi: "您", pinyin: "nín", meaning: "you (formal)", category: "Pronoun" },
        { hanzi: "你們", pinyin: "nǐmen", meaning: "you (plural) / you all", category: "Pronoun" },
        { hanzi: "好", pinyin: "hǎo", meaning: "good", category: "Adjective" },
        { hanzi: "你好", pinyin: "nǐ hǎo", meaning: "hello", category: "Greeting" },
        { hanzi: "您好", pinyin: "nín hǎo", meaning: "hello (polite / formal)", category: "Greeting" },
        { hanzi: "你們好", pinyin: "nǐmen hǎo", meaning: "hello, everyone", category: "Greeting" },
        { hanzi: "對不起", pinyin: "duìbuqǐ", meaning: "I'm sorry", category: "Apology" },
        { hanzi: "不好意思", pinyin: "bù hǎoyìsi", meaning: "excuse me / sorry", category: "Apology" },
        { hanzi: "沒關係", pinyin: "méi guānxi", meaning: "it's okay / no problem", category: "Reply" },
        { hanzi: "謝謝", pinyin: "xièxie", meaning: "thank you", category: "Thanks" },
        { hanzi: "不客氣", pinyin: "bú kèqi", meaning: "you're welcome", category: "Reply" },
        { hanzi: "不會", pinyin: "bú huì", meaning: "you're welcome (casual)", category: "Reply" },
        { hanzi: "再見", pinyin: "zàijiàn", meaning: "goodbye", category: "Farewell" },
        { hanzi: "掰掰", pinyin: "bāibāi", meaning: "bye-bye (casual)", category: "Farewell" }
    ],
    reviewQuestions: [
        { meaning: "Hello.", answer: ["你", "好"] },
        { meaning: "Hello. (to a girl)", answer: ["妳", "好"] },
        { meaning: "Hello. (polite / formal)", answer: ["您", "好"] },
        { meaning: "Hello, everyone.", answer: ["你們", "好"] },
        { meaning: "I'm sorry.", answer: ["對不起"] },
        { meaning: "Excuse me. / Sorry.", answer: ["不", "好意思"] },
        { meaning: "It's okay. / No problem.", answer: ["沒", "關係"] },
        { meaning: "Thank you.", answer: ["謝謝"] },
        { meaning: "You're welcome.", answer: ["不", "客氣"] },
        { meaning: "You're welcome. (casual)", answer: ["不", "會"] },
        { meaning: "Goodbye.", answer: ["再", "見"] },
        { meaning: "Bye-bye. (casual)", answer: ["掰", "掰"] }
    ]
},

// ========================================================
// LESSON 2 — Introducing Yourself: Names & Nationalities
// ========================================================
2: {
    grammar: [
        {
            id: "asking-surname",
            name: "你貴姓？ / 我姓…",
            category: "Asking for a Surname",
            explanation: "你貴姓？ is the polite way to ask for someone's surname. 貴 literally means \"honorable,\" so 貴姓 means \"your honorable surname.\" Never use 貴 for yourself. Answer with 我姓 + surname.",
            examples: ["你貴姓？ — 我姓王。", "你貴姓？ — 我姓林。"]
        },
        {
            id: "asking-name",
            name: "你叫什麼名字？ / 我叫…",
            category: "Asking for a Full Name",
            explanation: "To ask for someone's full name, say 你叫什麼名字？ 叫 means \"to be called\" and 什麼 means \"what.\" Answer with 我叫 + full name. Chinese names put the surname first, then the given name.",
            examples: ["你叫什麼名字？ — 我叫王小明。", "你叫什麼名字？ — 我叫林小美。"]
        },
        {
            id: "shi-positive-negative",
            name: "是 / 不是",
            category: "To Be (Positive & Negative)",
            explanation: "是 links a subject with a noun (a job, nationality or identity) and does not change for I / you / he / she. Positive: Subject + 是 + Noun. Negative: Subject + 不是 + Noun. 不 is normally bù, but it changes to bú before another 4th-tone syllable such as 是 (shì).",
            examples: ["我是學生。", "我不是老師。"]
        },
        {
            id: "shi-bu-shi",
            name: "是不是",
            category: "A-not-A Question",
            explanation: "To ask a yes/no question, say the verb in positive and negative form together: Subject + 是不是 + Noun? Answer with 是 (yes) or 不是 (no), then add the full sentence. Do not combine 是不是 with 嗎 in the same sentence.",
            examples: ["你是不是老師？", "是，我是老師。", "不是，我是學生。"]
        },
        {
            id: "ne-particle",
            name: "呢",
            category: "Asking \"How about…?\"",
            explanation: "Add 呢 after a noun or pronoun to ask the same question back without repeating it. It means \"how about…?\" or \"and…?\" and is pronounced with a light, neutral tone.",
            examples: ["我是學生，你呢？", "我叫王小明，妳呢？", "我姓林，你呢？"]
        },
        {
            id: "na-which",
            name: "哪 / 哪國人",
            category: "Question Word: Which",
            explanation: "哪 (nǎ, 3rd tone) means \"which\" and is followed by a noun, often with a measure word. 哪國人 literally means \"person from which country,\" and is used to ask about nationality. Don't confuse 哪 (nǎ, \"which\") with 那 (nà, \"that\"). To answer, say the country name + 人.",
            examples: ["你是哪國人？ — 我是美國人。", "哪個學生？", "哪位老師？"]
        },
        {
            id: "ye-also",
            name: "也",
            category: "Adverb: Also",
            explanation: "也 means \"also\" or \"too.\" It goes after the subject and before the verb.",
            examples: ["我也是學生。", "他也是老師。"]
        },
        {
            id: "ma-particle",
            name: "嗎",
            category: "Yes/No Question Particle",
            explanation: "Add 嗎 to the end of a statement to turn it into a yes/no question. The word order stays the same, and 嗎 is pronounced with a neutral tone. Use 嗎 or the A-not-A form, but not both.",
            examples: ["你是學生嗎？", "妳是美國人嗎？", "你是台灣人嗎？"]
        }
    ],
    vocabulary: [
        { hanzi: "我", pinyin: "wǒ", meaning: "I / me", category: "Pronoun" },
        { hanzi: "貴姓", pinyin: "guì xìng", meaning: "your surname (polite)", category: "Question" },
        { hanzi: "姓", pinyin: "xìng", meaning: "surname / to be surnamed", category: "Verb" },
        { hanzi: "王", pinyin: "Wáng", meaning: "Wang (a surname)", category: "Surname" },
        { hanzi: "林", pinyin: "Lín", meaning: "Lin (a surname)", category: "Surname" },
        { hanzi: "叫", pinyin: "jiào", meaning: "to be called", category: "Verb" },
        { hanzi: "什麼", pinyin: "shénme", meaning: "what", category: "Question Word" },
        { hanzi: "名字", pinyin: "míngzi", meaning: "name", category: "Noun" },
        { hanzi: "小明", pinyin: "Xiǎomíng", meaning: "Xiaoming (a given name)", category: "Name" },
        { hanzi: "是", pinyin: "shì", meaning: "to be (am / is / are)", category: "Verb" },
        { hanzi: "不", pinyin: "bù / bú", meaning: "not / no", category: "Adverb" },
        { hanzi: "老師", pinyin: "lǎoshī", meaning: "teacher", category: "Noun" },
        { hanzi: "學生", pinyin: "xuéshēng", meaning: "student", category: "Noun" },
        { hanzi: "哪", pinyin: "nǎ", meaning: "which", category: "Question Word" },
        { hanzi: "國", pinyin: "guó", meaning: "country", category: "Noun" },
        { hanzi: "人", pinyin: "rén", meaning: "person / people", category: "Noun" },
        { hanzi: "哪國人", pinyin: "nǎ guó rén", meaning: "person from which country", category: "Question" },
        { hanzi: "呢", pinyin: "ne", meaning: "how about…? / and…?", category: "Particle" },
        { hanzi: "美國", pinyin: "Měiguó", meaning: "America / USA", category: "Country" },
        { hanzi: "台灣", pinyin: "Táiwān", meaning: "Taiwan", category: "Country" },
        { hanzi: "也", pinyin: "yě", meaning: "also / too", category: "Adverb" },
        { hanzi: "嗎", pinyin: "ma", meaning: "question particle (yes/no)", category: "Particle" }
    ],
    reviewQuestions: [
        { meaning: "May I ask your surname?", answer: ["你", "貴姓"] },
        { meaning: "My surname is Wang.", answer: ["我", "姓", "王"] },
        { meaning: "What's your name?", answer: ["你", "叫", "什麼", "名字"] },
        { meaning: "My name is Lin Xiaomei.", answer: ["我", "叫", "林小美"] },
        { meaning: "I am a student.", answer: ["我", "是", "學生"] },
        { meaning: "I am not a teacher.", answer: ["我", "不是", "老師"] },
        { meaning: "Are you a teacher?", answer: ["你", "是", "不", "是", "老師"] },
        { meaning: "I am American.", answer: ["我", "是", "美國人"] },
        { meaning: "Are you Taiwanese?", answer: ["你", "是", "台灣人", "嗎"] }
    ]
},

// ========================================================
// LESSON 3 — Who Is He? 誰 & 的
// ========================================================
3: {
    grammar: [
        {
            id: "shei-who",
            name: "誰",
            category: "Question Word: Who",
            explanation: "誰 (shéi, also written shuí) means \"who\" or \"whom.\" Put 誰 in the spot where the answer would go. The word order does not change. It can be at the end (你是誰？) or at the beginning (誰是老師？). Don't add 嗎 to a question with 誰.",
            examples: ["你是誰？", "他是誰？", "誰是老師？", "誰是你的朋友？"]
        },
        {
            id: "ta-he-she",
            name: "他 / 她",
            category: "Pronoun: He / She",
            explanation: "他 can mean \"he,\" \"she,\" \"his\" or \"her\" in a general way. 她 has the 女 (woman) radical and means \"she\" or \"her.\" Both are pronounced tā, so you can only see the difference when reading.",
            examples: ["他是我的朋友。", "她是我同學。"]
        },
        {
            id: "de-possessive",
            name: "的",
            category: "Possessive Particle",
            explanation: "的 (de, neutral tone) connects the owner and the thing owned, like \"'s\" in English. Pattern: Owner + 的 + Thing. 的 can also end a sentence to mean \"mine / yours / his.\"",
            examples: ["我的書", "你的手機", "老師的書", "這本書是我的。"]
        },
        {
            id: "de-omit",
            name: "Leaving out 的",
            category: "Dropping 的",
            explanation: "You can usually drop 的 when the thing belongs to you in a very close, natural way: family (我媽媽), close people (我朋友, 我同學), and groups or places you belong to (我們學校, 我家). Keep 的 for things you own (我的書, 我的手機) or when the owner is a noun (老師的手機). Adding 的 can also add emphasis, as in 她不是我的朋友. If unsure, use 的.",
            examples: ["我媽媽", "我同學", "我們學校", "她不是我的朋友，她是我同學。"]
        },
        {
            id: "shei-de-shei",
            name: "你是我的誰？",
            category: "Relationship Question",
            explanation: "你是我的誰？ literally means \"you are my who?\" and asks \"Who are you to me?\" (what is our relationship).",
            examples: ["你是我的誰？", "你是我的朋友。"]
        }
    ],
    vocabulary: [
        { hanzi: "他", pinyin: "tā", meaning: "he, she, his, her (in general)", category: "Pronoun" },
        { hanzi: "她", pinyin: "tā", meaning: "she, her", category: "Pronoun" },
        { hanzi: "誰", pinyin: "shéi (shuí)", meaning: "who, whom", category: "Question Word" },
        { hanzi: "的", pinyin: "de", meaning: "'s / of (possessive marker)", category: "Particle" },
        { hanzi: "朋友", pinyin: "péngyou", meaning: "friend", category: "Noun" },
        { hanzi: "同學", pinyin: "tóngxué", meaning: "classmate", category: "Noun" }
    ],
    reviewQuestions: [
        { meaning: "Who are you?", answer: ["你", "是", "誰"] },
        { meaning: "You are my friend.", answer: ["你", "是", "我", "的", "朋友"] },
        { meaning: "Who is she?", answer: ["她", "是", "誰"] },
        { meaning: "He is my classmate.", answer: ["他", "是", "我", "的", "同學"] },
        { meaning: "Who are you to me?", answer: ["你", "是", "我", "的", "誰"] }
    ]
},

// ========================================================
// LESSON 4 — Let's Count! Numbers 1–99
// ========================================================
4: {
    grammar: [
        {
            id: "numbers-1-10",
            name: "一 二 三 … 十",
            category: "Numbers 1–10",
            explanation: "These ten characters are the building blocks of every number up to 99. Learn them well, because everything else is made from them: 一 (1), 二 (2), 三 (3), 四 (4), 五 (5), 六 (6), 七 (7), 八 (8), 九 (9), 十 (10).",
            examples: ["一、二、三", "四、五、六", "七、八、九、十"]
        },
        {
            id: "numbers-11-19",
            name: "十 + number",
            category: "Numbers 11–19",
            explanation: "To make 11–19, put 十 (shí) first, then add the number after it. Pattern: 十 + number. Think of 十 as the \"ten\" and the second character as the extra ones.",
            examples: ["十一 (11)", "十五 (15)", "十九 (19)"]
        },
        {
            id: "numbers-tens",
            name: "number + 十",
            category: "The Tens: 20–90",
            explanation: "To make 20, 30, 40 and so on, put the number first, then 十 (shí). Pattern: number + 十. So 二十 means \"two tens\" = 20, 三十 means \"three tens\" = 30.",
            examples: ["二十 (20)", "三十 (30)", "四十 (40)", "五十 (50)", "六十 (60)", "九十 (90)"]
        },
        {
            id: "numbers-tens-ones",
            name: "number + 十 + number",
            category: "Tens + Ones: 21–99",
            explanation: "For numbers like 21, 32 or 94, put the tens first, 十 in the middle, and the ones at the end. Pattern: number + 十 + number. For example, 52 = 五 (5) + 十 (10) + 二 (2) → 五十二.",
            examples: ["二十一 (21)", "三十二 (32)", "五十二 (52)", "九十四 (94)"]
        },
        {
            id: "numbers-reading-direction",
            name: "Number → Hanzi, Hanzi → Number",
            category: "Practice Tip",
            explanation: "Practice both directions. To write a number in Mandarin, split it into tens and ones (64 → 六十 + 四 → 六十四). To read a number, find the 十 first, then read what is before it (tens) and after it (ones): 七十五 → 七十 + 五 → 75.",
            examples: ["89 → 八十九", "六十四 → 64", "99 → 九十九"]
        }
    ],
    vocabulary: [
        { hanzi: "一", pinyin: "yī", meaning: "one (1)", category: "Number" },
        { hanzi: "二", pinyin: "èr", meaning: "two (2)", category: "Number" },
        { hanzi: "三", pinyin: "sān", meaning: "three (3)", category: "Number" },
        { hanzi: "四", pinyin: "sì", meaning: "four (4)", category: "Number" },
        { hanzi: "五", pinyin: "wǔ", meaning: "five (5)", category: "Number" },
        { hanzi: "六", pinyin: "liù", meaning: "six (6)", category: "Number" },
        { hanzi: "七", pinyin: "qī", meaning: "seven (7)", category: "Number" },
        { hanzi: "八", pinyin: "bā", meaning: "eight (8)", category: "Number" },
        { hanzi: "九", pinyin: "jiǔ", meaning: "nine (9)", category: "Number" },
        { hanzi: "十", pinyin: "shí", meaning: "ten (10)", category: "Number" }
    ],
    reviewQuestions: [
        { meaning: "Seven (7)", answer: ["七"] },
        { meaning: "Fourteen (14)", answer: ["十", "四"] },
        { meaning: "Eighteen (18)", answer: ["十", "八"] },
        { meaning: "Thirty (30)", answer: ["三", "十"] },
        { meaning: "Forty (40)", answer: ["四", "十"] },
        { meaning: "Twenty-one (21)", answer: ["二", "十", "一"] },
        { meaning: "Fifty-two (52)", answer: ["五", "十", "二"] },
        { meaning: "Sixty-four (64)", answer: ["六", "十", "四"] },
        { meaning: "Seventy-five (75)", answer: ["七", "十", "五"] },
        { meaning: "Eighty-nine (89)", answer: ["八", "十", "九"] },
        { meaning: "Ninety-four (94)", answer: ["九", "十", "四"] },
        { meaning: "Ninety-nine (99)", answer: ["九", "十", "九"] }
    ]
}

};

// ============================================================
// MAKE DATABASE AVAILABLE TO HTML
// ============================================================

window.allLessonsData = allLessonsData;
