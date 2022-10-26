/* Fai inserire un numero, che chiameremo N, all’utente.
Genera N array,
ognuno formato da 10 numeri casuali da 1 a 100.
Ogni volta che ne crei uno, stampalo. */


let N = parseInt(prompt('inserisci un numero'))

let i = 0

while (i < N) {
    let arr = []
    while (arr.length < 10){
        arr.push(Math.floor(Math.random() * 100)+1)
    }
    console.log(arr)
    i++
}
