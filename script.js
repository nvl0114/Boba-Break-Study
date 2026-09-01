document.addEventListener("DOMContentLoaded", () => {
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

        // 1. Penyesuaian path logo & link jika berada di dalam folder "content" atau "lifetw"
        const isInSubfolder = window.location.pathname.includes('/content/') ||
            window.location.pathname.includes('/lifetw/') ||
            window.location.pathname.includes('/zhuyin/');

        if (isInSubfolder) {
            const logoImg = document.querySelector("#sidebar-container .logo-img");
            if (logoImg) logoImg.src = "../logo.png";

            const sidebarLinks = document.querySelectorAll("#sidebar-container a");
            sidebarLinks.forEach(link => {
                const href = link.getAttribute("href");
                if (href && !href.startsWith("http") && href !== "#") {
                    link.setAttribute("href", "../" + href);
                }
            });
        }
    });

    // 2. Dropdown Courses Sidebar (Menggunakan Event Delegation agar aman untuk sidebar dinamis)
    document.addEventListener("click", (e) => {
        const coursesToggle = e.target.closest("#coursesToggle");
        
        if (coursesToggle) {
            e.preventDefault();
            const courseSubmenu = document.getElementById("courseSubmenu");
            if (courseSubmenu) {
                courseSubmenu.classList.toggle("show");
            }
        }
    });
});
