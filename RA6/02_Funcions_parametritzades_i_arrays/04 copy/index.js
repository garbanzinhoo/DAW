"use strict";


/*
4 - Crear array de N elements introduïts per l'usuari
Fes una funció per crear un array de N números enters demanant a l'usuari que introdueixi els valors i retornar aquest array. Pots utilitzar alguna de les funcions anteriors.

Paràmetre d'entrada: pregunta que se li ha de fer a l'usuari.
Paràmetre d'entrada: quants valors ha d'introduir l'usuari (opcionalment es pot afegir el valor mínim i el màxim).
Valor de retorn: l'array amb les dades introduïdes.
*/
import { esEnter, estaEntre } from "../../utils/validacions.js";
const MIN = 1;
const MAX = 100;
const MIN_QUANTITAT = 1;
const MAX_QUANTITAT = 10;

const quantitat = demanarEnter("Quants números vols introduir?", MIN_QUANTITAT, MAX_QUANTITAT);
const valors = crearArray("Introdueix un número enter", quantitat, MIN, MAX);
alert("Array: " + valors.join(", "));

function demanarEnter(pregunta, min, max) {
    let text;
    let valid;
    do {
        text = prompt(pregunta);
        valid = esEnter(text) && estaEntre(Number(text), min, max);
        if (!valid) {
            alert("ERROR: has d'introduir un número enter entre " + min + " i " + max + ".");
        }
    } while (!valid);
    return Number(text);
}

function crearArray(pregunta, n, min, max) {
    const llista = [];
    for (let i = 0; i < n; i++) {
        llista.push(demanarEnter(pregunta + " (" + (i + 1) + " de " + n + ")", min, max));
    }
    return llista;
}