/* =====================================================
   BOBA BREAK STUDY
   GLOBAL XP & PROGRESS SYSTEM
===================================================== */

const BobaProgress = {

    /* ===============================
       GET TOTAL XP
    =============================== */

    getXP() {
        return Number(localStorage.getItem("bobaXP")) || 0;
    },


    /* ===============================
       ADD XP
       rewardId = unique ID for reward
    =============================== */

    addXP(amount, rewardId) {

        let totalXP = this.getXP();

        /*
           Prevent duplicate rewards
        */

        if (rewardId) {

            const rewards =
                JSON.parse(
                    localStorage.getItem("bobaRewards")
                ) || {};

            if (rewards[rewardId]) {
                return false;
            }

            rewards[rewardId] = true;

            localStorage.setItem(
                "bobaRewards",
                JSON.stringify(rewards)
            );
        }

        totalXP += amount;

        localStorage.setItem(
            "bobaXP",
            totalXP
        );

        return true;
    },


    /* ===============================
       CHECK WHETHER REWARD WAS CLAIMED
    =============================== */

    hasReward(rewardId) {

        const rewards =
            JSON.parse(
                localStorage.getItem("bobaRewards")
            ) || {};

        return !!rewards[rewardId];
    },


    /* ===============================
       COMPLETED LESSONS
    =============================== */

    getCompletedLessons() {

        return JSON.parse(
            localStorage.getItem("completedLessons")
        ) || [];

    },


    completeLesson(lessonId) {

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


    /* ===============================
       RESET ALL PROGRESS
       Optional
    =============================== */

    resetProgress() {

        localStorage.removeItem("bobaXP");
        localStorage.removeItem("bobaRewards");
        localStorage.removeItem("completedLessons");

    }

};