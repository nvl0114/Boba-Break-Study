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
}

};

// ============================================================
// MAKE DATABASE AVAILABLE TO HTML
// ============================================================

window.allLessonsData = allLessonsData;
