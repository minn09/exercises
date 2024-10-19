// Variables y tipo de datos
let nombre = "Jonathan";
let edad = 25;

console.log(nombre);
console.log(edad);

// Tipos de datos
let numero = 10;
let texto = "Hola";
let booleano = true;
let booleano2 = false;
let arreglo = [1, 2, 3];
let objeto = { nombre: "Jonathan", edad: 25 };

console.log(typeof numero);
console.log(typeof texto);
console.log(typeof booleano);
console.log(typeof booleano2);
console.log(typeof arreglo);
console.log(typeof objeto);

// Operadores
let num1 = 10;
let num2 = 20;
console.log(num1 + num2);

let edadEnAnios = 20;
let edadEnMeses = edadEnAnios * 12;
let edadEnDias = edadEnAnios * 365;
console.log(edadEnAnios, edadEnMeses, edadEnDias);

//Bucles
for (let indice = 1; indice <= 5; indice++) {
  console.log(indice);
}

let indice = 10;
while (indice) {
  indice--;
  console.log(indice);
}

// Funciones
function saludar(nombre) {
  return console.log(`Hola ${nombre}!`); // Usando backstring - `texto ${variable}`
}
saludar("felipe");

const suma = (primerNumero, segundoNumero) => {
  let resultado = primerNumero + segundoNumero;
  return resultado;
};

console.log(suma(1, 2));

//Arreglos

let persona = ["Juan", 20, "Lima"];

for (let index = 0; index < persona.length; index++) {
  console.log(persona[index]);
}

// Objeto

let frutas = {
  elemento1: "Manzana",
  elemento2: "Banana",
  elemento3: "Naranja",
};

for (let index in frutas) {
  console.log(frutas[index]);
}

let frutas2 = {
  elemento1: "Uva",
  elemento2: "Mango",
  elemento3: "Papaya",
};

frutas2.elemento4 = "Pera";

console.log(frutas2);
