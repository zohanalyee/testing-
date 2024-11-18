document.addEventListener("DOMContentLoaded", function () {
    // Initialize elements
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");
    const mainContent = document.querySelector("main");
    const themeToggle = document.getElementById("theme-toggle");

    // Setup Event Listeners
    function setupEventListeners() {
        hamburger.addEventListener("click", toggleMenu);
        themeToggle.addEventListener("change", toggleTheme);

        // Apply stored theme
        applyStoredTheme();
    }

    // Hamburger Menu Toggle
    function toggleMenu() {
        navMenu.classList.toggle("active");
        hamburger.classList.toggle("active");
        mainContent.classList.toggle("active");
    }

    // Theme Toggle
    function toggleTheme() {
        const isDark = themeToggle.checked;
        document.body.classList.toggle("dark-mode", isDark);
        localStorage.setItem("darkMode", isDark ? "enabled" : "disabled");
    }

    // Apply stored theme from LocalStorage
    function applyStoredTheme() {
        if (localStorage.getItem("darkMode") === "enabled") {
            document.body.classList.add("dark-mode");
            themeToggle.checked = true;
        }
    }

    setupEventListeners();
});
