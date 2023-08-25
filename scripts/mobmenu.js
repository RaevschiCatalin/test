const mobileMenuButton = document.getElementById("mobile_menu_button");
const navMenu = document.querySelector("nav ul");

mobileMenuButton.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});