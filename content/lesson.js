// ============================================================
// Boba Break Study — Master Lesson Database (Lessons 1 - 9)
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
    },

        // ========================================================
    // LESSON 8
    // ========================================================
    8: {
        grammar: [
            {
                id: "have-objects",
                name: "S + 有 / 沒有 + O",
                category: "Possession",
                explanation: "Used to express having or not having something.",
                examples: ["我有一本書。", "我沒有錢。", "你有原子筆嗎？", "你有沒有鉛筆？"]
            },
            {
                id: "have-actions",
                name: "S + 有 / 沒有 + V (+O)",
                category: "Having Done / Experienced Actions",
                explanation: "Used to express having or not having done an action. Can be answered with 有 or 沒有.",
                examples: ["我有吃蛋糕。", "我沒有喝酒。", "你有記得嗎？", "有沒有學習英文？"]
            },
            {
                id: "existential-location",
                name: "Place + 有 + Thing / Person",
                category: "Existence at Location",
                explanation: "Used to indicate the existence of objects or people in a certain place.",
                examples: ["桌子上有一台電腦。", "教室裡有學生。"]
            }
        ],
        vocabulary: [
            { hanzi: "錢", pinyin: "qián", meaning: "money", category: "Object" },
            { hanzi: "本", pinyin: "běn", meaning: "measure word for books", category: "Measure Word" },
            { hanzi: "台", pinyin: "tái", meaning: "measure word for machines/computers", category: "Measure Word" },
            { hanzi: "原子筆", pinyin: "yuánzǐbǐ", meaning: "ballpoint pen", category: "Object" },
            { hanzi: "鉛筆", pinyin: "qiānbǐ", meaning: "pencil", category: "Object" },
            { hanzi: "蛋糕", pinyin: "dàngāo", meaning: "cake", category: "Food" },
            { hanzi: "學習", pinyin: "xuéxí", meaning: "to study / learn", category: "Verb" },
            { hanzi: "英文", pinyin: "yīngwén", meaning: "English language", category: "Language" },
            { hanzi: "酒", pinyin: "jiǔ", meaning: "alcohol / wine", category: "Drink" },
            { hanzi: "桌子", pinyin: "zhuōzi", meaning: "table / desk", category: "Object" },
            { hanzi: "上", pinyin: "shàng", meaning: "on / above", category: "Direction" },
            { hanzi: "記得", pinyin: "jìde", meaning: "to remember", category: "Verb" }
        ],
        reviewQuestions: [
            { meaning: "I have a book.", answer: ["我", "有", "一", "本", "書"] },
            { meaning: "I don't have money.", answer: ["我", "沒", "有", "錢"] },
            { meaning: "Do you have a ballpoint pen?", answer: ["你", "有", "原", "子", "筆", "嗎"] },
            { meaning: "Do you have a pencil or not?", answer: ["你", "有", "沒", "有", "鉛", "筆"] },
            { meaning: "There is a computer on the desk.", answer: ["桌", "子", "上", "有", "一", "台", "電", "腦"] }
        ]
    },


