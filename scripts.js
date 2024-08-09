document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");
    const mainContent = document.querySelector("main");
    const themeToggle = document.getElementById("theme-toggle");

    // Check if dark mode is already enabled and apply it
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        themeToggle.checked = true;  // Set the toggle switch to the correct position
    }

    // Hamburger Menu Toggle
    hamburger.addEventListener("click", function() {
        navMenu.classList.toggle("active");
        hamburger.classList.toggle("active");
        mainContent.classList.toggle("active");
    });

    // Theme Toggle
    themeToggle.addEventListener("change", function() {
        if (themeToggle.checked) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('darkMode', 'enabled');  // Save the setting
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('darkMode', 'disabled');  // Save the setting
        }
    });
});
