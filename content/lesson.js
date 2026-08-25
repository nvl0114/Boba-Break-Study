// ============================================================
// Boba Break Study — Master Lesson Database
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
        { hanzi: "爺爺", pinyin: "yéye", meaning: "paternal grandfather" },
        { hanzi: "奶奶", pinyin: "nǎinai", meaning: "paternal grandmother" },
        { hanzi: "伯伯", pinyin: "bóbo", meaning: "father's older brother" },
        { hanzi: "伯母", pinyin: "bómǔ", meaning: "wife of father's older brother" },
        { hanzi: "叔叔", pinyin: "shūshu", meaning: "father's younger brother" },
        { hanzi: "嬸嬸", pinyin: "shěnshen", meaning: "wife of father's younger brother" },
        { hanzi: "姑姑", pinyin: "gūgu", meaning: "father's sister" },
        { hanzi: "姑丈", pinyin: "gūzhàng", meaning: "husband of father's sister" },
        { hanzi: "舅舅", pinyin: "jiùjiu", meaning: "mother's brother" },
        { hanzi: "舅媽", pinyin: "jiùmā", meaning: "wife of mother's brother" },
        { hanzi: "阿姨", pinyin: "āyí", meaning: "mother's sister" },
        { hanzi: "姨丈", pinyin: "yízhàng", meaning: "husband of mother's sister" },
        { hanzi: "堂", pinyin: "táng", meaning: "paternal-side cousin" },
        { hanzi: "表", pinyin: "biǎo", meaning: "maternal-side cousin / cousin from certain family relationships" },
        { hanzi: "兄弟姐妹", pinyin: "xiōngdì jiěmèi", meaning: "siblings" },
        { hanzi: "兄弟", pinyin: "xiōngdì", meaning: "brothers / male siblings" },
        { hanzi: "姐妹", pinyin: "jiěmèi", meaning: "sisters / female siblings" },
        { hanzi: "家人", pinyin: "jiārén", meaning: "family members" },

        { hanzi: "外公", pinyin: "wàigōng", meaning: "maternal grandfather" },
        { hanzi: "外婆", pinyin: "wàipó", meaning: "maternal grandmother" },
        { hanzi: "阿公", pinyin: "āgōng", meaning: "grandfather (Taiwanese style)" },
        { hanzi: "阿嬤", pinyin: "āmā", meaning: "grandmother (Taiwanese style)" }
    ],

    reviewQuestions: [
        {
            meaning: "My paternal grandfather",
            answer: ["我", "的", "爺", "爺"]
        },
        {
            meaning: "My paternal grandmother",
            answer: ["我", "的", "奶", "奶"]
        },
        {
            meaning: "My father's older brother",
            answer: ["我", "的", "伯", "伯"]
        },
        {
            meaning: "My father's younger brother",
            answer: ["我", "的", "叔", "叔"]
        },
        {
            meaning: "My father's sister",
            answer: ["我", "的", "姑", "姑"]
        },
        {
            meaning: "My mother's brother",
            answer: ["我", "的", "舅", "舅"]
        },
        {
            meaning: "My mother's sister",
            answer: ["我", "的", "阿", "姨"]
        },
        {
            meaning: "My family members",
            answer: ["我", "的", "家", "人"]
        },
        {
            meaning: "I have brothers and sisters.",
            answer: ["我", "有", "兄", "弟", "姐", "妹"]
        }
    ]
},

