// loader while loading assets (making display none when assets loaded)

const loader = document.getElementById("loader");
window.addEventListener("load", () => {
loader.style.display = "none";
});

// fixed header bg change on scroll

const headerMain = document.querySelector(".header-main-bg");
window.addEventListener("scroll", () => {
    if (scrollY >= 60) {
        headerMain.classList.add("header-main-bg-2");
    } else {
        headerMain.classList.remove("header-main-bg-2");
    }
});

// scroll back to top

const backToTop = document.querySelector(".back-to-top");
backToTop.addEventListener("click", () => {
    window.scrollTo({top:0, behavior:"smooth"});
});

const header = document.querySelector("header")
window.addEventListener("scroll", () => {
    if (scrollY > header.offsetHeight) {
        backToTop.style.display = "flex";
    } else {
        backToTop.style.display = "none";
    }
});

// showing vertical nav on menu-button

const menuButton = document.querySelector(".menu-button");
const navBar = document.querySelector("nav");
menuButton.addEventListener("click", () => {
    navBar.classList.toggle("nav-b");
    if (navBar.classList.contains("nav-b")) {
        menuButton.style.transform = "rotate(180deg) translateY(4px)";
    } else {
        menuButton.style.transform = "";
    }
});