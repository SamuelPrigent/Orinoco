// thanks.js


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
  



// Récupère données du formulaire
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
    // window.location.href = "thanks.html";


    // Msg remerciement => page panier
    /*
    const ConfirmDiv = document.querySelector("#CommandMessage1");
    const ConfirmDiv2 = document.querySelector("#CommandMessage2");
    const orderIdDiv = document.querySelector("#CommandMessage3");
    
    ConfirmDiv.classList.add("displayflex");
    ConfirmDiv2.classList.add("displayflex");
    orderIdDiv.classList.add("displayflex");
    orderIdDiv.innerText = reponse.orderId;
    */

    // Msg remerciement => page thanks // ne fonctionne pas ? Pk ? 
    const orderIdDiv2 = document.querySelector("#OderIdNumber");
    orderIdDiv2.innerText = reponse.orderId;

  });
  





