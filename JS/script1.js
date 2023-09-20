/* Ejercicio 1
Programa que dada la dedad de una persona indique si es mayor o menor.

var edad = prompt("Ingrese su edad.");

if (edad >= 18) {
    alert("Eres mayor de edad.");
} else {
    alert("Eres menor de edad");
}*/

/*Ejerccio 2
Dada las tres calificaciones que el estudiante obtuvo en el curso:
-Determinar su promedio
-Indicar si el estudiante aprobo o no aprobo el curso

var cal1  = parseInt(prompt("Ingrese su primera calificación."))
var cal2 = parseInt(prompt("Ingrese su segunda calificación."))
var cal3 = parseInt(prompt("Ingrese su tercera calificación."))

var promedio = (cal1 + cal2 + cal3) / 3;

var minaprobar = 6;
if (promedio >= minaprobar)
{
    alert("El estudiante aprobó con un promedio de " +promedio.toFixed(2));
} else {
    alert("El estudiante no aprobo. Su promedio es:" +promedio.toFixed(2))
}*/

/*Ejercicio 3
Dados los numeros A y B, determinar si A es mayor, menor o igual a B 
!isNaN en JavaScript se utiliza para verificar si un valor no es un número válido. 
Se utiliza en combinación con estructuras condicionales como if para realizar comprobaciones de este tipo.

var numeroA = parseInt(prompt("Ingrese valor de A"));
var numeroB = parseInt(prompt("Ingrese valor de B"));

if (numeroA > numeroB){
    alert("A es mayor que B");
} else if (numeroA < numeroB) {
    alert ("numeroA es menor al numeroB");
} else {
    alert ("numeroA es igual al numeroB");
}*/

/*Ejercicio 4
Que lea dos numeros y los imprima en forma ascendente

var num1 = parseInt(prompt("Ingrese el primer número"));
var num2 = parseInt(prompt("Ingrese el segundo número"));

if (isNaN(num1)) {
    alert("Por favor, ingrese un primer número válido.");
} else if (isNaN(num2)) {
    alert("Por favor, ingrese un segundo número válido.");
} else {
    var numeroMenor = Math.min(num1, num2);
    var numeroMayor = Math.max(num1, num2);

    alert("Números en forma ascendente: " + numeroMenor + ", " + numeroMayor);
}*/

/*Ejercicio 5
Dado el peso de una persona 
-Si el peso es menor o igual a 40kg. 
Muestre el mensaje persona baja de peso
-Si el peso es entre 41 y 70kg.
Muestre el mensaje persona peso promedio.
-Si el peso es mayor 71kg.
Muestre el mensaje persona con sobre peso

var peso = parseInt(prompt("Ingrese el peso de la persona en kilogramos:"));

if (!isNaN(peso)) {
    if (peso <= 40) {
        alert("Persona baja de peso.");
    } else if (peso >= 41 && peso <= 70) {
        alert("Persona peso promedio.");
    } else if (peso > 70) {
        alert("Persona con sobrepeso.");
    } else {
        alert("Por favor, ingrese un peso válido.");
    }
} else {
    alert("Por favor, ingrese un número válido.");
}*/

/*Ejercicio 6
Dado un numero entre 1 y 7 escriba 
correspondiente dia de la semana asi:
Dia 1 Lunes, Dia 2 Martes, Dia 3 Miercoles, 
Dia 4 Jueves, Dia 5 Viernes, Dia 6 Sabado, Dia 7 Domingo,
 si se escribe otro numero diferente debe salir el mensaje 
 ESCRIBIO UN NUMERO FUERA DEL RANGO
 ESCRIBA UN NUMERO DE 1 Y 7

 var numero = parseInt(prompt("Ingrese un número del 1 al 7:"));

switch (numero) {
    case 1:
        alert("Dia 1: Lunes");
        break;
    case 2:
        alert("Dia 2: Martes");
        break;
    case 3:
        alert("Dia 3: Miércoles");
        break;
    case 4:
        alert("Dia 4: Jueves");
        break;
    case 5:
        alert("Dia 5: Viernes");
        break;
    case 6:
        alert("Dia 6: Sábado");
        break;
    case 7:
        alert("Dia 7: Domingo");
        break;
    default:
        alert("Ha ingresado un número fuera del rango. Por favor, escriba un número del 1 al 7.");
}*/


/*Ejercicio 7
En un almacen se hace un 20% de descuento a los 
clientes cuya compra supere los 1000 pesos,
a los demas solo se le hace un 5% de descuento
¿Cual será la cantidad que pagara un persona por su compra?

var compra = parseInt(prompt("Ingrese el monto de la compra en pesos:"));

if (!isNaN(compra)) {
    if (compra > 1000) {
        // Aplicar un 20% de descuento
        var descuento = compra * 0.20;
    } else {
        // Aplicar un 5% de descuento
        var descuento = compra * 0.05;
    }

    var totalPagar = compra - descuento;

    alert("El monto a pagar después del descuento es: $" + totalPagar);
} else {
    alert("Por favor, ingrese un monto de compra válido.");
}
*/

