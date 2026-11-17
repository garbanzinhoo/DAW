"use strict";

/*
11 - Buscar i comptar dígits
Genera un array amb 20 números enters aleatoris entre 0 i 9 i mostra els elements separats per un espai.
Escriu quantes vegades apareix cada dígit.
*/

function generarNumeros(quantitat) {
    const LLISTA = [];
    for (let i = 0; i < quantitat; i++) {
        LLISTA.push(Math.floor(Math.random() * 10));
    }
    return LLISTA;
}

// Retorna quantes vegades apareix un dígit dins l'array
function comptarDigit(llista, digit) {
    let comptador = 0;
    for (let i = 0; i < llista.length; i++) {
        if (llista[i] == digit) {
            comptador++;
        }
    }
    return comptador;
}

// Retorna un text amb quantes vegades apareix cada dígit del 0 al 9
function resumDigits(llista) {
    let resum = "";
    for (let digit = 0; digit < 10; digit++) {
        resum += "El " + digit + " apareix " + comptarDigit(llista, digit) + " vegades\n";
    }
    return resum;
}

// Programa principal
const NUMEROS = generarNumeros(20);
alert("Números: " + NUMEROS.join(" ") + "\n" + resumDigits(NUMEROS));