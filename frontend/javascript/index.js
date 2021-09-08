 // FETCH - Recup des tableau a partir de fetch
 const fetchTeddies = async () => {
  const response = await fetch('http://localhost:3000/api/teddies');
  if (!response.ok) {
    throw new Error('Il y a eu une erreur');
  }
  return response.json();
};

// Formatage de prix json
const formatter = new Intl.NumberFormat('fr-FR', {
  style: 'currency',
  currency: 'EUR',
  minimumFractionDigits: 2,
});


// Attribution nom variable à un bloc / endroit du html
const productBloc = document.querySelector('#product-bloc');

// Creation card html de teddy
const createTeddyCard = (teddy) => {

  // Création d'un élément de type liens "a"
  const a = document.createElement('a');
  a.classList.add('product-card');
  a.setAttribute('href', `product.html?id=${teddy._id}`); // Liens href array id produits pour nommer url
// console.log("tugudu" ,`product.html?id=${teddy._id}`); // voir les liens crées

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
  price.innerText = formatter.format(teddy.price / 100); // Utilisation fonction créé de formatage de prix

  // Création d'une "div" description
  const description = document.createElement('div');
  description.classList.add('product-text-desc');
  text.appendChild(description);
  description.innerText = teddy.description; // Liens array contenu div

  // Retourne l'élément créer
  return a;
};

// AutoAddCard - FetchTeddies + createTeddyCard
const autoAddCard = async () => {
  const teddies = await fetchTeddies(); // Utilise fonction créé : pour avoir tableaux
  for (const teddy of teddies) { 
    const teddyCard = createTeddyCard(teddy); // Utilise fonction créé : pour créer la card
    productBloc.appendChild(teddyCard); // Ajout de la card dans le bloc
  }
};

// Exécution fonction main
autoAddCard();



// ----------------------------------------------------


// Documentation tooltip des objets
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
 * @returns {Promise<Array<Teddy>>} Teddies
 */

/**
 *
 * @param {Teddy} teddy
 * @returns {HTMLAnchorElement} TeddyCard
 */
// -------------------------------


let totalQuantity3 = 0;

function totalQuantity() {
  Object.entries(localStorage).forEach((entries) => {QuantityOfProduct(entries);})
  }


  function QuantityOfProduct(obj) {
      
    //let totalQuantity;
     let GlobalQuantity = (JSON.parse(obj[1]).quantity);
     totalQuantity3 = totalQuantity3 + GlobalQuantity;
     console.log("Quantity of Product =", totalQuantity3);
     return totalQuantity3; 
 }

 function replaceTotal() {
  const content3 = document.querySelector("#QuantityNumber");
  content3.innerText = totalQuantity3;
  }
  

  totalQuantity();
  replaceTotal();