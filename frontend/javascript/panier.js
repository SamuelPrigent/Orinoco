// const de formatage de prix
const formatter = new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2,
  });

// On initialise des variables utilisés plus tard en dehors de la classe UI
let totalPanier = 0;
let totalQuantity = 0;


// UI Class :  
class UI {

// récupère la liste des produits dans la panier via le local storage

    static displayTeddy () {

    Object.entries(localStorage).forEach((entries) => {
    UI.addTeddyToList(entries);
    });

}

    static addTeddyToList(obj) {

// pour ajouter une ligne si le produit a déjà été ajouté seul la quantité sera modifié
// mais il faut ajouter un calcul pour quantifier

    if (obj.quantity === 0) {
        return;
    }

// Log pour comprendre ce qui est ajouté / le nom + l'objet entier
console.log(JSON.parse(obj[1]).name, obj);
// console.log(obj[0].split(" - ")[1]); // permet de target la couleur
// console.log("Target array 1 :", JSON.parse(obj[1]) ); // technique pour target avec un point à la fin

// -----------------

// Création via JS des lignes produit du panier une par une (boucle)
const ProductList = document.querySelector(".panier-bloc-list");

// div 0 - ProductRow créé plus haut 
const ProductRow = document.createElement("div"); // div créé par boucle injecté dans ProductList

// div 1 - ligne - fils du bloc qui contient tout
const div1 = document.createElement('div');
div1.classList.add('panier-bloc-list-product');
ProductRow.appendChild(div1);
// ProductList.appendChild(div1);

// div 2 - fils de div 1
  const paddingratioP = document.createElement('div');
  paddingratioP.classList.add('panier-card-paddingratio');
  div1.appendChild(paddingratioP);

  // div 3 - image - fils de div 2
  const img1 = document.createElement('img');
  img1.setAttribute('src', JSON.parse(obj[1]).imageUrl); 
  paddingratioP.appendChild(img1);

  // div 4 - texteMain - fils de div 1
  const textMain = document.createElement('div');
  textMain.classList.add('panier-bloc-list-product-text');
  div1.appendChild(textMain);

  // div 5 - name And Price - fils de textMain
  const nameAndPrice = document.createElement('div');
  nameAndPrice.classList.add('panier-bloc-left-head-flex');
  textMain.appendChild(nameAndPrice);

  // div 6 - name - fils de nameAndPrice
  const nameOnly = document.createElement('div');
  nameOnly.classList.add('panier-bloc-left-head-text');
  nameOnly.innerText = JSON.parse(obj[1]).name; 
  nameAndPrice.appendChild(nameOnly);

  // div 7 - price - fils de nameAndPrice
  const priceOnly = document.createElement('div');
  priceOnly.classList.add('panier-bloc-left-head-text');
  priceOnly.innerText = formatter.format(JSON.parse(obj[1]).price / 100); 
  nameAndPrice.appendChild(priceOnly);

  // div 8 - color - fils de textMain
  const teddyColor = document.createElement('div');
  teddyColor.classList.add('panier-bloc-left-desc');
  teddyColor.innerText = "Couleur : " + obj[0].split(" - ")[1]; 
  textMain.appendChild(teddyColor);

  // div 9 - Quantité - fils de textMain
  const teddyQty = document.createElement('div');
  teddyQty.classList.add('panier-bloc-left-desc');
  teddyQty.innerText = "Quantité : " + JSON.parse(obj[1]).quantity; 
  textMain.appendChild(teddyQty);
  
  // button 10 - Bouton supprimer - fils de textMain - >> parent du texte supprimer et de l'icone
  const DeleteButton = document.createElement('button');
  DeleteButton.classList.add('deleteButton');
  textMain.appendChild(DeleteButton);
  
  // div 11 - Texte supprimer - fils de DeleteButton 
  const DeleteText = document.createElement('div');
  DeleteText.classList.add('DeleteText');
  DeleteText.innerText = "Supprimer";
  DeleteButton.appendChild(DeleteText);

  
  // div 12 - Icone supprimer - fils de DeleteButton 
  const DeleteIcon = document.createElement('i');
  DeleteIcon.classList.add('fas');
  DeleteIcon.classList.add('fa-times'); 
  DeleteButton.appendChild(DeleteIcon);

  // div 13 - séparator - fils de 
  const SeparatorLine = document.createElement('div');
  SeparatorLine.classList.add('panier-bloc-left-separator3');
  ProductRow.appendChild(SeparatorLine);
  
// id pour bouton : id="${key}" // ou // id="deleteButton2"
ProductList.appendChild(ProductRow);



// ---------------------------------------

// Bouton Supprimer une ligne produit du panier

// constante Key
const key = JSON.parse(obj[1]).name + " - "+ obj[0].split(" - ")[1]; // nom produit dans le local storage
console.log("key =" , key);

// Boutton > enlever un produit
const deleteButton1 = ProductRow.querySelector(".deleteButton"); 
    
deleteButton1.addEventListener("click", e => {
    e.preventDefault();

    // On remove l'item via la const key créé plus haut
    console.log("Remove :" , key);
    localStorage.removeItem(key);
    window.location.reload();
})

}


// Objectif = faire le total du panier

// On calcule le prix total pour chaque produit (quantité * prix)
static totalShoppingCart() {
Object.entries(localStorage).forEach((entries) => {UI.addToTotal(entries);})
}    


static addToTotal(obj) {
// créer un clone ? // Commande qui a besoins de fetch "const teddy = await fetchTeddy();"
// const teddyLocal = JSON.parse(localStorage.getItem(key)) || Object.assign({}, teddy?); // teddy.name remplacé par key pour avoir un teddy par couleur


let TotalbyProduct = ( (JSON.parse(obj[1]).quantity) * (JSON.parse(obj[1]).price / 100) );

totalPanier = totalPanier + TotalbyProduct;

// Calcul lancé pour chaque Key (quantiy * price) 
console.log("row +", TotalbyProduct);
console.log("Panier =", totalPanier);

return totalPanier; 
// pour l'instant retourne le total par produit pour le nombre de produits différents 
// mais je voudrais qu'il retourne une valeure
}

static totalQuantity() {
    Object.entries(localStorage).forEach((entries) => {UI.QuantityOfProduct(entries);})
    }

static QuantityOfProduct(obj) {
      
   //let totalQuantity;
    let GlobalQuantity = (JSON.parse(obj[1]).quantity);
    
    totalQuantity = totalQuantity + GlobalQuantity;

    console.log("Quantity of Product =", totalQuantity);
    
    return totalQuantity; 
}


// Remplace prix panier par valeur calculé
static replaceTotal() {
const content = document.querySelector("#SousTotal");
content.innerText = formatter.format(totalPanier);
const content2 = document.querySelector("#SousTotal2");
content2.innerText = formatter.format(totalPanier + 4.99);
const content3 = document.querySelector("#QuantityNumber");
content3.innerText = totalQuantity;
}


} 


