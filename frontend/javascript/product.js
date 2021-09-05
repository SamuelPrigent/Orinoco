// FETCH - Permet de créer : liens + page à partir du même html lorsque l'on clique sur un teddy
const fetchTeddy = async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id'); // déclare et obtient l'id de l'url que l'on a écris par la création du liens de card 
  const response = await fetch(`http://localhost:3000/api/teddies/${id}`); // récupère l'object uniquement
  if (!response.ok) {
    throw new Error('Error Fetch');
  }
  return response.json();
};

 // FETCH - Permet de faire une réponse sous forme de grid produits
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


// ---------------------- Fetch Teddy + Fonction
const Replace = async () => {
  const teddy = await fetchTeddy();

// log page product
console.log("Fetch " + teddy.name, teddy); // Montre l'objet

// ---------------------- Bouton Ajouter au panier -> Stringify

// Button ADD Object Teddy in Local Storage
ButtonAdd.addEventListener("click", (e) => {
e.preventDefault();

// Event listener / Radio button selected
const radiosButton = document.querySelectorAll("input[type=radio][name=color]"); 
const colorSelected = Array.from(radiosButton).find((item) => item.checked);

// Key personnalisé
const color = colorSelected.value;
const key = `${teddy.name} - ${color}`; // nom produit dans le local storage

// Créer un clone ou un nouvel objet à partir du local storage / pour que qty ne reset pas au reload 
const teddyLocal = JSON.parse(localStorage.getItem(key)) || Object.assign({}, teddy); // teddy.name remplacé par key pour avoir un teddy par couleur

// Add quantity to object
if (!teddyLocal.quantity) {
  teddyLocal.quantity = 0;
}
teddyLocal.quantity++;

// Set to local storage
localStorage.setItem(key, JSON.stringify(teddyLocal)); // next : teddy.name + color selected

// Console log Add button
console.log("+ " + teddyLocal.name); // Produts ajouté 
console.log ("Quantity :", teddyLocal.quantity); // quantité totale


/* OLD CODE sans clone
// Add Quantity to Object
if (teddy.quantity == null || 0) {teddy.quantity = 1;}
else {teddy.quantity++;}
*/
}
)

// ---------------------- Personalise le texte en fonction du teddy

  replaceText('.product-page-bloc-right-title', teddy.name); // remplace nom
  replaceText('.product-page-bloc-right-price', formatter.format(teddy.price / 100)); // remplace prix
  replaceText('.product-page-bloc-right-desc', teddy.description); // remplace description
  replaceText('#titlepage', teddy.name); // remplace onglet

  const img = document.querySelector('.page-card-paddingratio img');
  img.src = teddy.imageUrl; // remplace l'image
};

// On lance la fonction 2
Replace();

// ---------------------- Création bloc de couleur

// Attribution const au lieux d'envoie des div color créé
const colorBloc = document.querySelector('#ColorBloc');

// Créer div couleur selon couleur de l'object javascript 
const createColorButton = (teddyColor) => {
  fetchTeddy(); 

// div radio
const radio = document.createElement("input");
radio.name = "color"; // pour target via l'event listener / ajout dans le panier
radio.type = "radio";
radio.id = teddyColor; // pour attribuer le bouton au label
radio.value = teddyColor;
radio.hidden = false;

// colorDiv 
const colorDiv = document.createElement("div");
colorDiv.classList.add("product-page-bloc-right-color-div");

// Label + pour selectionner au clic
const label = document.createElement("label");
label.htmlFor = teddyColor;
label.innerText = teddyColor;

// Structure
colorBloc.appendChild(colorDiv);
colorDiv.appendChild(radio);
colorDiv.appendChild(label);

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



// Code permet d'avoir la quantité en haut dans le header
let totalQuantity2 = 0;

function totalQuantity() {
  Object.entries(localStorage).forEach((entries) => {QuantityOfProduct(entries);})
  }


  function QuantityOfProduct(obj) {
      
    //let totalQuantity;
     let GlobalQuantity = (JSON.parse(obj[1]).quantity);
     totalQuantity2 = totalQuantity2 + GlobalQuantity;
     console.log("Quantity of Product =", totalQuantity2);
     return totalQuantity2; 
 }

 function replaceTotal() {
  const content3 = document.querySelector("#QuantityNumber");
  content3.innerText = totalQuantity2;
  }
  

  totalQuantity();
  replaceTotal();
  