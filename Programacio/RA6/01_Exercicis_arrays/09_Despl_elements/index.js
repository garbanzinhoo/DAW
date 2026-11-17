"use strict";

/*
9 - Desplaçar els elements d'una llista
Genera 10 lletres aleatòriament entre la ‘A’ i la ‘Z’, guarda-les en un array i mostra-les.
Desplaça totes les lletres a la següent posició (la primera a la posició 2, la de la 2 a la 3, etc) i l’última lletra haurà d’anar a la primera posició. Aquesta operació s’anomena rotació.

Opcionalment, fes que el programa demani a l’usuari quin desplaçament vol fer (entre 1 i 9) i fes la rotació (desplaçament) corresponent.
*/

const ABECEDARI = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

function generarLletres(quantitat){
    const lletres = [];
    for (let i = 0; i < quantitat; i++){
        lletres.push(ABECEDARI[Math.floor(Math.random() * ABECEDARI.length)]);
    }
    return lletres;
}

// Rota cap a la dreta: l'element a la posició i passa a (i + posicions) % longitud
function desplaçar(lletres, posicions){
    const resultat = [];
    for (let i = 0; i < lletres.length; i++){
        resultat[(i + posicions) % lletres.length] = lletres[i];
    }
    return resultat;
}

function main(){
    const LLETRES = generarLletres(10);
    alert("Lletres: " + LLETRES);
    alert("Desplaçades: " + desplaçar(LLETRES, 1));
}

main();
