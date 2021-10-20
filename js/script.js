// inserisci nome, cognome e colore preferito
// output nome, cognome e colore 

/* 
1) Inizializzo variabili con dati
2) Scrivo nome, cognome e colore
*/

const nome = prompt('Come ti chiami?');
const cognome = prompt('Il tuo cognome?');
const colorePreferito = prompt('Colore preferito?');

console.log(nome);
console.log(cognome);
console.log(colorePreferito);

document.getElementById('stampa').innerHTML = `
     ${nome} ${cognome} ${colorePreferito} 21

`;
