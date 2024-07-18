// Variables iniciales
let promedio = 0;
let estatura = 0;
let peso = 0;

let baseMayor = 0;
let baseMenor = 0;
let alturaTrapecio = 0;
let radio = 0;
let baseRectangulo = 0;
let alturaRectangulo = 0;

let n = 0;
let calificaciones = [];

// Función para verificar si el alumno puede ser aceptado en el equipo deportivo
function verificarAlumno() {

        promedio = parseFloat(document.getElementById("promedio").value);
        estatura = parseFloat(document.getElementById("estatura").value);
        peso = parseFloat(document.getElementById("peso").value);

        let resultado = "El alumno no puede ser aceptado en el equipo deportivo.";

        if (promedio >= 85) {
            if (estatura >= 1.70) {
                if (peso <= 99) {
                    resultado = "El alumno puede ser aceptado en el equipo deportivo.";
                } else {
                    resultado = "Lo sentimos, el alumno no puede ser aceptado en el equipo.";
                }
            } else {
                resultado = "Lo sentimos, el alumno no puede ser aceptado en el equipo.";
            }
        } else {
            resultado = "Lo sentimos, el alumno no puede ser aceptado en el equipo.";
        }

        document.getElementById("resultadoAlumno").innerText = resultado;
    }

// Función para limpiar los campos de entrada y el resultado
function limpiarCampos() {
    document.getElementById("promedio").value = 0;
    document.getElementById("estatura").value = 0;
    document.getElementById("peso").value = 0;
    document.getElementById("resultadoAlumno").innerText = "";
}

// Función para calcular el área según el tipo de figura seleccionada
function calcularArea() {
    let tipoFigura = document.getElementById("tipoFigura").value;
    let area = 0;

    switch (tipoFigura) {
        case "trapecio":
            let baseMayor = parseFloat(document.getElementById("baseMayor").value);
            let baseMenor = parseFloat(document.getElementById("baseMenor").value);
            let alturaTrapecio = parseFloat(document.getElementById("alturaTrapecio").value);
            if (!isNaN(baseMayor) && !isNaN(baseMenor) && !isNaN(alturaTrapecio)) {
                area = ((baseMayor + baseMenor) * alturaTrapecio) / 2;
                document.getElementById("resultadoArea").innerText = "Área del trapecio: " + area.toFixed(2);
            } else {
                document.getElementById("resultadoArea").innerText = "Faltan valores para calcular el área del trapecio.";
            }
            break;
        case "circulo":
            let radio = parseFloat(document.getElementById("radio").value);
            if (!isNaN(radio)) {
                area = Math.PI * Math.pow(radio, 2);
                document.getElementById("resultadoArea").innerText = "Área del círculo: " + area.toFixed(2);
            } else {
                document.getElementById("resultadoArea").innerText = "Falta el valor del radio para calcular el área del círculo.";
            }
            break;
        case "rectangulo":
            let baseRectangulo = parseFloat(document.getElementById("baseRectangulo").value);
            let alturaRectangulo = parseFloat(document.getElementById("alturaRectangulo").value);
            if (!isNaN(baseRectangulo) && !isNaN(alturaRectangulo)) {
                area = baseRectangulo * alturaRectangulo;
                document.getElementById("resultadoArea").innerText = "Área del rectángulo: " + area.toFixed(2);
            } else {
                document.getElementById("resultadoArea").innerText = "Faltan valores para calcular el área del rectángulo.";
            }
            break;
        default:
            document.getElementById("resultadoArea").innerText = "Tipo de figura no válido";
    }
}






function limpiarArea() {
    document.getElementById("baseMayor").value = 0;
    document.getElementById("baseMenor").value = 0;
    document.getElementById("alturaTrapecio").value = 0;
    document.getElementById("radio").value = 0;
    document.getElementById("baseRectangulo").value = 0;
    document.getElementById("alturaRectangulo").value = 0;
    document.getElementById("resultadoArea").innerText = "";
}

// Función para calcular el promedio de n calificaciones
function calcularPromedio() {
    n = parseInt(document.getElementById("nCalificaciones").value);
    calificaciones = document.getElementById("calificaciones").value.split(",").map(Number);

    let suma = 0;
    let contador = 0;

    while (contador < n) {
        suma += calificaciones[contador];
        contador++;
    }

    let promedio = suma / n;
    document.getElementById("resultadoPromedio").innerText = "Promedio: " + promedio;
}
function limpiarPromedio() {
    document.getElementById("nCalificaciones").value = 0;
    document.getElementById("calificaciones").value = "";
    document.getElementById("resultadoPromedio").innerText = "";
}

// Función para mostrar los primeros 10 números primos
function mostrarPrimos() {
    let primos = [];
    for (let num = 2; primos.length < 10; num++) {
        let esPrimo = true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                esPrimo = false;
                break;
            }
        }
        if (esPrimo) {
            primos.push(num);
        }
    }
    document.getElementById("resultadoPrimos").innerText = "Primeros 10 números primos: " + primos.join(", ");
}
