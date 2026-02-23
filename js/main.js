
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


if (window.matchMedia("(pointer: coarse) , (pointer: fine) , (hover: hover)").matches) {

    const cards = document.querySelectorAll(".serv-card");

    cards.forEach(card => {

        card.addEventListener("click", (e) => {

            e.stopPropagation();

            
            if (card.classList.contains("active-card")) {
                card.classList.remove("active-card");
            } else {
                cards.forEach(c => c.classList.remove("active-card"));
                card.classList.add("active-card");
            }

            
            card.classList.add("active-card");
        });

    });
    cards.forEach(card => {

        card.addEventListener("mouseenter", (e) => {

            e.stopPropagation();

            
            if (card.classList.contains("active-card")) {
                card.classList.remove("active-card");
            } else {
                cards.forEach(c => c.classList.remove("active-card"));
                card.classList.add("active-card");
            }

            
            card.classList.add("active-card");
        });

    });

    window.addEventListener("click", () => {
        setTimeout(() => {
            cards.forEach(c => c.classList.remove("active-card"));
        }, 50);
    });

    cards.forEach(card => {
        card.addEventListener("mouseleave", () => {
            card.classList.remove("active-card");
        });
    });

    window.addEventListener("scroll", () => {
        setTimeout(() => {
            cards.forEach(c => c.classList.remove("active-card"));
        }, 50);
    });

}


if (window.matchMedia("(pointer: fine) and (hover: hover) and (min-width: 552px)").matches) {
    const cards = document.querySelectorAll(".serv-card");

    cards.forEach(card => {
        card.addEventListener("mousemove", (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = -(y - centerY) / 25;
            const rotateY = (x - centerX) / 25;

            
            const activeTranslate = card.classList.contains("active-card") ? "translate3d(0, -8px, 15px)" : "translate3d(0,0,0)";
            card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) ${activeTranslate}`;
        });

        card.addEventListener("mouseleave", () => {
            
            if (card.classList.contains("active-card")) {
                card.style.transform = "translate3d(0, -8px, 15px)";
            } else {
                card.style.transform = "rotateX(0) rotateY(0) translate3d(0,0,0)";
            }
        });
    });
}