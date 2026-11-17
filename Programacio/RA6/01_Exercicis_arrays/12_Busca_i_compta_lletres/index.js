"use strict";

/*
12 - Buscar i comptar lletres
Genera 80 lletres aleatòriament entre la ‘A’ i la ‘Z’, guarda-les en un array i mostra-les.

Compta quantes vegades apareix cada lletra.
*/

const ABECEDARI = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


function generarlletres(valor) {
    const LLETRES = [];
    for (let i = 0; i < valor; i++) {
        LLETRES.push(ABECEDARI[Math.floor(Math.random() * ABECEDARI.length)]);
    }
    return LLETRES;
}

// Compta quantes vegades apareix una lletra concreta dins d'una llista
function comptarLletres(llista, lletra) {
    let comptador = 0;

    // Recorrem la llista lletra per lletra
    for (let i = 0; i < llista.length; i++) {
        // Si la lletra de la posició actual és la que busquem, sumem 1
        if (llista[i] === lletra) {
            comptador++;
        }
    }

    // Retornem quantes vegades l'hem trobat
    return comptador;
}

function main() {
    //Generem les 80 lletres
    const LLETRES = generarlletres(80);

    // Primer mostres l'array de les lletres separades amb un espai
    let resultat = "Lletres: " + LLETRES.join(" ") + "\n\n";

    //Per cada lletra de l'abecedari, comptem quantes vegades surt a LLETRES
    for (let i = 0; i < ABECEDARI.length; i++) {
        //Cridem a la funció per que compti quantes vegades surt la lletra i guardem el resultat
        resultat += ABECEDARI[i] + ": " + comptarLletres(LLETRES, ABECEDARI[i]) + "\n";
    }

    alert(resultat);
}

main();