// ========================================================
// LESSON 11
// ========================================================
11: {
    grammar: [
        {
            id: "he",
            name: "A + 和 + B",
            category: "Conjunction",
            explanation: "和 (hé) means 'and' and is used to connect two nouns, people, or things.",
            examples: [
                "我有哥哥和妹妹。",
                "我喜歡吃飯和看電影。",
                "我和朋友一起去公園。"
            ]
        },
        {
            id: "gen",
            name: "A + 跟 + B + Verb",
            category: "Conjunction",
            explanation: "跟 (gēn) means 'with' or 'and'. It is commonly used when doing something together with another person.",
            examples: [
                "我跟哥哥住在一起。",
                "我跟朋友吃飯。",
                "我跟妹妹一起去公園。"
            ]
        },
        {
            id: "ye",
            name: "Subject + 也 + Verb",
            category: "Adverb",
            explanation: "也 (yě) means 'also' or 'too'. It usually comes before the verb or adjective.",
            examples: [
                "妹妹也住在家裡。",
                "我也喜歡中文。",
                "哥哥也喜歡唱歌。"
            ]
        },
        {
            id: "dou",
            name: "Subject + 都 + Verb",
            category: "Adverb",
            explanation: "都 (dōu) means 'all' or 'both'. It shows that everyone or everything in the group does something.",
            examples: [
                "我們都喜歡吃飯。",
                "我們都喜歡看電影。",
                "哥哥和妹妹都在家。"
            ]
        },
        {
            id: "hai",
            name: "S + 還 + Verb / Adj",
            category: "Adverb",
            explanation: "還 (hái) can mean 'still' or 'also'. It can show that something continues or that there is an additional action or characteristic.",
            examples: [
                "我還在家。",
                "哥哥還喜歡唱歌。",
                "我還有很多時間。"
            ]
        },
        {
            id: "haishi",
            name: "A + 還是 + B？",
            category: "Choice Question",
            explanation: "還是 (háishì) means 'or' when asking someone to choose between two alternatives.",
            examples: [
                "你要吃麵還是吃飯？",
                "你要喝茶還是咖啡？",
                "你喜歡哥哥還是妹妹？"
            ]
        },
        {
            id: "huozhe",
            name: "A + 或者 + B",
            category: "Choice",
            explanation: "或者 (huòzhě) means 'or' and is commonly used to give alternatives in statements.",
            examples: [
                "晚上我們可以吃麵或者吃飯。",
                "我可以喝茶或者咖啡。",
                "你可以吃麵或者吃飯。"
            ]
        },
        {
            id: "danshi",
            name: "Sentence A + 但是 + Sentence B",
            category: "Contrast",
            explanation: "但是 (dànshì) means 'but' and is used to connect two contrasting ideas.",
            examples: [
                "我喜歡吃麵，但是我不喜歡吃飯。",
                "哥哥喜歡唱歌，但是妹妹不喜歡。",
                "我想出去，但是今天下雨。"
            ]
        },
        {
            id: "keshi",
            name: "Sentence A + 可是 + Sentence B",
            category: "Contrast",
            explanation: "可是 (kěshì) also means 'but' or 'however'. It is commonly used in everyday spoken Mandarin.",
            examples: [
                "妹妹喜歡自拍，可是哥哥不喜歡。",
                "我想出去，可是今天下雨。",
                "我喜歡咖啡，可是妹妹喜歡茶。"
            ]
        },
        {
            id: "yinwei-suoyi",
            name: "因為 + Reason，所以 + Result",
            category: "Cause and Effect",
            explanation: "因為 (yīnwèi) means 'because' and 所以 (suǒyǐ) means 'so / therefore'. Together they express a cause and its result.",
            examples: [
                "因為天氣很好，所以我們想出去。",
                "因為今天是星期六，所以我們有時間。",
                "因為下雨，所以我回家。"
            ]
        },
        {
            id: "ranhou",
            name: "A，然後 B",
            category: "Sequence",
            explanation: "然後 (ránhòu) means 'then' or 'afterwards'. It connects actions that happen one after another.",
            examples: [
                "我先吃飯，然後看電視。",
                "我們去公園，然後回家。",
                "我先喝咖啡，然後吃飯。"
            ]
        },
        {
            id: "ruguo-jiu",
            name: "如果 + Condition，(就) + Result",
            category: "Conditional Sentence",
            explanation: "如果 (rúguǒ) means 'if'. It introduces a condition and is commonly paired with 就 (jiù) to introduce the result.",
            examples: [
                "如果下雨，我就回家。",
                "如果天氣很好，我們就出去玩。",
                "如果你喜歡，我們就一起去。"
            ]
        }
    ],

    vocabulary: [
        {
            hanzi: "跟",
            pinyin: "gēn",
            meaning: "with / and",
            category: "Conjunction"
        },
        {
            hanzi: "住在",
            pinyin: "zhù zài",
            meaning: "live in / at",
            category: "Verb"
        },
        {
            hanzi: "一起",
            pinyin: "yīqǐ",
            meaning: "together",
            category: "Adverb"
        },
        {
            hanzi: "時間",
            pinyin: "shíjiān",
            meaning: "time",
            category: "Noun"
        },
        {
            hanzi: "家裡",
            pinyin: "jiālǐ",
            meaning: "home / at home",
            category: "Location"
        },
        {
            hanzi: "但是",
            pinyin: "dànshì",
            meaning: "but",
            category: "Conjunction"
        },
        {
            hanzi: "可是",
            pinyin: "kěshì",
            meaning: "but / however",
            category: "Conjunction"
        },
        {
            hanzi: "唱歌",
            pinyin: "chànggē",
            meaning: "to sing / singing",
            category: "Verb"
        },
        {
            hanzi: "自拍",
            pinyin: "zìpāi",
            meaning: "to take a selfie",
            category: "Verb"
        },
        {
            hanzi: "今天",
            pinyin: "jīntiān",
            meaning: "today",
            category: "Time"
        },
        {
            hanzi: "星期六",
            pinyin: "xīngqíliù",
            meaning: "Saturday",
            category: "Time"
        },
        {
            hanzi: "多",
            pinyin: "duō",
            meaning: "many / much",
            category: "Adjective"
        },
        {
            hanzi: "天氣",
            pinyin: "tiānqì",
            meaning: "weather",
            category: "Noun"
        },
        {
            hanzi: "出去",
            pinyin: "chūqù",
            meaning: "go out",
            category: "Verb"
        },
        {
            hanzi: "都",
            pinyin: "dōu",
            meaning: "all / both",
            category: "Adverb"
        },
        {
            hanzi: "所以",
            pinyin: "suǒyǐ",
            meaning: "so / therefore",
            category: "Conjunction"
        },
        {
            hanzi: "因為",
            pinyin: "yīnwèi",
            meaning: "because",
            category: "Conjunction"
        },
        {
            hanzi: "然後",
            pinyin: "ránhòu",
            meaning: "then / afterwards",
            category: "Conjunction"
        },
        {
            hanzi: "如果",
            pinyin: "rúguǒ",
            meaning: "if",
            category: "Conjunction"
        },
        {
            hanzi: "或者",
            pinyin: "huòzhě",
            meaning: "or (statements)",
            category: "Conjunction"
        },
        {
            hanzi: "還是",
            pinyin: "háishì",
            meaning: "or (questions)",
            category: "Conjunction"
        },
        {
            hanzi: "還",
            pinyin: "hái",
            meaning: "still / also",
            category: "Adverb"
        },
        {
            hanzi: "麵",
            pinyin: "miàn",
            meaning: "noodles",
            category: "Food"
        }
    ],

    reviewQuestions: [
        {
            meaning: "I live together with my older brother.",
            answer: ["我", "跟", "哥哥", "住", "在", "一", "起"]
        },
        {
            meaning: "My younger sister also lives at home.",
            answer: ["妹", "妹", "也", "住", "在", "家", "裡"]
        },
        {
            meaning: "We all like eating meals and watching movies.",
            answer: ["我", "們", "都", "喜", "歡", "吃", "飯", "和", "看", "電", "影"]
        },
        {
            meaning: "My older brother also likes singing.",
            answer: ["哥", "哥", "還", "喜", "歡", "唱", "歌"]
        },
        {
            meaning: "My younger sister likes taking selfies, but my older brother doesn't.",
            answer: ["妹", "妹", "喜", "歡", "自", "拍", "可", "是", "哥", "哥", "不", "喜", "歡"]
        },
        {
            meaning: "Because the weather is good, we want to go out.",
            answer: ["因", "為", "天", "氣", "很", "好", "所", "以", "我", "們", "想", "出", "去"]
        },
        {
            meaning: "Then we go to the park together.",
            answer: ["然", "後", "我", "們", "一", "起", "去", "公", "園"]
        },
        {
            meaning: "If it rains, we will go home.",
            answer: ["如", "果", "下", "雨", "我", "們", "就", "回", "家"]
        },
        {
            meaning: "We can eat noodles or rice tonight.",
            answer: ["晚", "上", "我", "們", "可", "以", "吃", "麵", "或", "者", "吃", "飯"]
        },
        {
            meaning: "Do you want noodles or rice?",
            answer: ["你", "要", "吃", "麵", "還", "是", "吃", "飯"]
        }
    ]
},

    // ========================================================
    // LESSON 12
    // ========================================================
    12: {
        grammar: [
            {
                id: "numbers-11-19",
                name: "十 (shí) + number",
                category: "Numbers (11–19)",
                examples: ["十二 (shí èr = 12)", "十八 (shí bā = 18)"]
            },
            {
                id: "numbers-20-99",
                name: "number + 十 (shí) + number",
                category: "Numbers (20–99)",
                examples: ["二十 (èr shí = 20)", "八十五 (bā shí wǔ = 85)"]
            },
            {
                id: "hundred-scale",
                name: "百 (bǎi) - Hundred",
                category: "Large Scale Numbers",
                examples: ["兩百 (liǎng bǎi = 200)", "五百三十五 (wǔ bǎi sān shí wǔ = 535)"]
            },
            {
                id: "thousand-scale",
                name: "千 (qiān) - Thousand",
                category: "Large Scale Numbers",
                examples: ["兩千 (liǎng qiān = 2000)", "八千三百五十六 (bā qiān sān bǎi wǔ shí liù = 8356)"]
            },
            {
                id: "wan-scale",
                name: "萬 (wàn) - Ten Thousand (Groups of 4 zeros)",
                category: "Large Scale Numbers",
                examples: ["兩萬 (liǎng wàn = 20000)", "一百萬 (yī bǎi wàn = 1,000,000)"]
            },
            {
                id: "currency-units",
                name: "塊 (kuài) / 元 (yuán) / 臺幣 (táibì)",
                category: "Currency Expressions",
                examples: ["臺幣 (táibì = NTD)", "五百塊 (wǔ bǎi kuài = 500 bucks)", "一百元 (yī bǎi yuán = 100 yuan)"]
            }
        ],
        vocabulary: [
            { hanzi: "百", pinyin: "bǎi", meaning: "Hundred", category: "Numbers" },
            { hanzi: "千", pinyin: "qiān", meaning: "Thousand", category: "Numbers" },
            { hanzi: "萬", pinyin: "wàn", meaning: "Ten thousand", category: "Numbers" },
            { hanzi: "臺幣", pinyin: "táibì", meaning: "Taiwan Dollar (NTD)", category: "Currency" },
            { hanzi: "台幣", pinyin: "táibì", meaning: "Taiwan Dollar (Simplified)", category: "Currency" },
            { hanzi: "塊", pinyin: "kuài", meaning: "Bucks / Measure word for money", category: "Currency" },
            { hanzi: "元", pinyin: "yuán", meaning: "Formal currency unit", category: "Currency" }
        ],
        reviewQuestions: [
            { meaning: "12", answer: ["十", "二"] },
            { meaning: "18", answer: ["十", "八"] },
            { meaning: "20", answer: ["二", "十"] },
            { meaning: "85", answer: ["八", "十", "五"] },
            { meaning: "200", answer: ["兩", "百"] },
            { meaning: "535", answer: ["五", "百", "三", "十", "五"] },
            { meaning: "2000", answer: ["兩", "千"] },
            { meaning: "8356", answer: ["八", "千", "三", "百", "五", "十", "六"] },
            { meaning: "20000", answer: ["兩", "萬"] },
            { meaning: "1,000,000", answer: ["一", "百", "萬"] }
        ]
    },
    // ========================================================
    // LESSON 13
    // ========================================================
    13: {
        grammar: [
            {
                id: "time-svo",
                name: "Time + Subject + Verb + Object",
                category: "Time Expressions & Word Order",
                examples: [
                    "今天我打電話 (jīntiān wǒ dǎ diànhuà = Today I am making a phone call)",
                    "昨天我練習游泳 (zuótiān wǒ liànxí yóuyǒng = Yesterday I practiced swimming)"
                ]
            },
            {
                id: "s-time-vo",
                name: "Subject + Time + Verb + Object",
                category: "Time Expressions & Word Order",
                examples: [
                    "我明天考試 (wǒ míngtiān kǎoshì = I have an exam tomorrow)",
                    "我後天游泳 (wǒ hòutiān yóuyǒng = I will swim the day after tomorrow)"
                ]
            },
            {
                id: "s-time-place-vo",
                name: "Subject + Time + Place + Verb + Object",
                category: "Time & Place Word Order",
                examples: [
                    "我昨天在圖書館練習中文 (wǒ zuótiān zài túshūguǎn liànxí zhōngwén = Yesterday I practiced Chinese at the library)",
                    "我今天在圖書館考試 (wǒ jīntiān zài túshūguǎn kǎoshì = Today I have an exam at the library)"
                ]
            },
            {
                id: "time-place-svo",
                name: "Time + Subject + Place + Verb + Object",
                category: "Time & Place Word Order",
                examples: [
                    "昨天我在圖書館練習中文 (zuótiān wǒ zài túshūguǎn liànxí zhōngwén = Yesterday I practiced Chinese at the library)",
                    "明天我在圖書館練習 (míngtiān wǒ zài túshūguǎn liànxí = Tomorrow I will practice at the library)"
                ]
            },
            {
                id: "time-expressions",
                name: "前天 / 昨天 / 今天 / 明天 / 後天",
                category: "Time Expressions",
                examples: [
                    "前天我去圖書館 (qiántiān wǒ qù túshūguǎn = I went to the library the day before yesterday)",
                    "明天我考試 (míngtiān wǒ kǎoshì = I have an exam tomorrow)"
                ]
            }
        ],
        vocabulary: [
            { hanzi: "今天", pinyin: "jīntiān", meaning: "Today", category: "Time" },
            { hanzi: "昨天", pinyin: "zuótiān", meaning: "Yesterday", category: "Time" },
            { hanzi: "前天", pinyin: "qiántiān", meaning: "The day before yesterday", category: "Time" },
            { hanzi: "明天", pinyin: "míngtiān", meaning: "Tomorrow", category: "Time" },
            { hanzi: "後天", pinyin: "hòutiān", meaning: "The day after tomorrow", category: "Time" },
            { hanzi: "圖書館", pinyin: "túshūguǎn", meaning: "Library", category: "Places" },
            { hanzi: "打電話", pinyin: "dǎ diànhuà", meaning: "To make a phone call", category: "Actions" },
            { hanzi: "考試", pinyin: "kǎoshì", meaning: "Exam / test", category: "Actions" },
            { hanzi: "練習", pinyin: "liànxí", meaning: "To practice", category: "Actions" },
            { hanzi: "游泳", pinyin: "yóuyǒng", meaning: "To swim", category: "Actions" }
        ],
        reviewQuestions: [
            { meaning: "Today I am making a phone call.", answer: ["今天", "我", "打", "電話"] },
            { meaning: "Yesterday I practiced swimming.", answer: ["昨天", "我", "練習", "游泳"] },
            { meaning: "The day before yesterday I went to the library.", answer: ["前天", "我", "去", "圖書館"] },
            { meaning: "I have an exam tomorrow.", answer: ["我", "明天", "考試"] },
            { meaning: "I will swim the day after tomorrow.", answer: ["我", "後天", "游泳"] },
            { meaning: "She makes a phone call today.", answer: ["她", "今天", "打", "電話"] },
            { meaning: "Yesterday I practiced Chinese at the library.", answer: ["昨天", "我", "在", "圖書館", "練習", "中文"] },
            { meaning: "Today I have an exam at the library.", answer: ["今天", "我", "在", "圖書館", "考試"] },
            { meaning: "Tomorrow I will practice at the library.", answer: ["明天", "我", "在", "圖書館", "練習"] },
            { meaning: "The day after tomorrow she has an exam.", answer: ["後天", "她", "考試"] }
        ]
    },
