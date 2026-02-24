function init3DEffect() {
    if (!window.matchMedia("(pointer: fine) and (hover: hover) and (min-width: 552px)").matches) return;

    const cards = document.querySelectorAll(".serv-card");
    if (!cards.length) return;

    cards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateX = -(y - rect.height / 2) / 14;
        const rotateY = (x - rect.width / 2) / 14;

        card.style.setProperty('--rx', `${rotateX}deg`);
        card.style.setProperty('--ry', `${rotateY}deg`);
    });

    card.addEventListener("mouseleave", () => {
        card.style.setProperty('--rx', `0deg`);
        card.style.setProperty('--ry', `0deg`);
    });
});
}

function initNavbar() {
    const toggleMenu = document.querySelector('.toggle-menu');
    const menu = document.querySelector('header .nav-links');

    if (!toggleMenu || !menu) return;

    toggleMenu.addEventListener('click', (e) => {
        e.stopPropagation();
        menu.classList.toggle('show-menu');
    });

    menu.querySelectorAll('li a').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('show-menu');
        });
    });

    document.addEventListener('click', (e) => {
        if (!menu.contains(e.target) && !toggleMenu.contains(e.target)) {
            menu.classList.remove('show-menu');
        }
    });
}
function hoveredNav(){
    const headerNav = document.querySelector("header .nav-links");
    const navContainer = document.querySelector("header .container");

    if (!headerNav || !navContainer) return;
    
    headerNav.addEventListener("mouseover", () => {
        navContainer.classList.add("active-nav");
    });
    navContainer.addEventListener("mouseover", () => {
        navContainer.classList.add("active-nav");
    });
    headerNav.addEventListener("mouseleave", () => {
        navContainer.classList.remove("active-nav");
    });
    navContainer.addEventListener("mouseleave", () => {
        navContainer.classList.remove("active-nav");
    });

}
function initServiceCards() {
    if (!window.matchMedia("(pointer: coarse), (pointer: fine), (hover: hover)").matches) return;

    const cards = document.querySelectorAll(".serv-card");
    if (!cards.length) return;

    const clearActive = () => {
        cards.forEach(c => c.classList.remove("active-card"));
    };

    cards.forEach(card => {

        const activateCard = (e) => {
            e.stopPropagation();
            if (!card.classList.contains("active-card")) {
                clearActive();
                card.classList.add("active-card");
            } else {
                card.classList.remove("active-card");
            }
        };

        card.addEventListener("click", activateCard);
        card.addEventListener("mouseenter", activateCard);

        card.addEventListener("mouseleave", () => {
            card.classList.remove("active-card");
        });
    });

    window.addEventListener("click", () => {
        setTimeout(clearActive, 50);
    });

    window.addEventListener("scroll", () => {
        setTimeout(clearActive, 50);
    });
}
document.addEventListener("DOMContentLoaded", () => {
    initNavbar();
    initServiceCards();
    init3DEffect();
    hoveredNav();
});