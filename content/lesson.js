// ============================================================
// Boba Break Study — Master Lesson Database (Lessons 1 - 7)
// ============================================================

const allLessonsData = {

    // ========================================================
    // LESSON 1
    // ========================================================
    1: {
        grammar: [
            {
                id: "svo",
                name: "S + V + O",
                category: "Sentence Structure",
                examples: ["我吃飯。", "你喝水。", "她看書。"]
            },
            {
                id: "s-bu-v-o",
                name: "S + 不 + V + O",
                category: "Negative Sentence",
                examples: ["我不吃飯。", "你不喝水。", "她不看書。"]
            },
            {
                id: "svo-ma",
                name: "S + V + O + 嗎",
                category: "Yes / No Question",
                examples: ["你吃飯嗎？", "你喝水嗎？", "她看書嗎？"]
            },
            {
                id: "s-v-bu-v",
                name: "S + V + 不 + V",
                category: "A-not-A Question",
                examples: ["你吃不吃？", "你喝不喝？", "你看不看？"]
            },
            {
                id: "answer-v-bu-v",
                name: "Answer with V and 不 + V",
                category: "Answer",
                examples: ["吃 / 不吃", "喝 / 不喝", "看 / 不看"]
            }
        ],
        vocabulary: [
            { hanzi: "我", pinyin: "wǒ", meaning: "I / me", category: "Pronoun" },
            { hanzi: "你", pinyin: "nǐ", meaning: "you", category: "Pronoun" },
            { hanzi: "妳", pinyin: "nǐ", meaning: "you (female)", category: "Pronoun" },
            { hanzi: "她", pinyin: "tā", meaning: "she / her", category: "Pronoun" },
            { hanzi: "他", pinyin: "tā", meaning: "he / him", category: "Pronoun" },
            { hanzi: "吃", pinyin: "chī", meaning: "to eat", category: "Verb" },
            { hanzi: "喝", pinyin: "hē", meaning: "to drink", category: "Verb" },
            { hanzi: "看", pinyin: "kàn", meaning: "to look / watch / read", category: "Verb" },
            { hanzi: "買", pinyin: "mǎi", meaning: "to buy", category: "Verb" },
            { hanzi: "飯", pinyin: "fàn", meaning: "rice / meal", category: "Food" },
            { hanzi: "水", pinyin: "shuǐ", meaning: "water", category: "Drink" },
            { hanzi: "牛奶", pinyin: "niúnǎi", meaning: "milk", category: "Drink" },
            { hanzi: "麵包", pinyin: "miànbāo", meaning: "bread", category: "Food" },
            { hanzi: "水果", pinyin: "shuǐguǒ", meaning: "fruit", category: "Food" },
            { hanzi: "書", pinyin: "shū", meaning: "book", category: "Object" },
            { hanzi: "咖啡", pinyin: "kāfēi", meaning: "coffee", category: "Drink" },
            { hanzi: "不", pinyin: "bù", meaning: "not / no", category: "Grammar" },
            { hanzi: "嗎", pinyin: "ma", meaning: "question particle", category: "Grammar" }
        ],
        reviewQuestions: [
            { meaning: "I eat a meal.", answer: ["我", "吃", "飯"] },
            { meaning: "You drink water.", answer: ["你", "喝", "水"] },
            { meaning: "She doesn't read a book.", answer: ["她", "不", "看", "書"] }
        ]
    },


    // ========================================================
    // LESSON 2
    // ========================================================
    2: {
        grammar: [
            {
                id: "de",
                name: "的",
                category: "Possession",
                examples: ["我的手機。", "你的書。", "她的媽媽。"]
            }
        ],
        vocabulary: [
            { hanzi: "你們", pinyin: "nǐmen", meaning: "you (plural)", category: "Pronoun" },
            { hanzi: "妳們", pinyin: "nǐmen", meaning: "you (plural, female)", category: "Pronoun" },
            { hanzi: "他們", pinyin: "tāmen", meaning: "they / them (male or mixed)", category: "Pronoun" },
            { hanzi: "她們", pinyin: "tāmen", meaning: "they / them (female)", category: "Pronoun" },
            { hanzi: "我們", pinyin: "wǒmen", meaning: "we / us", category: "Pronoun" },
            { hanzi: "朋友", pinyin: "péngyou", meaning: "friend", category: "People" },
            { hanzi: "手機", pinyin: "shǒujī", meaning: "mobile phone", category: "Object" },
            { hanzi: "電腦", pinyin: "diànnǎo", meaning: "computer", category: "Object" },
            { hanzi: "電視", pinyin: "diànshì", meaning: "television / TV", category: "Object" },
            { hanzi: "車子", pinyin: "chēzi", meaning: "car", category: "Object" },
            { hanzi: "報紙", pinyin: "bàozhǐ", meaning: "newspaper", category: "Object" },
            { hanzi: "照片", pinyin: "zhàopiàn", meaning: "photo / photograph", category: "Object" },
            { hanzi: "媽媽", pinyin: "māma", meaning: "mother / mom", category: "Family" },
            { hanzi: "爸爸", pinyin: "bàba", meaning: "father / dad", category: "Family" },
            { hanzi: "老師", pinyin: "lǎoshī", meaning: "teacher", category: "Occupation" },
            { hanzi: "眼鏡", pinyin: "yǎnjìng", meaning: "glasses", category: "Object" },
            { hanzi: "巧克力", pinyin: "qiǎokèlì", meaning: "chocolate", category: "Food" },
            { hanzi: "禮物", pinyin: "lǐwù", meaning: "gift / present", category: "Object" },
            { hanzi: "東西", pinyin: "dōngxi", meaning: "thing / things", category: "Object" },
            { hanzi: "信", pinyin: "xìn", meaning: "letter / mail", category: "Object" },
            { hanzi: "的", pinyin: "de", meaning: "possessive particle", category: "Grammar" }
        ],
        reviewQuestions: [
            { meaning: "My mobile phone", answer: ["我", "的", "手", "機"] },
            { meaning: "Your book", answer: ["你", "的", "書"] }
        ]
    },


    // ========================================================
    // LESSON 3
    // ========================================================
    3: {
        grammar: [
            {
                id: "shi",
                name: "是",
                category: "Identity",
                examples: ["我是老師。", "她是醫生。", "他是學生。"]
            },
            {
                id: "bu-shi",
                name: "不是",
                category: "Negative Identity",
                examples: ["我不是老師。", "她不是醫生。", "他不是學生。"]
            },
            {
                id: "shi-ma",
                name: "是...嗎",
                category: "Identity Question",
                examples: ["你是老師嗎？", "她是醫生嗎？", "他是學生嗎？"]
            },
            {
                id: "shi-bu-shi",
                name: "是不是",
                category: "A-not-A Question",
                examples: ["你是不是老師？", "她是不是醫生？", "他是不是學生？"]
            },
            {
                id: "answer-shi",
                name: "Answer: 是",
                category: "Answer",
                examples: ["是。", "是，我是老師。", "是，她是醫生。"]
            },
            {
                id: "answer-bu-shi",
                name: "Answer: 不是",
                category: "Answer",
                examples: ["不是。", "不是，我不是老師。", "不是，她不是醫生。"]
            }
        ],
        vocabulary: [
            { hanzi: "男生", pinyin: "nánshēng", meaning: "boy / male student", category: "People" },
            { hanzi: "女生", pinyin: "nǚshēng", meaning: "girl / female student", category: "People" },
{ hanzi: "學生", pinyin: "xuéshēng", meaning: "student", category: "People" },
            { hanzi: "孩子", pinyin: "háizi", meaning: "child", category: "Family" },
            { hanzi: "兒子", pinyin: "érzi", meaning: "son", category: "Family" },
            { hanzi: "女兒", pinyin: "nǚ'ér", meaning: "daughter", category: "Family" },
            { hanzi: "弟弟", pinyin: "dìdi", meaning: "younger brother", category: "Family" },
            { hanzi: "哥哥", pinyin: "gēge", meaning: "older brother", category: "Family" },
            { hanzi: "妹妹", pinyin: "mèimei", meaning: "younger sister", category: "Family" },
            { hanzi: "姐姐", pinyin: "jiějie", meaning: "older sister", category: "Family" },
            { hanzi: "姊姊", pinyin: "jiějie", meaning: "older sister", category: "Family" },
            { hanzi: "醫生", pinyin: "yīshēng", meaning: "doctor", category: "Occupation" },
            { hanzi: "護士", pinyin: "hùshì", meaning: "nurse", category: "Occupation" },
            { hanzi: "司機", pinyin: "sījī", meaning: "driver", category: "Occupation" },
            { hanzi: "同學", pinyin: "tóngxué", meaning: "classmate", category: "People" },
            { hanzi: "同事", pinyin: "tóngshì", meaning: "coworker / colleague", category: "People" },
            { hanzi: "工人", pinyin: "gōngrén", meaning: "worker", category: "Occupation" },
            { hanzi: "老闆", pinyin: "lǎobǎn", meaning: "boss / owner", category: "Occupation" },
            { hanzi: "老闆娘", pinyin: "lǎobǎnniáng", meaning: "female boss / owner's wife", category: "Occupation" },
            { hanzi: "是", pinyin: "shì", meaning: "to be", category: "Verb" }
        ],
        reviewQuestions: [
            { meaning: "I am a teacher.", answer: ["我", "是", "老", "師"] },
            { meaning: "Are you a student?", answer: ["你", "是", "學", "生", "嗎"] }
        ]
    },


    // ========================================================
    // LESSON 4
    // ========================================================
    4: {
        grammar: [
            {
                id: "s-hen-adj",
                name: "S + 很 + Adj",
                category: "Adjective Sentence",
                examples: ["我很累。", "你很好。", "他很忙。"]
            },
            {
                id: "s-bu-adj",
                name: "S + 不 + Adj",
                category: "Negative Adjective Sentence",
                examples: ["我不累。", "你不好。", "她不高。"]
            },
            {
                id: "s-hen-adj-ma",
                name: "S + 很 + Adj + 嗎",
                category: "Adjective Question",
                examples: ["你很累嗎？", "你很好嗎？", "她很高嗎？"]
            },
            {
                id: "s-adj-bu-adj",
                name: "S + Adj + 不 + Adj",
                category: "A-not-A Adjective Question",
                examples: ["你累不累？", "你好不好？", "她高不高？"]
            },
            {
                id: "s-hen-v-o-ma",
                name: "S + 很 + V + O + 嗎",
                category: "Adverbial Question",
                examples: ["你很看書嗎？", "你很吃飯嗎？"]
            }
        ],
        vocabulary: [
            { hanzi: "畫", pinyin: "huà", meaning: "to draw / paint", category: "Verb" },
            { hanzi: "圖片", pinyin: "túpiàn", meaning: "picture / image", category: "Object" },
            { hanzi: "好看", pinyin: "hǎokàn", meaning: "good-looking / beautiful", category: "Adjective" },
            { hanzi: "太太", pinyin: "tàitai", meaning: "wife / Mrs.", category: "People" },
            { hanzi: "小姐", pinyin: "xiǎojiě", meaning: "miss / young lady", category: "People" },
            { hanzi: "漂亮", pinyin: "piàoliang", meaning: "pretty / beautiful", category: "Adjective" },
            { hanzi: "小孩", pinyin: "xiǎohái", meaning: "child / kid", category: "People" },
            { hanzi: "可愛", pinyin: "kě'ài", meaning: "cute / lovely", category: "Adjective" },
            { hanzi: "工作", pinyin: "gōngzuò", meaning: "to work / work", category: "Verb" },
            { hanzi: "累", pinyin: "lèi", meaning: "tired", category: "Adjective" },
            { hanzi: "忙", pinyin: "máng", meaning: "busy", category: "Adjective" },
            { hanzi: "喜歡", pinyin: "xǐhuan", meaning: "to like", category: "Verb" },
            { hanzi: "愛", pinyin: "ài", meaning: "to love", category: "Verb" },
            { hanzi: "想", pinyin: "xiǎng", meaning: "to want / would like", category: "Verb" },
            { hanzi: "怕", pinyin: "pà", meaning: "to fear / be afraid of", category: "Verb" },
            { hanzi: "了解", pinyin: "liǎojiě", meaning: "to understand", category: "Verb" },
            { hanzi: "貓咪", pinyin: "māomī", meaning: "kitty / cat", category: "Animal" },
            { hanzi: "狗", pinyin: "gǒu", meaning: "dog", category: "Animal" },
            { hanzi: "中文", pinyin: "zhōngwén", meaning: "Chinese language", category: "Language" },
            { hanzi: "難", pinyin: "nán", meaning: "difficult / hard", category: "Adjective" }
        ],
        reviewQuestions: [
            { meaning: "I am very tired.", answer: ["我", "很", "累"] },
            { meaning: "Chinese is very difficult.", answer: ["中", "文", "很", "難"] }
        ]
    },


    // ========================================================
    // LESSON 5
    // ========================================================
    5: {
        grammar: [
            {
                id: "measure-word-ge",
                name: "Number / This / That + 個 + Noun",
                category: "Measure Word Structure",
                explanation: "In Mandarin, you cannot place a number, 'this' (這), or 'that' (那) directly in front of a noun. You must use the universal measure word 個 (gè) in between them.",
                examples: [
                    "一個人 (One person)",
                    "這個問題 (This question / problem)",
                    "那個地方 (That place)",
                    "兩個月 (Two months)"
                ]
            }
        ],
        vocabulary: [
            { hanzi: "個", pinyin: "gè", meaning: "measure word (general)", category: "Measure Word" },
            { hanzi: "這", pinyin: "zhè", meaning: "this", category: "Demonstrative" },
            { hanzi: "那", pinyin: "nà", meaning: "that", category: "Demonstrative" },
            { hanzi: "人", pinyin: "rén", meaning: "person / people", category: "People" },
            { hanzi: "地方", pinyin: "dìfang", meaning: "place", category: "Place" },
            { hanzi: "問題", pinyin: "wèntí", meaning: "question / problem", category: "Concept" },
            { hanzi: "月", pinyin: "yuè", meaning: "month", category: "Time" },
            { hanzi: "公司", pinyin: "gōngsī", meaning: "company", category: "Place" },
            { hanzi: "零", pinyin: "líng", meaning: "zero", category: "Number" },
            { hanzi: "一", pinyin: "yī", meaning: "one", category: "Number" },
            { hanzi: "兩", pinyin: "liǎng", meaning: "two (with measure words)", category: "Number" },
            { hanzi: "二", pinyin: "èr", meaning: "two (counting)", category: "Number" },
            { hanzi: "三", pinyin: "sān", meaning: "three", category: "Number" },
            { hanzi: "四", pinyin: "sì", meaning: "four", category: "Number" },
            { hanzi: "五", pinyin: "wǔ", meaning: "five", category: "Number" },
            { hanzi: "六", pinyin: "liù", meaning: "six", category: "Number" },
            { hanzi: "七", pinyin: "qī", meaning: "seven", category: "Number" },
            { hanzi: "八", pinyin: "bā", meaning: "eight", category: "Number" },
            { hanzi: "九", pinyin: "jiǔ", meaning: "nine", category: "Number" },
            { hanzi: "十", pinyin: "shí", meaning: "ten", category: "Number" }
        ],
        reviewQuestions: [
            { meaning: "Three people", answer: ["三", "個", "人"] },
            { meaning: "This place", answer: ["這", "個", "地", "方"] },
            { meaning: "That company", answer: ["那", "個", "公", "司"] }
        ]
    },


    // ========================================================
    // LESSON 6
    // ========================================================
    6: {
        grammar: [
            {
                id: "jiao-what-name",
                name: "叫什麼名字",
                category: "Self-Introduction",
                explanation: "Used to ask someone's full name.",
                examples: ["你叫什麼名字？", "請問，您叫什麼名字？"]
            },
            {
                id: "jiao-name",
                name: "叫。。。",
                category: "Self-Introduction",
                explanation: "Used to state your name.",
                examples: ["我叫大衛。", "她叫美美。"]
            },
            {
                id: "wo-xing",
                name: "我姓。。。",
                category: "Self-Introduction",
                explanation: "Used to state your family name (surname).",
                examples: ["我姓王。", "我姓李。"]
            },
            {
                id: "gui-xing",
                name: "貴姓",
                category: "Self-Introduction",
                explanation: "A polite way to ask someone's honorable surname.",
                examples: ["請問您貴姓？"]
            },
            {
                id: "number-sui",
                name: "幾歲 & Number + 歲",
                category: "Age",
                explanation: "Used to ask and state age.",
                examples: ["你幾歲？", "我二十歲。"]
            },
            {
                id: "particle-ne",
                name: "S + 呢",
                category: "Question Particle",
                explanation: "Used to bounce a question back to the other person.",
                examples: ["我很好，你呢？", "我是台灣人，他呢？"]
            },
            {
                id: "question-word-shenme",
                name: "什麼",
                category: "Question Word",
                explanation: "Means 'what'.",
                examples: ["你叫什麼名字？", "這是什麼？"]
            },
            {
                id: "adverb-ye",
                name: "也",
                category: "Adverb",
                explanation: "Means 'also' or 'too'.",
                examples: ["我也是。", "我也喜歡聽音樂。"]
            }
        ],
        vocabulary: [
            { hanzi: "您", pinyin: "nín", meaning: "you (polite)", category: "Pronoun" },
            { hanzi: "好", pinyin: "hǎo", meaning: "good / well", category: "Adjective" },
            { hanzi: "你好", pinyin: "nǐ hǎo", meaning: "hello", category: "Greeting" },
            { hanzi: "請問", pinyin: "qǐngwèn", meaning: "may I ask / excuse me", category: "Greeting" },
            { hanzi: "叫", pinyin: "jiào", meaning: "to be called", category: "Verb" },
            { hanzi: "什麼", pinyin: "shénme", meaning: "what", category: "Question Word" },
            { hanzi: "名字", pinyin: "míngzi", meaning: "name", category: "Noun" },
            { hanzi: "呢", pinyin: "ne", meaning: "question particle", category: "Grammar" },
            { hanzi: "貴姓", pinyin: "guìxìng", meaning: "honorable surname", category: "Noun" },
            { hanzi: "姓", pinyin: "xìng", meaning: "surname / to be surnamed", category: "Verb" },
            { hanzi: "哪國人", pinyin: "nǎguórén", meaning: "nationality / which country person", category: "People" },
            { hanzi: "台灣", pinyin: "táiwān", meaning: "Taiwan", category: "Place" },
            { hanzi: "美國", pinyin: "měiguó", meaning: "America", category: "Place" },
            { hanzi: "來自", pinyin: "láizì", meaning: "to come from", category: "Verb" },
            { hanzi: "幾", pinyin: "jǐ", meaning: "how many / how much", category: "Question Word" },
            { hanzi: "歲", pinyin: "suì", meaning: "years old", category: "Time" },
            { hanzi: "幾歲", pinyin: "jǐsuì", meaning: "how old", category: "Question" },
            { hanzi: "愛好", pinyin: "àihào", meaning: "hobby", category: "Concept" },
            { hanzi: "電影", pinyin: "diànyǐng", meaning: "movie", category: "Entertainment" },
            { hanzi: "聽", pinyin: "tīng", meaning: "to listen", category: "Verb" },
            { hanzi: "音樂", pinyin: "yīnyuè", meaning: "music", category: "Entertainment" },
            { hanzi: "高", pinyin: "gāo", meaning: "tall / high", category: "Adjective" },
            { hanzi: "認識", pinyin: "rènshi", meaning: "to know / meet", category: "Verb" },
            { hanzi: "也", pinyin: "yě", meaning: "also / too", category: "Grammar" },
            { hanzi: "再見", pinyin: "zàijiàn", meaning: "goodbye", category: "Greeting" }
        ],
        reviewQuestions: [
            { meaning: "What is your name?", answer: ["你", "叫", "什", "麼", "名", "字"] },
            { meaning: "My name is David.", answer: ["我", "叫", "大", "衛"] },
            { meaning: "May I ask your honorable surname?", answer: ["請", "問", "您", "貴", "姓"] }
        ]
    },
     
    // ========================================================
    // LESSON 7
    // ========================================================
    7: {
        grammar: [
            {
                id: "zài-location",
                name: "Subject + 在 (Zài) + Location",
                category: "Location Pattern",
                explanation: "The word 在 (zài) acts as a preposition meaning 'at' or 'in'. It is placed before a location noun to tell where someone or something is located.",
                examples: ["我在家。", "你在學校。", "他在醫院。"]
            },
            {
                id: "subject-zài-location-verb",
                name: "Subject + 在 + Location + Verb",
                category: "Action at Location",
                explanation: "Unlike English, Chinese structure places the location before the action verb: Subject + [At Location] + [Verb].",
                examples: ["我在學校讀書。", "他在辦公室上班。", "他在公園運動。"]
            },
            {
                id: "ongoing-action",
                name: "Subject + 正在 (Zhèngzài) + Verb",
                category: "Ongoing Action",
                explanation: "To express that an action is currently in progress (equivalent to '-ing' in English), use 正在 (zhèngzài) or just 在 right before the verb.",
                examples: ["我正在上課。", "他正在玩遊戲。", "她正在教學。"]
            },
            {
                id: "question-where",
                name: "Question: 你在哪裡？ Answer: 我在...",
                category: "Interrogative & Answer",
                explanation: "To ask 'Where are you?', use 哪裡 (nǎlǐ). The response mirrors the pattern using 在 + Location.",
                examples: ["你在哪裡？", "我在公園。", "你在哪裡上班？"]
            }
        ],

        vocabulary: [
            { hanzi: "在", pinyin: "zài", meaning: "at / in / on", category: "Preposition" },
            { hanzi: "家", pinyin: "jiā", meaning: "home / family", category: "Place" },
            { hanzi: "日本", pinyin: "Rìběn", meaning: "Japan", category: "Place" },
            { hanzi: "醫院", pinyin: "yīyuàn", meaning: "hospital", category: "Place" },
            { hanzi: "辦公室", pinyin: "bàngōngshì", meaning: "office", category: "Place" },
            { hanzi: "學校", pinyin: "xuéxiào", meaning: "school", category: "Place" },
            { hanzi: "教室", pinyin: "jiàoshì", meaning: "classroom", category: "Place" },
            { hanzi: "公園", pinyin: "gōngyuán", meaning: "park", category: "Place" },
            { hanzi: "哪裡", pinyin: "nǎlǐ", meaning: "where", category: "Question Word" },
            { hanzi: "讀書", pinyin: "dúshū", meaning: "study / read", category: "Verb" },
            { hanzi: "上班", pinyin: "shàngbān", meaning: "go to work", category: "Verb" },
            { hanzi: "上課", pinyin: "shàngkè", meaning: "attend class", category: "Verb" },
            { hanzi: "運動", pinyin: "yùndòng", meaning: "exercise / sports", category: "Verb" },
            { hanzi: "玩", pinyin: "wán", meaning: "play", category: "Verb" },
            { hanzi: "遊戲", pinyin: "yóuxì", meaning: "game", category: "Noun" },
            { hanzi: "蘋果", pinyin: "píngguǒ", meaning: "apple", category: "Food" },
            { hanzi: "香蕉", pinyin: "xiāngjiāo", meaning: "banana", category: "Food" },
            { hanzi: "教學", pinyin: "jiàoxué", meaning: "teaching", category: "Verb" },
            { hanzi: "對", pinyin: "duì", meaning: "correct / right", category: "Adjective" },
            { hanzi: "和", pinyin: "hé", meaning: "and / with", category: "Conjunction" }
        ],

        reviewQuestions: [
            { meaning: "Where are you?", answer: ["你", "在", "哪", "裡"] },
            { meaning: "I study at school.", answer: ["我", "在", "學", "校", "讀", "書"] },
            { meaning: "He is playing a game right now.", answer: ["他", "正", "在", "玩", "遊", "戲"] },
            { meaning: "I am not at home.", answer: ["我", "不", "在", "家"] },
            { meaning: "She is currently exercising.", answer: ["她", "正", "在", "運", "動"] },
            { meaning: "Are you at home?", answer: ["你", "在", "家", "嗎"] },
            { meaning: "Where do you study?", answer: ["你", "在", "哪", "裡", "讀", "書"] }
        ]
    }
};

    // ========================================================
    // LESSON 8
    // ========================================================
    8: {
        grammar: [
            {
                id: "you-possession",
                name: "S + 有 + O",
                category: "Possession",
                explanation: "Use 有 (yǒu) to say that someone has or possesses something.",
                examples: [
                    "我有一本書。",
                    "他有牛肉麵。",
                    "她有餃子。"
                ]
            },
            {
                id: "mei-you-possession",
                name: "S + 沒有 + O",
                category: "Negative Possession",
                explanation: "Use 沒有 (méiyǒu) to say that someone does not have something.",
                examples: [
                    "我沒有錢。",
                    "她沒有雞。",
                    "你沒有餃子。"
                ]
            },
            {
                id: "you-o-ma",
                name: "S + 有 + O + 嗎",
                category: "Possession Question",
                explanation: "Add 嗎 (ma) at the end of a sentence with 有 to ask whether someone has something.",
                examples: [
                    "你有書嗎？",
                    "你有包子嗎？",
                    "你有餃子嗎？"
                ]
            },
            {
                id: "you-mei-you-o",
                name: "S + 有沒有 + O",
                category: "A-not-A Question",
                explanation: "Use 有沒有 (yǒu méiyǒu) to ask whether someone has something or not.",
                examples: [
                    "你有沒有錢？",
                    "你有沒有炸雞？",
                    "你有沒有餃子？"
                ]
            },
            {
                id: "you-mei-you-v-o",
                name: "S + 有沒有 + V + O",
                category: "Action Question",
                explanation: "有沒有 can also be used before a verb-object phrase to ask whether someone has done or experienced an action.",
                examples: [
                    "你有沒有學習中文？",
                    "你有沒有練習英文？",
                    "你有沒有講中文？"
                ]
            },
            {
                id: "you-v-o",
                name: "S + 有 + V + O",
                category: "Action Completion",
                explanation: "有 can be placed before a verb or verb-object phrase to indicate that an action has been done or experienced.",
                examples: [
                    "我有學習中文。",
                    "我有練習英文。",
                    "我有講中文。"
                ]
            },
            {
                id: "mei-you-v-o",
                name: "S + 沒有 + V + O",
                category: "Negative Action Completion",
                explanation: "沒有 can be placed before a verb or verb-object phrase to indicate that an action has not been done or experienced.",
                examples: [
                    "我沒有學習中文。",
                    "我沒有練習英文。",
                    "我沒有講英文。"
                ]
            },
            {
                id: "answer-you-meiyou",
                name: "Answer with 有 / 沒有",
                category: "Answer",
                explanation: "Questions using 有 or 有沒有 can be answered briefly with 有 for an affirmative answer or 沒有 for a negative answer.",
                examples: [
                    "有。",
                    "沒有。",
                    "有，我有書。",
                    "沒有，我沒有錢。"
                ]
            },
            {
                id: "place-you-thing",
                name: "Place + 有 + Thing / Person",
                category: "Existence",
                explanation: "Use 有 after a location to say that something or someone exists in that place.",
                examples: [
                    "桌子上有一個包子。",
                    "教室裡有學生。",
                    "桌子上有餃子。"
                ]
            }
        ],

        vocabulary: [
            { hanzi: "有", pinyin: "yǒu", meaning: "to have / there is / there are", category: "Grammar" },
            { hanzi: "沒有", pinyin: "méiyǒu", meaning: "not have / there is not / there are not", category: "Grammar" },
            { hanzi: "本", pinyin: "běn", meaning: "measure word for books", category: "Measure Word" },
            { hanzi: "書", pinyin: "shū", meaning: "book", category: "Object" },
            { hanzi: "錢", pinyin: "qián", meaning: "money", category: "Object" },
            { hanzi: "包子", pinyin: "bāozi", meaning: "steamed bun", category: "Food" },
            { hanzi: "餃子", pinyin: "jiǎozi", meaning: "dumpling", category: "Food" },
            { hanzi: "湯", pinyin: "tāng", meaning: "soup", category: "Food" },
            { hanzi: "牛", pinyin: "niú", meaning: "cow / ox", category: "Food" },
            { hanzi: "肉", pinyin: "ròu", meaning: "meat", category: "Food" },
            { hanzi: "麵", pinyin: "miàn", meaning: "noodles", category: "Food" },
            { hanzi: "牛肉麵", pinyin: "niúròu miàn", meaning: "beef noodles", category: "Food" },
            { hanzi: "炸", pinyin: "zhá", meaning: "to deep-fry", category: "Cooking" },
            { hanzi: "雞", pinyin: "jī", meaning: "chicken", category: "Food" },
            { hanzi: "炸雞", pinyin: "zhájī", meaning: "fried chicken", category: "Food" },
            { hanzi: "菜", pinyin: "cài", meaning: "dish / vegetable", category: "Food" },
            { hanzi: "桌子", pinyin: "zhuōzi", meaning: "table / desk", category: "Object" },
            { hanzi: "上", pinyin: "shàng", meaning: "on / above", category: "Location" },
            { hanzi: "裡", pinyin: "lǐ", meaning: "inside", category: "Location" },
            { hanzi: "碗", pinyin: "wǎn", meaning: "measure word for bowls", category: "Measure Word" },
            { hanzi: "根", pinyin: "gēn", meaning: "measure word for long / slender objects", category: "Measure Word" },
            { hanzi: "盤", pinyin: "pán", meaning: "measure word for plates / dishes", category: "Measure Word" },
            { hanzi: "開", pinyin: "kāi", meaning: "to open", category: "Verb" },
            { hanzi: "關", pinyin: "guān", meaning: "to close", category: "Verb" },
            { hanzi: "門", pinyin: "mén", meaning: "door", category: "Object" },
            { hanzi: "學習", pinyin: "xuéxí", meaning: "to study / learn", category: "Verb" },
            { hanzi: "練習", pinyin: "liànxí", meaning: "to practice", category: "Verb" },
            { hanzi: "英文", pinyin: "yīngwén", meaning: "English language", category: "Language" },
            { hanzi: "講", pinyin: "jiǎng", meaning: "to speak / tell", category: "Verb" },
            { hanzi: "說", pinyin: "shuō", meaning: "to say / speak", category: "Verb" }
        ],

        reviewQuestions: [
            {
                meaning: "I have a book.",
                answer: ["我", "有", "本", "書"]
            },
            {
                meaning: "You do not have money.",
                answer: ["你", "沒", "有", "錢"]
            },
            {
                meaning: "Do you have a steamed bun?",
                answer: ["你", "有", "包", "子", "嗎"]
            },
            {
                meaning: "Do you have fried chicken or not?",
                answer: ["你", "有", "沒", "有", "炸", "雞"]
            },
            {
                meaning: "There is soup on the table.",
                answer: ["桌", "子", "上", "有", "湯"]
            },
            {
                meaning: "I study Chinese.",
                answer: ["我", "學", "習", "中", "文"]
            },
            {
                meaning: "Open the door.",
                answer: ["開", "門"]
            },
            {
                meaning: "Close the door.",
                answer: ["關", "門"]
            },
            {
                meaning: "There are students inside the classroom.",
                answer: ["教", "室", "裡", "有", "學", "生"]
            },
            {
                meaning: "Do you speak English?",
                answer: ["你", "會", "說", "英", "文", "嗎"]
            },
            {
                meaning: "He has beef noodles.",
                answer: ["他", "有", "牛", "肉", "麵"]
            },
            {
                meaning: "Do you have dumplings?",
                answer: ["你", "有", "餃", "子", "嗎"]
            },
            {
                meaning: "I have practiced English.",
                answer: ["我", "有", "練", "習", "英", "文"]
            },
            {
                meaning: "She does not have chicken.",
                answer: ["她", "沒", "有", "雞"]
            },
            {
                meaning: "There are dumplings on the table.",
                answer: ["桌", "子", "上", "有", "餃", "子"]
            }
        ]
    },

// ============================================================
// MAKE DATABASE AVAILABLE TO HTML
// ============================================================

window.allLessonsData = allLessonsData;