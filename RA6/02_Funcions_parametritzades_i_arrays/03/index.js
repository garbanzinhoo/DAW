"use strict";


/*
3 - Mostrar els valors d'un array bidimensional
Fes una funció per mostrar els valors d'un array bidimensional.

Paràmetre d'entrada: array bidimensional amb valors.

Per escriure cada una de les files de l'array es pot utilitzar la funció per mostrar els valors d'un array.

Afegeix un paràmetre per indicar quin separador es vol utilitzar per separar els elements de cada fila.
*/
const matriu = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];

mostrarValors(matriu, ",");

function mostrarValors (array, separador){
    let resultat = "";
    for (let i = 0; i < array.length; i++){
        for (let j = 0; j < array[i].length; j++){
            resultat += array[i][j] + separador;
        }
        resultat += "\n";
    }
    alert(resultat);
}