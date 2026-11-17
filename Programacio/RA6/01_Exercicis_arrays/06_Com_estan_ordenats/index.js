"use strict";

/*
6 - Com estan ordenats?
Partint d’una llista de números, dir si la llista està ordenada de més petit a més gran, de més gran a més petit o si no està ordenada.
*/

const NUMEROS = [1,2,3,4,5,6];

// Suposem que la llista és creixent i decreixent a la vegada.
// Quan trobem una prova que ho contradiu, posem la variable a false.
let creixent = true;
let decreixent = true;

// Comencem a i = 1 perquè comparem cada número amb l'anterior (i-1)
for (let i = 1; i < NUMEROS.length; i++){
    // Si l'actual és més petit que l'anterior, ja no pot ser de petit a gran
    if (NUMEROS[i] < NUMEROS[i-1]){
        creixent = false;
    }
    // Si l'actual és més gran que l'anterior, ja no pot ser de gran a petit
    if (NUMEROS[i] > NUMEROS[i-1]){
        decreixent = false;
    }
}

// Un cop acabat el bucle, mirem què ha quedat a true
// Cas especial: si tots són iguals (ex: [2,2,2]) les dues segueixen a true
if (creixent && decreixent){
    alert(NUMEROS + " : tots els números són iguals (ordenada en ambdós sentits)");
}else if (creixent){
    alert(NUMEROS + " : ordenada de més petit a més gran");
}else if (decreixent){
    alert(NUMEROS + " : ordenada de més gran a més petit");
}else{
    alert(NUMEROS + " : no està ordenada");
}