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

/*=============== ADD SHADOW HEADER ===============*/

/*=============== HOME SWIPER ===============*/

/*=============== FEATURED SWIPER ===============*/

/*=============== NEW SWIPER ===============*/

/*=============== TESTIMONIAL SWIPER ===============*/

/*=============== SHOW SCROLL UP ===============*/

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== DARK LIGHT THEME ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/
