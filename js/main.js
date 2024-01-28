/*=============== SEARCH ===============*/
const searchButtonEl = document.getElementById("search-button"),
  searchCloseEl = document.getElementById("search-close"),
  searchContentEl = document.getElementById("search-content");

/*==== SHOW MENU =====*/
if (searchButtonEl) {
  searchButtonEl.addEventListener("click", () => {
    searchContentEl.classList.add("show-search");
  });
}

/*==== HIDE MENU =====*/
if (searchCloseEl) {
  searchCloseEl.addEventListener("click", () => {
    searchContentEl.classList.remove("show-search");
  });
}

/*=============== LOGIN ===============*/

const loginButtonEl = document.getElementById("login-button"),
  loginCloseEl = document.getElementById("login-close"),
  loginContentEl = document.getElementById("login-content");

/*==== SHOW MENU =====*/
if (loginButtonEl) {
  loginButtonEl.addEventListener("click", () => {
    loginContentEl.classList.add("show-login");
  });
}

/*==== HIDE MENU =====*/
if (loginCloseEl) {
  loginCloseEl.addEventListener("click", () => {
    loginContentEl.classList.remove("show-login");
  });
}

/*=============== ADD SHADOW HEADER ===============*/

/*=============== HOME SWIPER ===============*/

/*=============== FEATURED SWIPER ===============*/

/*=============== NEW SWIPER ===============*/

/*=============== TESTIMONIAL SWIPER ===============*/

/*=============== SHOW SCROLL UP ===============*/

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== DARK LIGHT THEME ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/
