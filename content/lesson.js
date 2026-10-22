// ============================================================
// Boba Break Study — Master Lesson Database
// ============================================================

const allLessonsData = {

// ========================================================
// LESSON 1 — Introducing Yourself
// ========================================================
1: {
    grammar: [
        {
            id: "greeting-nin-hao",
            name: "您好 / 你好",
            category: "Greeting",
            explanation: "您好 is the polite way to say hello. 你好 is the general way, and 妳 is the written form of 你 for girls.",
            examples: ["您好！", "你好！", "妳好！"]
        },
        {
            id: "xing-gui-xing",
            name: "我姓 + Last Name / 您貴姓？",
            category: "Asking & Stating a Last Name",
            explanation: "To politely ask someone's last name, say 您貴姓？ The answer is 我姓 + last name. Use 貴姓 only for the other person, never for yourself.",
            examples: ["請問您貴姓？", "我姓林。", "您姓什麼？"]
        },
        {
            id: "shenme",
            name: "什麼",
            category: "Question Word",
            explanation: "In Mandarin, the question word stays in the same spot where the answer will go. Just replace the answer with 什麼.",
            examples: ["您姓什麼？ — 我姓林。", "您叫什麼名字？ — 我叫林美鈴。"]
        },
        {
            id: "jiao-mingzi",
            name: "我叫 + Full Name / 您叫什麼名字？",
            category: "Asking & Stating a Name",
            explanation: "To ask for someone's name, say 您叫什麼名字？ The answer is 我叫 + full name (last name first, then given name).",
            examples: ["您叫什麼名字？", "我叫陳小美。", "我叫林美鈴。"]
        },
        {
            id: "shi-ren-nationality",
            name: "我是 + Country + 人",
            category: "Nationality",
            explanation: "Put 人 after a country name to say where someone is from. To ask, say 你是哪國人？ (哪 = which, 國 = country).",
            examples: ["請問你是哪國人？", "我是台灣人。", "我是美國人。"]
        },
        {
            id: "particle-ne",
            name: "你呢？",
            category: "Question Particle",
            explanation: "Add 呢 after a word to bounce the same question back to the other person, like \"How about you?\" in English.",
            examples: ["我是台灣人。你呢？"]
        },
        {
            id: "nice-to-meet-you",
            name: "(我)也很高興認識你",
            category: "Common Phrase",
            explanation: "很高興認識你 means \"Nice to meet you.\" Add 也 (also) right before 很 to say \"Nice to meet you, too.\"",
            examples: ["很高興認識你！", "我也很高興認識你！"]
        }
    ],
    vocabulary: [
        { hanzi: "您", pinyin: "nín", meaning: "you (polite)", category: "Pronoun" },
        { hanzi: "你", pinyin: "nǐ", meaning: "you (general)", category: "Pronoun" },
        { hanzi: "妳", pinyin: "nǐ", meaning: "you (for girls)", category: "Pronoun" },
        { hanzi: "我", pinyin: "wǒ", meaning: "I / me", category: "Pronoun" },
        { hanzi: "好", pinyin: "hǎo", meaning: "good", category: "Adjective" },
        { hanzi: "您好", pinyin: "nín hǎo", meaning: "hello (polite)", category: "Greeting" },
        { hanzi: "請問", pinyin: "qǐngwèn", meaning: "may I ask", category: "Greeting" },
        { hanzi: "貴姓", pinyin: "guìxìng", meaning: "your last name (polite)", category: "Self-Introduction" },
        { hanzi: "姓", pinyin: "xìng", meaning: "last name / to be surnamed", category: "Verb" },
        { hanzi: "叫", pinyin: "jiào", meaning: "to be called", category: "Verb" },
        { hanzi: "什麼", pinyin: "shénme", meaning: "what", category: "Question Word" },
        { hanzi: "名字", pinyin: "míngzi", meaning: "name", category: "Noun" },
        { hanzi: "林", pinyin: "Lín", meaning: "Lin (a last name)", category: "Name" },
        { hanzi: "陳", pinyin: "Chén", meaning: "Chen (a last name)", category: "Name" },
        { hanzi: "小美", pinyin: "Xiǎoměi", meaning: "Xiaomei (a given name)", category: "Name" },
        { hanzi: "美鈴", pinyin: "Měilíng", meaning: "Meiling (a given name)", category: "Name" },
        { hanzi: "是", pinyin: "shì", meaning: "to be (am / is / are)", category: "Verb" },
        { hanzi: "人", pinyin: "rén", meaning: "person", category: "People" },
        { hanzi: "台灣", pinyin: "Táiwān", meaning: "Taiwan", category: "Place" },
        { hanzi: "美國", pinyin: "Měiguó", meaning: "the United States", category: "Place" },
        { hanzi: "哪", pinyin: "nǎ", meaning: "which", category: "Question Word" },
        { hanzi: "國", pinyin: "guó", meaning: "country", category: "Place" },
        { hanzi: "哪國人", pinyin: "nǎ guó rén", meaning: "which country (are you) from", category: "Question" },
        { hanzi: "台灣人", pinyin: "Táiwān rén", meaning: "Taiwanese (person)", category: "People" },
        { hanzi: "美國人", pinyin: "Měiguó rén", meaning: "American (person)", category: "People" },
        { hanzi: "呢", pinyin: "ne", meaning: "question particle: \"and you?\"", category: "Grammar" },
        { hanzi: "很", pinyin: "hěn", meaning: "very", category: "Adverb" },
        { hanzi: "也", pinyin: "yě", meaning: "also / too", category: "Adverb" },
        { hanzi: "高興", pinyin: "gāoxìng", meaning: "happy / glad", category: "Adjective" },
        { hanzi: "認識", pinyin: "rènshi", meaning: "to know / to meet", category: "Verb" },
        { hanzi: "很高興認識你", pinyin: "hěn gāoxìng rènshi nǐ", meaning: "nice to meet you", category: "Greeting" }
    ],
    reviewQuestions: [
        { meaning: "Hello (polite)", answer: ["您", "好"] },
        { meaning: "May I ask…", answer: ["請", "問"] },
        { meaning: "What is your last name? (polite)", answer: ["您", "貴姓"] },
        { meaning: "My last name is Lin.", answer: ["我", "姓", "林"] },
        { meaning: "What is your name? (to a girl)", answer: ["妳", "叫", "什麼", "名字"] },
        { meaning: "My name is Chen Xiaomei.", answer: ["我", "叫", "陳", "小美"] },
        { meaning: "What country are you from?", answer: ["你", "是", "哪國", "人"] },
        { meaning: "I'm Taiwanese.", answer: ["我", "是", "台灣", "人"] },
        { meaning: "I'm American.", answer: ["我", "是", "美國", "人"] },
        { meaning: "My name is Lin Meiling.", answer: ["我", "叫", "林", "美鈴"] }
    ]
}

};

// ============================================================
// MAKE DATABASE AVAILABLE TO HTML
// ============================================================

window.allLessonsData = allLessonsData;
