
//Dichiarazione e controllo variabile km inserita dall' utente
var km = prompt("Inserisci la distanza (km) del percorso");

while ( isNaN(km) ) {
  alert("La distanza inserita non è un valore numerico");
  var km = prompt("Inserisci la distanza (km) del percorso");
}

//Dichiarazione e controllo variabile age inserita dall' utente
var age = prompt("Inserisci l' età del passeggero");

while ( isNaN(age) ) {
  alert("L' età inserita non è un valore numerico");
  var age = prompt("Inserisci l' età del passeggero");
}

//Calcolo valori di sconto e prezzo
var prezzo = ( km * 0.21 ),
    scontoU18 = (  km * 0.21 * 0.20 ),
    scontoO65 = (  km * 0.21 * 0.40);

//Calcolo prezzo scontato
if ( age < 18 ) {
  prezzo = prezzo - scontoU18;
  alert("il passeggero ha diritto a uno sconto del 20%");
} else if ( age >= 65  ) {
  prezzo = prezzo - scontoO65;
  alert("il passeggero ha diritto a uno sconto del 40%");
}

//Risultato a schermo
alert( "Il prezzo del biglietto è: " + prezzo.toFixed(2) + "€" );
