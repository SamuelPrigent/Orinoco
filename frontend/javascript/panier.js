// const de formatage de prix
const formatter = new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2,
  });

// On initialise le total panier en dehors de la classe UI
let totalPanier = 0;



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

        const ProductList = document.querySelector(".panier-bloc-list");

        const ProductRow = document.createElement("div");

        const key = JSON.parse(obj[1]).name + " - "+ obj[0].split(" - ")[1]; // nom produit dans le local storage

        console.log("key =" , key);

        // PROBLEME AVEC ID qui ont des espaces

        // La constante key permettra : 
        // soit remplacer l'id ?
        // soit target lors de l'action du bouton ?

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
                <div class="panier-bloc-left-desc">Couleur : ${obj[0].split(" - ")[1]} </div>
                <div class="panier-bloc-left-desc">Quantité : ${JSON.parse(obj[1]).quantity}</div>
                <button class="deleteButton"> <div class="DeleteText">Supprimer</div> <i class="fas fa-times"></i></button>
            </div>
        </div>
        <div class="panier-bloc-left-separator3"></div>
        `;

// id pour bouton : id="${key}" // ou // id="deleteButton2"
ProductList.appendChild(ProductRow);


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

// Remplace prix panier par valeur calculé
static replaceTotal() {
const content = document.querySelector("#SousTotal");
content.innerText = formatter.format(totalPanier);
const content2 = document.querySelector("#SousTotal2");
content2.innerText = formatter.format(totalPanier + 4.99);
}


} 


// UI fonction d'affichage / Teddy & Prix : 

UI.displayTeddy(); // Affiche la liste des produits du local storage sous forme de panier

UI.totalShoppingCart(); // Calcul le prix de chaque ligne et la stock dans une valeur

UI.replaceTotal(); // Remplace la valeur calculé dans le html


// Les boutons delete product
// Boutton > vider le pannier    
deleteAll.addEventListener("click", e => {
    e.preventDefault();
    localStorage.clear();
    console.log("Local Storage vide !");
    window.location.reload();
})
    

/*
// Les infos qu'on pourrait rajouter
const color_command = Object.keys(localStorage).map((item) => (item.split(" - ")[1]));
const quantity_command = Object.entries(localStorage).map((item) => JSON.parse(item[1]).quantity);

console.log("Array of Colors :", color_command);
console.log("Array of Quantity :", quantity_command);
*/

// Formulaire de commande / Action on Click

// Infos demandé par le back end 
const ids = Object.values(localStorage).map((item) => JSON.parse(item)._id);

// const data = recup données panier
const data = {
    contact: {
      firstName,
      lastName,
      adress,
      city,
      email,
    },
    products: [ids], // array off ids du panier
  };



  document.addEventListener("submit", (e) => {
    // alert("Commande envoyé !");
    e.preventDefault();
    console.log("Commande envoyé !", ids);
    // ------

    // data - firstName, lastName, adress, city, email
    const inputs = document.getElementById("form-contact").getElementsByTagName("input");
    console.log(inputs[0].value, inputs[1].value, inputs[2].value, inputs[3].value, inputs[4].value);
})



  // Exemple post formulaire ???
/*

  const res = await fetch("http://localhost:3000/api/teddies/order", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const json = res.json();
console.log(json)

*/


// Exemple get data au dessus du is ???
/* 
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const ids = ... ;
    const  formData = new FormData(e.target)
    formData.getAll(),
}
)

*/


/* 
    // data
    const firstName = document.querySelector("#firstName");
    const lastName = document.querySelector("#lastName");
    const adress = document.querySelector("#adress");
    const city = document.querySelector("#city");
    const email = document.querySelector("#email");
    console.log(firstName.value, lastName.value, adress.value, city.value, email.value);
*/