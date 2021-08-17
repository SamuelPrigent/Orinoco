// FETCH - Création du liens
const fetchTeddy = async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id'); // déclare et obtient l'id de l'url que l'on a écris par la création du liens de card 
  const response = await fetch(`http://localhost:3000/api/teddies/${id}`); // récupère l'object uniquement
  if (!response.ok) {
    throw new Error('Error Fetch');
  }
  return response.json(); 
};

 // FETCH - Recup tableau
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


// FONCTION - Simplifier l'écriture du code
// indication de la classe // remplacement du texte
const replaceText = (selector, text) => {
  const content = document.querySelector(selector);
  content.innerText = text;
};

// FONCTION 2 - Remplacement du contenu de page
const Replace = async () => {
  const teddy = await fetchTeddy();
  replaceText('.product-page-bloc-right-title', teddy.name); // remplace nom
  replaceText('.product-page-bloc-right-price', formatter.format(teddy.price / 100)); // remplace prix
  replaceText('.product-page-bloc-right-desc', teddy.description); // remplace description
  // console.log(teddy); // retourne l'objet

  const img = document.querySelector('.page-card-paddingratio img');
  img.src = teddy.imageUrl; // remplace l'image
};

// On lance la fonction 2
Replace();


// ----------------------

// Attribution const au lieux d'envoie des div color créé
const colorBloc = document.querySelector('#ColorBloc');

// Nouvelle constante ? 



// Créer div couleur selon couleur de l'object javascript 
const createColorButton = (teddy) => {
  fetchTeddy(); 

  // Création d'un élément de type liens "button"
  const colorDiv = document.createElement('button');
  colorBloc.appendChild(colorDiv);
  colorDiv.classList.add('product-page-bloc-right-color-div');
  colorDiv.innerText = teddy;
  // console.log(teddy); // retourne couleurs de l'objet

  // Retourne l'élément
  return colorDiv;
};


// Add Div dans le bloc 
const autoAddColor = async () => {
  const teddy = await fetchTeddy(); 
  for (const repetition of teddy.colors) { 
    const color = createColorButton(repetition); // On crée le bouton 
    colorBloc.appendChild(color); // On place le bouton dans le bloc
  }
  // console.log(teddy); // retourne l'object
};

// On lance la fonction de création de div couleur
autoAddColor();
