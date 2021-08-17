// produit.html --> Local Storage Add to Shopping Cart

function addName (){
    let teddyName = document.querySelector("#teddyname").value;
    localStorage.setItem("nom", teddyName);
}

