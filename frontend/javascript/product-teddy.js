// FONCTION 1 - Fetch
const fetchTeddy = async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id'); // déclare et obtient l'id de l'url que l'on a écris par la création du liens de card 
  const response = await fetch(`http://localhost:3000/api/teddies/${id}`); // récupère l'object uniquement
  if (!response.ok) {
    throw new Error('Error Fetch');
  }
  return response.json(); 
};


// FONCTION 2 - Simplifier l'écriture du code
// indication de la classe // remplacement du texte
const replaceTextInElement = (selector, text) => {
  const content = document.querySelector(selector);
  content.innerText = text;
};


// FONCTION - Personalisation de la page Teddy en fonction du produits cliqué
const Replace = async () => {
  const teddy = await fetchTeddy();
  replaceTextInElement('.product-page-bloc-right-title', teddy.name); // remplace nom
  replaceTextInElement('.product-page-bloc-right-price', formatter.format(teddy.price / 100)); // remplace prix
  replaceTextInElement('.product-page-bloc-right-desc', teddy.description); // remplace description

  const img = document.querySelector('.page-card-paddingratio img');
  img.src = teddy.imageUrl; // remplace l'image
};


// On lance la fonction de remplacement texte et image
Replace();


// ----------------------

// Attribution const au lieux d'envoie des div color créé
const colorBloc = document.querySelector('#ColorBloc');

// FONCTION - créer div couleur selon couleur de l'object javascript 
const createColorButton = (teddy) => {

  // Création d'un élément de type liens "button"
  const colorDiv = document.createElement('button');
  colorBloc.appendChild(colorDiv);
  colorDiv.classList.add('product-page-bloc-right-color-div');
  colorDiv.innerText = teddy.colors; 

  // Retourne l'élément
  return colorDiv;
};

// FONCTION - création div couleur
const autoAddColor = async () => {
  const teddy = await fetchTeddies(); // Utilise fonction créé : pour avoir tableaux
  for (const colors of teddy) { 
    const teddyColor = createColorButton(colors); // Utilise fonction ColorButton
    colorBloc.appendChild(teddyColor); // Ajout de toutes les card dans le bloc
  }
};

// On lance la fonction de création de div couleur
autoAddColor();
