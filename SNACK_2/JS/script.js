/*Snack2
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console. */

//andiamo a creare un array di oggetti
const serieA = [
    { 'nome': 'Atalanta', 'punti': 0, 'falliSubiti': 0 },
    { 'nome': 'Bologna', 'punti': 0, 'falliSubiti': 0 },
    { 'nome': 'Cagliari', 'punti': 0, 'falliSubiti': 0 },
    { 'nome': 'Como', 'punti': 0, 'falliSubiti': 0 },
    { 'nome': 'Empoli', 'punti': 0, 'falliSubiti': 0 },
    { 'nome': 'Fiorentina', 'punti': 0, 'falliSubiti': 0 },
    { 'nome': 'Genoa', 'punti': 0, 'falliSubiti': 0 },
    { 'nome': 'Hellas Verona', 'punti': 0, 'falliSubiti': 0 },
    { 'nome': 'Inter', 'punti': 0, 'falliSubiti': 0 },
    { 'nome': 'Juventus', 'punti': 0, 'falliSubiti': 0 },
    { 'nome': 'Lazio', 'punti': 0, 'falliSubiti': 0 },
    { 'nome': 'Lecce', 'punti': 0, 'falliSubiti': 0 },
    { 'nome': 'Milan', 'punti': 0, 'falliSubiti': 0 },
    { 'nome': 'Monza', 'punti': 0, 'falliSubiti': 0 },
    { 'nome': 'Napoli', 'punti': 0, 'falliSubiti': 0 },
    { 'nome': 'Parma', 'punti': 0, 'falliSubiti': 0 },
    { 'nome': 'Roma', 'punti': 0, 'falliSubiti': 0 },
    { 'nome': 'Torino', 'punti': 0, 'falliSubiti': 0 },
    { 'nome': 'Udinese', 'punti': 0, 'falliSubiti': 0 },
    { 'nome': 'Venezia', 'punti': 0, 'falliSubiti': 0 }
];


//creiamo una funzione che genera numeri randominci in range
function getRandomNumInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//creiamo un array vuoto in cuoi andremo ad inserire i falli subiti e il nome della squadra
let serieAFouls = [];

//andiamo a innestare i punti e falli nel nostro array
for (let i = 0; i < serieA.length; i++) {
    //inseriamo i punti in un range tra 50 e 100
    serieA[i].punti = getRandomNumInRange(50, 100);
    //inseriamo i falli subiti tra un range di 200 e 300
    serieA[i].falliSubiti = getRandomNumInRange(200, 300);
    //puschiamo all'interno del nuovo array il nome della squadra e i falli subiti
    serieAFouls.push({ nome: serieA[i].nome, falliSubiti: serieA[i].falliSubiti });
}

//andiamo a vedere chi ha vinto il campionato 
let serieAWinner = serieA[0];
let serieAWinnerName = '';
let serieAWinnerPoints = 0;


for (let i = 0; i < serieA.length; i++) {
    if (serieA[i].punti > serieAWinner.punti) {
        serieAWinner = serieA[i];
        serieAWinnerName = serieA[i].nome;
        serieAWinnerPoints = serieA[i].punti;
    }
}

//e chi ha subito più falli
let serieAFoulsWinner = serieA[0];
let serieAFoulsWinnerName = '';
let serieAFoulsWinnerNumber = 0;

for (let i = 0; i < serieA.length; i++) {
    if (serieA[i].falliSubiti > serieAFoulsWinner.falliSubiti){
        serieAFoulsWinner = serieA[i];
        serieAFoulsWinnerName = serieA[i].nome;
        serieAFoulsWinnerNumber = serieA[i].falliSubiti;
    }
}

//andiamo a stampare per verificare la corettezza
console.log(serieA);
console.table(serieAFouls);
console.log(`il vincitore del campionato con ${serieAWinnerPoints} punti è la squdra: ${serieAWinnerName}`);
console.log(`la squadra con più falli subiti (${serieAFoulsWinnerNumber}) è la squdra: ${serieAFoulsWinnerName}` );

