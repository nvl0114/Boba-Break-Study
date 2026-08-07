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

        // Cek apakah halaman berada di dalam subfolder (folder apa pun selain root)
        const pathSegments = window.location.split
        const pathArray = window.location.pathname.split("/").filter(Boolean);
        
        // Asumsi: Jika struktur URL GitHub Pages kamu adalah username.github.io/Boba-Break-Study/lifetw/file.html
        // Maka file di root panjang array-nya 1 (hanya nama repo). 
        // Jika ada di dalam subfolder seperti 'lifetw' atau 'content', panjangnya akan >= 2.
        const isSubfolder = pathArray.length > 1 && !window.location.pathname.endsWith("index.html");

        if (isSubfolder) {
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

    // Dropdown Courses Sidebar
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
