"use strict";
/* ============================ VALIDACIÓ ============================ */

// Retorna true si un valor és null, undefined o text buit/només espais
export function esBuit(valor){
    return (valor == null || String(valor).trim() == "");
}

// Retorna true si el valor és un número vàlid
export function esNumero(valor){
    return !esBuit(valor) && !isNaN(Number(valor));
}

// Retorna true si el valor és un número enter
export function esEnter(valor){
    return esNumero(valor) && Number.isInteger(Number(valor));
}

// Retorna true si el número és major que 0
export function esPositiu(valor){
    return esNumero(valor) && Number(valor) > 0;
}

// Retorna true si el número és menor que 0
export function esNegatiu(valor){
    return esNumero(valor) && Number(valor) < 0;
}

// Retorna true si el número és 0
export function esZero(valor){
    return esNumero(valor) && Number(valor) == 0;
}

// Retorna true si valor està entre min i max (inclosos)
export function estaEntre(valor, min, max){
    return valor >= min && valor <= max;
}

// Retorna true si l'opció és un enter dins del rang del menú
export function comprovaMenu(opcio, min, max) {
    return esEnter(opcio) && estaEntre(opcio, min, max);
}

// Retorna true si no és buit i no és només un número (ex: "Aitor" sí, "123" no)
export function esText(valor){
    return !esBuit(valor) && !esNumero(valor);
}

// Retorna true si el text només conté dígits del 0 al 9 (i no és buit)
export function nomesDigits(text){
    text = String(text);
    if (text.length == 0){
        return false;
    }
    for (let i = 0; i < text.length; i++){
        if (text[i] < "0" || text[i] > "9"){
            return false;
        }
    }
    return true;
}

// Retorna true si el valor és dins la llista d'opcions (array o text)
export function esOpcioValida(valor, opcions){
    return opcions.includes(valor);
}

// Retorna true si el text és "si", "sí" o "no" (sense mirar majúscules ni espais)
export function esSiNo(text){
    if (esBuit(text)){
        return false;
    }
    text = String(text).trim().toLowerCase();
    return text == "si" || text == "sí" || text == "no";
}

// Retorna true si és un número entre 0 i 100 (inclosos)
export function esPercentatge(valor){
    return esNumero(valor) && estaEntre(Number(valor), 0, 100);
}

// Retorna true si c és una sola lletra (inclou accents i ç)
export function esLletra(c){
    c = String(c);
    return c.length == 1 && c.toLowerCase() != c.toUpperCase();
}

// Retorna true si c és una vocal (inclou vocals amb accent i dièresi)
export function esVocal(c){
    c = String(c);
    return c.length == 1 && "aeiouàèéíïòóúü".includes(c.toLowerCase());
}

// Retorna true si c és una lletra majúscula
export function esMajuscula(c){
    return esLletra(c) && c == c.toUpperCase();
}

// Retorna true si c és una lletra minúscula
export function esMinuscula(c){
    return esLletra(c) && c == c.toLowerCase();
}

// Retorna true si el text té format HH:MM o HH:MM:SS amb valors correctes
export function esHoraValida(text){
    if (esBuit(text)){
        return false;
    }
    let parts = String(text).trim().split(":");
    if (parts.length != 2 && parts.length != 3){
        return false;
    }
    for (let i = 0; i < parts.length; i++){
        if (parts[i].length != 2 || !nomesDigits(parts[i])){
            return false;
        }
    }
    let hores = Number(parts[0]);
    let minuts = Number(parts[1]);
    let segons = 0;
    if (parts.length == 3){
        segons = Number(parts[2]);
    }
    return estaEntre(hores, 0, 23) && estaEntre(minuts, 0, 59) && estaEntre(segons, 0, 59);
}

// Retorna true si el text conté algun dels caràcters de la llista
export function teCaractersEspecials(text, llista = "!@#$%&*()_-+=[]{};:,.<>/?¿¡'\"\\|"){
    text = String(text);
    for (let i = 0; i < llista.length; i++){
        if (text.includes(llista[i])){
            return true;
        }
    }
    return false;
}


/* ======================= INTRODUCCIÓ DE DADES ======================= */

// Demana un número enter repetidament fins que l'usuari n'introdueixi un
export function demanarEnter(pregunta){
    let text = prompt(pregunta);
    while (!esEnter(text)){
        alert("ERROR: has d'introduir un número enter.");
        text = prompt(pregunta);
    }
    return Number(text);
}

