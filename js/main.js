
// for clicking the hambargur menu
const toggleMenu = document.querySelector('.toggle-menu');
const menu = document.querySelector('header .nav-links');

toggleMenu.addEventListener('click', (e) => {
    e.stopPropagation(); 
    menu.classList.toggle('show-menu');
});

document.querySelectorAll('header .nav-links li a').forEach(link => {
    link.addEventListener('click', () => menu.classList.remove('show-menu'));
});

document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !toggleMenu.contains(e.target)) {
        menu.classList.remove('show-menu');
    }
});
