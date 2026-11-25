"use strict";

/*
2 - El xifrat del Cèsar
*/

import { demanarEnterEntre } from "../../utils/validacions2.js";

const ABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const MIN_DESPLACAMENT = 1;
const MAX_DESPLACAMENT = 25;

// Demanar la frase i el desplaçament (opcional de l'enunciat)
let frase = prompt("Escriu una frase:");
let desplacament = demanarEnterEntre("Quin desplaçament vols?", MIN_DESPLACAMENT, MAX_DESPLACAMENT);

// Pas 1: convertir l'string en un array de caràcters (en majúscules)
let lletres = frase.toUpperCase().split("");

// Pas 2: xifrar cada caràcter en el mateix array
for (let i = 0; i < lletres.length; i++) {
    let posicio = ABC.indexOf(lletres[i]);
    // Si no és una lletra (espai, coma, número...) es deixa igual
    if (posicio != -1) {
        let novaPosicio = (posicio + desplacament) % ABC.length;
        lletres[i] = ABC.charAt(novaPosicio);
    }
}

// Pas 3: convertir l'array a string i mostrar-lo
let xifrat = lletres.join("");
alert(xifrat);