// Demana un enter entre min i max (inclosos). Si min > max, els intercanvia
export function demanarEnterEntre(pregunta, min, max){
    if (min > max){
        let aux = min;
        min = max;
        max = aux;
    }
    let text = pregunta + " (entre " + min + " i " + max + ")";
    let numero = demanarEnter(text);
    while (!estaEntre(numero, min, max)){
        alert("ERROR: el número ha d'estar entre " + min + " i " + max + ".");
        numero = demanarEnter(text);
    }
    return numero;
}

// Demana un sol caràcter fins que sigui un dels de la llista d'opcions
export function introduirCaracter(pregunta, opcions){
    let caracter = prompt(pregunta);
    while (caracter == null || caracter.length != 1 || !opcions.includes(caracter)){
        alert("ERROR: has d'introduir un d'aquests caràcters: " + opcions);
        caracter = prompt(pregunta);
    }
    return caracter;
}


/* ============================== CÀLCUL ============================== */

//Retorna quin número es mes gran
export function esMesGran(valor1, valor2){
    if (valor1 > valor2){
        return valor1 + " és més gran que " + valor2;
    } else if (valor1 < valor2){
        return valor2 + " és més gran que " + valor1;
    } else {
        return "Són iguals";
    }
}

// Compara dos valors i retorna el símbol corresponent: ">", "<" o "="
export function compararSimbols(valor1, valor2){
    if (valor1 > valor2){
        return ">";
    } else if (valor1 < valor2){
        return "<";
    } else {
        return "=";
    }
}

// Calculadora: fa l'operació indicada (+, -, *, /, %) entre dos números
export function calculadora(num1, num2, operacio){
    if (!esNumero(num1) || !esNumero(num2)){
        return "Error: cal introduir números vàlids";
    }
    num1 = Number(num1);
    num2 = Number(num2);

    let resultat;

    switch (operacio){
        case "+":
            resultat = num1 + num2;
            break;
        case "-":
            resultat = num1 - num2;
            break;
        case "*":
            resultat = num1 * num2;
            break;
        case "/":
            if (num2 == 0){
                resultat = "Error: no es pot dividir entre 0";
            } else {
                resultat = num1 / num2;
            }
            break;
        case "%":
            if (num2 == 0){
                resultat = "Error: no es pot dividir entre 0";
            } else {
                resultat = num1 % num2;
            }
            break;
        default:
            resultat = "Error: operació no vàlida";
            break;
    }

    return resultat;
}

// Retorna el percentatge d'un valor (ex: 21% de 100 -> 21)
// Serveix per a descomptes, IVA, comissions...
export function calcularPercentatge(valor, percentatge){
    return valor * percentatge / 100;
}

// Retorna true si el saldo cobreix el total
export function validarSaldo(saldo, total){
    return Number(saldo) >= Number(total);
}

