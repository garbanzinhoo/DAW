"use strict";

import { intercanviar } from "../../utils/validacions2.js";

/*
5 - Invertir els elements d'un array
Fes una funció per invertir els elements d'un array (intercanviar el primer amb l'últim, el segon amb el penúltim...).
*/

const numeros = [10, 20, 30, 40, 50];

let resultat = invertirArray(numeros);

alert(resultat.join(" "));

function invertirArray(llista){
    let copia = llista.slice();
    for (let i = 0; i < Math.floor(copia.length / 2); i++){
        intercanviar(copia, i, copia.length - 1 - i);
    }
    return copia;
}