// ========================================================
// LESSON 9
// ========================================================
9: {
    grammar: [
        {
            id: "price-asking",
            name: "多少錢？",
            category: "Asking Price",
            explanation: "Used to ask how much something costs.",
            examples: [
                "這個多少錢？",
                "那個多少錢？",
                "一杯咖啡多少錢？"
            ]
        },
        {
            id: "price-answer",
            name: "Number + 元 / 塊",
            category: "Price",
            explanation: "Use 元 (yuán) or 塊 (kuài) to state prices. 元 is more formal, while 塊 is very common in everyday spoken Mandarin in Taiwan.",
            examples: [
                "十元。",
                "五十塊。",
                "這個一百塊。"
            ]
        },
        {
            id: "give",
            name: "給 + Person + Thing",
            category: "Giving",
            explanation: "給 (gěi) means 'to give'. It can be used to tell someone to give something to someone.",
            examples: [
                "給我一杯咖啡。",
                "請給我一個。",
                "給你。"
            ]
        },
        {
            id: "please",
            name: "請 + Verb",
            category: "Polite Expression",
            explanation: "請 (qǐng) is used to make a request more polite. It can mean 'please' or 'please do...'.",
            examples: [
                "請給我一個。",
                "請問，這個多少錢？",
                "請看一下。"
            ]
        },
        {
            id: "finished",
            name: "V + 完了",
            category: "Completed / Sold Out",
            explanation: "完了 can be used after a verb to show that an action has been completed. For example, 賣完了 means 'sold out' or 'has all been sold'.",
            examples: [
                "賣完了。",
                "咖啡賣完了。",
                "麵包賣完了。"
            ]
        },
        {
            id: "buhaoyisi",
            name: "不好意思",
            category: "Polite Expression",
            explanation: "不好意思 is commonly used in Taiwan to politely apologize, interrupt, or get someone's attention. It is often more casual and versatile than 對不起.",
            examples: [
                "不好意思，請問這個多少錢？",
                "不好意思，沒有了。",
                "不好意思，讓你等了。"
            ]
        },
        {
            id: "duibuqi",
            name: "對不起",
            category: "Apology",
            explanation: "對不起 means 'sorry' and is generally used for a more direct or serious apology.",
            examples: [
                "對不起。",
                "對不起，我不知道。",
                "對不起，賣完了。"
            ]
        },
        {
            id: "meiguanxi",
            name: "沒關係 / 沒問題",
            category: "Response",
            explanation: "沒關係 means 'it's okay / no problem'. 沒問題 also means 'no problem' and is commonly used in everyday conversation.",
            examples: [
                "對不起。— 沒關係。",
                "不好意思。— 沒問題。",
                "沒關係，沒問題。"
            ]
        },
        {
            id: "thanks-response",
            name: "謝謝 → 不客氣 / 不會",
            category: "Polite Response",
            explanation: "謝謝 means 'thank you'. 不客氣 means 'you're welcome'. In Taiwan, 不會 is also commonly heard as a casual response to 謝謝.",
            examples: [
                "謝謝。— 不客氣。",
                "謝謝。— 不會。",
                "謝謝你的幫忙。— 不會。"
            ]
        }
    ],

    vocabulary: [
        {
            hanzi: "歡迎光臨",
            pinyin: "huānyíng guānglín",
            meaning: "welcome (used when welcoming customers)",
            category: "Transaction"
        },
        {
            hanzi: "謝謝",
            pinyin: "xièxie",
            meaning: "thank you",
            category: "Polite Expression"
        },
        {
            hanzi: "不客氣",
            pinyin: "bú kèqi",
            meaning: "you're welcome",
            category: "Polite Expression"
        },
        {
            hanzi: "不會",
            pinyin: "bú huì",
            meaning: "you're welcome / no problem",
            category: "Polite Expression"
        },
        {
            hanzi: "對不起",
            pinyin: "duìbuqǐ",
            meaning: "sorry",
            category: "Apology"
        },
        {
            hanzi: "不好意思",
            pinyin: "bù hǎoyìsi",
            meaning: "excuse me / sorry",
            category: "Polite Expression"
        },
        {
            hanzi: "沒關係",
            pinyin: "méi guānxi",
            meaning: "it's okay / no problem",
            category: "Response"
        },
        {
            hanzi: "沒問題",
            pinyin: "méi wèntí",
            meaning: "no problem",
            category: "Response"
        },
        {
            hanzi: "請",
            pinyin: "qǐng",
            meaning: "please",
            category: "Polite Expression"
        },
        {
            hanzi: "問",
            pinyin: "wèn",
            meaning: "to ask",
            category: "Verb"
        },
        {
            hanzi: "多少",
            pinyin: "duōshao",
            meaning: "how much / how many",
            category: "Question Word"
        },
        {
            hanzi: "錢",
            pinyin: "qián",
            meaning: "money",
            category: "Object"
        },
        {
            hanzi: "多少錢",
            pinyin: "duōshao qián",
            meaning: "how much does it cost",
            category: "Question"
        },
        {
            hanzi: "元",
            pinyin: "yuán",
            meaning: "dollar / NT dollar (formal)",
            category: "Money"
        },
        {
            hanzi: "塊",
            pinyin: "kuài",
            meaning: "dollar / NT dollar (common spoken form)",
            category: "Money"
        },
        {
            hanzi: "買",
            pinyin: "mǎi",
            meaning: "to buy",
            category: "Verb"
        },
        {
            hanzi: "賣",
            pinyin: "mài",
            meaning: "to sell",
            category: "Verb"
        },
        {
            hanzi: "給",
            pinyin: "gěi",
            meaning: "to give / for",
            category: "Verb"
        },
        {
            hanzi: "有",
            pinyin: "yǒu",
            meaning: "to have / there is",
            category: "Verb"
        },
        {
            hanzi: "沒有",
            pinyin: "méiyǒu",
            meaning: "not have / there isn't",
            category: "Verb"
        },
        {
            hanzi: "完了",
            pinyin: "wán le",
            meaning: "finished / completed",
            category: "Grammar"
        },
        {
            hanzi: "了",
            pinyin: "le",
            meaning: "completed-action particle",
            category: "Grammar"
        },
        {
            hanzi: "這個",
            pinyin: "zhège",
            meaning: "this one",
            category: "Demonstrative"
        },
        {
            hanzi: "那個",
            pinyin: "nàge",
            meaning: "that one",
            category: "Demonstrative"
        },
        {
            hanzi: "東西",
            pinyin: "dōngxi",
            meaning: "thing / things",
            category: "Object"
        }
    ],

    reviewQuestions: [
        {
            meaning: "How much is this?",
            answer: ["這", "個", "多", "少", "錢"]
        },
        {
            meaning: "How much is that?",
            answer: ["那", "個", "多", "少", "錢"]
        },
        {
            meaning: "It's 50 dollars.",
            answer: ["五", "十", "塊"]
        },
        {
            meaning: "Please give me one.",
            answer: ["請", "給", "我", "一", "個"]
        },
        {
            meaning: "Sorry, it's sold out.",
            answer: ["對", "不", "起", "賣", "完", "了"]
        },
        {
            meaning: "Excuse me, do you have this?",
            answer: ["不", "好", "意", "思", "你", "有", "這", "個", "嗎"]
        },
        {
            meaning: "Thank you. — You're welcome.",
            answer: ["謝", "謝", "不", "客", "氣"]
        },
        {
            meaning: "Sorry. — It's okay.",
            answer: ["對", "不", "起", "沒", "關", "係"]
        },
        {
            meaning: "Do you have another one?",
            answer: ["你", "有", "另", "外", "一", "個", "嗎"]
        }
    ]
},
// ==================== LESSON 10 ====================

