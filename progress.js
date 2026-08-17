/* =====================================================
   BOBA BREAK STUDY
   GLOBAL XP & PROGRESS SYSTEM
   FINAL VERSION
===================================================== */

const BobaProgress = {

    /* =================================================
       TOTAL XP
    ================================================= */

    getXP() {

        return Number(
            localStorage.getItem("bobaXP")
        ) || 0;

    },


    /* =================================================
       LESSON XP
       Returns XP earned for a specific lesson
    ================================================= */

    getLessonXP(lessonId) {

        const lessonXP =
            JSON.parse(
                localStorage.getItem("bobaLessonXP")
            ) || {};

        return Number(
            lessonXP[lessonId]
        ) || 0;

    },


    /* =================================================
       ADD XP
       
       amount    = XP amount
       rewardId  = unique reward ID
       lessonId  = lesson ID
    ================================================= */

    addXP(amount, rewardId = null, lessonId = null) {

        amount = Number(amount) || 0;

        if (amount <= 0) {
            return false;
        }


        /* =============================================
           CHECK DUPLICATE REWARD
        ============================================= */

        const rewards =
            JSON.parse(
                localStorage.getItem("bobaRewards")
            ) || {};


        if (rewardId && rewards[rewardId]) {

            return false;

        }


        /* =============================================
           SAVE REWARD
        ============================================= */

        if (rewardId) {

            rewards[rewardId] = true;

            localStorage.setItem(
                "bobaRewards",
                JSON.stringify(rewards)
            );

        }


        /* =============================================
           ADD GLOBAL XP
           
           NO MAXIMUM
        ============================================= */

        let totalXP = this.getXP();

        totalXP += amount;

        localStorage.setItem(
            "bobaXP",
            totalXP
        );


        /* =============================================
           ADD LESSON XP
        ============================================= */

        if (lessonId) {

            const lessonXP =
                JSON.parse(
                    localStorage.getItem("bobaLessonXP")
                ) || {};


            lessonXP[lessonId] =
                (Number(lessonXP[lessonId]) || 0)
                + amount;


            localStorage.setItem(
                "bobaLessonXP",
                JSON.stringify(lessonXP)
            );

        }


        return true;

    },


    /* =================================================
       CHECK REWARD
    ================================================= */

    hasReward(rewardId) {

        const rewards =
            JSON.parse(
                localStorage.getItem("bobaRewards")
            ) || {};

        return !!rewards[rewardId];

    },


    /* =================================================
       GET ALL REWARDS
    ================================================= */

    getRewards() {

        return JSON.parse(
            localStorage.getItem("bobaRewards")
        ) || {};

    },


    /* =================================================
       COMPLETED LESSONS
    ================================================= */

    getCompletedLessons() {

        return JSON.parse(
            localStorage.getItem("completedLessons")
        ) || [];

    },


    /* =================================================
       MARK LESSON AS COMPLETED
    ================================================= */

    completeLesson(lessonId) {

        if (!lessonId) {
            return false;
        }


        const lessons =
            this.getCompletedLessons();


        if (!lessons.includes(lessonId)) {

            lessons.push(lessonId);

            localStorage.setItem(
                "completedLessons",
                JSON.stringify(lessons)
            );

            return true;

        }


        return false;

    },


    /* =================================================
       CHECK LESSON COMPLETION
    ================================================= */

    isLessonCompleted(lessonId) {

        const lessons =
            this.getCompletedLessons();

        return lessons.includes(lessonId);

    },


    /* =================================================
       GET NUMBER OF COMPLETED LESSONS
    ================================================= */

    getCompletedLessonCount() {

        return this.getCompletedLessons().length;

    },


    /* =================================================
       GET ALL LESSON XP
    ================================================= */

    getAllLessonXP() {

        return JSON.parse(
            localStorage.getItem("bobaLessonXP")
        ) || {};

    },


    /* =================================================
       GET LEVEL
       
       Every 100 XP = next level
       
       0–99   = Level 1
       100–199 = Level 2
       200–299 = Level 3
       etc.
    ================================================= */

    getLevel() {

        const totalXP = this.getXP();

        return Math.floor(
            totalXP / 100
        ) + 1;

    },


    /* =================================================
       XP WITHIN CURRENT LEVEL
    ================================================= */

    getCurrentLevelXP() {

        const totalXP = this.getXP();

        return totalXP % 100;

    },


    /* =================================================
       XP NEEDED FOR NEXT LEVEL
    ================================================= */

    getXPToNextLevel() {

        return 100 - this.getCurrentLevelXP();

    },


    /* =================================================
       LEVEL PROGRESS %
    ================================================= */

    getLevelProgress() {

        return this.getCurrentLevelXP();

    },


    /* =================================================
       RESET ALL PROGRESS
    ================================================= */

    resetProgress() {

        localStorage.removeItem("bobaXP");

        localStorage.removeItem(
            "bobaLessonXP"
        );

        localStorage.removeItem(
            "bobaRewards"
        );

        localStorage.removeItem(
            "completedLessons"
        );

    }

};