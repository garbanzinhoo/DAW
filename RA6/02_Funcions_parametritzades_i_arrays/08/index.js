"use strict";

import { intercanviar } from "../../utils/validacions2.js";

/*
8 - Ordenar arrays
Fes una funció per ordenar un array de strings.
Pots afegir un paràmetre opcional per fer que ordeni inversament.
*/

const fruites = ["pera", "poma", "albercoc", "maduixa", "kiwi"];

alert("Original: " + fruites.join(", ") +
      "\nOrdenat: " + ordenarStrings(fruites).join(", ") +
      "\nOrdenat al revés: " + ordenarStrings(fruites, true).join(", "));

// inversa = false ordena de la A a la Z; inversa = true de la Z a la A
function ordenarStrings(llista, inversa = false){
    const copia = llista.slice();
    for (let i = 0; i < copia.length - 1; i++){
        for (let j = 0; j < copia.length - 1 - i; j++){
            const comparacio = copia[j].localeCompare(copia[j + 1]);
            if ((!inversa && comparacio > 0) || (inversa && comparacio < 0)){
                intercanviar(copia, j, j + 1);
            }
        }
    }
    return copia;
}
