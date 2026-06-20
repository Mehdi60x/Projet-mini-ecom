// Catalogue produits partagé entre product.html et product-detail.html
const PRODUCTS = [
    {
        slug: "doudoune-alaska-harveyton",
        name: "Doudoune Alaska Harveyton",
        price: 499.99,
        image: "Asset/image/Doudoune1.png",
        category: "doudounes",
        rating: 5,
        tagline: "La pièce signature de la maison",
        description: "Notre doudoune la plus emblématique. Garnissage haute densité, doublure thermo-régulante et finitions cousues main pour affronter les nuits polaires sans jamais sacrifier l'allure.",
        details: [
            "Isolation duvet certifié grand froid (-30°C)",
            "Doublure intérieure thermo-régulante",
            "Capuche amovible bordée de fourrure technique",
            "Fabrication façonnée en petite série"
        ]
    },
    {
        slug: "doudoune-harveyton-sans-manche",
        name: "Doudoune sans manche Harveyton",
        price: 299.99,
        image: "Asset/image/Produit2.png",
        category: "doudounes",
        rating: 5,
        tagline: "Liberté de mouvement, chaleur intacte",
        description: "La version sans manche du modèle Harveyton, pensée pour les journées actives. Légère, compressible, elle se glisse sous un manteau ou se porte seule en mi-saison.",
        details: [
            "Coupe sans manche pour plus de liberté",
            "Compressible, idéale en voyage",
            "Col montant coupe-vent",
            "Poches zippées doublées polaire"
        ]
    },
    {
        slug: "doudoune-lawrence",
        name: "Doudoune sans manche Lawrence",
        price: 299.99,
        image: "Asset/image/Pproduits3.png",
        category: "doudounes",
        rating: 5,
        tagline: "Le minimalisme nordique",
        description: "Une silhouette épurée et un tombé impeccable. La Lawrence incarne le luxe silencieux d'Horizons Blanc : aucun logo visible, seulement la qualité de la matière.",
        details: [
            "Tissu déperlant traité sans PFC",
            "Coupe ajustée unisexe",
            "Fermeture éclair YKK premium",
            "Existe en 4 coloris"
        ]
    },
    {
        slug: "doudoune-montblanc",
        name: "Doudoune MontBlanc",
        price: 599.99,
        image: "Asset/image/doudoune3.png",
        category: "doudounes",
        rating: 5,
        tagline: "L'expédition haut de gamme",
        description: "Conçue avec des guides de haute montagne, la MontBlanc résiste aux conditions les plus extrêmes tout en conservant une élégance discrète, en ville comme en altitude.",
        details: [
            "Testée à -35°C en conditions réelles",
            "Capuche ajustable à 3 points",
            "Empiècements renforcés aux épaules",
            "Garantie 5 ans"
        ]
    },
    {
        slug: "doudoune-lodge",
        name: "Doudoune sans manche Lodge",
        price: 259.99,
        image: "Asset/image/Doudoune5.png",
        category: "doudounes",
        rating: 5,
        tagline: "Le confort du chalet, en ville",
        description: "Inspirée des lodges nordiques, cette doudoune sans manche associe matières douces et chaleur enveloppante pour les journées fraîches.",
        details: [
            "Toucher doux façon laine bouillie",
            "Doublure intérieure matelassée",
            "Coupe droite intemporelle",
            "Entretien facile en machine"
        ]
    },
    {
        slug: "doudoune-fjord",
        name: "Doudoune sans manche Fjord",
        price: 279.99,
        image: "Asset/image/Doudoune6.png",
        category: "doudounes",
        rating: 5,
        tagline: "Inspirée des paysages scandinaves",
        description: "Un gilet doudoune robuste, taillé pour les balades en bord de fjord, avec une attention particulière portée à la respirabilité du tissu.",
        details: [
            "Tissu respirant déperlant",
            "Col zippé haut anti-froid",
            "Poches intérieures sécurisées",
            "Coloris inspirés des paysages nordiques"
        ]
    },
    {
        slug: "manteau-shelburne",
        name: "Manteaux Shelburne",
        price: 379.99,
        image: "Asset/image/Doudoune7.png",
        category: "manteaux",
        rating: 5,
        tagline: "L'élégance longue durée",
        description: "Un manteau long, structuré, pour les silhouettes urbaines qui veulent traverser l'hiver sans compromis sur le style.",
        details: [
            "Longueur mi-cuisse pour une protection optimale",
            "Doublure matelassée détachable",
            "Boutonnage croisé premium",
            "Coupe non genrée"
        ]
    },
    {
        slug: "gilet-greenpark",
        name: "Gilet Polaire GreenPark",
        price: 149.99,
        image: "Asset/image/Doudoune8.png",
        category: "accessoires",
        rating: 5,
        tagline: "L'essentiel des trois saisons",
        description: "Un gilet polaire doux et léger, parfait en couche intermédiaire ou seul lors des journées de demi-saison.",
        details: [
            "Polaire recyclée certifiée",
            "Fermeture éclair pleine longueur",
            "Coupe ajustée et légère",
            "Idéal en couche intermédiaire"
        ]
    },
    {
        slug: "gilet-snow",
        name: "Gilet température Snow",
        price: 149.99,
        image: "Asset/image/Vesterose.png",
        category: "accessoires",
        rating: 5,
        tagline: "La collection Polaris",
        description: "Issu de la collection Polaris, ce gilet thermo-régulant accompagne chaque sortie hivernale avec une régulation de température intelligente.",
        details: [
            "Technologie thermo-régulante Polaris",
            "Léger et compressible",
            "Coupe près du corps",
            "Coloris exclusif Vesterose"
        ]
    },
    {
        slug: "botte-midleton-arrow",
        name: "Botte Midleton Arrow",
        price: 199.99,
        image: "Asset/image/Bottes1.png",
        category: "chaussures",
        rating: 5,
        tagline: "Stabilité sur toutes les surfaces",
        description: "Des bottes techniques à semelle crantée, conçues pour garder le pied au sec et au chaud quelles que soient les conditions.",
        details: [
            "Semelle anti-dérapante grand froid",
            "Doublure chaude amovible",
            "Tige imperméable traitée",
            "Confort longue durée"
        ]
    },
    {
        slug: "sacoche-polaris",
        name: "Sacoche Polaris",
        price: 89.99,
        image: "Asset/image/Sacoche.png",
        category: "accessoires",
        rating: 5,
        tagline: "Le compagnon de voyage",
        description: "Compacte et résistante, la sacoche Polaris s'adapte à tous les trajets, du quotidien à l'expédition.",
        details: [
            "Tissu déperlant résistant à l'abrasion",
            "Compartiment matelassé pour appareils",
            "Bandoulière réglable",
            "Format cabine"
        ]
    },
    {
        slug: "bonnet-polaris",
        name: "Bonnet Polaris",
        price: 69.99,
        image: "Asset/image/BonnetFluo.png",
        category: "accessoires",
        rating: 5,
        tagline: "L'accessoire signature",
        description: "Tricoté serré pour une isolation maximale, le bonnet Polaris complète chaque tenue hivernale avec une touche de couleur.",
        details: [
            "Tricot technique grand froid",
            "Revers double épaisseur",
            "Une taille, coupe unisexe",
            "Entretien facile"
        ]
    }
];

if (typeof module !== "undefined" && module.exports) {
    module.exports = PRODUCTS;
}