// ========================================================
// LESSON 14
// ========================================================
14: {
    grammar: [
        {
            id: "weekday-xingqi",
            name: "星期 + Number",
            category: "Days of the Week",
            explanation: "Use 星期 (xīngqí) + a number to talk about the day of the week. 星期一 is Monday and 星期日 is Sunday.",
            examples: [
                "星期一 — Monday",
                "星期二 — Tuesday",
                "星期三 — Wednesday",
                "星期四 — Thursday",
                "星期五 — Friday",
                "星期六 — Saturday",
                "星期日 — Sunday"
            ]
        },
        {
            id: "weekday-libai",
            name: "禮拜 + Number",
            category: "Days of the Week",
            explanation: "禮拜 (lǐbài) can also be used to talk about the day of the week. It is very common in spoken Mandarin, especially in Taiwan.",
            examples: [
                "禮拜一 — Monday",
                "禮拜二 — Tuesday",
                "禮拜三 — Wednesday",
                "禮拜四 — Thursday",
                "禮拜五 — Friday",
                "禮拜六 — Saturday",
                "禮拜日 — Sunday"
            ]
        },
        {
            id: "asking-weekday",
            name: "今天是星期幾？",
            category: "Asking the Day",
            explanation: "Use 星期幾 or 禮拜幾 to ask what day of the week it is.",
            examples: [
                "今天是星期幾？",
                "今天是星期一。",
                "今天是禮拜六。"
            ]
        },
        {
            id: "asking-date",
            name: "幾月幾號",
            category: "Asking the Date",
            explanation: "Use 幾月幾號 to ask for the month and day of a date. 幾 means 'what number / how many'.",
            examples: [
                "今天幾月幾號？",
                "今天是八月二十四號。",
                "你的生日是幾月幾號？",
                "我的生日是六月十五號。"
            ]
        },
        {
            id: "asking-when",
            name: "Subject + 什麼時候 + Verb",
            category: "Asking When",
            explanation: "什麼時候 means 'when'. It is placed before the verb when asking when an action happens.",
            examples: [
                "你什麼時候考試？",
                "你什麼時候回家？",
                "你什麼時候去學校？",
                "你什麼時候去圖書館？",
                "你什麼時候游泳？"
            ]
        }
    ],

    vocabulary: [
        {
            hanzi: "星期",
            pinyin: "xīngqí",
            meaning: "week; day of the week",
            category: "Time"
        },
        {
            hanzi: "禮拜",
            pinyin: "lǐbài",
            meaning: "week; day of the week",
            category: "Time"
        },
        {
            hanzi: "週末",
            pinyin: "zhōumò",
            meaning: "weekend",
            category: "Time"
        },
        {
            hanzi: "週日",
            pinyin: "zhōurì",
            meaning: "Sunday",
            category: "Time"
        },
        {
            hanzi: "幾",
            pinyin: "jǐ",
            meaning: "how many; what number",
            category: "Question Word"
        },
        {
            hanzi: "什麼時候",
            pinyin: "shénme shíhou",
            meaning: "when",
            category: "Question Word"
        },
        {
            hanzi: "生日",
            pinyin: "shēngrì",
            meaning: "birthday",
            category: "Time"
        },
        {
            hanzi: "對了",
            pinyin: "duì le",
            meaning: "oh, by the way; that's right",
            category: "Expression"
        },
        {
            hanzi: "可能",
            pinyin: "kěnéng",
            meaning: "maybe; possibly; possible",
            category: "Adverb"
        },
        {
            hanzi: "吧",
            pinyin: "ba",
            meaning: "sentence-final particle; used for suggestions or uncertainty",
            category: "Grammar"
        }
    ],

    reviewQuestions: [
        {
            meaning: "What day is it today?",
            answer: ["今天", "是", "星期", "幾"]
        },
        {
            meaning: "Today is Monday.",
            answer: ["今天", "是", "星期", "一"]
        },
        {
            meaning: "What is today's date?",
            answer: ["今天", "幾", "月", "幾", "號"]
        },
        {
            meaning: "Today is August 24th.",
            answer: ["今天", "是", "八", "月", "二", "十", "四", "號"]
        },
        {
            meaning: "What is your birthday?",
            answer: ["你的", "生日", "是", "幾", "月", "幾", "號"]
        },
        {
            meaning: "My birthday is June 15th.",
            answer: ["我的", "生日", "是", "六", "月", "十", "五", "號"]
        },
        {
            meaning: "When do you go to the library?",
            answer: ["你", "什麼時候", "去", "圖書館"]
        },
        {
            meaning: "When do you take the exam?",
            answer: ["你", "什麼時候", "考試"]
        },
        {
            meaning: "When do you go home?",
            answer: ["你", "什麼時候", "回家"]
        },
        {
            meaning: "When do you swim?",
            answer: ["你", "什麼時候", "游泳"]
        }
    ]
},


