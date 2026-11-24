"use strict";

/*
8 - Sumar elements aparellats d'una llista
Genera una llista de 10 números enters aleatoris entre 0 i 99 i mostra-la.
Mostra la suma del primer amb el segon, del segon amb el tercer…. i del penúltim amb l’últim.

Fes el mateix però sumant el primer amb l'últim, el segon amb el penúltim...
*/

function generarNumeros(quantitat){
    const numeros = [];
    for (let i = 0; i < quantitat; i++){
        numeros.push(Math.floor(Math.random() * 100));
    }
    return numeros;
}

function sumaConsecutius(numeros){
    const sumas = [];
    for (let i = 0; i < numeros.length - 1; i++){
        sumas.push(numeros[i] + numeros[i + 1]);
    }
    return sumas;
}

function sumaPrimerUltim(numeros){
    const sumas = [];
    for (let i = 0; i < Math.floor(numeros.length / 2); i++){
        sumas.push(numeros[i] + numeros[numeros.length - 1 - i]);
    }
    return sumas;
}

function mostrar(){
    const NUMEROS = generarNumeros(10);
    alert(NUMEROS);
    alert(sumaConsecutius(NUMEROS));
    alert(sumaPrimerUltim(NUMEROS));
}
mostrar();
