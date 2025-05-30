var year = document.getElementById("year");
var currentYear = new Date().getFullYear();
year.textContent = currentYear

const btnMobileNav = document.querySelector(".btn-mobile-nav");
const header = document.querySelector("header");
btnMobileNav.addEventListener("click", () => {
    header.classList.toggle("open-nav");
});

// SCROLLING ANIMATION 

const allLinks = document.querySelectorAll('a:link');

allLinks.forEach((link) => {
    link.addEventListener("click", (e) => {

        e.preventDefault();
        const href = link.getAttribute("href");

        if (href === "#") {
            window.scroll({
                top: 0,
                behavior: "smooth",
            });
        } else if (href !== "#" && href.startsWith("#")) {
            const section = document.querySelector(href);
            section.scrollIntoView({ behavior: "smooth" });
        }

        if (link.classList.contains("main-nav-link")) header.classList.remove("open-nav");

    });
});

// STICKY NAVIGATION BAR

const sectionHero = document.querySelector(".section-hero");
const observer = new IntersectionObserver((entries) => {
    const entry = entries[0];
    const body = document.querySelector("body");
    if (entry.isIntersecting === false) {
        body.classList.add("sticky");
    } else {
        body.classList.remove("sticky");
    }
}, { root: null, threshold: 0, rootMargin: "-80px" });

observer.observe(sectionHero);
