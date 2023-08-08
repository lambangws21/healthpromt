// Toggle class active

const navbarNav = document.querySelector(".navbar-nav")


// Ketika Halaman di klik
document.querySelector("#humberger-menu").
    onclick = () => {
        navbarNav.classList.toggle("active")
    }

// Klik di luar sidebar untuk menghilangkan nav

const hamburger = document.querySelector("#humberger-menu");

document.addEventListener("click", function (e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target))
    {
        navbarNav.classList.remove("active");
    }
})