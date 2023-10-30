//1. Dare la possibilità di inserire due parole.
//Verificare tramite una funzione che le due parole abbiano la stessa lunghezza.
//Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.

function dueparole(parola1, parola2){
if (parola1.length > parola2.length){
    alert(`${parola1} è la più grande`);
}else if (parola1.length === parola2.length){
    alert(`sia la parola ${parola1} che ${parola2} sono uguali`);
}else{
    alert(`${parola2} è la più grande`);
}
}


let primaParola = prompt(`inserisci la prima parola`);
let secondaParola = prompt("inserisci la seconda parola");
dueparole(primaparola, secondaparola);



//2. Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC). Quindi, chiedere all’utente quale parola vuole girare.
//BONUS: se la parola scelta dall’utente è un palindromo, avvisalo

function argomento (parola){
    let rovescia = '';
    
    for (let i = parola.length - 1; i >=0; i--){  // 0 1 2 3 (Ciao) -> '' -> 'o' -> 'oa' 
     rovescia = rovescia + parola[i];
    }
    
    if(rovescia == parola){
    alert('la parola e un palindromo');
   
}else{
    alert('la parola non e palindromo');
} 
return rovescia;
}


let parolaUtente = prompt('inserisci una parola');
let parolaRovesciata = argomento(parolaUtente);

console.log(parolaRovesciata);
