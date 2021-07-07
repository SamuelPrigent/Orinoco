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

// Les classes / objets
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

// des raccourcis via dot pour les Admin 
let AdminAcess1 = InfoCompte.userid;
let AdminAcess2 = InfoCompte.Status;

// Paragraphe 2
let paragraph2 = document.querySelector('#Compte').innerText = 
`${ICname}
${ICstatus ? 'Online' : 'Offline'}
${ICdate}
`;

// Paragraphe 3
let paragraph3 = document.querySelector('#Admin').innerText = 
`${AdminAcess1}
${AdminAcess2 ? 'Online' : 'Offline'}
`;




