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


// On lance la fonction
Replace();