// Retorna un enter aleatori entre min i max (inclosos). Si min > max, els intercanvia
export function aleatori(min, max){
    if (min > max){
        let aux = min;
        min = max;
        max = aux;
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Retorna true si l'any és de traspàs
export function esTraspas(any){
    return (any % 4 == 0 && any % 100 != 0) || any % 400 == 0;
}

// Retorna els dies que té el mes (1-12) de l'any indicat, o -1 si el mes no és vàlid
export function diesMes(mes, any){
    if (!esEnter(mes) || !estaEntre(Number(mes), 1, 12)){
        return -1;
    }
    mes = Number(mes);
    if (mes == 2){
        if (esTraspas(any)){
            return 29;
        }
        return 28;
    } else if (mes == 4 || mes == 6 || mes == 9 || mes == 11){
        return 30;
    } else {
        return 31;
    }
}

// Passa un nombre de segons a text HH:MM:SS (ex: 3725 -> "01:02:05")
export function segonsAHoresMinutsSegons(segons){
    let hores = Math.floor(segons / 3600);
    let minuts = Math.floor((segons % 3600) / 60);
    let seg = segons % 60;
    return dosDigits(hores) + ":" + dosDigits(minuts) + ":" + dosDigits(seg);
}


/* ============================== STRINGS ============================= */

// Retorna el valor amb dos dígits com a mínim (ex: 5 -> "05", 12 -> "12")
export function dosDigits(valor){
    return String(valor).padStart(2, "0");
}

// Retorna el text invertit (ex: "hola" -> "aloh")
export function invertirText(text){
    let resultat = "";
    text = String(text);
    for (let i = text.length - 1; i >= 0; i--){
        resultat += text[i];
    }
    return resultat;
}

// Primera lletra en majúscula i la resta en minúscula (ex: "aITOR" -> "Aitor")
export function capitalitzar(text){
    text = String(text).trim();
    if (text.length == 0){
        return "";
    }
    return text[0].toUpperCase() + text.substring(1).toLowerCase();
}

// Retorna un array amb les paraules de la frase (ignora espais repetits)
export function separarParaules(frase){
    let trossos = String(frase).trim().split(" ");
    let paraules = [];
    for (let i = 0; i < trossos.length; i++){
        if (trossos[i] != ""){
            paraules.push(trossos[i]);
        }
    }
    return paraules;
}

// Retorna la primera paraula del text
export function primeraParaula(text){
    text = String(text).trim();
    let espai = text.indexOf(" ");
    if (espai == -1){
        return text;
    }
    return text.substring(0, espai);
}

// Retorna les inicials de cada paraula en majúscula (ex: "unió europea" -> "UE")
export function acronim(frase){
    let paraules = separarParaules(frase);
    let resultat = "";
    for (let i = 0; i < paraules.length; i++){
        resultat += paraules[i][0].toUpperCase();
    }
    return resultat;
}

// Retorna un array amb les vocals (a, e, i, o, u) que no apareixen a la paraula
export function vocalsQueFalten(paraula){
    paraula = String(paraula).toLowerCase();
    let vocals = ["a", "e", "i", "o", "u"];
    let variants = ["aà", "eèé", "iíï", "oòó", "uúü"];
    let falten = [];
    for (let i = 0; i < vocals.length; i++){
        let trobada = false;
        for (let j = 0; j < variants[i].length; j++){
            if (paraula.includes(variants[i][j])){
                trobada = true;
            }
        }
        if (!trobada){
            falten.push(vocals[i]);
        }
    }
    return falten;
}

// Retorna "majúscules", "minúscules", "barrejades" o "sense lletres"
export function tipusMajuscules(paraula){
    paraula = String(paraula);
    if (paraula.toUpperCase() == paraula.toLowerCase()){
        return "sense lletres";
    } else if (paraula == paraula.toUpperCase()){
        return "majúscules";
    } else if (paraula == paraula.toLowerCase()){
        return "minúscules";
    } else {
        return "barrejades";
    }
}

// Diu quina de les dues paraules va abans alfabèticament
export function comparaParaules(p1, p2){
    let resultat = String(p1).localeCompare(String(p2));
    if (resultat < 0){
        return p1 + " va abans que " + p2;
    } else if (resultat > 0){
        return p2 + " va abans que " + p1;
    } else {
        return "Són iguals";
    }
}

// Retorna una lletra majúscula aleatòria de l'abecedari
export function lletraAleatoria(){
    return ABECEDARI[aleatori(0, ABECEDARI.length - 1)];
}


/* ============================== ARRAYS ============================== */

// Intercanvia els elements de les posicions i i j (modifica l'array)
export function intercanviar(llista, i, j){
    let temp = llista[i];
    llista[i] = llista[j];
    llista[j] = temp;
}

// Retorna un array amb 'quantitat' enters aleatoris entre min i max
export function generarNumeros(quantitat, min, max){
    let numeros = [];
    for (let i = 0; i < quantitat; i++){
        numeros.push(aleatori(min, max));
    }
    return numeros;
}

// Retorna un array amb 'quantitat' lletres aleatòries
export function generarLletres(quantitat){
    let lletres = [];
    for (let i = 0; i < quantitat; i++){
        lletres.push(lletraAleatoria());
    }
    return lletres;
}

// Retorna quantes vegades apareix el valor (serveix per arrays i per textos)
export function comptar(llista, valor){
    let comptador = 0;
    for (let i = 0; i < llista.length; i++){
        if (llista[i] == valor){
            comptador++;
        }
    }
    return comptador;
}

// Retorna un array amb les posicions on apareix el valor
export function posicionsDe(llista, valor){
    let posicions = [];
    for (let i = 0; i < llista.length; i++){
        if (llista[i] == valor){
            posicions.push(i);
        }
    }
    return posicions;
}

// Retorna la suma dels elements
export function sumaArray(llista){
    let suma = 0;
    for (let i = 0; i < llista.length; i++){
        suma += Number(llista[i]);
    }
    return suma;
}

// Retorna la mitjana dels elements (0 si l'array és buit)
export function mitjanaArray(llista){
    if (llista.length == 0){
        return 0;
    }
    return sumaArray(llista) / llista.length;
}

// Retorna el valor mínim (undefined si l'array és buit)
export function minArray(llista){
    let min = llista[0];
    for (let i = 1; i < llista.length; i++){
        if (llista[i] < min){
            min = llista[i];
        }
    }
    return min;
}

// Retorna el valor màxim (undefined si l'array és buit)
export function maxArray(llista){
    let max = llista[0];
    for (let i = 1; i < llista.length; i++){
        if (llista[i] > max){
            max = llista[i];
        }
    }
    return max;
}

// Retorna una còpia ordenada (bombolla). creixent = true de petit a gran, false al revés
export function ordenarArray(llista, creixent = true){
    let copia = llista.slice();
    for (let i = 0; i < copia.length - 1; i++){
        for (let j = 0; j < copia.length - 1 - i; j++){
            if ((creixent && copia[j] > copia[j + 1]) || (!creixent && copia[j] < copia[j + 1])){
                intercanviar(copia, j, j + 1);
            }
        }
    }
    return copia;
}

// Retorna un array amb els valors que estan entre min i max (inclosos)
export function arrayEntre(llista, min, max){
    if (min > max){
        let aux = min;
        min = max;
        max = aux;
    }
    let resultat = [];
    for (let i = 0; i < llista.length; i++){
        if (estaEntre(llista[i], min, max)){
            resultat.push(llista[i]);
        }
    }
    return resultat;
}

// Retorna una còpia invertida de l'array (fent swap)
export function invertirArray(llista){
    let copia = llista.slice();
    for (let i = 0; i < Math.floor(copia.length / 2); i++){
        intercanviar(copia, i, copia.length - 1 - i);
    }
    return copia;
}

// Retorna un text amb l'array: amb separador o un element per línia
export function mostrarArray(llista, separador = ", ", unPerLinia = false){
    if (unPerLinia){
        separador = "\n";
    }
    let text = "";
    for (let i = 0; i < llista.length; i++){
        text += llista[i];
        if (i < llista.length - 1){
            text += separador;
        }
    }
    return text;
}

// Retorna els primers 'quantitat' números parells de la llista
export function filtrarParells(llista, quantitat){
    let parells = [];
    for (let i = 0; i < llista.length && parells.length < quantitat; i++){
        if (llista[i] % 2 == 0){
            parells.push(llista[i]);
        }
    }
    return parells;
}

// Retorna "creixent", "decreixent", "iguals" o "no"
export function estaOrdenat(llista){
    let puja = false;
    let baixa = false;
    for (let i = 0; i < llista.length - 1; i++){
        if (llista[i] < llista[i + 1]){
            puja = true;
        } else if (llista[i] > llista[i + 1]){
            baixa = true;
        }
    }
    if (puja && baixa){
        return "no";
    } else if (puja){
        return "creixent";
    } else if (baixa){
        return "decreixent";
    } else {
        return "iguals";
    }
}

// Intercala dues llistes (ex: [1,2,3] i [a,b] -> [1,a,2,b,3])
export function barrejar(llista1, llista2){
    let resultat = [];
    let llargada = Math.max(llista1.length, llista2.length);
    for (let i = 0; i < llargada; i++){
        if (i < llista1.length){
            resultat.push(llista1[i]);
        }
        if (i < llista2.length){
            resultat.push(llista2[i]);
        }
    }
    return resultat;
}

// Desplaça els elements cap a la dreta (positiu) o l'esquerra (negatiu)
// ex: desplacar([1,2,3,4], 1) -> [4,1,2,3]
export function desplacar(llista, posicions){
    let n = llista.length;
    let resultat = [];
    if (n == 0){
        return resultat;
    }
    let p = ((posicions % n) + n) % n;
    for (let i = 0; i < n; i++){
        resultat[(i + p) % n] = llista[i];
    }
    return resultat;
}

// Retorna una còpia de l'array barrejada a l'atzar (Fisher-Yates)
export function barrejarArray(llista){
    let copia = llista.slice();
    for (let i = copia.length - 1; i > 0; i--){
        intercanviar(copia, i, aleatori(0, i));
    }
    return copia;
}


/* ============================== PROVES ============================== */

export function prova (){
    alert("Funciona");
}
