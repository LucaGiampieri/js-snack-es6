/*BONUS 
Crea 10 oggetti che rappresentano una zucchina.,
Dividi in due array separati le zucchine che misurano meno o più di 15cm.,
Infine stampa separatamente quanto pesano i due gruppi di zucchine. */

//creiamo all'array di oggetti con le zucchine
const zucchine = [
  { 'nome': 'Zucchina Napoli', 'peso': 150, 'lunghezza': 13 },
  { 'nome': 'Zucchina Romanesco', 'peso': 200, 'lunghezza': 16 },
  { 'nome': 'Zucchina Trombetta', 'peso': 150, 'lunghezza': 18 },
  { 'nome': 'Zucchina Siciliana', 'peso': 170, 'lunghezza': 14 },
  { 'nome': 'Zucchina Lunga Fiorentina', 'peso': 160, 'lunghezza': 17 },
  { 'nome': 'Zucchina Nera di Milano', 'peso': 190, 'lunghezza': 16 },
  { 'nome': 'Zucchina Regina', 'peso': 175, 'lunghezza': 15 },
  { 'nome': 'Zucchina Bianco Friulano', 'peso': 180, 'lunghezza': 16 },
  { 'nome': 'Zucchina Striata di Napoli', 'peso': 165, 'lunghezza': 14 },
  { 'nome': 'Zucchina Delica', 'peso': 140, 'lunghezza': 12 }
];

//creiamo due array in cui mettere in uno le zucchine sopra i 15cm e nell'altro quelle sotto

let zucchineUnder15 = [];
let zucchineOver15 = [];

//tramite un ciclo andiamo a separare quello sopra da quelle sotto i 15cm
for (let i = 0; i < zucchine.length; i++){
    //se sono maggiori o uguali a 15 cm
    if (zucchine[i].lunghezza >= 15){
        //le pushamo nell'array over15
        zucchineOver15.push(zucchine[i])
    } else {
        //altrimenti le pushamo nell'array under15
        zucchineUnder15.push(zucchine[i])
    }
}

//andiamo a controllare se abbiamo fatto correttamente
console.log(zucchineOver15, zucchineUnder15);

//ora andiamo a peare i due gruppi
//vreiamo due variabili per i due pesi

let zucchineOver15Weight = 0;
let zucchineUnder15Weight = 0;

//andiamo a sommare le zucchine over15
for (let i = 0; i < zucchineOver15.length; i++){
    zucchineOver15Weight += zucchineOver15[i].peso
}

//andiamo a sommare le zucchine under15
for (let i =0; i < zucchineUnder15.length; i++){
    zucchineUnder15Weight += zucchineUnder15[i].peso
}

//andiamo a stampare in console
console.log(`La somma del peso delle zucchine over 15cm è: ${zucchineOver15Weight} gr`)
console.log(`La somma del peso delle zucchine under 15cm è: ${zucchineUnder15Weight} gr`)