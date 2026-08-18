// ============================================================
// Boba Break Study — Lesson Database
// Updated with Location, Activity, Ongoing Actions, Review Questions
// ============================================================

const lessonData = {

    // ========================================================
    // GRAMMAR
    // ========================================================

    grammar: [

        // ----------------------------------------------------
        // ONGOING ACTIONS (在 / 正在) - NEW LESSON
        // ----------------------------------------------------

        {
            id: "s-zai-v",
            name: "S + 在 / 正在 + V",
            category: "Ongoing Action",
            explanation: "Equivalent to 'is / am / are + V-ing' in English, indicating an ongoing action.",
            examples: [
                "他在睡覺。",
                "哥哥正在跑步。"
            ]
        },

        {
            id: "s-mei-zai-v",
            name: "S + 沒在 + V",
            category: "Negative Ongoing Action",
            explanation: "Used to negate an ongoing action (not currently doing). Note: '在不在 + Verb' is not natural.",
            examples: [
                "我沒在休息。"
            ]
        },

        {
            id: "s-zai-v-ma",
            name: "S + 在 / 正在 + V + 嗎？",
            category: "Ongoing Action Question",
            explanation: "Used to ask whether someone is currently doing an action. Answers can be positive or negative, or short answers like 對 / 不.",
            examples: [
                "他们在逛街嗎？",
                "狗正在散步嗎？"
            ]
        },

        {
            id: "s-zai-v-o",
            name: "S + 在 / 正在 + V + O",
            category: "Ongoing Action with Object",
            explanation: "Expresses an ongoing action acting upon a specific object.",
            examples: [
                "學生在做作業。",
                "你正在學習英文。"
            ]
        },

        {
            id: "s-mei-zai-v-o",
            name: "S + 沒在 + V + O",
            category: "Negative Ongoing Action with Object",
            explanation: "Negates an ongoing action involving an object.",
            examples: [
                "弟弟沒在寫功課。"
            ]
        },

        // ----------------------------------------------------
        // EXISTING GRAMMAR
        // ----------------------------------------------------

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

        // ====================================================
        // MEASURE WORD
        // ====================================================

        {
            id: "measure-word-ge",
            name: "Number / This / That + 個 + Noun",
            category: "Measure Word Structure",
            explanation: "In Mandarin, use 個 (gè) between a number, 這, or 那 and a noun.",
            examples: [
                "一個人 (One person)",
                "這個問題 (This question)",
                "那個地方 (That place)",
                "兩個月 (Two months)"
            ]
        },

        // ====================================================
        // SELF INTRODUCTION
        // ====================================================

        {
            id: "jiao-what-name",
            name: "叫什麼名字",
            category: "Self-Introduction",
            explanation: "Used to ask someone's full name.",
            examples: [
                "你叫什麼名字？",
                "請問，您叫什麼名字？"
            ]
        },

        {
            id: "jiao-name",
            name: "叫。。。",
            category: "Self-Introduction",
            explanation: "Used to state your name. Structure: 我叫 + Name.",
            examples: [
                "我叫大衛。",
                "她叫美美。"
            ]
        },

        {
            id: "wo-xing",
            name: "我姓。。。",
            category: "Self-Introduction",
            explanation: "Used to state your surname.",
            examples: [
                "我姓王。",
                "我姓李。"
            ]
        },

        {
            id: "gui-xing",
            name: "貴姓",
            category: "Self-Introduction",
            explanation: "A polite way to ask someone's surname.",
            examples: [
                "請問您貴姓？"
            ]
        },

        // ====================================================
        // AGE / NUMBERS
        // ====================================================

        {
            id: "number-sui",
            name: "幾歲 & Number + 歲",
            category: "Age",
            explanation: "Used to ask and state age.",
            examples: [
                "你幾歲？",
                "我二十歲。"
            ]
        },

        {
            id: "number-ten-number",
            name: "Number + 十 + Number",
            category: "Numbers",
            explanation: "Structure for numbers from 11 to 99.",
            examples: [
                "十一 (11)",
                "二十五 (25)",
                "九十九 (99)"
            ]
        },

        {
            id: "particle-ne",
            name: "S + 呢",
            category: "Question Particle",
            explanation: "Used to bounce a question back to another person.",
            examples: [
                "我很好，你呢？",
                "我是台灣人，他呢？"
            ]
        },

        {
            id: "question-word-shenme",
            name: "什麼",
            category: "Question Word",
            explanation: "什麼 means 'what'.",
            examples: [
                "你叫什麼名字？",
                "這是什麼？"
            ]
        },

        {
            id: "adverb-ye",
            name: "也",
            category: "Adverb",
            explanation: "Means 'also' or 'too'.",
            examples: [
                "我也是。",
                "我也喜歡聽音樂。"
            ]
        },

        // ====================================================
        // LOCATION
        // ====================================================

        {
            id: "s-zai-place",
            name: "S + 在 + Place",
            category: "Location",
            explanation: "Indicates that someone or something is at a specific place.",
            examples: [
                "醫生在醫院。",
                "蘋果在家。"
            ]
        },

        {
            id: "s-bu-zai-place",
            name: "S + 不 + 在 + Place",
            category: "Location",
            explanation: "Indicates that someone or something is not at a place.",
            examples: [
                "他不在公園。",
                "香蕉不在學校。"
            ]
        },

        {
            id: "s-zai-place-ma",
            name: "S + 在 + Place + 嗎",
            category: "Location Question",
            explanation: "Asks whether someone or something is at a place.",
            examples: [
                "老師在教室嗎？",
                "爸爸在辦公室嗎？"
            ]
        },

        {
            id: "s-zai-bu-zai-place",
            name: "S + 在 + 不 + 在 + Place",
            category: "Location A-not-A",
            explanation: "Asks whether someone or something is at a place or not.",
            examples: [
                "他在不在日本？",
                "護士在不在醫院？"
            ]
        },

        {
            id: "existential-zai",
            name: "在嗎 / 在不在",
            category: "Location Question",
            explanation: "Asks whether someone is present.",
            examples: [
                "她在嗎？",
                "哥哥在不在？"
            ]
        },

        {
            id: "s-zai-nali",
            name: "S + 在 + 哪裡",
            category: "Location Question",
            explanation: "Asks where someone or something is.",
            examples: [
                "媽媽在哪裡？"
            ]
        },

        // ====================================================
        // LOCATION + ACTIVITY
        // ====================================================

        {
            id: "s-zai-place-activity",
            name: "S + 在 + Place + Activity",
            category: "Location & Activity",
            explanation: "Describes an activity performed at a specific place.",
            examples: [
                "哥哥在日本讀書。",
                "弟弟在家玩遊戲。"
            ]
        },

        {
            id: "s-bu-zai-place-activity",
            name: "S + 不 + 在 + Place + Activity",
            category: "Location & Activity",
            explanation: "Describes an activity not performed at a specific place.",
            examples: [
                "老師不在醫院工作。",
                "醫生不在教室教學。"
            ]
        },

        {
            id: "s-zai-place-activity-ma",
            name: "S + 在 + Place + Activity + 嗎",
            category: "Location & Activity Question",
            explanation: "Asks if an activity is performed at a place.",
            examples: [
                "妹妹在學校上課嗎？",
                "他在公園運動嗎？"
            ]
        },

        {
            id: "s-zai-bu-zai-place-activity",
            name: "S + 在 + 不 + 在 + Place + Activity",
            category: "Location & Activity Question",
            explanation: "A-not-A question combining location and activity.",
            examples: [
                "你在不在家吃蘋果和香蕉？"
            ]
        },

        {
            id: "s-zai-nali-activity",
            name: "S + 在 + 哪裡 + Activity",
            category: "Location & Activity Question",
            explanation: "Asks where an activity takes place.",
            examples: [
                "爸爸在哪裡上班？"
            ]
        }

    ],


    // ========================================================
    // VOCABULARY
    // ========================================================

    vocabulary: [

        // Newly Added Vocabulary (從使用者要求新增)
        { hanzi: "沒", pinyin: "méi", meaning: "not / have not", category: "Grammar" },
        { hanzi: "正在", pinyin: "zhèngzài", meaning: "in the process of (doing)", category: "Adverb" },
        { hanzi: "休息", pinyin: "xiūxí", meaning: "to rest", category: "Verb" },
        { hanzi: "睡覺", pinyin: "shuìjiào", meaning: "to sleep", category: "Verb" },
        { hanzi: "逛街", pinyin: "guàngjiē", meaning: "to stroll the street / go shopping", category: "Verb" },
        { hanzi: "跑步", pinyin: "pǎobù", meaning: "to run / running", category: "Verb" },
        { hanzi: "散步", pinyin: "sànbù", meaning: "to take a walk", category: "Verb" },
        { hanzi: "做", pinyin: "zuò", meaning: "to do / to make", category: "Verb" },
        { hanzi: "寫", pinyin: "xiě", meaning: "to write", category: "Verb" },
        { hanzi: "作業", pinyin: "zuòyè", meaning: "homework / assignment", category: "Object" },
        { hanzi: "功課", pinyin: "gōngkè", meaning: "homework / schoolwork", category: "Object" },
        { hanzi: "英文", pinyin: "Yīngwén", meaning: "English language", category: "Language" },
        { hanzi: "唱歌", pinyin: "chànggē", meaning: "to sing", category: "Verb" },
        { hanzi: "蛋糕", pinyin: "dàngāo", meaning: "cake", category: "Food" },
        { hanzi: "幹嘛", pinyin: "gànmá", meaning: "what are you doing / why on earth / whatever for", category: "Question" },

        // Existing Vocabulary
        { hanzi: "我", pinyin: "wǒ", meaning: "I / me", category: "Pronoun" },
        { hanzi: "你", pinyin: "nǐ", meaning: "you", category: "Pronoun" },
        { hanzi: "妳", pinyin: "nǐ", meaning: "you (female)", category: "Pronoun" },
        { hanzi: "他", pinyin: "tā", meaning: "he / him", category: "Pronoun" },
        { hanzi: "她", pinyin: "tā", meaning: "she / her", category: "Pronoun" },
        { hanzi: "你們", pinyin: "nǐmen", meaning: "you (plural)", category: "Pronoun" },
        { hanzi: "妳們", pinyin: "nǐmen", meaning: "you (plural, female)", category: "Pronoun" },
        { hanzi: "他們", pinyin: "tāmen", meaning: "they / them", category: "Pronoun" },
        { hanzi: "她們", pinyin: "tāmen", meaning: "they / them (female)", category: "Pronoun" },
        { hanzi: "我們", pinyin: "wǒmen", meaning: "we / us", category: "Pronoun" },

        // Verbs
        { hanzi: "吃", pinyin: "chī", meaning: "to eat", category: "Verb" },
        { hanzi: "喝", pinyin: "hē", meaning: "to drink", category: "Verb" },
        { hanzi: "看", pinyin: "kàn", meaning: "to look / watch / read", category: "Verb" },
        { hanzi: "買", pinyin: "mǎi", meaning: "to buy", category: "Verb" },
        { hanzi: "畫", pinyin: "huà", meaning: "to draw / paint", category: "Verb" },
        { hanzi: "工作", pinyin: "gōngzuò", meaning: "to work", category: "Verb" },
        { hanzi: "喜歡", pinyin: "xǐhuan", meaning: "to like", category: "Verb" },
        { hanzi: "愛", pinyin: "ài", meaning: "to love", category: "Verb" },
        { hanzi: "想", pinyin: "xiǎng", meaning: "to want / would like / think", category: "Verb" },
        { hanzi: "怕", pinyin: "pà", meaning: "to fear / be afraid of", category: "Verb" },
        { hanzi: "了解", pinyin: "liǎojiě", meaning: "to understand", category: "Verb" },
        { hanzi: "叫", pinyin: "jiào", meaning: "to be called / call", category: "Verb" },
        { hanzi: "姓", pinyin: "xìng", meaning: "surname / to be surnamed", category: "Verb" },
        { hanzi: "來", pinyin: "lái", meaning: "to come", category: "Verb" },
        { hanzi: "介紹", pinyin: "jièshào", meaning: "to introduce", category: "Verb" },

        // Food & Drinks
        { hanzi: "飯", pinyin: "fàn", meaning: "rice / meal", category: "Food" },
        { hanzi: "水", pinyin: "shuǐ", meaning: "water", category: "Drink" },
        { hanzi: "牛奶", pinyin: "niúnǎi", meaning: "milk", category: "Drink" },
        { hanzi: "麵包", pinyin: "miànbāo", meaning: "bread", category: "Food" },
        { hanzi: "水果", pinyin: "shuǐguǒ", meaning: "fruit", category: "Food" },
        { hanzi: "咖啡", pinyin: "kāfēi", meaning: "coffee", category: "Drink" },
        { hanzi: "巧克力", pinyin: "qiǎokèlì", meaning: "chocolate", category: "Food" },

        // Objects & Places
        { hanzi: "書", pinyin: "shū", meaning: "book", category: "Object" },
        { hanzi: "手機", pinyin: "shǒujī", meaning: "mobile phone", category: "Object" },
        { hanzi: "電腦", pinyin: "diànnǎo", meaning: "computer", category: "Object" },
        { hanzi: "電視", pinyin: "diànshì", meaning: "television / TV", category: "Object" },
        { hanzi: "車子", pinyin: "chēzi", meaning: "car", category: "Object" },
        { hanzi: "報紙", pinyin: "bàozhǐ", meaning: "newspaper", category: "Object" },
        { hanzi: "照片", pinyin: "zhàopiàn", meaning: "photo", category: "Object" },
        { hanzi: "圖片", pinyin: "túpiàn", meaning: "picture / image", category: "Object" },
        { hanzi: "眼鏡", pinyin: "yǎnjìng", meaning: "glasses", category: "Object" },
        { hanzi: "禮物", pinyin: "lǐwù", meaning: "gift", category: "Object" },
        { hanzi: "東西", pinyin: "dōngxi", meaning: "thing / things", category: "Object" },
        { hanzi: "信", pinyin: "xìn", meaning: "letter / mail", category: "Object" },
        { hanzi: "地方", pinyin: "dìfang", meaning: "place", category: "Place" },
        { hanzi: "問題", pinyin: "wèntí", meaning: "question / problem", category: "Concept" },
        { hanzi: "月", pinyin: "yuè", meaning: "month", category: "Time" },
        { hanzi: "公司", pinyin: "gōngsī", meaning: "company", category: "Place" },
        { hanzi: "電影", pinyin: "diànyǐng", meaning: "movie / film", category: "Entertainment" },
        { hanzi: "音樂", pinyin: "yīnyuè", meaning: "music", category: "Entertainment" },
        { hanzi: "愛好", pinyin: "àihào", meaning: "hobby", category: "Concept" },

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
        { hanzi: "台灣", pinyin: "táiwān", meaning: "Taiwan", category: "Place" },
        { hanzi: "美國", pinyin: "měiguó", meaning: "America / United States", category: "Place" },
        { hanzi: "哪國人", pinyin: "nǎ guó rén", meaning: "people of which country / nationality", category: "People" },
        { hanzi: "貓咪", pinyin: "māomī", meaning: "kitty / cat", category: "Animal" },
        { hanzi: "狗", pinyin: "gǒu", meaning: "dog", category: "Animal" },

        // Adjectives
        { hanzi: "好看", pinyin: "hǎokàn", meaning: "good-looking / interesting", category: "Adjective" },
        { hanzi: "漂亮", pinyin: "piàoliang", meaning: "pretty / beautiful", category: "Adjective" },
        { hanzi: "可愛", pinyin: "kě'ài", meaning: "cute / lovely", category: "Adjective" },
        { hanzi: "累", pinyin: "lèi", meaning: "tired", category: "Adjective" },
        { hanzi: "忙", pinyin: "máng", meaning: "busy", category: "Adjective" },
        { hanzi: "難", pinyin: "nán", meaning: "difficult / hard", category: "Adjective" },
        { hanzi: "高", pinyin: "gāo", meaning: "tall / high", category: "Adjective" },

        // Languages
        { hanzi: "中文", pinyin: "zhōngwén", meaning: "Chinese language", category: "Language" },

        // Demonstratives / Measure Words / Questions
        { hanzi: "這", pinyin: "zhè", meaning: "this", category: "Demonstrative" },
        { hanzi: "那", pinyin: "nà", meaning: "that", category: "Demonstrative" },
        { hanzi: "個", pinyin: "gè", meaning: "measure word", category: "Measure Word" },
        { hanzi: "什麼", pinyin: "shénme", meaning: "what", category: "Question Word" },
        { hanzi: "幾", pinyin: "jǐ", meaning: "how many / how much", category: "Question Word" },

        // Numbers
        { hanzi: "零", pinyin: "líng", meaning: "zero", category: "Number" },
        { hanzi: "一", pinyin: "yī", meaning: "one", category: "Number" },
        { hanzi: "兩", pinyin: "liǎng", meaning: "two", category: "Number" },
        { hanzi: "二", pinyin: "èr", meaning: "two", category: "Number" },
        { hanzi: "三", pinyin: "sān", meaning: "three", category: "Number" },
        { hanzi: "四", pinyin: "sì", meaning: "four", category: "Number" },
        { hanzi: "五", pinyin: "wǔ", meaning: "five", category: "Number" },
        { hanzi: "六", pinyin: "liù", meaning: "six", category: "Number" },
        { hanzi: "七", pinyin: "qī", meaning: "seven", category: "Number" },
        { hanzi: "八", pinyin: "bā", meaning: "eight", category: "Number" },
        { hanzi: "九", pinyin: "jiǔ", meaning: "nine", category: "Number" },
        { hanzi: "十", pinyin: "shí", meaning: "ten", category: "Number" },
        { hanzi: "歲", pinyin: "suì", meaning: "years old", category: "Time" },
        { hanzi: "幾歲", pinyin: "jǐ suì", meaning: "how old", category: "Question" },

        // Greetings
        { hanzi: "您好", pinyin: "nín hǎo", meaning: "hello (polite)", category: "Greeting" },
        { hanzi: "你好", pinyin: "nǐ hǎo", meaning: "hello", category: "Greeting" },
        { hanzi: "請問", pinyin: "qǐngwèn", meaning: "may I ask / excuse me", category: "Greeting" },
        { hanzi: "認識", pinyin: "rènshi", meaning: "to know / to meet", category: "Verb" },
        { hanzi: "再見", pinyin: "zàijiàn", meaning: "goodbye", category: "Greeting" },

        // Grammar Words
        { hanzi: "的", pinyin: "de", meaning: "possessive particle / of", category: "Grammar" },
        { hanzi: "是", pinyin: "shì", meaning: "to be", category: "Grammar" },
        { hanzi: "很", pinyin: "hěn", meaning: "very", category: "Grammar" },
        { hanzi: "不", pinyin: "bù", meaning: "not / no", category: "Grammar" },
        { hanzi: "嗎", pinyin: "ma", meaning: "question particle", category: "Grammar" },
        { hanzi: "呢", pinyin: "ne", meaning: "what about...", category: "Grammar" },
        { hanzi: "也", pinyin: "yě", meaning: "also / too", category: "Grammar" },

        // Location & Activity Vocabulary
        { hanzi: "在", pinyin: "zài", meaning: "at / in / ongoing", category: "Preposition" },
        { hanzi: "家", pinyin: "jiā", meaning: "home / family", category: "Place" },
        { hanzi: "日本", pinyin: "Rìběn", meaning: "Japan", category: "Place" },
        { hanzi: "醫院", pinyin: "yīyuàn", meaning: "hospital", category: "Place" },
        { hanzi: "辦公室", pinyin: "bàngōngshì", meaning: "office", category: "Place" },
        { hanzi: "學校", pinyin: "xuéxiào", meaning: "school", category: "Place" },
        { hanzi: "教室", pinyin: "jiàoshì", meaning: "classroom", category: "Place" },
        { hanzi: "公園", pinyin: "gōngyuán", meaning: "park", category: "Place" },

        { hanzi: "讀書", pinyin: "dúshū", meaning: "to study / to read", category: "Verb" },
        { hanzi: "上班", pinyin: "shàngbān", meaning: "to go to work / work", category: "Verb" },
        { hanzi: "上課", pinyin: "shàngkè", meaning: "to attend class", category: "Verb" },
        { hanzi: "運動", pinyin: "yùndòng", meaning: "to exercise / sports", category: "Verb" },
        { hanzi: "玩", pinyin: "wán", meaning: "to play", category: "Verb" },
        { hanzi: "遊戲", pinyin: "yóuxì", meaning: "game", category: "Object" },
        { hanzi: "蘋果", pinyin: "píngguǒ", meaning: "apple", category: "Food" },
        { hanzi: "香蕉", pinyin: "xiāngjiāo", meaning: "banana", category: "Food" },
        { hanzi: "教學", pinyin: "jiàoxué", meaning: "to teach / teaching", category: "Verb" },
        { hanzi: "對", pinyin: "duì", meaning: "correct / right / yes", category: "Adjective" },
        { hanzi: "哪裡", pinyin: "nǎlǐ", meaning: "where", category: "Question Word" },
        { hanzi: "和", pinyin: "hé", meaning: "and", category: "Conjunction" }

    ],


    // ========================================================
    // REVIEW QUESTIONS
    // ========================================================

    reviewQuestions: [

        // -------------------------
        // ONGOING ACTIONS (在 / 正在)
        // -------------------------

        {
            meaning: "He is sleeping.",
            answer: ["他", "在", "睡覺"]
        },
        {
            meaning: "Older brother is running.",
            answer: ["哥哥", "正在", "跑步"]
        },
        {
            meaning: "I am not resting.",
            answer: ["我", "沒", "在", "休息"]
        },
        {
            meaning: "Are they shopping?",
            answer: ["他們", "在", "逛街", "嗎"]
        },
        {
            meaning: "Is the dog taking a walk?",
            answer: ["狗", "正在", "散步", "嗎"]
        },
        {
            meaning: "Students are doing homework.",
            answer: ["學生", "在", "做", "作業"]
        },
        {
            meaning: "You are studying English.",
            answer: ["你", "正在", "學習", "英文"]
        },
        {
            meaning: "Younger brother is not writing homework.",
            answer: ["弟弟", "沒", "在", "寫", "功課"]
        },

        // -------------------------
        // S + V + O
        // -------------------------

        {
            meaning: "I eat rice.",
            answer: ["我", "吃", "飯"]
        },
        {
            meaning: "You drink water.",
            answer: ["你", "喝", "水"]
        },
        {
            meaning: "She reads a book.",
            answer: ["她", "看", "書"]
        },
        {
            meaning: "He buys bread.",
            answer: ["他", "買", "麵包"]
        },
        {
            meaning: "I drink milk.",
            answer: ["我", "喝", "牛奶"]
        },

        // -------------------------
        // NEGATIVE
        // -------------------------

        {
            meaning: "I don't eat rice.",
            answer: ["我", "不", "吃", "飯"]
        },
        {
            meaning: "She doesn't drink milk.",
            answer: ["她", "不", "喝", "牛奶"]
        },
        {
            meaning: "He doesn't read a book.",
            answer: ["他", "不", "看", "書"]
        },
        {
            meaning: "I don't buy bread.",
            answer: ["我", "不", "買", "麵包"]
        },

        // -------------------------
        // 嗎 QUESTIONS
        // -------------------------

        {
            meaning: "Do you eat rice?",
            answer: ["你", "吃", "飯", "嗎"]
        },
        {
            meaning: "Does she drink water?",
            answer: ["她", "喝", "水", "嗎"]
        },
        {
            meaning: "Does he read a book?",
            answer: ["他", "看", "書", "嗎"]
        },
        {
            meaning: "Do you buy coffee?",
            answer: ["你", "買", "咖啡", "嗎"]
        },

        // -------------------------
        // A-NOT-A
        // -------------------------

        {
            meaning: "Do you eat or not?",
            answer: ["你", "吃", "不", "吃"]
        },
        {
            meaning: "Do you drink or not?",
            answer: ["你", "喝", "不", "喝"]
        },
        {
            meaning: "Does she watch TV or not?",
            answer: ["她", "看", "不", "看"]
        },

        // -------------------------
        // 的
        // -------------------------

        {
            meaning: "My phone.",
            answer: ["我", "的", "手機"]
        },
        {
            meaning: "Your book.",
            answer: ["你", "的", "書"]
        },
        {
            meaning: "Her mother.",
            answer: ["她", "的", "媽媽"]
        },

        // -------------------------
        // 是
        // -------------------------

        {
            meaning: "I am a teacher.",
            answer: ["我", "是", "老師"]
        },
        {
            meaning: "She is a doctor.",
            answer: ["她", "是", "醫生"]
        },
        {
            meaning: "He is a student.",
            answer: ["他", "是", "學生"]
        },

        // -------------------------
        // 不是
        // -------------------------

        {
            meaning: "I am not a teacher.",
            answer: ["我", "不是", "老師"]
        },
        {
            meaning: "She is not a doctor.",
            answer: ["她", "不是", "醫生"]
        },
        {
            meaning: "He is not a student.",
            answer: ["他", "不是", "學生"]
        },

        // -------------------------
        // 是...嗎
        // -------------------------

        {
            meaning: "Are you a teacher?",
            answer: ["你", "是", "老師", "嗎"]
        },
        {
            meaning: "Is she a doctor?",
            answer: ["她", "是", "醫生", "嗎"]
        },
        {
            meaning: "Is he a student?",
            answer: ["他", "是", "學生", "嗎"]
        },

        // -------------------------
        // 是不是
        // -------------------------

        {
            meaning: "Are you a teacher or not?",
            answer: ["你", "是不是", "老師"]
        },
        {
            meaning: "Is she a doctor or not?",
            answer: ["她", "是不是", "醫生"]
        },
        {
            meaning: "Is he a student or not?",
            answer: ["他", "是不是", "學生"]
        },

        // -------------------------
        // 很 + ADJECTIVE
        // -------------------------

        {
            meaning: "I am very tired.",
            answer: ["我", "很", "累"]
        },
        {
            meaning: "You are very good.",
            answer: ["你", "很", "好"]
        },
        {
            meaning: "She is very tall.",
            answer: ["她", "很", "高"]
        },
        {
            meaning: "He is very busy.",
            answer: ["他", "很", "忙"]
        },

        // -------------------------
        // NEGATIVE ADJECTIVE
        // -------------------------

        {
            meaning: "I am not tired.",
            answer: ["我", "不", "累"]
        },
        {
            meaning: "You are not good.",
            answer: ["你", "不", "好"]
        },
        {
            meaning: "She is not tall.",
            answer: ["她", "不", "高"]
        },

        // -------------------------
        // ADJECTIVE QUESTIONS
        // -------------------------

        {
            meaning: "Are you tired?",
            answer: ["你", "很", "累", "嗎"]
        },
        {
            meaning: "Are you very good?",
            answer: ["你", "很", "好", "嗎"]
        },
        {
            meaning: "Is she very tall?",
            answer: ["她", "很", "高", "嗎"]
        },

        // -------------------------
        // 呢
        // -------------------------

        {
            meaning: "I'm good. What about you?",
            answer: ["我", "很好", "你", "呢"]
        },

        // -------------------------
        // 也
        // -------------------------

        {
            meaning: "I am also a student.",
            answer: ["我", "也", "是", "學生"]
        },
        {
            meaning: "I also like music.",
            answer: ["我", "也", "喜歡", "音樂"]
        },

        // -------------------------
        // MEASURE WORD
        // -------------------------

        {
            meaning: "One person.",
            answer: ["一", "個", "人"]
        },
        {
            meaning: "Two people.",
            answer: ["兩", "個", "人"]
        },
        {
            meaning: "This place.",
            answer: ["這", "個", "地方"]
        },
        {
            meaning: "That question.",
            answer: ["那", "個", "問題"]
        },

        // -------------------------
        // NAME
        // -------------------------

        {
            meaning: "What is your name?",
            answer: ["你", "叫", "什麼", "名字"]
        },
        {
            meaning: "My name is David.",
            answer: ["我", "叫", "大衛"]
        },
        {
            meaning: "My surname is Wang.",
            answer: ["我", "姓", "王"]
        },
        {
            meaning: "May I ask your surname?",
            answer: ["請問", "您", "貴姓"]
        },

        // -------------------------
        // AGE
        // -------------------------

        {
            meaning: "How old are you?",
            answer: ["你", "幾歲"]
        },
        {
            meaning: "I am twenty years old.",
            answer: ["我", "二十", "歲"]
        },
        {
            meaning: "She is twenty-five years old.",
            answer: ["她", "二十五", "歲"]
        },

        // ====================================================
        // LOCATION
        // ====================================================

        {
            meaning: "I am at home.",
            answer: ["我", "在", "家"]
        },
        {
            meaning: "He is at school.",
            answer: ["他", "在", "學校"]
        },
        {
            meaning: "She is at the hospital.",
            answer: ["她", "在", "醫院"]
        },
        {
            meaning: "The teacher is in the classroom.",
            answer: ["老師", "在", "教室"]
        },

        // -------------------------
        // LOCATION NEGATIVE
        // -------------------------

        {
            meaning: "He is not at the park.",
            answer: ["他", "不", "在", "公園"]
        },
        {
            meaning: "She is not at school.",
            answer: ["她", "不", "在", "學校"]
        },
        {
            meaning: "Dad is not in the office.",
            answer: ["爸爸", "不", "在", "辦公室"]
        },

        // -------------------------
        // LOCATION 嗎
        // -------------------------

        {
            meaning: "Is the teacher in the classroom?",
            answer: ["老師", "在", "教室", "嗎"]
        },
        {
            meaning: "Is dad in the office?",
            answer: ["爸爸", "在", "辦公室", "嗎"]
        },
        {
            meaning: "Is she at the hospital?",
            answer: ["她", "在", "醫院", "嗎"]
        },

        // -------------------------
        // LOCATION A-NOT-A
        // -------------------------

        {
            meaning: "Is he in Japan or not?",
            answer: ["他", "在", "不", "在", "日本"]
        },
        {
            meaning: "Is the nurse at the hospital or not?",
            answer: ["護士", "在", "不", "在", "醫院"]
        },
        {
            meaning: "Is mom at home or not?",
            answer: ["媽媽", "在", "不", "在", "家"]
        },

        // -------------------------
        // 在嗎 / 在不在
        // -------------------------

        {
            meaning: "Is she there?",
            answer: ["她", "在", "嗎"]
        },
        {
            meaning: "Is older brother there or not?",
            answer: ["哥哥", "在", "不", "在"]
        },
        {
            meaning: "Is dad there?",
            answer: ["爸爸", "在", "嗎"]
        },

        // -------------------------
        // 哪裡
        // -------------------------

        {
            meaning: "Where is mother?",
            answer: ["媽媽", "在", "哪裡"]
        },
        {
            meaning: "Where is the teacher?",
            answer: ["老師", "在", "哪裡"]
        },

        // ====================================================
        // LOCATION + ACTIVITY
        // ====================================================

        {
            meaning: "Older brother studies in Japan.",
            answer: ["哥哥", "在", "日本", "讀書"]
        },
        {
            meaning: "Younger brother plays games at home.",
            answer: ["弟弟", "在", "家", "玩", "遊戲"]
        },
        {
            meaning: "Dad works at the office.",
            answer: ["爸爸", "在", "辦公室", "上班"]
        },
        {
            meaning: "Younger sister attends class at school.",
            answer: ["妹妹", "在", "學校", "上課"]
        },
        {
            meaning: "He exercises in the park.",
            answer: ["他", "在", "公園", "運動"]
        },

        // -------------------------
        // LOCATION + ACTIVITY 嗎
        // -------------------------

        {
            meaning: "Does younger sister attend class at school?",
            answer: ["妹妹", "在", "學校", "上課", "嗎"]
        },
        {
            meaning: "Does he exercise in the park?",
            answer: ["他", "在", "公園", "運動", "嗎"]
        },
        {
            meaning: "Does dad work at the office?",
            answer: ["爸爸", "在", "辦公室", "上班", "嗎"]
        },

        // -------------------------
        // LOCATION + ACTIVITY NEGATIVE
        // -------------------------

        {
            meaning: "The teacher doesn't work at the hospital.",
            answer: ["老師", "不", "在", "醫院", "工作"]
        },
        {
            meaning: "The doctor doesn't teach in the classroom.",
            answer: ["醫生", "不", "在", "教室", "教學"]
        },

        // -------------------------
        // LOCATION + ACTIVITY WHERE
        // -------------------------

        {
            meaning: "Where does dad work?",
            answer: ["爸爸", "在", "哪裡", "上班"]
        },
        {
            meaning: "Where does older brother study?",
            answer: ["哥哥", "在", "哪裡", "讀書"]
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


// ============================================================
// REVIEW QUESTION HELPERS
// ============================================================

function getReviewQuestions() {
    return lessonData.reviewQuestions || [];
}


function getRandomReviewQuestions(count = 12) {
    const questions = [...getReviewQuestions()];

    for (let i = questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questions[i], questions[j]] = [questions[j], questions[i]];
    }

    return questions.slice(
        0,
        Math.min(count, questions.length)
    );
}


// ============================================================
// QUESTION SIGNATURE
// Used to prevent duplicate questions
// ============================================================

function getQuestionSignature(question) {
    if (!question || !Array.isArray(question.answer)) {
        return "";
    }

    return question.answer
        .map(word => String(word).trim())
        .join("|");
}


// ============================================================
// GET UNIQUE RANDOM REVIEW QUESTIONS
// ============================================================

function getUniqueRandomReviewQuestions(
    count = 12,
    excludedQuestions = []
) {
    const excluded = new Set(
        excludedQuestions.map(getQuestionSignature)
    );

    const source = [...getReviewQuestions()];

    const shuffled = source.sort(
        () => Math.random() - 0.5
    );

    const result = [];
    const used = new Set(excluded);

    for (const question of shuffled) {
        const signature = getQuestionSignature(question);

        if (!signature) continue;

        if (used.has(signature)) {
            continue;
        }

        used.add(signature);
        result.push(question);

        if (result.length >= count) {
            break;
        }
    }

    return result;
}
