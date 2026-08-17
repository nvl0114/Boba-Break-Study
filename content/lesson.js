// ============================================================
// Boba Break Study — Lesson Database
// Previously Learned Grammar & Vocabulary (Updated)
// ============================================================

const lessonData = {

    // ========================================================
    // GRAMMAR ALREADY LEARNED
    // ========================================================

    grammar: [

        {
            id: "svo",
            name: "S + V + O",
            category: "Sentence Structure",
            examples: [
                "我吃飯。",
                "你喝水。",
                "她看書。"
            ]
        },

        {
            id: "s-bu-v-o",
            name: "S + 不 + V + O",
            category: "Negative Sentence",
            examples: [
                "我不吃飯。",
                "你不喝水。",
                "她不看書。"
            ]
        },

        {
            id: "svo-ma",
            name: "S + V + O + 嗎",
            category: "Yes / No Question",
            examples: [
                "你吃飯嗎？",
                "你喝水嗎？",
                "她看書嗎？"
            ]
        },

        {
            id: "s-v-bu-v",
            name: "S + V + 不 + V",
            category: "A-not-A Question",
            examples: [
                "你吃不吃？",
                "你喝不喝？",
                "你看不看？"
            ]
        },

        {
            id: "answer-v-bu-v",
            name: "Answer with V and 不 + V",
            category: "Answer",
            examples: [
                "吃 / 不吃",
                "喝 / 不喝",
                "看 / 不看"
            ]
        },

        {
            id: "de",
            name: "的",
            category: "Possession",
            examples: [
                "我的手機。",
                "你的書。",
                "她的媽媽。"
            ]
        },

        {
            id: "shi",
            name: "是",
            category: "Identity",
            examples: [
                "我是老師。",
                "她是醫生。",
                "他是學生。"
            ]
        },

        {
            id: "bu-shi",
            name: "不是",
            category: "Negative Identity",
            examples: [
                "我不是老師。",
                "她不是醫生。",
                "他不是學生。"
            ]
        },

        {
            id: "shi-ma",
            name: "是...嗎",
            category: "Identity Question",
            examples: [
                "你是老師嗎？",
                "她是醫生嗎？",
                "他是學生嗎？"
            ]
        },

        {
            id: "shi-bu-shi",
            name: "是不是",
            category: "A-not-A Question",
            examples: [
                "你是不是老師？",
                "她是不是醫生？",
                "他是不是學生？"
            ]
        },

        {
            id: "answer-shi",
            name: "Answer: 是",
            category: "Answer",
            examples: [
                "是。",
                "是，我是老師。",
                "是，她是醫生。"
            ]
        },

        {
            id: "answer-bu-shi",
            name: "Answer: 不是",
            category: "Answer",
            examples: [
                "不是。",
                "不是，我不是老師。",
                "不是，她不是醫生。"
            ]
        },

        // --- New Grammar Additions ---
        {
            id: "s-hen-adj",
            name: "S + 很 + Adj",
            category: "Adjective Sentence",
            examples: [
                "我很累。",
                "你很好。",
                "她很高。"
            ]
        },

        {
            id: "s-bu-adj",
            name: "S + 不 + Adj",
            category: "Negative Adjective Sentence",
            examples: [
                "我不累。",
                "你不好。",
                "她不高。"
            ]
        },

        {
            id: "s-hen-adj-ma",
            name: "S + 很 + Adj + 嗎",
            category: "Adjective Question",
            examples: [
                "你很累嗎？",
                "你很好嗎？",
                "她很高嗎？"
            ]
        },

        {
            id: "s-adj-bu-adj",
            name: "S + Adj + 不 + Adj",
            category: "A-not-A Adjective Question",
            examples: [
                "你累不累？",
                "你好不好？",
                "她高不高？"
            ]
        },

        {
            id: "s-hen-v-o-ma",
            name: "S + 很 + V + O + 嗎",
            category: "Adverbial Question",
            examples: [
                "你很看書嗎？",
                "你很吃飯嗎？"
            ]
        }

    ],


    // ========================================================
    // VOCABULARY ALREADY LEARNED
    // ========================================================

    vocabulary: [

        // ----------------------------------------------------
        // Pronouns
        // ----------------------------------------------------

        {
            hanzi: "我",
            pinyin: "wǒ",
            meaning: "I / me",
            category: "Pronoun"
        },

        {
            hanzi: "你",
            pinyin: "nǐ",
            meaning: "you",
            category: "Pronoun"
        },

        {
            hanzi: "妳",
            pinyin: "nǐ",
            meaning: "you (female)",
            category: "Pronoun"
        },

        {
            hanzi: "他",
            pinyin: "tā",
            meaning: "he / him",
            category: "Pronoun"
        },

        {
            hanzi: "她",
            pinyin: "tā",
            meaning: "she / her",
            category: "Pronoun"
        },

        {
            hanzi: "你們",
            pinyin: "nǐmen",
            meaning: "you (plural)",
            category: "Pronoun"
        },

        {
            hanzi: "妳們",
            pinyin: "nǐmen",
            meaning: "you (plural, female)",
            category: "Pronoun"
        },

        {
            hanzi: "他們",
            pinyin: "tāmen",
            meaning: "they / them (male or mixed)",
            category: "Pronoun"
        },

        {
            hanzi: "她們",
            pinyin: "tāmen",
            meaning: "they / them (female)",
            category: "Pronoun"
        },

        {
            hanzi: "我們",
            pinyin: "wǒmen",
            meaning: "we / us",
            category: "Pronoun"
        },


        // ----------------------------------------------------
        // Verbs
        // ----------------------------------------------------

        {
            hanzi: "吃",
            pinyin: "chī",
            meaning: "to eat",
            category: "Verb"
        },

        {
            hanzi: "喝",
            pinyin: "hē",
            meaning: "to drink",
            category: "Verb"
        },

        {
            hanzi: "看",
            pinyin: "kàn",
            meaning: "to look / watch / read",
            category: "Verb"
        },

        {
            hanzi: "買",
            pinyin: "mǎi",
            meaning: "to buy",
            category: "Verb"
        },


        // ----------------------------------------------------
        // Food & Drinks
        // ----------------------------------------------------

        {
            hanzi: "飯",
            pinyin: "fàn",
            meaning: "rice / meal",
            category: "Food"
        },

        {
            hanzi: "水",
            pinyin: "shuǐ",
            meaning: "water",
            category: "Drink"
        },

        {
            hanzi: "牛奶",
            pinyin: "niúnǎi",
            meaning: "milk",
            category: "Drink"
        },

        {
            hanzi: "麵包",
            pinyin: "miànbāo",
            meaning: "bread",
            category: "Food"
        },

        {
            hanzi: "水果",
            pinyin: "shuǐguǒ",
            meaning: "fruit",
            category: "Food"
        },

        {
            hanzi: "咖啡",
            pinyin: "kāfēi",
            meaning: "coffee",
            category: "Drink"
        },

        {
            hanzi: "巧克力",
            pinyin: "qiǎokèlì",
            meaning: "chocolate",
            category: "Food"
        },


        // ----------------------------------------------------
        // Objects
        // ----------------------------------------------------

        {
            hanzi: "書",
            pinyin: "shū",
            meaning: "book",
            category: "Object"
        },

        {
            hanzi: "手機",
            pinyin: "shǒujī",
            meaning: "mobile phone",
            category: "Object"
        },

        {
            hanzi: "電腦",
            pinyin: "diànnǎo",
            meaning: "computer",
            category: "Object"
        },

        {
            hanzi: "電視",
            pinyin: "diànshì",
            meaning: "television / TV",
            category: "Object"
        },

        {
            hanzi: "車子",
            pinyin: "chēzi",
            meaning: "car",
            category: "Object"
        },

        {
            hanzi: "報紙",
            pinyin: "bàozhǐ",
            meaning: "newspaper",
            category: "Object"
        },

        {
            hanzi: "照片",
            pinyin: "zhàopiàn",
            meaning: "photo / photograph",
            category: "Object"
        },

        {
            hanzi: "眼鏡",
            pinyin: "yǎnjìng",
            meaning: "glasses",
            category: "Object"
        },

        {
            hanzi: "禮物",
            pinyin: "lǐwù",
            meaning: "gift / present",
            category: "Object"
        },

        {
            hanzi: "東西",
            pinyin: "dōngxi",
            meaning: "thing / things",
            category: "Object"
        },

        {
            hanzi: "信",
            pinyin: "xìn",
            meaning: "letter / mail",
            category: "Object"
        },


        // ----------------------------------------------------
        // Family
        // ----------------------------------------------------

        {
            hanzi: "媽媽",
            pinyin: "māma",
            meaning: "mother / mom",
            category: "Family"
        },

        {
            hanzi: "爸爸",
            pinyin: "bàba",
            meaning: "father / dad",
            category: "Family"
        },

        {
            hanzi: "孩子",
            pinyin: "háizi",
            meaning: "child",
            category: "Family"
        },

        {
            hanzi: "兒子",
            pinyin: "érzi",
            meaning: "son",
            category: "Family"
        },

        {
            hanzi: "女兒",
            pinyin: "nǚ'ér",
            meaning: "daughter",
            category: "Family"
        },

        {
            hanzi: "弟弟",
            pinyin: "dìdi",
            meaning: "younger brother",
            category: "Family"
        },

        {
            hanzi: "哥哥",
            pinyin: "gēge",
            meaning: "older brother",
            category: "Family"
        },

        {
            hanzi: "妹妹",
            pinyin: "mèimei",
            meaning: "younger sister",
            category: "Family"
        },

        {
            hanzi: "姐姐",
            pinyin: "jiějie",
            meaning: "older sister",
            category: "Family"
        },

        {
            hanzi: "姊姊",
            pinyin: "jiějie",
            meaning: "older sister",
            category: "Family"
        },


        // ----------------------------------------------------
        // People / Occupations
        // ----------------------------------------------------

        {
            hanzi: "男生",
            pinyin: "nánshēng",
            meaning: "boy / male student",
            category: "People"
        },

        {
            hanzi: "女生",
            pinyin: "nǚshēng",
            meaning: "girl / female student",
            category: "People"
        },

        {
            hanzi: "老師",
            pinyin: "lǎoshī",
            meaning: "teacher",
            category: "Occupation"
        },

        {
            hanzi: "醫生",
            pinyin: "yīshēng",
            meaning: "doctor",
            category: "Occupation"
        },

        {
            hanzi: "護士",
            pinyin: "hùshì",
            meaning: "nurse",
            category: "Occupation"
        },

        {
            hanzi: "司機",
            pinyin: "sījī",
            meaning: "driver",
            category: "Occupation"
        },

        {
            hanzi: "同學",
            pinyin: "tóngxué",
            meaning: "classmate",
            category: "People"
        },

        {
            hanzi: "同事",
            pinyin: "tóngshì",
            meaning: "coworker / colleague",
            category: "People"
        },

        {
            hanzi: "工人",
            pinyin: "gōngrén",
            meaning: "worker",
            category: "Occupation"
        },

        {
            hanzi: "老闆",
            pinyin: "lǎobǎn",
            meaning: "boss / owner",
            category: "Occupation"
        },

        {
            hanzi: "老闆娘",
            pinyin: "lǎobǎnniáng",
            meaning: "female boss / owner's wife",
            category: "Occupation"
        },

        {
            hanzi: "朋友",
            pinyin: "péngyou",
            meaning: "friend",
            category: "People"
        },


        // ----------------------------------------------------
        // Grammar Words
        // ----------------------------------------------------

        {
            hanzi: "不",
            pinyin: "bù",
            meaning: "not / no",
            category: "Grammar"
        },

        {
            hanzi: "嗎",
            pinyin: "ma",
            meaning: "question particle",
            category: "Grammar"
        },

        {
            hanzi: "很",
            pinyin: "hěn",
            meaning: "very",
            category: "Grammar"
        }

    ]

};


// ============================================================
// HELPER FUNCTIONS
// ============================================================

function getLearnedVocabulary() {
    return lessonData.vocabulary;
}

function getLearnedGrammar() {
    return lessonData.grammar;
}

function findVocabulary(hanzi) {
    return lessonData.vocabulary.find(
        word => word.hanzi === hanzi
    );
}

function findGrammar(id) {
    return lessonData.grammar.find(
        grammar => grammar.id === id
    );
}

function getVocabularyByCategory(category) {
    return lessonData.vocabulary.filter(
        word => word.category === category
    );
}

function getVocabularyCount() {
    return lessonData.vocabulary.length;
}

function getGrammarCount() {
    return lessonData.grammar.length;
}
