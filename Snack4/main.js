//In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
//Interrompi il ciclo appena il nome è stato trovato.

arr = ['carlo', 'francesco', 'luigi']
let soldatino = false
let i = 0

while ( i < arr.length ) {
   let nome = prompt('inserisci il tuo nome')

   if ( nome == arr[i] ){
      soldatino = true
   }
   i++
}  

if (nome = true){
   console.log ('puoi partecipare')
}  else {
   console.log ('non puoi partecipare')
}


