// Toggle class active humberger menu

const navbarNav = document.querySelector(".navbar-nav")


// Toggle active search menu
const searchForm = document.querySelector(".search-form")
const searchBox = document.querySelector("#seacrh-box")

document.querySelector("#search-button").
    onclick = (e) => {
        searchForm.classList.toggle("active");
        searchBox.focus();
        e.preventDefault();
    }
// Ketika Halaman di klik
document.querySelector("#humberger-menu").
    onclick = () => {
        navbarNav.classList.toggle("active")
    }

// Klik di luar element

const hamburger = document.querySelector("#humberger-menu");

const searchButton = document.querySelector("#search-button")

document.addEventListener("click", function (e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target))
    {
        navbarNav.classList.remove("active");
    }
});

document.addEventListener("click", function (e) {
    if (!searchForm.contains(e.target) && !searchForm.contains(e.target))
    {
        searchForm.classList.remove("active");
    }
});