// NEW FONCTION - 
const fetchTeddy = async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');
  const response = await fetch(`http://localhost:3000/api/teddies/${id}`);
  if (!response.ok) {
    throw new Error('Tugudu');
  }
  return response.json(); 
};

// On va effectuer plusieurs fois la même tâche alors on créé une fonction
// indication de la classe // remplacement du texte

// NEW FONCTION - Simplifier l'écriture du code
const replaceTextInElement = (selector, text) => {
  const content = document.querySelector(selector);
  content.innerText = text;
};

const main = async () => {
  const teddy = await fetchTeddy();
  replaceTextInElement('.product-page-bloc-right-title', teddy.name);
  replaceTextInElement('.product-page-bloc-right-price', teddy.price);
  replaceTextInElement('.product-page-bloc-right-desc', teddy.description);

  const img = document.querySelector('.page-card-paddingratio');
  img.src = teddy.imageUrl;
};

main();