// UI fonction d'affichage / Teddy & Prix : 

UI.displayTeddy(); // Affiche la liste des produits du local storage sous forme de panier

UI.totalShoppingCart(); // Calcul le prix de chaque ligne et la stock dans une valeur

UI.totalQuantity();

UI.replaceTotal(); // Remplace la valeur calculé dans le html



// Les boutons delete product
// Boutton > vider le pannier    
deleteAll.addEventListener("click", e => {
    e.preventDefault();
    localStorage.clear();
    console.log("Local Storage vide !");
    window.location.reload();
})


const postTeddiesOrder = async (data) => {
    const res = await fetch('http://localhost:3000/api/teddies/order', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data), // comment donner le format à data de ce que veut le back
    });
    return res.json();
  };
  

  const getData = (formData, names) => {
    const res = {};
    for (const name of names) {
      res[name] = formData.get(name);
    }
    return res;
  };
  

// https://developer.mozilla.org/en-US/docs/Web/API/FormData
  const form = document.querySelector('#form-contact');  
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const contact = getData(formData, [
      'firstName',
      'lastName',
      'city',
      'address',
      'email',
    ]);

    const products = Object.values(localStorage).map((item) => JSON.parse(item)._id);
    const data = {
      contact,
      products,
    };

    const reponse = await postTeddiesOrder(data);
    console.log(reponse);
    console.log(reponse.orderId);


    // Liens vers pages de remerciement
    console.log(`thanks.html?id=${reponse.orderId}`)
    window.location.href = `thanks.html?id=${reponse.orderId}`;

    /*
    // Msg confirmation de commande page // code de test

    const ConfirmDiv = document.querySelector("#CommandMessage1");
    const ConfirmDiv2 = document.querySelector("#CommandMessage2");
    const orderIdDiv = document.querySelector("#CommandMessage3");
    
    ConfirmDiv.classList.add("displayflex");
    ConfirmDiv2.classList.add("displayflex");
    orderIdDiv.classList.add("displayflex");
    orderIdDiv.innerText = reponse.orderId;
    */

  });
  