// ========================================================
// LESSON 15
// ========================================================
15: {
    grammar: [
        {
            id: "asking-time",
            name: "現在 + 幾點？",
            category: "Asking the Time",
            explanation: "Use 幾點 to ask what time it is. 現在 means 'now' and is commonly used when asking or telling the current time.",
            examples: [
                "現在幾點？",
                "現在三點。",
                "現在八點。"
            ]
        },
        {
            id: "hour",
            name: "Number + 點",
            category: "Telling the Hour",
            explanation: "Use 點 after a number to say the hour.",
            examples: [
                "一點 — one o'clock",
                "三點 — three o'clock",
                "八點 — eight o'clock",
                "十二點 — twelve o'clock"
            ]
        },
        {
            id: "minutes",
            name: "Number + 點 + Number + 分",
            category: "Telling the Minutes",
            explanation: "Use 分 after a number to say the exact minutes on a clock. When telling the exact time, use 分 rather than 分鐘.",
            examples: [
                "三點五分 — 3:05",
                "三點十分 — 3:10",
                "八點二十分 — 8:20",
                "九點四十五分 — 9:45"
            ]
        },
        {
            id: "half-hour",
            name: "Number + 點 + 半",
            category: "Half Past",
            explanation: "半 means 'half'. 點 + 半 means half past the hour.",
            examples: [
                "三點半 — 3:30",
                "六點半 — 6:30",
                "九點半 — 9:30"
            ]
        },
        {
            id: "quarter-hour",
            name: "Number + 點 + 一刻 / 三刻",
            category: "Quarter Hours",
            explanation: "一刻 means 15 minutes and 三刻 means 45 minutes. These expressions are commonly heard in spoken Mandarin, especially in Taiwan.",
            examples: [
                "三點一刻 — 3:15",
                "八點一刻 — 8:15",
                "三點三刻 — 3:45",
                "八點三刻 — 8:45"
            ]
        },
        {
            id: "seconds",
            name: "Number + 秒",
            category: "Seconds",
            explanation: "秒 means 'second'. It is used when you need to talk about seconds specifically.",
            examples: [
                "五秒 — five seconds",
                "十秒 — ten seconds",
                "三十秒 — thirty seconds"
            ]
        },
        {
            id: "full-time",
            name: "Number + 點 + Number + 分 + Number + 秒",
            category: "Exact Time",
            explanation: "You can combine 點, 分, and 秒 to give an exact time including seconds.",
            examples: [
                "三點五分十秒 — 3:05:10",
                "八點二十分三十秒 — 8:20:30"
            ]
        },
        {
            id: "time-of-day",
            name: "Time of Day + Time",
            category: "Time of Day",
            explanation: "Words describing parts of the day usually come before the clock time.",
            examples: [
                "早上八點 — 8 a.m.",
                "上午十點 — 10 a.m.",
                "中午十二點 — 12 p.m.",
                "下午三點 — 3 p.m.",
                "傍晚六點 — 6 p.m.",
                "晚上八點 — 8 p.m.",
                "凌晨一點 — 1 a.m."
            ]
        },
        {
            id: "asking-time-event",
            name: "Subject + 什麼時候 + Verb",
            category: "Asking When",
            explanation: "什麼時候 means 'when'. You can ask when an action happens and answer with a specific time.",
            examples: [
                "你什麼時候上課？",
                "你什麼時候吃飯？",
                "你什麼時候回家？",
                "我早上八點上課。",
                "我中午十二點吃飯。",
                "我晚上九點回家。"
            ]
        }
    ],

    vocabulary: [
        {
            hanzi: "現在",
            pinyin: "xiànzài",
            meaning: "now",
            category: "Time"
        },
        {
            hanzi: "時間",
            pinyin: "shíjiān",
            meaning: "time",
            category: "Time"
        },
        {
            hanzi: "點",
            pinyin: "diǎn",
            meaning: "o'clock; hour",
            category: "Time"
        },
        {
            hanzi: "分",
            pinyin: "fēn",
            meaning: "minute",
            category: "Time"
        },
        {
            hanzi: "半",
            pinyin: "bàn",
            meaning: "half",
            category: "Time"
        },
        {
            hanzi: "刻",
            pinyin: "kè",
            meaning: "quarter of an hour; 15 minutes",
            category: "Time"
        },
        {
            hanzi: "一刻",
            pinyin: "yí kè",
            meaning: "a quarter of an hour; 15 minutes",
            category: "Time"
        },
        {
            hanzi: "三刻",
            pinyin: "sān kè",
            meaning: "three quarters of an hour; 45 minutes",
            category: "Time"
        },
        {
            hanzi: "秒",
            pinyin: "miǎo",
            meaning: "second",
            category: "Time"
        },
        {
            hanzi: "清晨",
            pinyin: "qīngchén",
            meaning: "early morning; dawn",
            category: "Time"
        },
        {
            hanzi: "早晨",
            pinyin: "zǎochén",
            meaning: "early morning",
            category: "Time"
        },
        {
            hanzi: "早上",
            pinyin: "zǎoshang",
            meaning: "morning",
            category: "Time"
        },
        {
            hanzi: "上午",
            pinyin: "shàngwǔ",
            meaning: "morning; a.m.",
            category: "Time"
        },
        {
            hanzi: "中午",
            pinyin: "zhōngwǔ",
            meaning: "noon",
            category: "Time"
        },
        {
            hanzi: "下午",
            pinyin: "xiàwǔ",
            meaning: "afternoon; p.m.",
            category: "Time"
        },
        {
            hanzi: "傍晚",
            pinyin: "bàngwǎn",
            meaning: "early evening; around sunset",
            category: "Time"
        },
        {
            hanzi: "晚上",
            pinyin: "wǎnshang",
            meaning: "evening; night",
            category: "Time"
        },
        {
            hanzi: "夜裡",
            pinyin: "yèlǐ",
            meaning: "at night; during the night",
            category: "Time"
        },
        {
            hanzi: "凌晨",
            pinyin: "língchén",
            meaning: "early morning; after midnight",
            category: "Time"
        }
    ],

    reviewQuestions: [
        {
            meaning: "What time is it now?",
            answer: ["現在", "幾", "點"]
        },
        {
            meaning: "It is three o'clock now.",
            answer: ["現在", "三", "點"]
        },
        {
            meaning: "It is 3:05 now.",
            answer: ["現在", "三", "點", "五", "分"]
        },
        {
            meaning: "It is 8:20 now.",
            answer: ["現在", "八", "點", "二", "十", "分"]
        },
        {
            meaning: "It is 3:30 now.",
            answer: ["現在", "三", "點", "半"]
        },
        {
            meaning: "It is 3:15 now.",
            answer: ["現在", "三", "點", "一刻"]
        },
        {
            meaning: "It is 3:45 now.",
            answer: ["現在", "三", "點", "三刻"]
        },
        {
            meaning: "It is 10 a.m.",
            answer: ["上午", "十", "點"]
        },
        {
            meaning: "It is 3 p.m.",
            answer: ["下午", "三", "點"]
        },
        {
            meaning: "It is 8 p.m.",
            answer: ["晚上", "八", "點"]
        },
        {
            meaning: "I have class at 8 in the morning.",
            answer: ["我", "早上", "八", "點", "上課"]
        },
        {
            meaning: "I eat lunch at 12 noon.",
            answer: ["我", "中午", "十", "二", "點", "吃飯"]
        }
    ]
},

