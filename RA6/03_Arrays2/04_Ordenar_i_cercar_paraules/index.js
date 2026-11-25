"use strict";

/*
4 - Ordenar i cercar paraules
*/

const NUM_PARAULES = 10;
const PARAULA_FI = "FI";

/**
 * Funció de comparació per ordenar textos alfabèticament (té en compte els accents)
 * @param a Primera paraula
 * @param b Segona paraula
 * @returns Negatiu si a va abans que b, 0 si són iguals, positiu si va després
 */
function ordreAlfabetic(a, b) {
    return a.localeCompare(b);
}

// Pas 1: demanar 10 paraules i guardar-les en l'array
let paraules = [];
for (let i = 0; i < NUM_PARAULES; i++) {
    let paraula;
    do {
        paraula = prompt("Paraula " + (i + 1) + " de " + NUM_PARAULES + ":").trim().toLowerCase();
    } while (paraula == "");
    paraules.push(paraula);
}

// Pas 2: ordenar en ordre ascendent en el mateix array i mostrar-les
paraules.sort(ordreAlfabetic);
alert("Paraules ordenades:\n" + paraules.join("\n"));

// Pas 3: buscar paraules amb la cerca binària fins que s'escrigui FI
let buscada = prompt("Quina paraula vols buscar? (" + PARAULA_FI + " per acabar)").trim();
while (buscada.toUpperCase() != PARAULA_FI) {
    buscada = buscada.toLowerCase();

    let min = 0;
    let max = paraules.length - 1;
    let posicio = -1;
    let comparacions = 0;

    while (min <= max && posicio == -1) {
        let mig = Math.floor((min + max) / 2);
        let resultat = buscada.localeCompare(paraules[mig]);
        comparacions++;
        if (resultat == 0) {
            posicio = mig;          // trobada
        } else if (resultat < 0) {
            max = mig - 1;          // és abans: descarto la meitat dreta
        } else {
            min = mig + 1;          // és després: descarto la meitat esquerra
        }
    }

    if (posicio != -1) {
        alert("\"" + buscada + "\" és a la posició " + posicio + ".\nComparacions: " + comparacions);
    } else {
        alert("\"" + buscada + "\" no és a la llista.\nComparacions: " + comparacions);
    }

    buscada = prompt("Quina paraula vols buscar? (" + PARAULA_FI + " per acabar)").trim();
}

alert("Fi del programa");
