'use strict';
// LOADER
document.body.setAttribute('class', 'u-noscroll');
const loader = document.querySelector('.c-loader');
window.onload = function () {
  setTimeout(() => {
    loader.style.opacity = '0';
    document.body.className = document.body.className.replace('u-noscroll', '');
    setTimeout(() => {
      loader.style.display = 'none';
    }, 200);
  }, 300);
};

//SEARCHBOX $ MENU
const searchIcon = document.querySelector('.js-search-icon');
const searchBox = document.querySelector('.js-search-box');
const menuIcon = document.querySelector('.c-hamburger');
const backdrop = document.querySelector('.c-backdrop');
const mobileNav = document.querySelector('.js-menu');

searchIcon.addEventListener('click', () => {
  searchBox.classList.toggle('active');
});

window.addEventListener('scroll', () => {
  searchBox.classList.remove('active');
  mobileNav.classList.remove('is-active');
  menuIcon.classList.remove('is-active');
});

menuIcon.addEventListener('click', () => {
  mobileNav.classList.toggle('is-active');
  menuIcon.classList.toggle('is-active');
});

// CONTACT POP_UP
const contactModal = document.querySelector('.js-ctc-modal');
const ctcBtn = document.querySelector('.js-ctc-btn');
const closeBtn = contactModal.querySelector('.js-close-modal');
const mediaQuery = window.matchMedia('(min-width: 1024px)');

const toggleContactModal = () => {
  contactModal.classList.toggle('is-open');
  backdrop.classList.toggle('visible');
}

ctcBtn.addEventListener('click', () => {
  toggleContactModal();
  if (mediaQuery.matches) {
    document.body.setAttribute('class', 'u-noscroll');
  }
});

[closeBtn,backdrop].forEach(cls => cls.addEventListener('click', () => {
  document.body.className = document.body.className.replace('u-noscroll', '');
  const inputs = contactModal.querySelectorAll('input');
  inputs.forEach((input) => (input.value = ''));
  toggleContactModal();
}));