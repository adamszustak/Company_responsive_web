const searchIcon = document.getElementById('search-icon');
const searchBox = searchIcon.nextElementSibling;
const menuIcon = document.getElementById('menu-icon')
const backdrop = document.querySelector('.backdrop');
const aside = document.querySelector('aside');

searchIcon.addEventListener('click', () => {
  searchBox.classList.toggle('active');
});

window.addEventListener('scroll', () => {
  searchBox.classList.remove('active');
})

menuIcon.addEventListener('click', () => {
  document.querySelector('nav ul').classList.toggle('active');
})

// window.addEventListener('scroll', () => {
//   if (window.pageYOffset > aside.offsetTop) {
//     aside.style.position = 'sticky';
//     aside.style.top = '75px';
//   } else {
//     aside.style.position = 'static';
//   }
// })