document.body.setAttribute('class', 'noscroll');
const loader = document.querySelector('.loader');
window.onload = function () {
  setTimeout(() => {
    loader.style.opacity = '0';
    document.body.className = document.body.className.replace(
      'noscroll',
      ''
    );
    setTimeout(() => {
      loader.style.display = 'none';
    }, 200)
  }, 300);
};

const searchIcon = document.getElementById('search-icon');
const searchBox = searchIcon.nextElementSibling;
const menuIcon = document.getElementById('menu-icon');
const backdrop = document.querySelector('.backdrop');
const aside = document.querySelector('aside');

searchIcon.addEventListener('click', () => {
  searchBox.classList.toggle('active');
});

window.addEventListener('scroll', () => {
  searchBox.classList.remove('active');
});

menuIcon.addEventListener('click', () => {
  document.querySelector('nav ul').classList.toggle('active');
});
