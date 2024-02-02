"use strict";
/*? ======= burger menu ======= */
const burger = document.querySelector(".js-header__burger"),
  menu = document.querySelector(".js-header__menu");

burger.addEventListener("click", () => {
  burger.classList.toggle('js-burger--active'),
    menu.classList.toggle('js-menu--active');
});

