"use strict";

/*
6 - Desplaçar els elements d'un array
Fes una funció per desplaçar els elements cap a l'esquerra (el primer al final, el segon al primer...).
Fes una funció per desplaçar els elements cap a la dreta (l'últim a principi, el primer al segon...).

Fes també una funció que permeti desplaçar a la dreta o a l'esquerra utilitzant un paràmetre booleà per indicar la direcció, i que aprofiti les funcions creades anteriorment.

Aprofitant la funció anterior, fes una funció que permeti desplaçar un número determinat de posicions a la dreta o a l'esquerra.
*/

const numeros = [1, 2, 3, 4, 5];

alert("Original: " + numeros.join(" ") +
      "\nEsquerra: " + desplacarEsquerra(numeros).join(" ") +
      "\nDreta: " + desplacarDreta(numeros).join(" ") +
      "\nDreta (true): " + desplacar(numeros, true).join(" ") +
      "\nEsquerra (false): " + desplacar(numeros, false).join(" ") +
      "\n2 posicions a la dreta: " + desplacarPosicions(numeros, 2, true).join(" ") +
      "\n2 posicions a l'esquerra: " + desplacarPosicions(numeros, 2, false).join(" "));

// El primer element passa al final i els altres avancen una posició
function desplacarEsquerra(llista){
    const copia = llista.slice();
    if (copia.length > 0){
        const primer = copia[0];
        for (let i = 0; i < copia.length - 1; i++){
            copia[i] = copia[i + 1];
        }
        copia[copia.length - 1] = primer;
    }
    return copia;
}

// L'últim element passa al principi i els altres retrocedeixen una posició
function desplacarDreta(llista){
    const copia = llista.slice();
    if (copia.length > 0){
        const ultim = copia[copia.length - 1];
        for (let i = copia.length - 1; i > 0; i--){
            copia[i] = copia[i - 1];
        }
        copia[0] = ultim;
    }
    return copia;
}

// dreta = true desplaça a la dreta, dreta = false a l'esquerra
function desplacar(llista, dreta){
    if (dreta){
        return desplacarDreta(llista);
    } else {
        return desplacarEsquerra(llista);
    }
}

// Desplaça 'posicions' vegades en la direcció indicada
function desplacarPosicions(llista, posicions, dreta){
    let resultat = llista.slice();
    for (let i = 0; i < posicions; i++){
        resultat = desplacar(resultat, dreta);
    }
    return resultat;
}
