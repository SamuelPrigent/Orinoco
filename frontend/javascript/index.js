// Déclaration fonction formatage de prix json
const formatter = new Intl.NumberFormat('fr-FR', {
  style: 'currency',
  currency: 'EUR',
  minimumFractionDigits: 2,
});

// Documente le tooltip des commandes
/**
 * @typedef {Object} Teddy
 * @property {Array<string>} colors - Les couleurs du teddy
 * @property {string} description - Description du teddy
 * @property {string} name - Nom du teddy
 * @property {number} price - Prix du teddy
 * @property {string} _id  - Id du teddy
 * @property {string} imageUrl - Url de l'image
 */

/**
 *
 * @returns {Promise<Array<Teddy>>} Teddies
 */

 // Retourne un tableau de teddies 
const fetchTeddies = async () => {
  const response = await fetch('http://localhost:3000/api/teddies');
  if (!response.ok) {
    throw new Error('Il y a eu une erreur');
  }
  return response.json();
};

/**
 *
 * @param {Teddy} teddy
 * @returns {HTMLAnchorElement} TeddyCard
 */



// Création variable pour le lieux ou l'on envera nos card qui est une classe
const productBloc = document.querySelector('.product-bloc-grid');


// Creation du html de la card teddy
const createTeddyCard = (teddy) => {

  // Création d'un élément de type liens "a"
  const a = document.createElement('a');
  a.classList.add('product-card');
  a.setAttribute('href', `produit.html?id=${teddy._id}`); // Liens href array id produits pour nommer url

  // Création d'une "div" paddingratio
  const paddingratio = document.createElement('div');
  paddingratio.classList.add('product-card-paddingratio');
  a.appendChild(paddingratio);

  // Création d'une "div"
  const img = document.createElement('img');
  img.setAttribute('src', teddy.imageUrl); // Liens array src img
  paddingratio.appendChild(img);

  // Création d'une "div" texte (main + description)
  const text = document.createElement('div');
  text.classList.add('product-card-text');
  a.appendChild(text);

  // Création d'une "div" main = (titre + prix)
  const main = document.createElement('div');
  main.classList.add('product-card-text-main');
  text.appendChild(main);

  // Création d'une "div" name
  const name = document.createElement('div');
  name.classList.add('product-card-text-main-name');
  main.appendChild(name);
  name.innerText = teddy.name; // Liens array contenu div

  // Création d'une "div" price
  const price = document.createElement('div');
  price.classList.add('product-card-text-main-price');
  main.appendChild(price);
  price.innerText = formatter.format(teddy.price / 100); // Utilisation fonction pour formatter le prix

  // Création d'une "div" description
  const description = document.createElement('div');
  description.classList.add('product-text-desc');
  text.appendChild(description);
  description.innerText = teddy.description; // Liens array contenu div

  // Retourne l'élément créer
  return a;
};

// Fonction qui utilise back end déjà fait
const main = async () => {
  const teddies = await fetchTeddies(); // Utilise fetch pour avoir le tableaux
  for (const teddy of teddies) { // Executera la fonction de création pour le nombre d'objet teddy du tableau
    const teddyCard = createTeddyCard(teddy); // création card
    productBloc.appendChild(teddyCard); // ajout dans le bloc
  }
};

// Exécution de la fonction main
main();

