
const meta = 100000;
let ventas = 0;

ventas = ventas + 45000;
ventas += 70000;

if (ventas >= meta) {
    console.log("Meta cumplida: " + ventas);
} else if (ventas >= meta * 0.8) {
    console.log("Casi: " + ventas);
} else {
    console.log("Falta: " + (meta - ventas));
}

ventas = 0;

for (let dia = 1; dia <= 5; dia++) {
    let ventaDia = dia * 10000;
    ventas += ventaDia;
    console.log("Día " + dia + ": " + ventas);
}

let intentos = 0;

while (ventas < 200000) {
    ventas += 25000;
    intentos++;
}

console.log("Meta cumplida: " + ventas);
console.log("Intentos extra: " + intentos);
