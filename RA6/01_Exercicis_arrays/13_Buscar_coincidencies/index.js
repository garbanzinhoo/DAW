"use strict";

/*
13 - Buscar coincidències en dues llistes
Genera dues llistes amb 40 números aleatoris entre 0 i 9 i mostra-les.
Mostra totes les posicions en què coincideixen els números de les dues llistes i quin número és.
*/

function generarNumeros(quantitat) {
    const numeros = [];

    for (let i = 0; i < quantitat; i++) {
        numeros.push(Math.floor(Math.random() * 10));
    }
    return numeros;
}

//Li pasarem els dos arrays per que compari i retorna un array només amb les posicions on coincideixen
function buscarCoincidencies(llista1, llista2) {
    const posicions = [];

    for (let i = 0; i < llista1.length; i++) {
        // Si en la mateixa posició i hi ha el mateix número a les dues llistes, és una coincidència
        if (llista1[i] === llista2[i]) {
            posicions.push(i);
        }
    }

    return posicions;
}

function main() {
    const LLISTA1 = generarNumeros(40);
    const LLISTA2 = generarNumeros(40);

    //Busquem en quines posicions coincideixen
    const POSICIONS = buscarCoincidencies(LLISTA1, LLISTA2);

    //Primer les dues llistes separades per un espai
    let resultat = "Llista 1: " + LLISTA1.join(" ") + "\n";
    resultat += "Llista 2: " + LLISTA2.join(" ") + "\n\n";

    //Afegim les coincidències o un missatge si no n'hi ha cap
    if (POSICIONS.length === 0) {
        resultat += "No hi ha cap coincidència.";
    } else {
        for (let i = 0; i < POSICIONS.length; i++) {
            // El número el treiem de la llista 1 amb la posició guardada
            resultat += "Posició " + POSICIONS[i] +
                        ": número " + LLISTA1[POSICIONS[i]] + "\n";
        }
    }
    alert(resultat);
}

main();
