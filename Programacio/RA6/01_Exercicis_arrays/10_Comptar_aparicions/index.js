"use strict";

/*
10 - Buscar i comptar aparicions
Genera una llista amb 40 números aleatoris entre 0 i 9 i mostra-la.
Demana un número enter a l’usuari i mostra quantes vegades apareix i en quines posicions.
*/
const NUMEROS = numerosrandom();

function numerosrandom (){
    const NUMEROS = [];
    for (let i = 0; i < 40; i++){
        NUMEROS.push((Math.floor(Math.random() * 10)));
    }
    return NUMEROS
}

alert(NUMEROS)

function enter(){
    const valor = Number(prompt("Digues un numero enter:"));
    let nVegades = 0;
    const posicions = [];
    for (let i = 0; i < NUMEROS.length; i++){
        if (valor === NUMEROS[i]){
            nVegades++;
            posicions.push(i);
        }
    }
    return { valor, nVegades, posicions };
}

const RESULTAT = enter();
alert("El " + RESULTAT.valor + " apareix " + RESULTAT.nVegades +
      " vegades, a les posicions: " + RESULTAT.posicions);
