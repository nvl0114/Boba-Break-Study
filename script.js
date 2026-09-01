document.addEventListener("DOMContentLoaded", () => {

    // ==============================
    // LOAD SIDEBAR
    // ==============================

    fetch("sidebar.html")
        .then(response => {
            if (!response.ok) {
                return fetch("../sidebar.html");
            }
            return response;
        })
        .then(response => response.text())
        .then(data => {

            document.getElementById("sidebar-container").innerHTML = data;

            // ==============================
            // CHECK SUBFOLDER
            // ==============================

            const path = window.location.pathname;

            const isInSubfolder =
                path.includes("/content/") ||
                path.includes("/lifetw/") ||
                path.includes("/zhuyin/");

            if (isInSubfolder) {

                // Fix logo path
                const logoImg =
                    document.querySelector("#sidebar-container .logo-img");

                if (logoImg) {
                    logoImg.src = "../logo.png";
                }

                // Fix sidebar links
                const sidebarLinks =
                    document.querySelectorAll("#sidebar-container a");

                sidebarLinks.forEach(link => {

                    const href = link.getAttribute("href");

                    if (
                        href &&
                        !href.startsWith("http") &&
                        href !== "#"
                    ) {
                        link.setAttribute(
                            "href",
                            "../" + href
                        );
                    }
                });
            }
        })
        .catch(error => {
            console.error("Sidebar failed to load:", error);
        });


    // ==============================
    // COURSES DROPDOWN
    // ==============================

    document.addEventListener("click", (e) => {

        const coursesToggle =
            e.target.closest("#coursesToggle");

        if (coursesToggle) {

            e.preventDefault();

            const courseSubmenu =
                document.getElementById("courseSubmenu");

            if (courseSubmenu) {
                courseSubmenu.classList.toggle("show");
            }
        }
    });

});