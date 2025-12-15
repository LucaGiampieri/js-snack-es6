/*Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore. */

//creiamo l'array di oggetti

const racingBike = [
    {
        "nome": 'bici velocissima',
        "peso": 20
    },
    {
        "nome": 'bici velocissima modello volante',
        "peso": 15
    },
    {
        "nome": 'bici velocissima modello blu',
        "peso": 28
    },
    {
        "nome": 'bici velocissima modello pesantissimo',
        "peso": 30
    },
    {
        "nome": 'bici velocissima ultraleggera',
        "peso": 12
    },
    {
        "nome": 'bici velocissima pro',
        "peso": 21
    },
    {
        "nome": 'bici velocissima dilettanti',
        "peso": 29
    },
    {
        "nome": 'bici velocissimissimissima',
        "peso": 10
    }
];

//andiamo a stamparlo per verificare che sia corretto
console.log(racingBike);

//creiamo un object con nome e peso che ci fungerà da partenza per il confronto con gli altri
let racingBikeikeLighter = racingBike[0];

//console.log(bikeLighter)

//creiamo un ciclo che vada a scorrere le bici e selezionare il peso
for (let i = 0; i < racingBike.length; i++) {
    //se il peso di dell'oggetto che stiamo valutando in questo momento è minore
    //(inizialmente) di quello che abbiamo settato di base (il primo)
    //e successivamente a quello che abbiamo decretato come più leggero fino a quel momento
    if (racingBike[i].peso < racingBikeikeLighter.peso) {
        //il valore di racingBikeLighter diventa quello che stiamo valutando al momento
        //altrimenti rimane quello precedente (o quello di partenza nel caso sia ancora lui)
        racingBikeikeLighter = racingBike[i];
    }
}

//andiamo a stmapare il risultato
console.log(racingBikeikeLighter);
