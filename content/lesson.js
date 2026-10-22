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
}

};

// ============================================================
// MAKE DATABASE AVAILABLE TO HTML
// ============================================================

window.allLessonsData = allLessonsData;
