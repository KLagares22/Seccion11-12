function Adivininanza(adivina) {
    const ad = parseInt(document.getElementById("num4").value);
    let nume = Math.floor(Math.random() * 10);
    if (ad == nume) {
        document.getElementById("adivinanza").textContent = "¡¡¡Felicidades has Ganado!!!";
    } else {
        let mensaje = "Has perdido, el número era: "
        document.getElementById("adivinanza").textContent = mensaje + nume;
    }
}
function calificacion(cali) {
    const a = parseFloat(document.getElementById("num1").value);
    if (a < 70) {
        document.getElementById("resultado").textContent = "Reprobado ";
        s
    } else if (a >= 90) {
        document.getElementById("resultado").textContent = "Aprobado con Honores ";
    } else {
        document.getElementById("resultado").textContent = "Aprobado ";
    }


}
function ParInpar(numero) {
    const numnero = parseInt(document.getElementById("num2").value);
    if (numnero % 2 === 0) {
        document.getElementById("ver").textContent = "E número es par ";
    } else {
        document.getElementById("ver").textContent = "El número impar ";
    }
}
function Descto(descuento) {
    const dcto = parseFloat(document.getElementById("num3").value);
    let totalPagar = dcto;

    if (dcto > 100) {
        let aux = dcto * 0.1;
        totalPagar = dcto - aux;
        document.getElementById("descuento").textContent = "Descuento de 10%";

    } else {
        document.getElementById("descuento").textContent = "Sin descuento del 10%:\n ";

    }
    document.getElementById("descuento").textContent += "Total a pagar: " + totalPagar;
}

function Contraseña(contraseña) {
    const cc=1234;
    let intento
    do {
        intento= prompt("Ingrese contraseña")
        document.getElementById("contraseña").textContent ="Contraseña Exitosa";

    } while (intento!= cc);
}

function Arreglo(){
    let arreglo = [1,2,3,4,5,6,7,8,9];
    let suma = 0;
    for (let i = 0; i < arreglo.length; i++) {
        suma += arreglo[i];
        document.getElementById("arreglo").textContent = arreglo;
        }
        document.getElementById("arreglo").textContent += "\nSuma: " + suma;
}
function PedirNumero(){
    let num = parseInt(prompt("Ingrese un número (Negativo para salir)"));

    while (num >= 0) {
        document.getElementById("bucle").textContent += num + " ";
        num = parseInt(prompt("Ingrese un número (Negativo para salir)")); 
    }
    document.getElementById("bucle").textContent += "\nSaliste del bucle.";
}