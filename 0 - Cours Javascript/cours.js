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

// Chapitre 2 - La logique informatique 











