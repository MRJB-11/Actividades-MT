
function calcular(operacion) {
    let numero1 = Number(document.getElementById("numero1").value);
    let numero2 = Number(document.getElementById("numero2").value);
    let resultado;

    if (operacion === "+") {
        resultado = numero1 + numero2;
    }

    if (operacion === "-") {
        resultado = numero1 - numero2;
    }

    if (operacion === "*") {
        resultado = numero1 * numero2;
    }

    if (operacion === "/") {
        if (numero2 === 0) {
            document.getElementById("resultado").textContent = "No se puede dividir entre cero";
            return;
        }
        resultado = numero1 / numero2;
    }

    document.getElementById("resultado").textContent = resultado;
}


function limpiar() {
    document.getElementById("resultado").textContent =
        "Aquí aparecerá el resultado";

    document.getElementById("numero1").value = "";
    document.getElementById("numero2").value = "";
}