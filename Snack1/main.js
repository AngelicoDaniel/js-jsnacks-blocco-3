// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array.Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50.


let number = parseInt(prompt('inserisci un numero'));
let somma = 0
let arr = [];

while ( somma < 50 ) {
    let number = parseInt(prompt('inserisci un numero'));
    somma += number;
    arr.push(number);
    somma++
}
console.log(arr)