// Navigation toggle
const navButton = document.querySelector('#nav-button');
const navBar = document.querySelector('#nav-bar');

navButton.addEventListener('click', () => {
    navButton.classList.toggle('show');
    navBar.classList.toggle('show');
});

// Theme toggle (mobile)
const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});

// Theme toggle (desktop)
const themeToggleDesktop = document.getElementById('theme-toggle-desktop');

themeToggleDesktop.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});