/*Ejercicio 8
Un obrero necesita calcular su salario semanal, 
el cual se obtiene de la siguiente manera
-Si trabaja 40 horas o menos se le paga 16.000 por hora.
-Si trabaja mas de 40 horas se le paga 20.000 por hora

var horasTrabajadas = parseInt(prompt("Ingrese la cantidad de horas trabajadas en la semana:"));

if (!isNaN(horasTrabajadas)) {
    var tarifaPorHora;
    var salario;

    if (horasTrabajadas <= 40) {
        // Si trabaja 40 horas o menos
        tarifaPorHora = 16000; // $16,000 por hora
        salario = horasTrabajadas * tarifaPorHora;
    } else {
        // Si trabaja más de 40 horas
        tarifaPorHora = 20000; // $20,000 por hora
        var horasExtras = horasTrabajadas - 40;
        salario = (40 * tarifaPorHora) + (horasExtras * (tarifaPorHora * 1.5)); // Tarifa de horas extras al 50% adicional
    }

    alert("El salario semanal del obrero es: $" + salario);
} else {
    alert("Por favor, ingrese un número válido de horas trabajadas.");
}*/


/*Ejercicio 9 
Programa que lea los nombres y edades de dos personas 
e imprima cual de ellas tiene mas edad

var nombre1 = prompt("Ingrese el nombre de la primera persona:");
var edad1 = parseInt(prompt("Ingrese la edad de la primera persona:"));

var nombre2 = prompt("Ingrese el nombre de la segunda persona:");
var edad2 = parseInt(prompt("Ingrese la edad de la segunda persona:"));

if (!isNaN(edad1) && !isNaN(edad2)) {
    if (edad1 > edad2) {
        alert(nombre1 + " es mayor en edad que " + nombre2 + ".");
    } else if (edad1 < edad2) {
        alert(nombre2 + " es mayor en edad que " + nombre1 + ".");
    } else {
        alert(nombre1 + " y " + nombre2 + " tienen la misma edad.");
    }
} else {
    alert("Por favor, ingrese edades válidas.");
}
*/

/*Ejercicio 10 
Hacer un programa que calcule el total a pagar 
por la compra de 3 camisas o mas, se aplica un descuento
del 20% sobre el total de la compra y si son
menos de 3 camisas un descuento de 10%

var cantidadCamisas = parseInt(prompt("Ingrese la cantidad de camisas que desea comprar:"));
var precioPorCamisa = parseInt(prompt("Ingrese el precio por camisa en pesos:"));

if (!isNaN(cantidadCamisas) && !isNaN(precioPorCamisa)) {
    var totalSinDescuento = cantidadCamisas * precioPorCamisa;
    var descuento;

    if (cantidadCamisas >= 3) {
        // Aplicar un descuento del 20% si se compran 3 o más camisas
        descuento = totalSinDescuento * 0.20;
    } else {
        // Aplicar un descuento del 10% si se compran menos de 3 camisas
        descuento = totalSinDescuento * 0.10;
    }

    var totalAPagar = totalSinDescuento - descuento;

    alert("El total a pagar es: $" + totalAPagar);
} else {
    alert("Por favor, ingrese valores válidos.");
}
*/

/*Ejercicio 11
Leer dos numero; si son iguales que los multiplique,
si el primero es mayor que el segundo que lo reste y si no que lo sume.

var numero1 = parseFloat(prompt("Ingrese el primer número:"));
var numero2 = parseFloat(prompt("Ingrese el segundo número:"));

if (!isNaN(numero1) && !isNaN(numero2)) {
    var resultado;

    if (numero1 === numero2) {
        // Si los números son iguales, multiplicarlos
        resultado = numero1 * numero2;
        alert("Los números son iguales. La multiplicación es: " + resultado);
    } else if (numero1 > numero2) {
        // Si el primer número es mayor, restarlos
        resultado = numero1 - numero2;
        alert("El primer número es mayor. La resta es: " + resultado);
    } else {
        // Si el segundo número es mayor, sumarlos
        resultado = numero1 + numero2;
        alert("El segundo número es mayor. La suma es: " + resultado);
    }
} else {
    alert("Por favor, ingrese números válidos.");
}*/

/*Ejercicio 12 
Realizar un calculadora con las operaciones basicas*/

// Función para sumar dos números
function sumar(numero1, numero2) {
    return numero1 + numero2;
}

// Función para restar dos números
function restar(numero1, numero2) {
    return numero1 - numero2;
}

// Función para multiplicar dos números
function multiplicar(numero1, numero2) {
    return numero1 * numero2;
}

// Función para dividir dos números
function dividir(numero1, numero2) {
    if (numero2 !== 0) {
        return numero1 / numero2;
    } else {
        return "Error: No se puede dividir por cero.";
    }
}

// Función principal para realizar operaciones
function calcular() {
    var operacion = prompt("Ingrese la operación (+, -, *, /):");
    var numero1 = parseFloat(prompt("Ingrese el primer número:"));
    var numero2 = parseFloat(prompt("Ingrese el segundo número:"));

    var resultado;

    switch (operacion) {
        case "+":
            resultado = sumar(numero1, numero2);
            break;
        case "-":
            resultado = restar(numero1, numero2);
            break;
        case "*":
            resultado = multiplicar(numero1, numero2);
            break;
        case "/":
            resultado = dividir(numero1, numero2);
            break;
        default:
            resultado = "Operación no válida.";
    }

    alert("Resultado: " + resultado);
}

// Llama a la función principal para iniciar la calculadora
calcular();