const signupForm = document.querySelector('#signup-form');
const formNote = document.querySelector('#form-note');

signupForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = new FormData(signupForm).get('email');
  if (!email) return;
  signupForm.innerHTML = '<span class="success-message">You’re on the list — check your inbox shortly ✦</span>';
  formNote.textContent = 'Your 30-Day Starter Kit is on its way.';
});

const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.desktop-nav');

menuButton?.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  nav?.classList.toggle('nav-open', !isOpen);
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', () => {
    if (nav?.classList.contains('nav-open')) {
      nav.classList.remove('nav-open');
      menuButton?.setAttribute('aria-expanded', 'false');
    }
  });
});
