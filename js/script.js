// 1 Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età

var studente = {

  nome: "alfredo",

  cognome: "ficocelli",

  eta: 34

};

// 2 Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.

for ( var key in studente ) {

  console.log(key + " --> " + studente[key]);

}

// 3 Creare un array di oggetti di studenti

var studenti = [
  {
    nome: "alfredo",

    cognome: "ficocelli",

    eta: 34
  },

  {
    nome: "luca",

    cognome: "rossi",

    eta: 32
  },

  {
    nome: "giorgio",

    cognome: "bianchi",

    eta: 30
  },

];



// 4 Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.

for (var i = 0; i < studenti.length; i++){

  console.log( studenti[i].nome + " " + studenti[i].cognome);

}

// 5 Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

var newStudent = {};

var nuovoNome = prompt("inserisci nome del nuovo studente");

newStudent.nome = nuovoNome;

var nuovoCognome = prompt("inserisci cognome del nuovo studente");

newStudent.cognome = nuovoCognome;

var nuovaEta = parseInt(prompt("inserisci età del nuovo studente"));

newStudent.eta = nuovaEta;

console.log(newStudent);

studenti.push(newStudent);

console.log(studenti);
