// thanks.js

// Read url params to set order in the html
    

  
const thanksParams = window.location.search;
// console.log(thanksParams);
const thanksParams2 = thanksParams.slice(4); // enlever 4 caractère à la valeur récupéré
console.log(thanksParams2);

const orderIdText = document.querySelector("#OderIdNumber");
orderIdText.innerText = thanksParams2; // remplace texte par le numéro de commande
