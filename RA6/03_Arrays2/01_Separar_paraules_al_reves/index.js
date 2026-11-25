"use strict";

/*
1 - Separar paraules i escriure-les al revés
*/

let frase = prompt("Escriu una frase:");

// Pas 1: separar per espais i mostrar cada paraula en una línia
const paraules = frase.split(" ");
let resultat1 = "";
for (let i = 0; i < paraules.length; i++) {
    resultat1 += paraules[i] + "\n";
}
alert(resultat1);

// Pas 2: separar els trossos quan hi hagi una coma i un espai
const trossos = frase.split(", ");
let resultat2 = "";
for (let i = 0; i < trossos.length; i++) {
    resultat2 += trossos[i] + "\n";
}
alert(resultat2);

// Pas 3: mostrar els trossos en una sola línia en ordre invers
let resultat3 = "";
for (let i = trossos.length - 1; i >= 0; i--) {
    resultat3 += trossos[i];
    // Afegir un espai entre trossos, però no després de l'últim
    if (i > 0) {
        resultat3 += " ";
    }
}
alert(resultat3);
