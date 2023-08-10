/** @format */

// Toggle class active humberger menu

const navbarNav = document.querySelector(".navbar-nav");

// Toggle active search menu
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#seacrh-box");

// toggle active shopping cart
const shoppingCart = document.querySelector(".shopping-cart");
document.querySelector("#shopping-card-button").onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};

// tampilan searchbar
document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// shopping cart

// Ketika Halaman di klik
document.querySelector("#humberger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik di luar element

const hamburger = document.querySelector("#humberger-menu");

const sb = document.querySelector("#search-button");
const sc = document.querySelector("#shopping-card-button");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

document.addEventListener("click", function (e) {
  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
});

document.addEventListener("click", function (e) {
  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});

// modal box
const itemDetailModal = document.querySelector("#item-modal-detail");
const itemDetailButtons = document.querySelectorAll(".item-detail-button");

itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = "flex";
    e.preventDefault();
  };
});

// klik tombol close
const closeButton = document.querySelector(".modal .close-btn");
closeButton.onclick = (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
};

// klik di luar modal
window.onclick = (e) => {
  if (e.target === itemDetailModall) {
    itemDetailModal.style.display = "none";
    e.preventDefault();
  }
};
