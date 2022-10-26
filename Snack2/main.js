//Il software deve chiedere per 5 volte all’utente di inserire un numero.Il programma stampa la somma di tutti i numeri inseriti.

let somma = 0 
let x = 5
let i = 0

while (i < x) {
    let numeri = parseInt(prompt('inserisci un numero'))
    somma += numeri
    i++
}
console.log(somma)