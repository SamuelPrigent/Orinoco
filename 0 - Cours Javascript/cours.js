// Chapitre N°1 - Variables / Object / Tableaux (array) = brique de fondation pour Javascript

// Nombres
const numberOfSeasons = 6;
const numberOfEpisodes = 20;

const numberTotal = numberOfEpisodes * numberOfSeasons;

let numberDuration = 44;
let numberDurationTotal = numberTotal * numberDuration / 60;

// Mots
const prenom = `Samuel`;
const prenom2 = `Joaquim`;
const nom = `Prigent`;
const wholename = `${prenom} ${nom}`;

// Paragraphe 1
let paragraph = document.querySelector('#info');
paragraph.innerText = `${numberOfSeasons} saisons de ${numberOfEpisodes} episodes - ${numberDurationTotal} h total
${wholename}`

// Les Objets
let InfoCompte = {
wholename: 'Samuel Prigent',
userid: '145220',
Status: true,
date: '4 Fevrier 2014',
age: '25 ans',
};

// des raccourcis via dot
let ICname = InfoCompte.wholename;
let ICpremium = InfoCompte.premium;
let ICdate = InfoCompte.date;
let ICstatus = InfoCompte.Status;

// Paragraphe 2
let paragraph2 = document.querySelector('#Compte').innerText = 
`${ICname}
${ICstatus ? 'Online' : 'Offline'}
${ICdate}
`;  

// Faciliter la création d'Objet rapidement avec les Classe et une structure / Constructor
class Book {
    constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    }
}
  
// Création en 1 ligne
let firstBook = new Book('Dark Beginnings', 'Will Alexander', 135);
let secondBook = new Book('Tasavesh', 'Martine Aubry', 245);
let thirdBook = new Book('Voyage de Chihiro', 'Marlene Chiappa', 352);
let fourthBook = new Book('Terminator', 'Bob', 35);
let fiveBook = new Book('Terminator', 'Bob', 35);
  
//  Le tableau // Array // (selectione des objects créé et en fait une liste)
let Books = [firstBook, secondBook, thirdBook, fourthBook];

Books.push(fiveBook); // Push FiveBook dans Books et sans "" car sinon on ne push le mot sans l'objet
Books.unshift (fiveBook); // retire Fivebook 
Books.pop(); // supprimer le dernier élément du tableau donc fourth


// Chapitre 2 - If / Else 

// 1 :
// If / Else with true or flase

let UserLoggedIn = true;
// si vrai = if
if (UserLoggedIn) {
   console.log("Utilisateur connecté");
   // si faux = else
} else {
   console.log("Alerte !");
}

// 2 : 
// If / Else with Symbol comparaison
// Symbol are : >, <, >=, <=, ==, != 

// Exemple de valeures
const numberOfSeats = 30;
const numberOfGuests = 25;

// 2 possibilités
if (numberOfGuests < numberOfSeats) {
// Il y a de la place
} else {
// Attention il n'y a plus de place
}

// 3 possibilité en empilant les conditions  
if (numberOfGuests == numberOfSeats) {
    // tous les sièges sont occupés
    } else if (numberOfGuests < numberOfSeats) {
    // autoriser plus d'invités
    } else {
    // ne pas autoriser de nouveaux invités il y a trop de personne 
    }

// Exemple possible avec un appel de fonction 

// Les Variables
const ageMajorite = 18;
let age;

// on définis l'endroit de saisie pour age
const ageInput = document.getElementById("age");

// On définis ce qu'est "espaceMessage" dans le html pour le target avec la fonction
const espaceMessage = document.getElementById("message");

// Les Fonctions
function valider(){
espaceMessage.innerHTML = "Vous êtes autorisé à entrer";
}

function refuser(){
espaceMessage.innerHTML = "Vous n'avez pas l'âge requis";
}

// La conditions
    if (age > ageMajorite) {
        valider();
      } else {
        refuser();
      }

// on vide ensuite le champ de saisie 
ageInput.value = "";


// Les différents = et != :
// == c'est : 5 == "5" valeur identique mais pas le type l'un est nombre l'autre un string
// === c'est : 5 === 5 car même valeure et même type
// != c'est : 5 != "4" car pas la même valeure
// !== c'est : 5 !== "5" car pas le même type 



// Les conditions multiples et variables pour imager 

let userLoggedIn = true;
let PremiumAccount = true;
let MegaPremiumAccount = false;

// && si les 2 sont vrai = Tous vos (ET logique)
userLoggedIn && PremiumAccount; // true
userLoggedIn && MegaPremiumAccount; // false

// || si une des 2 est vrai = Un de (OU logique)
userLoggedIn || PremiumAccount; // true
userLoggedIn || MegaPremiumAccount; // true

// ! pour vérifier si que la condition est bien fausse = Si Faux (NON logique)
!userLoggedIn; // false - car user est en ligne
!MegaPremiumAccount; // true - car il n'a pas le metapremium 

// Exemple de conditions if 
if(age < ageMajorite && isControlParentalActive){
    refuser();
  }else{
    valider();
  }


// Attention à l'endroit ou l'on déclare les variables
// Ici on déclare welcomemessage non pas dans if mais dans parent pour être utiliser par le console log 
// Ne jamais déclarer des variables dans if pour les utiliser ailleurs

