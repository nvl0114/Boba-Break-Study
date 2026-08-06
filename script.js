fetch("sidebar.html") // Jika di halaman utama (root)
.then(response => {
    // Jika fetch gagal (karena kita di dalam folder content), coba naik satu tingkat
    if (!response.ok) {
        return fetch("../sidebar.html");
    }
    return response;
})
.then(response => response.text())
.then(data => {
    document.getElementById("sidebar-container").innerHTML = data;

    // Cek apakah kita sedang berada di dalam folder "content"
    const isInContentFolder = window.location.pathname.includes('/content/');

    if (isInContentFolder) {
        // 1. Perbaiki path logo agar naik satu tingkat
        const logoImg = document.querySelector("#sidebar-container .logo-img");
        if (logoImg) logoImg.src = "../logo.png";

        // 2. Perbaiki link menu di sidebar agar mengarah keluar folder content
        const sidebarLinks = document.querySelectorAll("#sidebar-container a");
        sidebarLinks.forEach(link => {
            const href = link.getAttribute("href");
            // Jika link bukan URL eksternal (http) dan bukan '#'
            if (href && !href.startsWith("http") && href !== "#") {
                link.setAttribute("href", "../" + href);
            }
        });
    }
});
