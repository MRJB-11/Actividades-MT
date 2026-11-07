

const productos = ["Arepa", "Empanada", "Buñuelo", "Jugo"];
const precios = [3000, 3500, 2000, 4000];

productos.push("Café");
precios.push(2500);

productos.push("Gaseosa");
precios.push(3000);

productos.pop();
precios.pop();

console.log(productos.includes("Jugo"));

const baratos = precios.filter(p => p <= 3000);

const conIva = precios.map(p => Math.round(p * 1.19));

console.log(baratos);
console.log(conIva);

const lista = document.getElementById("lista");

productos.forEach((p, i) => {
    const li = document.createElement("li");
    li.textContent = `${p} - $${precios[i]}`;
    lista.appendChild(li);
});