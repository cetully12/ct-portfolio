const mainMenu = document.querySelector('.main-menu');
const closeMenu = document.querySelector('.close-menu');
const openMenu = document.querySelector('.open-menu');
// const menuItem = document.querySelectorAll('.menu-item');

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

function show() {
  mainMenu.style.display = 'flex';
  mainMenu.style.top = '0';
}

function close() {
  mainMenu.style.top = '-100%';
}

document.querySelectorAll('.menu-item').forEach(n => n.addEventListener('click', () => {
  mainMenu.style.top = '-100%';
}))