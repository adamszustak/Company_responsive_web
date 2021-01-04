'use strict';
// LOADER
document.body.setAttribute('class', 'noscroll');
const loader = document.querySelector('.loader');
window.onload = function () {
  setTimeout(() => {
    loader.style.opacity = '0';
    document.body.className = document.body.className.replace('noscroll', '');
    setTimeout(() => {
      loader.style.display = 'none';
    }, 200);
  }, 300);
};

//SEARCHBOX $ MENU
const searchIcon = document.getElementById('search-icon');
const searchBox = searchIcon.nextElementSibling;
const menuIcon = document.querySelector('.hamburger');
const backdrop = document.querySelector('.backdrop');
const aside = document.querySelector('aside');
const mobileNav = document.querySelector('nav ul');

searchIcon.addEventListener('click', () => {
  searchBox.classList.toggle('active');
});

window.addEventListener('scroll', () => {
  searchBox.classList.remove('active');
  mobileNav.classList.remove('active');
  menuIcon.classList.remove('is-active');
});

menuIcon.addEventListener('click', () => {
  mobileNav.classList.toggle('active');
  menuIcon.classList.toggle('is-active');
});

//CONTACT POP_UP
const contactModal = document.getElementById('contact-modal');
const ctcBtn = document.querySelector('li.contact');
const closeBtn = contactModal.querySelector('.close');
const mediaQuery = window.matchMedia('(min-width: 1024px)');

const toggleContactModal = () => {
  contactModal.classList.toggle('visible');
  backdrop.classList.toggle('visible');
}

ctcBtn.addEventListener('click', () => {
  toggleContactModal();
  if (mediaQuery.matches) {
    document.body.setAttribute('class', 'noscroll');
  }
});

[closeBtn,backdrop].forEach(cls => cls.addEventListener('click', () => {
  document.body.className = document.body.className.replace('noscroll', '');
  const inputs = contactModal.querySelectorAll('input');
  inputs.forEach((input) => (input.value = ''));
  toggleContactModal();
}));