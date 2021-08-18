// Classe Teddy
class teddy {
    constructor (name, color, quantity, price) {
    this.name = name;
    this.color = color;
    this.quantity = quantity;
    this.price = price;
    }
}

// UI Class :  
class UI {

// Display Teddy
    static displayTeddy () {
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

        const products  = StoredTeddy;
        // Pour chaque Objet Teddy on en créé une ligne à ajouter au pannier
        products.forEach((Teddy) => UI.addTeddyToList(Teddy));
    }



    static addTeddyToList(teddy, quantity) {
    // pour éviter d'ajouter une ligne si le produit a déjà été ajouté seul la quantité sera modifié
    if (quantity === 0) {
        return;
    }

        const ProductList = document.querySelector(".panier-bloc-list");

        const ProductRow = document.createElement("div");

        ProductRow.innerHTML = /*html*/` 
        <div class="panier-bloc-list-product">
            <div class="panier-card-paddingratio">
                <img src="../backend/images/teddy_1.jpg"/>
            </div>
            <div class="panier-bloc-list-product-text">
                <div class="panier-bloc-left-head-flex">
                    <div class="panier-bloc-left-head-text">${teddy.name}</div>
                    <div class="panier-bloc-left-head-text">${teddy.price}</div>
                </div>
                <div class="panier-bloc-left-desc">Couleur : ${teddy.color} </div>
                <div class="panier-bloc-left-desc">Quantité : ${quantity}</div>
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






