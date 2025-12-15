/*Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore. */

//creiamo l'array di oggetti

const racingBike = [
    {
        "nome": 'bici velocissima',
        "peso": 30
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
        "peso": 50
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
        "peso": 37
    },
    {
        "nome": 'bici velocissimissimissima',
        "peso": 20
    }
];

//andiamo a stamparlo per verificare che sia corretto
console.log(racingBike);

//creiamo un ciclo che vada ascorrere le bici e selezionare il peso

//facciamo in modo di valutare quale sia la bici più leggera

//stampiamo in console la bici più leggera