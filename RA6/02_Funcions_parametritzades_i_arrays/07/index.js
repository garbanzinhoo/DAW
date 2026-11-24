"use strict";

import { intercanviar } from "../../utils/validacions2.js";

/*
7 - Barrejar els elements d'un array
Fes una funció per barrejar els elements d'un array.
Una possible forma és, per cada element de l'array (element[i]):
1. Generar un número aleatori entre 0 i el nombre d'elements de l'array (r).
2. Intercanviar l'element[i] amb l'element[r].
*/

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

alert("Original: " + numeros.join(" ") +
      "\nBarrejat: " + barrejar(numeros).join(" "));

function barrejar(llista){
    const copia = llista.slice();
    for (let i = 0; i < copia.length; i++){
        // r és una posició aleatòria de l'array (de 0 a length - 1)
        const r = Math.floor(Math.random() * copia.length);
        intercanviar(copia, i, r);
    }
    return copia;
}