10: {
    vocabulary: [
        { chinese: "爺爺", pinyin: "yéye", meaning: "paternal grandfather" },
        { chinese: "奶奶", pinyin: "nǎinai", meaning: "paternal grandmother" },
        { chinese: "伯伯", pinyin: "bóbo", meaning: "father's older brother" },
        { chinese: "伯母", pinyin: "bómǔ", meaning: "wife of father's older brother" },
        { chinese: "叔叔", pinyin: "shūshu", meaning: "father's younger brother" },
        { chinese: "嬸嬸", pinyin: "shěnshen", meaning: "wife of father's younger brother" },
        { chinese: "姑姑", pinyin: "gūgu", meaning: "father's sister" },
        { chinese: "姑丈", pinyin: "gūzhàng", meaning: "husband of father's sister" },
        { chinese: "舅舅", pinyin: "jiùjiu", meaning: "mother's brother" },
        { chinese: "舅媽", pinyin: "jiùmā", meaning: "wife of mother's brother" },
        { chinese: "阿姨", pinyin: "āyí", meaning: "mother's sister" },
        { chinese: "姨丈", pinyin: "yízhàng", meaning: "husband of mother's sister" },
        { chinese: "堂", pinyin: "táng", meaning: "paternal-side cousin" },
        { chinese: "表", pinyin: "biǎo", meaning: "maternal-side cousin / cousin from certain family relationships" },
        { chinese: "兄弟姐妹", pinyin: "xiōngdì jiěmèi", meaning: "siblings" },
        { chinese: "兄弟", pinyin: "xiōngdì", meaning: "brothers / male siblings" },
        { chinese: "姐妹", pinyin: "jiěmèi", meaning: "sisters / female siblings" },
        { chinese: "家人", pinyin: "jiārén", meaning: "family members" }
    ]
},

};
// ============================================================
// MAKE DATABASE AVAILABLE TO HTML
// ============================================================

window.allLessonsData = allLessonsData;