userLoggedIn = true;
let welcomeMessage = ''; // déclarer la variable ici

if (userLoggedIn) {
welcomeMessage = 'Welcome back!'; // modifier la variable extérieure
} else {
welcomeMessage = 'Welcome new user!'; // modifier la variable extérieure
}

console.log(welcomeMessage); // imprime 'Welcome back!'


// Vérifier avec SWITCH une information au seins d'une base de donnée ? 

//les utilisateurs
let firstUser = {
    name: "Will Alexander",
    age: 33,
    accountLevel: "normal"
};
    
let secondUser = {
    name: "Sarah Kate",
    age: 21,
    accountLevel: "premium"
};
    
let thirdUser = {
    name: "Audrey Simon",
    age: 27,
    accountLevel: "mega-premium"
};

// Switch pour réagir différement selon une listes de réponses possible
// Pourrait avoir une réaction sous forme d'images chargé / taille / etc etc

switch (firstUser.accountLevel) {

    case 'normal':
          console.log('You have a normal account!');
    break;
// Sans le break ce sera la commandes en dessous = premium qui sera définis 
// alors que le but c'est que ce soit le message normal qui sois envoyé pour un compte 'normal'

    case 'premium':
          console.log('You have a premium account!');
    break;

    case 'mega-premium':
          console.log('You have a mega premium account!');
    break;

    // default éxécuté quand aucune variable n'a été trouvé à la place
    default:
          console.log('Unknown account type!');
    }

// La fonction Switch permet d'éviter des regles if -- else if -- else if 
// qui s'enchaine à répétition c'est donc plus facile à lire 


// Chapitre 3 - Les boucles : For / While

// exemple : pour NombrePassager
// let i dans la boucle permet utilisable uniquement dans cette boucle

// Boucle for = déterminé par le nombre de x va être éxécuté
const NombrePassager = 10;
for (let i = 0; i < NombrePassager; i++) {
   console.log("Un passager de plus à bord !");
}
// conclusion car post boucle
console.log("Tous les passagers sont embarqués !");


// Boucle (i) IN = permet de naviguer à l'intérieur d'un object 
const ListePassager = [
"Will Alexander",
"Sarah Kate'",
"Audrey Simon",
"Tao Perkington"
]
// la console logs nous dit qui est le prochain sur la liste
for (let i in ListePassager) {
console.log("Embarquement du passager " + ListePassager[i]);
}

// Boucle OFF = si l'indice i n° passager n'est pas utile
const ListePassager2 = [
    "Will Alexander",
    "Sarah Kate",
    "Audrey Simon",
    "Tao Perkington"
]

// la boucle 
for (let Passager of ListePassager2) {
console.log("Embarquement du passager " + Passager);
}

// 2eme exemple Boucle OFF avec un tableau a 2 informations 
const passengers = [
    {
    name: "Will Alexander",
    ticketNumber: 209542
    },
    
    {
    name: "Sarah Kate",
    ticketNumber: 169336
    },
    
    {
    name: "Audrey Simon",
    ticketNumber: 779042
    },
    
    {
    name: "Tao Perkington",
    ticketNumber: 703911
    }
    ]

// La boucle 
    for (let passenger of passengers) {
       console.log('Embarquement du passager ' + passenger.name + ' avec le ticket numéro ' + passenger.ticketNumber);
    }

// Exemple cours : changer tout les hasbeenwatched d'un objet d'un tableau
class Episode {
constructor(title, duration, hasBeenWatched) {
    this.title = title;
    this.duration = duration;
    this.hasBeenWatched = hasBeenWatched;
    }
}
      
let episodes = [
    new Episode('Dark Beginnings', 45, true),
    new Episode('The Mystery Continues', 45, false),
    new Episode('An Unexpected Climax', 60, false)
];
      
// Réponse exercice :       
for (let episode of episodes) {
episode.hasBeenWatched = false;
}
// on target via : episode et non episodes car il y a une classe à l'intérieur

// 
//
// Les boucles while : continue tant que la conditions est remplis
let PlaceDisponible = 10;
let PassagerPresent = 0;
let PassagerAbsent = 8;

while (PlaceDisponible > 0 && PassagerAbsent > 0) {
PassagerPresent++; // un passager embarque
PassagerAbsent--; // donc il y a un passager de moins à embarquer
PlaceDisponible--; // et un siège de moins
}

console.log(PassagerPresent); // imprime 8, car il y a 8 passagers pour 10 sièges

// le but est d'arrivé à 0 en nombre de place ou passager absent 
// nombre de place 0 = plus de place (sachant qu'on aura pas vendu plus que 10 places
// nombre passager absent = 0 // trop tard pour ceux qui n'ont pas acheté de place)
// Boucle validé tout le monde est là 

// Chapitre 4 - Gestion des erreurs (3 grand type d'erreurs)
// 1 Syntaxe - 2 Logique - 3 Execution (pb internet / base de données etc ?)
// 1 & 2 = relecture 
// 3 = Anticipation via Gestion exceptions

// methode 1 : if / else = gestion
if (dataExists && dataIsValid) {
    // utiliser les données ici
    } else {
    // gérer l'erreur ici
    }

// methode 2 : try / catch = réactions 
    try {
        // code susceptible à l'erreur ici
    } catch (error) {
        // réaction aux erreurs ici
    }





