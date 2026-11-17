"use strict";

/*
7 - Llistes barrejades
Fes un programa que, partint de dues llistes amb la mateixa mida, generi una nova llista intercalant els números de les dues anteriors. Al final ha de mostrar les 3 llistes.

Opcionalment, fes el mateix però sense suposar que les llistes tenen la mateixa mida.
*/
const PRIMERA = [1,1,1];
const SEGONA = [2,2,2];
const BARREJA = [];
for (let i = 0; i < PRIMERA.length; i++){
    BARREJA.push(PRIMERA[i])
    BARREJA.push(SEGONA[i])
}
alert(BARREJA)