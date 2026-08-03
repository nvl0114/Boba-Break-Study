document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("searchInput");
    const cards = document.querySelectorAll(".card");

    searchInput.addEventListener("input", () => {
        const keyword = searchInput.value.toLowerCase();

        cards.forEach(card => {
            const title = card.querySelector("h3").textContent.toLowerCase();

            if (title.includes(keyword)) {
                card.style.display = "flex";
            } else {
                card.style.display = "none";
            }
        });
    });
});
