
//Dichiarazione e controllo variabile km inserita dall' utente
var km = prompt("Inserisci la distanza (km) del percorso");
//Dichiarando la variabile in while non ha più valore all' esterno
while ( isNaN(km) || km < 0 ) {
  alert("La distanza inserita non è valida");
  var km = prompt("Inserisci la distanza (km) del percorso");
}

//Dichiarazione e controllo variabile age inserita dall' utente
var age = prompt("Inserisci l' età del passeggero");

while ( isNaN(age) || age < 0 ) {
  alert("L' età inserita non è valida");
  var age = prompt("Inserisci l' età del passeggero");
}

//Calcolo valori di sconto e prezzo
var prezzoIntero = ( km * 0.21 ),
    scontoU18 = (  km * 0.21 * 0.20 ),
    scontoO65 = (  km * 0.21 * 0.40);

//Calcolo prezzo scontato
if ( age < 18 ) {
  prezzo = prezzoIntero - scontoU18;
  //Risulatato su schermo
  alert("il passeggero ha diritto a uno sconto del 20%");
  alert( "Il prezzo del biglietto è: " + prezzo.toFixed(2) + "€" );
} else if ( age >= 65  ) {
  prezzo = prezzoIntero - scontoO65;
  //Risulatato su schermo
  alert("il passeggero ha diritto a uno sconto del 40%");
  alert( "Il prezzo del biglietto è: " + prezzo.toFixed(2) + "€" );
} else {
  //Risulatato su schermo
  alert( "Il prezzo del biglietto è: " + prezzoIntero.toFixed(2) + "€" );
}

//Riepilogo impaginato
document.getElementById('user_age').innerHTML = "età: " + age + " anni";
document.getElementById('user_distance').innerHTML = "Distanza: " + km + " km";
document.getElementById('user_ncost').innerHTML = prezzoIntero;

if ( age < 18 ) {
  document.getElementById('user_discount').innerHTML = scontoU18.toFixed(2);
  document.getElementById('user_fcost').innerHTML = prezzo.toFixed(2);
} else if ( age >= 65  ) {
  document.getElementById('user_discount').innerHTML = scontoO65.toFixed(2);
  document.getElementById('user_fcost').innerHTML = prezzo.toFixed(2);
} else {
  document.getElementById('user_discount').innerHTML = "0";
  document.getElementById('user_fcost').innerHTML = prezzoIntero.toFixed(2);
}
