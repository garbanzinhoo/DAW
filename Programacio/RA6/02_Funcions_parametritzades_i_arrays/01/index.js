"use strict";

/*
1 - Crear un array de N números enters inicialitzat amb un valor V
Fes una funció per crear un array amb N números enters, inicialitzar totes les posicions amb un valor concret (V) i retornar aquest array.

Paràmetres d'entrada: N (nombre d'elements de l'array: número enter) i V (valor per inicialitzar els elements de l'array: número enter).

Resum: Una funció que demani la longitud de l'array y el numero que ha de tindre "repetit"

*/

import { esEnter } from "../../utils/validacions.js";

let longitud = prompt("Digues la longitud de l'array:");
let valor = prompt("Digues el valor:");

generarNumeros(longitud, valor);

function generarNumeros(n, v) {
    if (esEnter(n) && esEnter(v)) {
        const FINAL = [];
        for (let i = 0; i < Number(n); i++) {
            FINAL.push(Number(v));
        }
        alert(FINAL);
    } else {
        alert("No has introduït un número enter");
    }
}
