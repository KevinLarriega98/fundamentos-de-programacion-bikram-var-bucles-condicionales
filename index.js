/** Variables */

// 1
let variableSinValor;

// 2
let booleano1 = true;
let booleano2 = false;

// 3
const PI = 3.14;

// 4
const TAU = 2 * PI;

/** Booleanos */

// 5
let booleanoAnd = booleano1 && booleano2;

// 6
let booleanoNot = !booleano1;

// 7
let booleanoMix0 = (booleano1 || booleano2) && (booleano1 || (!booleano1 && !booleano2));

/** Operadores */

// 8
let incrementarDesp = 2;
let resultadoDesp = incrementarDesp++;

// 9
let incrementarAntes = 2;
let resultadoAntes = ++incrementarAntes;

/** Bucles */

// 10
let contarHasta10_2 = 0;

for (; contarHasta10_2 < 10; contarHasta10_2++) {
  // Esto está vacío
}

// 11
let postI = 0;
let postJ = 0;

for (let i = 0; i < 11; i++) {
    postI += postJ++;
}

// 12
let sumaPares = 0;

for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        sumaPares += i;
    }
}