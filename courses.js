document.addEventListener("DOMContentLoaded", () => {

    // Search Course
    const searchInput = document.getElementById("searchInput");
    const cards = document.querySelectorAll(".card");

    if (searchInput) {
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
    }


    // Dropdown Courses Sidebar
    const coursesToggle = document.getElementById("coursesToggle");
    const courseSubmenu = document.getElementById("courseSubmenu");

    if (coursesToggle && courseSubmenu) {
        coursesToggle.addEventListener("click", (e) => {
            e.preventDefault();

            courseSubmenu.classList.toggle("show");
        });
    }

});
