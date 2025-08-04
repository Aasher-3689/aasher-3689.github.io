// loader while loading assets (making display none when assets loaded)

const loader = document.getElementById("loader");
window.addEventListener("load", () => {
loader.style.display = "none";
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

// justifying content center when stick at top for "category bar"

const categoryBar = document.querySelector(".main-top");
window.addEventListener("scroll", () => {
    const topHeightRemains = categoryBar.getBoundingClientRect();
    if (topHeightRemains.top <= 60) {
        categoryBar.classList.add("main-top-center");
    } else {
        categoryBar.classList.remove("main-top-center");
    }
})

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

// replacing category bar with search input on searck button
// and replacing search input back with category bar on category button

const currentCategoryBarHtml = categoryBar.innerHTML;

const updatedCategoyBarHtml = `<input class="in-search-articles bt-c" type="search" name="in-search-articles"  placeholder="Search articles" spellcheck="false" required>
                               <button class="in-search-articles-bt" title="Search Input"><img src="./assets/images/search-icon-two.svg" alt="search"></button>
                               <button class="back-to-category-bt" title="Back to Category Bar" onclick="backToCategoryBar()"><img src="./assets/images/category-icon.svg" alt="back-to-category"></button>`;

function changeCategoryBar() {
    categoryBar.innerHTML = updatedCategoyBarHtml;
    categoryBar.style.justifyContent = "center";
    categoryBar.style.columnGap = "16px";
    document.querySelector(".in-search-articles").focus();
}

function backToCategoryBar() {
    categoryBar.innerHTML = currentCategoryBarHtml;
    categoryBar.style.justifyContent = "";
    categoryBar.style.columnGap = "";
}