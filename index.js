// Récupération des éléments du DOM
const bar   = document.getElementById('bar');      // icône menu (burger)
const nav   = document.getElementById('navbar');   // <ul> du menu
const close = document.getElementById('close');    // icône croix (fermer)

// OUVRIR le menu (clic sur l’icône burger)
if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
        document.body.style.overflow = 'hidden'; // bloque le scroll derrière le menu
    });
}

// FERMER le menu (clic sur la croix)
if (close) {
    close.addEventListener('click', (e) => {
        e.preventDefault();
        nav.classList.remove('active');
        document.body.style.overflow = ''; // réactive le scroll
    });
}

// FERMER le menu quand on clique sur un lien du menu (mobile)
const navLinks = nav.querySelectorAll('a:not(#close)');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // seulement utile en vue mobile, mais ça ne gêne pas sur desktop
        nav.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// FERMER le menu automatiquement si on repasse en grand écran
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        nav.classList.remove('active');
        document.body.style.overflow = '';
    }
});
