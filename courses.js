const searchInput = document.getElementById("searchInput");
const cards = document.querySelectorAll(".card");

searchInput.addEventListener("keyup", function () {
    const keyword = this.value.toLowerCase();

    cards.forEach(card => {
        const text = card.textContent.toLowerCase();

        if (text.includes(keyword)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
    });
});
