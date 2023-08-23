const mobileMenuButton = document.getElementById("mobile_menu_button");
const navMenu = document.querySelector("nav ul");
const navIcons = document.querySelector("nav .mobile_nav");
mobileMenuButton.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    navIcons.classList.toggle("active");
});
