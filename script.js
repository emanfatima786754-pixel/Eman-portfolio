const menuButton = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

// Open and close the mobile navigation menu
menuButton.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("open");

    menuButton.setAttribute("aria-expanded", isOpen);
});

// Close the menu after clicking a navigation link
document.querySelectorAll("#nav-links a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
    });
});

// Automatically display the current year
document.getElementById("year").textContent =
    new Date().getFullYear();