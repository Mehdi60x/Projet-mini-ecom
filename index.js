// Active les animations CSS uniquement si JS s'exécute (progressive enhancement)
document.documentElement.classList.add('js');

// Récupération des éléments du DOM
const bar = document.getElementById('bar');      // icône menu (burger)
const nav = document.getElementById('navbar');   // <ul> du menu
const close = document.getElementById('close');  // icône croix (fermer)

// OUVRIR le menu (clic sur l'icône burger)
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

if (nav) {
    // FERMER le menu quand on clique sur un lien du menu (mobile)
    const navLinks = nav.querySelectorAll('a:not(#close)');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // seulement utile en vue mobile, mais ça ne gêne pas sur desktop
            nav.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
}

// FERMER le menu automatiquement si on repasse en grand écran
window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && nav) {
        nav.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// ==============================
// HEADER : ombre/flou au scroll
// ==============================
const header = document.getElementById('header');

if (header) {
    const toggleHeaderScroll = () => {
        header.classList.toggle('scrolled', window.scrollY > 30);
    };
    toggleHeaderScroll();
    window.addEventListener('scroll', toggleHeaderScroll);
}

// ==============================
// ANIMATIONS AU SCROLL (reveal)
// ==============================
const revealTargets = document.querySelectorAll('[data-reveal]');

if (revealTargets.length) {
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    revealTargets.forEach(target => revealObserver.observe(target));

    // Filet de sécurité : si un élément n'a jamais déclenché l'observateur
    // (page courte, capture d'écran, robot d'indexation...), on l'affiche quand même.
    setTimeout(() => {
        revealTargets.forEach(target => target.classList.add('in-view'));
    }, 2500);
}

// ==============================
// BOUTON RETOUR EN HAUT
// ==============================
const backToTop = document.createElement('button');
backToTop.id = 'back-to-top';
backToTop.setAttribute('aria-label', 'Retour en haut de la page');
backToTop.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
document.body.appendChild(backToTop);

window.addEventListener('scroll', () => {
    backToTop.classList.toggle('visible', window.scrollY > 400);
});

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ==============================
// FILTRES BOUTIQUE (product.html)
// ==============================
const filterBar = document.querySelector('.filter-bar');

if (filterBar) {
    const filterButtons = filterBar.querySelectorAll('button');
    const products = document.querySelectorAll('.produits .pro');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const category = btn.dataset.filter;

            products.forEach(product => {
                const matches = category === 'tout' || product.dataset.category === category;
                product.classList.toggle('is-hidden', !matches);
            });
        });
    });
}

// ==============================
// FORMULAIRE DE CONTACT
// ==============================
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    // Pré-remplit l'objet si on arrive depuis une fiche produit (?sujet=...)
    const params = new URLSearchParams(window.location.search);
    const sujet = params.get('sujet');
    const subjectField = document.getElementById('subject');

    if (sujet && subjectField) {
        subjectField.value = sujet;
    }

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const successBox = document.getElementById('contact-success');
        if (successBox) {
            successBox.classList.add('visible');
        }
        contactForm.reset();
    });
}

// ==============================
// NEWSLETTER
// ==============================
document.querySelectorAll('.newsletter-form').forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const successBox = form.parentElement.querySelector('.form-success');
        if (successBox) {
            successBox.classList.add('visible');
        }
        form.reset();
    });
});
