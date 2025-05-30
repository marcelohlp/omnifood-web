var year = document.getElementById("year");
var currentYear = new Date().getFullYear();
year.textContent = currentYear

const btnMobileNav = document.querySelector(".btn-mobile-nav");
const header = document.querySelector("header");

btnMobileNav.addEventListener("click", () => {
    header.classList.toggle("open-nav");
});