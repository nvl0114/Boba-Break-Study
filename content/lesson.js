// ============================================================
// Boba Break Study — Lesson Database
// Measure Word (個 / gè) Update
// ============================================================

const lessonData = {

    // ========================================================
    // GRAMMAR ALREADY LEARNED & NEW ADDITION
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
        },

        // --- New Measure Word Grammar Addition ---
        {
            id: "measure-word-ge",
            name: "Number / This / That + 個 + Noun",
            category: "Measure Word Structure",
            explanation: "In Mandarin, you cannot place a number, 'this' (這), or 'that' (那) directly in front of a noun. You must use the universal measure word 個 (gè) in between them.",
            examples: [
                "一個人 (One person)",
                "這個問題 (This question / problem)",
                "那個地方 (That place)",
                "兩個月 (Two months - note: use 兩 instead of 二 before measure words)"
            ]
        }

    ],


    // ========================================================
    // VOCABULARY ALREADY LEARNED & NEW ADDITIONS
    // ========================================================

    vocabulary: [

        // Pronouns
        { hanzi: "我", pinyin: "wǒ", meaning: "I / me", category: "Pronoun" },
        { hanzi: "你", pinyin: "nǐ", meaning: "you", category: "Pronoun" },
        { hanzi: "妳", pinyin: "nǐ", meaning: "you (female)", category: "Pronoun" },
        { hanzi: "他", pinyin: "tā", meaning: "he / him", category: "Pronoun" },
        { hanzi: "她", pinyin: "tā", meaning: "she / her", category: "Pronoun" },
        { hanzi: "你們", pinyin: "nǐmen", meaning: "you (plural)", category: "Pronoun" },
        { hanzi: "妳們", pinyin: "nǐmen", meaning: "you (plural, female)", category: "Pronoun" },
        { hanzi: "他們", pinyin: "tāmen", meaning: "they / them (male or mixed)", category: "Pronoun" },
        { hanzi: "她們", pinyin: "tāmen", meaning: "they / them (female)", category: "Pronoun" },
        { hanzi: "我們", pinyin: "wǒmen", meaning: "we / us", category: "Pronoun" },

        // Verbs
        { hanzi: "吃", pinyin: "chī", meaning: "to eat", category: "Verb" },
        { hanzi: "喝", pinyin: "hē", meaning: "to drink", category: "Verb" },
        { hanzi: "看", pinyin: "kàn", meaning: "to look / watch / read", category: "Verb" },
        { hanzi: "買", pinyin: "mǎi", meaning: "to buy", category: "Verb" },
        { hanzi: "畫", pinyin: "huà", meaning: "to draw / paint", category: "Verb" },
        { hanzi: "工作", pinyin: "gōngzuò", meaning: "to work / work", category: "Verb" },
        { hanzi: "喜歡", pinyin: "xǐhuan", meaning: "to like", category: "Verb" },
        { hanzi: "愛", pinyin: "ài", meaning: "to love", category: "Verb" },
        { hanzi: "想", pinyin: "xiǎng", meaning: "to want / would like / to think", category: "Verb" },
        { hanzi: "怕", pinyin: "pà", meaning: "to fear / be afraid of", category: "Verb" },
        { hanzi: "了解", pinyin: "liǎojiě", meaning: "to understand / comprehend", category: "Verb" },

        // Food & Drinks
        { hanzi: "飯", pinyin: "fàn", meaning: "rice / meal", category: "Food" },
        { hanzi: "水", pinyin: "shuǐ", meaning: "water", category: "Drink" },
        { hanzi: "牛奶", pinyin: "niúnǎi", meaning: "milk", category: "Drink" },
        { hanzi: "麵包", pinyin: "miànbāo", meaning: "bread", category: "Food" },
        { hanzi: "水果", pinyin: "shuǐguǒ", meaning: "fruit", category: "Food" },
        { hanzi: "咖啡", pinyin: "kāfēi", meaning: "coffee", category: "Drink" },
        { hanzi: "巧克力", pinyin: "qiǎokèlì", meaning: "chocolate", category: "Food" },

        // Objects & Places / Concepts
        { hanzi: "書", pinyin: "shū", meaning: "book", category: "Object" },
        { hanzi: "手機", pinyin: "shǒujī", meaning: "mobile phone", category: "Object" },
        { hanzi: "電腦", pinyin: "diànnǎo", meaning: "computer", category: "Object" },
        { hanzi: "電視", pinyin: "diànshì", meaning: "television / TV", category: "Object" },
        { hanzi: "車子", pinyin: "chēzi", meaning: "car", category: "Object" },
        { hanzi: "報紙", pinyin: "bàozhǐ", meaning: "newspaper", category: "Object" },
        { hanzi: "照片", pinyin: "zhàopiàn", meaning: "photo / photograph", category: "Object" },
        { hanzi: "圖片", pinyin: "túpiàn", meaning: "picture / image", category: "Object" },
        { hanzi: "眼鏡", pinyin: "yǎnjìng", meaning: "glasses", category: "Object" },
        { hanzi: "禮物", pinyin: "lǐwù", meaning: "gift / present", category: "Object" },
        { hanzi: "東西", pinyin: "dōngxi", meaning: "thing / things", category: "Object" },
        { hanzi: "信", pinyin: "xìn", meaning: "letter / mail", category: "Object" },
        { hanzi: "地方", pinyin: "dìfang", meaning: "place", category: "Place" },
        { hanzi: "問題", pinyin: "wèntí", meaning: "question / problem", category: "Concept" },
        { hanzi: "月", pinyin: "yuè", meaning: "month", category: "Time" },
        { hanzi: "公司", pinyin: "gōngsī", meaning: "company", category: "Place" },

        // Family
        { hanzi: "媽媽", pinyin: "māma", meaning: "mother / mom", category: "Family" },
        { hanzi: "爸爸", pinyin: "bàba", meaning: "father / dad", category: "Family" },
        { hanzi: "孩子", pinyin: "háizi", meaning: "child", category: "Family" },
        { hanzi: "兒子", pinyin: "érzi", meaning: "son", category: "Family" },
        { hanzi: "女兒", pinyin: "nǚ'ér", meaning: "daughter", category: "Family" },
        { hanzi: "弟弟", pinyin: "dìdi", meaning: "younger brother", category: "Family" },
        { hanzi: "哥哥", pinyin: "gēge", meaning: "older brother", category: "Family" },
        { hanzi: "妹妹", pinyin: "mèimei", meaning: "younger sister", category: "Family" },
        { hanzi: "姐姐", pinyin: "jiějie", meaning: "older sister", category: "Family" },
        { hanzi: "姊姊", pinyin: "jiějie", meaning: "older sister", category: "Family" },

        // People / Occupations / Animals
        { hanzi: "男生", pinyin: "nánshēng", meaning: "boy / male student", category: "People" },
        { hanzi: "女生", pinyin: "nǚshēng", meaning: "girl / female student", category: "People" },
        { hanzi: "太太", pinyin: "tàitai", meaning: "wife / Mrs.", category: "People" },
        { hanzi: "小姐", pinyin: "xiǎojiě", meaning: "miss / young lady", category: "People" },
        { hanzi: "小孩", pinyin: "xiǎohái", meaning: "child / kid", category: "People" },
        { hanzi: "人", pinyin: "rén", meaning: "person / people", category: "People" },
        { hanzi: "老師", pinyin: "lǎoshī", meaning: "teacher", category: "Occupation" },
        { hanzi: "醫生", pinyin: "yīshēng", meaning: "doctor", category: "Occupation" },
        { hanzi: "護士", pinyin: "hùshì", meaning: "nurse", category: "Occupation" },
        { hanzi: "司機", pinyin: "sījī", meaning: "driver", category: "Occupation" },
        { hanzi: "同學", pinyin: "tóngxué", meaning: "classmate", category: "People" },
        { hanzi: "同事", pinyin: "tóngshì", meaning: "coworker / colleague", category: "People" },
        { hanzi: "工人", pinyin: "gōngrén", meaning: "worker", category: "Occupation" },
        { hanzi: "老闆", pinyin: "lǎobǎn", meaning: "boss / owner", category: "Occupation" },
        { hanzi: "老闆娘", pinyin: "lǎobǎnniáng", meaning: "female boss / owner's wife", category: "Occupation" },
        { hanzi: "朋友", pinyin: "péngyou", meaning: "friend", category: "People" },
        { hanzi: "貓咪", pinyin: "māomī", meaning: "kitty / cat", category: "Animal" },
        { hanzi: "狗", pinyin: "gǒu", meaning: "dog", category: "Animal" },

        // Adjectives & Descriptions
        { hanzi: "好看", pinyin: "hǎokàn", meaning: "good-looking / beautiful / interesting", category: "Adjective" },
        { hanzi: "漂亮", pinyin: "piàoliang", meaning: "pretty / beautiful", category: "Adjective" },
        { hanzi: "可愛", pinyin: "kě'ài", meaning: "cute / lovely", category: "Adjective" },
        { hanzi: "累", pinyin: "lèi", meaning: "tired", category: "Adjective" },
        { hanzi: "忙", pinyin: "máng", meaning: "busy", category: "Adjective" },
        { hanzi: "難", pinyin: "nán", meaning: "difficult / hard", category: "Adjective" },

        // Languages & Subjects
        { hanzi: "中文", pinyin: "zhōngwén", meaning: "Chinese language", category: "Language" },

        // Demonstratives & Measure Words
        { hanzi: "這", pinyin: "zhè", meaning: "this", category: "Demonstrative" },
        { hanzi: "那", pinyin: "nà", meaning: "that", category: "Demonstrative" },
        { hanzi: "個", pinyin: "gè", meaning: "measure word (general)", category: "Measure Word" },

        // Numbers (0 - 10)
        { hanzi: "零", pinyin: "líng", meaning: "zero", category: "Number" },
        { hanzi: "一", pinyin: "yī", meaning: "one", category: "Number" },
        { hanzi: "兩", pinyin: "liǎng", meaning: "two (used with measure words)", category: "Number" },
        { hanzi: "二", pinyin: "èr", meaning: "two (counting / numbers)", category: "Number" },
        { hanzi: "三", pinyin: "sān", meaning: "three", category: "Number" },
        { hanzi: "四", pinyin: "sì", meaning: "four", category: "Number" },
        { hanzi: "五", pinyin: "wǔ", meaning: "five", category: "Number" },
        { hanzi: "六", pinyin: "liù", meaning: "six", category: "Number" },
        { hanzi: "七", pinyin: "qī", meaning: "seven", category: "Number" },
        { hanzi: "八", pinyin: "bā", meaning: "eight", category: "Number" },
        { hanzi: "九", pinyin: "jiǔ", meaning: "nine", category: "Number" },
        { hanzi: "十", pinyin: "shí", meaning: "ten", category: "Number" },

        // Grammar Words
        { hanzi: "不", pinyin: "bù", meaning: "not / no", category: "Grammar" },
        { hanzi: "嗎", pinyin: "ma", meaning: "question particle", category: "Grammar" },
        { hanzi: "很", pinyin: "hěn", meaning: "very", category: "Grammar" }

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
