"use strict";

/*
5 - Invertir array de lletres
Genera 10 lletres aleatòriament entre la ‘A’ i la ‘Z’ i guarda-les en un array.

Escriu totes les lletres de l’array.

Escriu totes les lletres de l’array en ordre invers.

Inverteix els elements de l’array (intercanvia el primer amb l’últim, el segon amb el penúltim, etc) i escriu les lletres de l’array en l’ordre en què hagin quedat.
*/
const ABECEDARI = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m","n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const LLETRES = [];
const ALREVES = [];
//bucle per afegir les 10 lletres al nou array
for (let i = 0; i < 10; i++){
    LLETRES.push(ABECEDARI[Math.floor(Math.random() * ABECEDARI.length)]);
}

alert(LLETRES);

//Bucle que posa les lletres al reves
for (let i = LLETRES.length - 1; i >= 0; i--) {
    ALREVES.push(LLETRES[i]);
}

alert(ALREVES);

// Intercanviem cada parella des dels extrems cap al centre
for (let i = 0; i < LLETRES.length / 2; i++){
    let temp = LLETRES[i];
    LLETRES[i] = LLETRES[LLETRES.length - 1 - i];
    LLETRES[LLETRES.length - 1 - i] = temp;
}
alert(LLETRES)