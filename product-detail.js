// Rendu dynamique d'une fiche produit à partir de products.js et du paramètre ?p=slug
(function () {
    const params = new URLSearchParams(window.location.search);
    const slug = params.get('p');
    const product = PRODUCTS.find(item => item.slug === slug);

    const root = document.getElementById('product-root');
    const breadcrumbCurrent = document.getElementById('breadcrumb-current');

    if (!product) {
        root.innerHTML = `
            <div class="not-found">
                <h2>Produit introuvable</h2>
                <p>Ce produit n'existe pas ou n'est plus disponible.</p>
                <a href="product.html">← Retour à la boutique</a>
            </div>
        `;
        if (breadcrumbCurrent) breadcrumbCurrent.textContent = 'Produit introuvable';
        return;
    }

    document.title = `${product.name} | Horizons Blanc`;
    document.querySelector('meta[name="description"]').setAttribute('content', product.description);
    if (breadcrumbCurrent) breadcrumbCurrent.textContent = product.name;

    const stars = Array.from({ length: product.rating }, () => '<i class="fas fa-star"></i>').join('');
    const sizes = ['S', 'M', 'L', 'XL'];
    const detailsList = product.details.map(d => `<li><i class="fa-solid fa-snowflake"></i>${d}</li>`).join('');

    root.innerHTML = `
        <div class="product-layout">
            <div class="product-media">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <span class="brand">Horizons Blanc</span>
                <h1>${product.name}</h1>
                <p class="tagline">${product.tagline}</p>
                <div class="stars">${stars}</div>
                <p class="price">${product.price.toFixed(2).replace('.', ',')} €</p>
                <p class="description">${product.description}</p>
                <div class="size-selector">
                    ${sizes.map((s, i) => `<button type="button" class="${i === 1 ? 'selected' : ''}">${s}</button>`).join('')}
                </div>
                <ul class="details">${detailsList}</ul>
                <div class="product-cta">
                    <a class="primary" href="contact.html?sujet=${encodeURIComponent('Demande d\'information : ' + product.name)}">
                        Demander des informations
                    </a>
                    <a class="secondary" href="product.html">← Retour à la boutique</a>
                </div>
            </div>
        </div>
    `;

    // Sélection de taille (un seul choix actif à la fois)
    root.querySelectorAll('.size-selector button').forEach(btn => {
        btn.addEventListener('click', () => {
            root.querySelectorAll('.size-selector button').forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
        });
    });

    // Produits similaires (même catégorie, sinon les premiers du catalogue)
    const relatedRoot = document.getElementById('related-root');
    if (relatedRoot) {
        let related = PRODUCTS.filter(p => p.slug !== product.slug && p.category === product.category);
        if (related.length < 3) {
            related = related.concat(PRODUCTS.filter(p => p.slug !== product.slug && !related.includes(p)));
        }
        related = related.slice(0, 3);

        relatedRoot.innerHTML = related.map(p => `
            <div class="pro">
                <img src="${p.image}" alt="${p.name}">
                <div class="des">
                    <span>Horizons Blanc</span>
                    <h5>${p.name}</h5>
                    <div class="star">${'<i class="fas fa-star"></i>'.repeat(p.rating)}</div>
                    <h4>${p.price.toFixed(2).replace('.', ',')} €</h4>
                    <a href="product-detail.html?p=${p.slug}">Découvrir</a>
                </div>
            </div>
        `).join('');
    }
})();
