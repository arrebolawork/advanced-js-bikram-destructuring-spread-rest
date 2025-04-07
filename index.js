//RESUELVE LOS EJERCICIOS AQUÍ
const empleados = [
  { name: "Luis", email: "Luis@gmail.com" },
  { name: "Ana", email: "Ana@gmail.com" },
  { name: "Andrea", email: "Andrea@gmail.com" },
];
// Ejercicio 1
const [luis, ana, andrea] = empleados;

// Ejercicio 2
const { email: emailLuis } = luis;

// Ejercicio 3
// Inicialmente
let a = 5;
let b = 3;

a = 3;
b = 5;

// Ejercicio 4
const HIGH_TEMPERATURES = {
  yesterday: 30,
  today: 35,
  tomorrow: 32,
};
const { today: maximaHoy, tomorrow: maximaManana } = HIGH_TEMPERATURES;

// Ejercicio 5

function sumEveryOther(...args) {
  return args.reduce((a, b) => a + b, 0);
}

// Ejercicio 6

function addOnlyNums(...args) {
  let count = 0;
  for (let elemento of args) {
    if (typeof elemento === "number") {
      count += elemento;
    }
  }
  return count;
}

// Ejercicio 7

function countTheArgs(...args) {
  return args.length;
}
// Ejercicio 8

function combineTwoArrays(array1, array2) {
  return [...array1, ...array2];
}

// Ejercicio 9

function onlyUniques(...args) {
  return [...new Set(args)];
}

// Ejercicio 10

function combineAllArrays(...args) {
  const newArray = [];
  for (let arg of args) {
    newArray.push(...arg);
  }
  return newArray;
}
// return [].concat(...args); ********** ESTA ES LA OPCION MEJORADA EN UNA LINEA
console.log(combineAllArrays([2, 7, 3, 1], [2, 7, 4, 12], [2, 44, 22, 7, 3, 1]));

// Ejercicio 11

function sumAndSquare(...args) {
  const square = [];
  for (let arg of args) {
    const cuadrado = arg * arg;
    square.push(cuadrado);
  }
  return square.reduce((a, b) => a + b, 0);
}
