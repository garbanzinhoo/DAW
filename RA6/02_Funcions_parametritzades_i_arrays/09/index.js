"use strict";

/*
9 - Cerca binària en arrays ordenats
Fes una funció per cercar en un array ordenat la posició d'un element determinat.
Si no el troba, ha de retonar -1.
*/

const numeros = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];

alert("Array: " + numeros.join(" ") +
      "\nPosició del 23: " + cercaBinaria(numeros, 23) +
      "\nPosició del 2: " + cercaBinaria(numeros, 2) +
      "\nPosició del 91: " + cercaBinaria(numeros, 91) +
      "\nPosició del 10: " + cercaBinaria(numeros, 10));

function cercaBinaria(llista, valor){
    let inici = 0;
    let fi = llista.length - 1;
    while (inici <= fi){
        const mig = Math.floor((inici + fi) / 2);
        if (llista[mig] == valor){
            return mig;
        } else if (llista[mig] < valor){
            inici = mig + 1;   // el valor està a la meitat de la dreta
        } else {
            fi = mig - 1;      // el valor està a la meitat de l'esquerra
        }
    }
    return -1;
}
