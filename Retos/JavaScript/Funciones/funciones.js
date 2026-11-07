
const cantidades = [5, 0, 3, 8, 0];

function validarStock(cantidad) {
    return cantidad > 0;
}

function calcularDescuento(precio, porcentaje) {
    return precio - (precio * porcentaje / 100);
}

const calcularIva = precio => precio * 1.19;

function registrarProducto(nombre, cantidad) {
    if (!validarStock(cantidad)) {
        return `No hay unidades disponibles de ${nombre}`;
    }

    return `Producto ${nombre} registrado correctamente`;
}

const disponibles = cantidades.filter(validarStock);

const lista = document.getElementById("resultados");

function mostrarResultado(mensaje) {
    const li = document.createElement("li");
    li.textContent = mensaje;
    lista.appendChild(li);
}

mostrarResultado("Validar stock (5): " + validarStock(5));
mostrarResultado("Validar stock (0): " + validarStock(0));

mostrarResultado("Descuento de 50000: $" + calcularDescuento(50000, 10));
mostrarResultado("Descuento de 20000: $" + calcularDescuento(20000, 20));

mostrarResultado("IVA de 10000: $" + calcularIva(10000));
mostrarResultado("IVA de 20000: $" + calcularIva(20000));

mostrarResultado(registrarProducto("Arepa", 5));
mostrarResultado(registrarProducto("Jugo", 0));

mostrarResultado("Cantidades disponibles: " + disponibles.join(", "));