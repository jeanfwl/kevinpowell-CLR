const navToggle = document.querySelector('.nav__toggle');

function toggleMenu() {
  const nav = document.querySelector('.nav');
  nav.classList.toggle('nav--active');
}

navToggle.addEventListener('click', toggleMenu);