// ========================================================
// LESSON 16
// ========================================================
16: {
    grammar: [
        {
            id: "past-time-expressions",
            name: "去年 — 今年 — 明年",
            category: "Time Expressions",
            explanation: "去年 means last year, 今年 means this year, and 明年 means next year. These expressions tell us when something happens in relation to the current year.",
            examples: [
                "去年我去中國。 — Last year I went to China.",
                "今年我去韓國。 — This year I went to Korea.",
                "明年我去泰國。 — Next year I will go to Thailand."
            ]
        },
        {
            id: "last-next-week",
            name: "上個星期 — 下個星期",
            category: "Time Expressions",
            explanation: "上個星期 means last week and 下個星期 means next week. 上 means up/previous and 下 means down/following.",
            examples: [
                "上個星期我準備課程。 — Last week I prepared for the course.",
                "下個星期我要練習。 — Next week I need to practice."
            ]
        },
        {
            id: "le-completed-action",
            name: "了 — Completed Action",
            category: "Completed Actions",
            explanation: "了 is commonly used after a verb to show that an action has been completed or that a situation has changed. It is not simply an English past-tense marker.",
            examples: [
                "我去了中國。 — I went to China.",
                "我們吃了很多東西。 — We ate a lot of things."
            ]
        },
        {
            id: "already-le",
            name: "已經……了 — Already",
            category: "Completed Actions",
            explanation: "已經 means already. The structure 已經 + Verb + 了 emphasizes that an action or change has already happened.",
            examples: [
                "我已經回台灣了。 — I have already returned to Taiwan.",
                "我已經開始上課了。 — I have already started attending classes."
            ]
        },
        {
            id: "time-expression-le",
            name: "Time Expressions + 了",
            category: "Time Expressions",
            explanation: "When a sentence contains a clear time expression such as 去年, 今年, or 明年, Mandarin does not need an English-style past or future tense marker. 了 can still be used when the speaker wants to emphasize completion or a change of situation.",
            examples: [
                "去年我去中國。 — Last year I went to China.",
                "去年我去了中國。 — Last year I went to China. (completion emphasized)"
            ]
        },
        {
            id: "mandarin-no-tense",
            name: "Time + Verb: No English-Style Tense Needed",
            category: "Time Expressions",
            explanation: "Mandarin verbs do not change according to past, present, or future tense. Time expressions such as 去年, 今年, 明年, 上個星期, and 下個星期 establish when the action happens.",
            examples: [
                "去年我去北京。 — Last year I went to Beijing.",
                "今年我去韓國。 — This year I went to Korea.",
                "明年我去泰國。 — Next year I will go to Thailand."
            ]
        }
    ],

    vocabulary: [
        {
            hanzi: "去年",
            pinyin: "qùnián",
            meaning: "last year",
            category: "Time"
        },
        {
            hanzi: "暑假",
            pinyin: "shǔjià",
            meaning: "summer vacation",
            category: "Time"
        },
        {
            hanzi: "去",
            pinyin: "qù",
            meaning: "to go",
            category: "Actions"
        },
        {
            hanzi: "中國",
            pinyin: "Zhōngguó",
            meaning: "China",
            category: "Places"
        },
        {
            hanzi: "了",
            pinyin: "le",
            meaning: "completed action / change",
            category: "Grammar"
        },
        {
            hanzi: "北京",
            pinyin: "Běijīng",
            meaning: "Beijing",
            category: "Places"
        },
        {
            hanzi: "上海",
            pinyin: "Shànghǎi",
            meaning: "Shanghai",
            category: "Places"
        },
        {
            hanzi: "好吃",
            pinyin: "hǎochī",
            meaning: "delicious",
            category: "Descriptions"
        },
        {
            hanzi: "漂亮",
            pinyin: "piàoliang",
            meaning: "beautiful",
            category: "Descriptions"
        },
        {
            hanzi: "地方",
            pinyin: "dìfāng",
            meaning: "place",
            category: "Places"
        },
        {
            hanzi: "每天",
            pinyin: "měitiān",
            meaning: "every day",
            category: "Time"
        },
        {
            hanzi: "開心",
            pinyin: "kāixīn",
            meaning: "happy",
            category: "Feelings"
        },
        {
            hanzi: "回",
            pinyin: "huí",
            meaning: "to return",
            category: "Actions"
        },
        {
            hanzi: "到",
            pinyin: "dào",
            meaning: "to arrive / reach",
            category: "Actions"
        },
        {
            hanzi: "以後",
            pinyin: "yǐhòu",
            meaning: "after / afterwards",
            category: "Time"
        },
        {
            hanzi: "已經",
            pinyin: "yǐjīng",
            meaning: "already",
            category: "Time"
        },
        {
            hanzi: "開始",
            pinyin: "kāishǐ",
            meaning: "to start / begin",
            category: "Actions"
        },
        {
            hanzi: "今年",
            pinyin: "jīnnián",
            meaning: "this year",
            category: "Time"
        },
        {
            hanzi: "又",
            pinyin: "yòu",
            meaning: "again",
            category: "Adverbs"
        },
        {
            hanzi: "韓國",
            pinyin: "Hánguó",
            meaning: "Korea",
            category: "Places"
        },
        {
            hanzi: "最",
            pinyin: "zuì",
            meaning: "most",
            category: "Adverbs"
        },
        {
            hanzi: "餐廳",
            pinyin: "cāntīng",
            meaning: "restaurant",
            category: "Places"
        },
        {
            hanzi: "那裡",
            pinyin: "nàlǐ",
            meaning: "there",
            category: "Places"
        },
        {
            hanzi: "食物",
            pinyin: "shíwù",
            meaning: "food",
            category: "Food"
        },
        {
            hanzi: "準備",
            pinyin: "zhǔnbèi",
            meaning: "to prepare",
            category: "Actions"
        },
        {
            hanzi: "課程",
            pinyin: "kèchéng",
            meaning: "course",
            category: "School"
        },
        {
            hanzi: "雖然",
            pinyin: "suīrán",
            meaning: "although",
            category: "Connectors"
        },
        {
            hanzi: "想念",
            pinyin: "xiǎngniàn",
            meaning: "to miss",
            category: "Feelings"
        },
        {
            hanzi: "明年",
            pinyin: "míngnián",
            meaning: "next year",
            category: "Time"
        },
        {
            hanzi: "泰國",
            pinyin: "Tàiguó",
            meaning: "Thailand",
            category: "Places"
        },
        {
            hanzi: "聽說",
            pinyin: "tīngshuō",
            meaning: "I heard / reportedly",
            category: "Expressions"
        },
        {
            hanzi: "期待",
            pinyin: "qīdài",
            meaning: "to look forward to",
            category: "Feelings"
        },
        {
            hanzi: "次",
            pinyin: "cì",
            meaning: "time / occurrence",
            category: "Measure Words"
        },
        {
            hanzi: "旅行",
            pinyin: "lǚxíng",
            meaning: "travel / trip",
            category: "Activities"
        },
        {
            hanzi: "這裡",
            pinyin: "zhèlǐ",
            meaning: "here",
            category: "Places"
        },
        {
            hanzi: "要",
            pinyin: "yào",
            meaning: "to want / need",
            category: "Actions"
        },
        {
            hanzi: "上",
            pinyin: "shàng",
            meaning: "up / previous",
            category: "Time"
        },
        {
            hanzi: "下",
            pinyin: "xià",
            meaning: "down / following",
            category: "Time"
        },
        {
            hanzi: "上個星期",
            pinyin: "shàng ge xīngqí",
            meaning: "last week",
            category: "Time"
        },
        {
            hanzi: "下個星期",
            pinyin: "xià ge xīngqí",
            meaning: "next week",
            category: "Time"
        }
    ],

    reviewQuestions: [
        {
            meaning: "Last year I went to China.",
            answer: ["去年", "我", "去", "中國"]
        },
        {
            meaning: "This year I went to Korea.",
            answer: ["今年", "我", "去", "韓國"]
        },
        {
            meaning: "Next year I will go to Thailand.",
            answer: ["明年", "我", "去", "泰國"]
        },
        {
            meaning: "I went to Beijing.",
            answer: ["我", "去", "了", "北京"]
        },
        {
            meaning: "We ate delicious food.",
            answer: ["我們", "吃", "了", "好吃", "的", "東西"]
        },
        {
            meaning: "I have already returned to Taiwan.",
            answer: ["我", "已經", "回", "台灣", "了"]
        },
        {
            meaning: "I have already started the course.",
            answer: ["我", "已經", "開始", "課程", "了"]
        },
        {
            meaning: "Beijing has many beautiful places.",
            answer: ["北京", "有", "很多", "漂亮", "的", "地方"]
        },
        {
            meaning: "I miss China and Korea.",
            answer: ["我", "很", "想念", "中國", "和", "韓國"]
        },
        {
            meaning: "I heard that Thailand has many beautiful places.",
            answer: ["我", "聽說", "泰國", "有", "很多", "漂亮", "的", "地方"]
        },
        {
            meaning: "I am looking forward to this trip.",
            answer: ["我", "很", "期待", "這", "次", "旅行"]
        },
        {
            meaning: "Last week I prepared for the course.",
            answer: ["上個星期", "我", "準備", "課程"]
        },
        {
            meaning: "Next week I need to practice.",
            answer: ["下個星期", "我", "要", "練習"]
        }
    ]
},

};
// ============================================================
// MAKE DATABASE AVAILABLE TO HTML
// ============================================================

window.allLessonsData = allLessonsData;
