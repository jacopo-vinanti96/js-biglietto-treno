var km = prompt("Inserisci la distanza (km) del percorso"), age = prompt("Inserisci l' età del passeggero"), prezzo = ( km * 0.21 ), scontoU18 = (  km * 0.21 * 0.20), scontoO65 = (  km * 0.21 * 0.40);

if ( age < 18 ) {
  prezzo = prezzo - scontoU18;
} else if ( age >= 65  ) {
  prezzo = prezzo - scontoO65;
} else {
  alert(prezzo + "€")
}
