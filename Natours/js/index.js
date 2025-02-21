// Navigation toggle

const navBtn = document.querySelector('.navigation__button'),
  navElement = document.getElementById('navigation');

navBtn.addEventListener('click', () => {
  navElement.classList.toggle('open');
});
