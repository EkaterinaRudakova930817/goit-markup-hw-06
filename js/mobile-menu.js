const mobileMenu = document.querySelector(".mobile-menu");
const menuOpenBtn = document.querySelector(".menu-open-btn");
const menuCloseBtn = document.querySelector(".mobile-menu-close");

menuOpenBtn.addEventListener("click", () => {
  mobileMenu.classList.add("is-open");
});

menuCloseBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("is-open");
});

