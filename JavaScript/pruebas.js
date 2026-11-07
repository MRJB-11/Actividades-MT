/* Valores y Variables */
const nombre = "Juan";
let edad = 25;
    edad = 26;

/* Operadores */
10 % 3; // 1 Residuo
5 === "5"; // False valor y tipo
"5" + 3; // 53 Concatenación Une texto con número

const suma = 5 + 3;
const resta = 10 - 4;
const multiplicacion = 6 * 7;
const division = 20 / 5;
const modulo = 10 % 3;

/* Scope */

if (true) {
    let sec = 42;
}
console.log(sec); // Error: sec is not defined
{
    let variableLet = "Soy una variable let";
    const variableConst = "Soy una variable const";
    var variableVar = "Soy una variable var";
}

/* Hoisting */

console.log(a); // Soy una variable var
var a = 5;
console.log(b); // Error: Cannot access 'b' before initialization
let b = 10;

/* Ejemplo */

const precioBase = 5000;
let cantidad = 3;

if (cantidad === 3) {
    console.log("Descuento");
}