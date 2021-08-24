// const de formatage de prix
const formatter = new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2,
  });

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

// Log pour comprendre ce qui est ajouté
console.log(JSON.parse(obj[1]).name, obj);
// console.log("Target array 1 :", JSON.parse(obj[1]) ); // technique pour target avec un point à la fin




        const ProductList = document.querySelector(".panier-bloc-list");

        const ProductRow = document.createElement("div");

        ProductRow.innerHTML = /*html*/` 
        <div class="panier-bloc-list-product">
            <div class="panier-card-paddingratio">
                <img src="${JSON.parse(obj[1]).imageUrl}"/>
            </div>
            <div class="panier-bloc-list-product-text">
                <div class="panier-bloc-left-head-flex">
                    <div class="panier-bloc-left-head-text">${JSON.parse(obj[1]).name}</div>
                    <div class="panier-bloc-left-head-text">${formatter.format(JSON.parse(obj[1]).price / 100)}</div>
                </div>
                <div class="panier-bloc-left-desc">Couleur : ${obj.color} </div>
                <div class="panier-bloc-left-desc">Quantité : ${JSON.parse(obj[1]).quantity}</div>
                <button class="DeleteButton"> <div class="DeleteText">Supprimer</div> <i class="fas fa-times"></i></button>
            </div>
        </div>
        <div class="panier-bloc-left-separator3"></div>
        `;

        ProductList.appendChild(ProductRow);
    }
} 


// Event : affichage d'un pannier de base
// document.addEventListener("DOMContentLoaded", UI.displayTeddy);

UI.displayTeddy();






// ----------------------------------------------
// Ancien code

/*
// Classe Teddy
class teddyClass {
    constructor (name, color, quantity, price) {
    this.name = name;
    this.color = color;
    this.quantity = quantity;
    this.price = price;
    }
}
*/

// code qui étant dans display teddy
        /*
        const StoredTeddy = [
            {
                name: "Norbert",
                color: "Chocolate",
                quantity: 1,
                price: 2900,
            },
            {
                name: "Arnold",
                color: "White",
                quantity: 1,
                price: 3900,
            }
        ];
        // const products  = StoredTeddy;
        */