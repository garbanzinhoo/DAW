"use strict";

import { esEnter, estaEntre } from "../../utils/validacions.js";

/*
2 - Mostrar els valors d'un array
Fes una funció per mostrar els valors d'un array, un en cada línia.

Paràmetre d'entrada: array amb valors (números o text).

Modifica les funcions anteriors afegint un paràmetre per indicar si es vol mostrar cada dada afegint un salt de línia o tots en una línia separats per un espai.

Afegeix un paràmetre per indicar quin separador es vol utilitzar en lloc de l'espai si s'han de mostrar en una sola línia.

*/
const MIN = 1;
const MAX = 2;
menu();

function menu() {
    let opcio = Number(
        prompt(
            "------MENU------" +
            "\n1. Un per linia" +
            "\n2. Tots en una linia"
        ),
    );

    if (comprovaMenu(opcio)) {
        switch (opcio) {
            case 1: {
                const TEXT = prompt("Digues els valors separats per espai:").split("");
                unPerLinia(TEXT);
                break;
            }
            case 2: {
                const PALABRAS = prompt("Digues els valors:").split("");
                totsEnLinia(PALABRAS);
                break;
            }
        }
    } else {
        alert("Introdueix una dada vàlida");
    }
}

function comprovaMenu(opcio) {
    return esEnter(opcio) && estaEntre(opcio, MIN, MAX);
}


function unPerLinia (valors){
    let resultat = "";

    for(let i = 0; i < valors.length; i++){
        resultat += valors[i] + "\n";
    }
    alert(resultat);
}

function totsEnLinia (valors){
    alert(valors.join(" "))
}