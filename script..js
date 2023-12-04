
class Ejercicio {

    //Ejercicios del 1 al 20
    expresion(){
        // declara tres variables
        let a,b,y,z,x,w,v,u,i,c,r,s,resp
        // seleccione el valor de la caja de texto del input con id "a"
        a= document.getElementById("a").value 
        // seleccione el valor de la caja de texto del input con id "b"
        b= document.getElementById("b").value
        a = parseInt(a) // convierte el valor alfanueric a texto
        b = parseInt(b) // convierte el valor alfanueric a texto
        y = 2 * a + b - a % 3
        z = a * b + 3 % a + b
        x = (5 + 3 * 2) + 9 > 3 * 5 * 14 % 3 
        w = a - b + 2 * a % b
        v = 2 * b + Math.floor(a / 2) + 4 * b % a
        u = b - a + 3 * a % b
        i = 2 * ((4 - 10 + 8) / 2) * 36 * (1/2)
        c = 260 / 12 + (54 % 3) - (85 % 7)
        r = (48 < 2 * 3) || (2 * 7 < 12)
        s = ((8 > 2) || (932 < 23)) && 4 == 2
        resp = document.getElementById("resultado")
        resp.innerHTML = `Expresion1:${y} = 2 * ${a} + ${b} - ${a} % 3` 
        resp.innerHTML += `<br>Expresion2:${z}=${a} * ${b} + 3 % ${a} + ${b}` 
        resp.innerHTML += `<br>Expresion3:${w}=${a} * ${b} + 2 * ${a} % ${b}` 
        resp.innerHTML += `<br>Expresion4: ${v} = 2 * ${b} + ${Math.floor(a / 2)} + 4 * ${b} % ${a}`
        resp.innerHTML += `<br>Expresion5:${u}=${b} - ${a} + 3 * ${a} % ${b}` 
        resp.innerHTML += `<br>Expresion6:${x}= (5 + 3 * 2) + 9 > 3 * 5 * 14 % 3` 
        resp.innerHTML += `<br>Expresion7:${i}= 2 * ((4 - 10 + 8) / 2) * 36 * (1/2)` 
        resp.innerHTML += `<br>Expresion8:${c}= 260 / 12 + (54 % 3) - (85 % 7)`
        resp.innerHTML += `<br>Expresion9:${r}= (48 < 2 * 3) || (2 * 7 < 12)`
        resp.innerHTML += `<br>Expresion10:${s}= ((8 > 2) || (932 < 23)) && 4 == 2`
        
    }

    sumarNumeros() {
        
        let num1 = parseFloat(document.getElementById("numero1").value);
        let num2 = parseFloat(document.getElementById("numero2").value);
    
        if (!isNaN(num1) && !isNaN(num2)) {
        let suma = num1 + num2;
        document.getElementById("resultado").innerHTML = `La suma es: ${suma}`;
        } else {
           document.getElementById("resultado").innerHTML = "Ingresa valores numéricos en ambos campos.";
        }
    }

    calcularArea() {
        
        let base = parseFloat(document.getElementById("base").value);
        let altura = parseFloat(document.getElementById("altura").value);
    
        if (!isNaN(base) && !isNaN(altura) && base > 0 && altura > 0) {
          let area = (base * altura) / 2;
          document.getElementById("resultado").innerHTML = `El área del triángulo es: ${area}`;
        } else {
          document.getElementById("resultado").innerHTML = "Ingresa valores numéricos y positivos en ambos campos.";
        }
    }

    verificarParImpar() {
      
        let numero = parseInt(document.getElementById("numero").value);
        
        if (!isNaN(numero)) {
           let resultado = numero % 2 === 0 ? "El número es par." : "El número es impar.";
           document.getElementById("resultado").innerHTML = resultado;
        } else {
            document.getElementById("resultado").innerHTML = "Ingresa un valor numérico.";
        }
    }

    calcularResultado() {
        let numero1 = parseFloat(document.getElementById("numero1").value);
        let operacion = document.getElementById("operacion").value;
        let numero2 = parseFloat(document.getElementById("numero2").value);
        let resultado;

        switch (operacion) {
            case "suma":
                resultado = numero1 + numero2;
                break;
            case "resta":
                resultado = numero1 - numero2;
                break;
            case "multiplicacion":
                resultado = numero1 * numero2;
                break;
            case "division":
                // Verificar si el divisor no es cero
                if (numero2 !== 0) {
                    resultado = numero1 / numero2;
                } else {
                    document.getElementById("resultado").innerHTML = "Error: No se puede dividir por cero.";
                    return;
                }
                break;
            default:
                document.getElementById("resultado").innerHTML = "Error: Operación no válida.";
                return;
        }

        // Mostrar el resultado
        document.getElementById("resultado").innerHTML = `Resultado: ${resultado}`;
    }

    mostrarTabla() {
        let numero = parseInt(document.getElementById("numero").value);
        let tablaMultiplicar = document.getElementById("tablaMultiplicar");
        
        tablaMultiplicar.innerHTML = "";

        if (isNaN(numero)) {
            tablaMultiplicar.innerHTML = "Por favor, ingrese un número válido.";
            return;
        }
        let tabla = "<table border='1'>";
        tabla += "<tr><th>Factor</th><th>Resultado</th></tr>";

        for (let i = 1; i <= 10; i++) {
            let resultado = numero * i;
            tabla += `<tr><td>${numero} x ${i}</td><td>${resultado}</td></tr>`;
        }
        tabla += "</table>";

        // Mostrar la tabla
        tablaMultiplicar.innerHTML = tabla;
    }

    concatenarPalabras() {
        let palabra1 = document.getElementById("palabra1").value;
        let palabra2 = document.getElementById("palabra2").value;
        let resultado = document.getElementById("resultado");

        // Concatenar las dos palabras
        let concatenacion = palabra1 + palabra2;

        // Mostrar el resultado
        resultado.innerHTML = `La concatenación de las palabras es: ${concatenacion}`;
    }

    determinarMayor() {
        let numero1 = parseFloat(document.getElementById("numero1").value);
        let numero2 = parseFloat(document.getElementById("numero2").value);
        let numero3 = parseFloat(document.getElementById("numero3").value);
        let resultado = document.getElementById("resultado");

        // Validar si se ingresaron números válidos
        if (isNaN(numero1) || isNaN(numero2) || isNaN(numero3)) {
            resultado.innerHTML = "Por favor, ingrese números válidos en todos los campos.";
            return;
        }

        // Determinar el número mayor
        let mayor = Math.max(numero1, numero2, numero3);

        // Mostrar el resultado
        resultado.innerHTML = `El número mayor es: ${mayor}`;
    }

    verificarElegibilidad() {
        let edad = parseInt(document.getElementById("edad").value);
        let resultado = document.getElementById("resultado");

        // Validar si se ingresó una edad válida
        if (isNaN(edad) || edad < 0) {
            resultado.innerHTML = "Por favor, ingrese una edad válida.";
            return;
        }

        // Verificar la elegibilidad para votar
        let mensaje = edad >= 18 ? "¡Usted es elegible para votar!" : "Lo siento, usted no es elegible para votar.";

        // Mostrar el resultado
        resultado.innerHTML = mensaje;
    }

    calcularBMI() {
        let peso = parseFloat(document.getElementById("peso").value);
        let altura = parseFloat(document.getElementById("altura").value);
        let resultado = document.getElementById("resultado");

        if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
            resultado.innerHTML = "Por favor, ingrese valores válidos.";
            return;
        }

        // Calcular el BMI
        let bmi = peso / (altura * altura);

        // Determinar la categoría de peso
        let categoria = "";
        if (bmi < 18.5) {
            categoria = "Bajo peso";
        } else if (bmi < 24.9) {
            categoria = "Peso normal";
        } else if (bmi < 29.9) {
            categoria = "Sobrepeso";
        } else {
            categoria = "Obesidad";
        }

        // Mostrar el resultado
        resultado.innerHTML = `Su BMI es: ${bmi.toFixed(2)} y está en la categoría de ${categoria}.`;
    }

    determinarNumero() {
        let numero = parseFloat(document.getElementById("numero").value);
        let resultado = document.getElementById("resultado");

        if (isNaN(numero)) {
            resultado.innerHTML = "Por favor, ingrese un número válido.";
            return;
        }

        // Determinar el signo del número
        let signo = "";
        if (numero > 0) {
            signo = "positivo";
        } else if (numero < 0) {
            signo = "negativo";
        } else {
            signo = "cero";
        }

        // Mostrar el resultado
        resultado.innerHTML = `El número ingresado es ${signo}.`;
    }

    //Ejercicios del 21 al 29
    esBisiesto() {
        let year, resultado
        year = parseInt(document.getElementById("year").value)
      
        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
            document.getElementById("resultado").innerHTML = `El ${year} es un año bisiesto`
        } else {
            document.getElementById("resultado").innerHTML = `El ${year} no es un año bisiesto`
        }
    }

    determinarSigno() {
        let mes, dia, resultado,signo
        mes = document.getElementById("mes").value;
        dia = document.getElementById("dia").value;
        resultado = document.getElementById("resultado");

        // Convertir mes y día a números enteros
        mes = parseInt(mes);
        dia = parseInt(dia);

        // Lógica para determinar el signo zodiacal
        if ((mes === 3 && dia >= 21) || (mes === 4 && dia <= 19)) {
            document.getElementById("resultado").innerHTML = "Tu signo zodiacal es: Aries" 
        } else if ((mes === 4 && dia >= 20) || (mes === 5 && dia <= 20)) {
            document.getElementById("resultado").innerHTML = "Tu signo zodiacal es: Tauro" 
        } else if ((mes === 5 && dia >= 21) || (mes === 6 && dia <= 20)) {
            document.getElementById("resultado").innerHTML = "Tu signo zodiacal es: Géminis" 
        } else if ((mes === 6 && dia >= 21) || (mes === 7 && dia <= 22)) {
            document.getElementById("resultado").innerHTML = "Tu signo zodiacal es: Càncer" 
        } else if ((mes === 7 && dia >= 23) || (mes === 8 && dia <= 22)) {
            document.getElementById("resultado").innerHTML = "Tu signo zodiacal es: Leo" 
        } else if ((mes === 8 && dia >= 23) || (mes === 9 && dia <= 22)) {
            document.getElementById("resultado").innerHTML = "Tu signo zodiacal es: Virgo" 
        } else if ((mes === 9 && dia >= 23) || (mes === 10 && dia <= 22)) {
            document.getElementById("resultado").innerHTML = "Tu signo zodiacal es: Libra" 
        } else if ((mes === 10 && dia >= 23) || (mes === 11 && dia <= 21)) {
            document.getElementById("resultado").innerHTML = "Tu signo zodiacal es: Escorpio" 
        } else if ((mes === 11 && dia >= 22) || (mes === 12 && dia <= 21)) {
            document.getElementById("resultado").innerHTML = "Tu signo zodiacal es: Sagitario" 
        } else if ((mes === 12 && dia >= 22) || (mes === 1 && dia <= 19)) {
            document.getElementById("resultado").innerHTML = "Tu signo zodiacal es: Capricornio" 
        } else if ((mes === 1 && dia >= 20) || (mes === 2 && dia <= 18)) {
            document.getElementById("resultado").innerHTML = "Tu signo zodiacal es: Acuario" 
        } else if ((mes === 2 && dia >= 19) || (mes === 3 && dia <= 20)) {
            document.getElementById("resultado").innerHTML = "Tu signo zodiacal es: Piscis" 
        }
    }

    quincena() {
        // Definir variables
        let dia

        // Pedir al usuario que ingrese un día
        dia = document.getElementById("dia").value;

        // Verificar si el número pertenece a la primera o segunda quincena
        if (dia >= 1 && dia <= 15) {
            document.getElementById("resultado").innerHTML = `El día ${dia} pertenece a la primera quincena.` 
        } else if (dia >= 16 && dia <= 31) {
            document.getElementById("resultado").innerHTML = `El día ${dia} pertenece a la segunda quincena.` 
        } else {
            document.getElementById("resultado").innerHTML = "Número de día no válido.";
        }
    }

    semana() {
        // Definir las variables
        let numdia;

        // Pedir al usuario que ingrese un número en el rango establecido
        numdia = parseInt(document.getElementById("numdia").value)

        // Utilizar la estructura switch para determinar el día de la semana
        switch (numdia) {
            case 1:
                document.getElementById("resultado").innerHTML = `El número ${numdia} es el domingo.`
                break;
            case 2:
                document.getElementById("resultado").innerHTML = `El número ${numdia} es el lunes.`
                break;
            case 3:
                document.getElementById("resultado").innerHTML = `El número ${numdia} es el martes.`
                break;
            case 4:
                document.getElementById("resultado").innerHTML = `El número ${numdia} es el miercoles.`
                break;
            case 5:
                document.getElementById("resultado").innerHTML = `El número ${numdia} es el Jueves.`
                break;
            case 6:
                document.getElementById("resultado").innerHTML = `El número ${numdia} es el viernes.`
                break;
            case 7:
                document.getElementById("resultado").innerHTML = `El número ${numdia} es el sàbado.`
                break;
            default:
                document.getElementById("resultado").innerHTML = `El número ingresado no es válido. Por favor, ingrese un número del 1 al 7.`;
        }
    }

    verificarFrasesIguales() {
        // Obtener el valor de las frases ingresadas por el usuario
        let frase1, frase2
        frase1 = document.getElementById("frase1").value;
        frase2 = document.getElementById("frase2").value;

         // Convertir ambas frases a minúsculas antes de comparar
        frase1 = frase1.toLowerCase();
        frase2 = frase2.toLowerCase();
    
        // Comparar las frases y mostrar el resultado en la página
        if (frase1 === frase2) {
            document.getElementById("resultado").textContent = "Las frases son iguales.";
        } else {
            document.getElementById("resultado").textContent = "Las frases son diferentes.";
        }
    }

   calcularPrecioFinal() {
        // Obtener el valor del precio y el porcentaje de descuento ingresados por el usuario
        let precio, descuento, precioFinal
        precio = parseInt(document.getElementById("precio").value)
        descuento = parseInt(document.getElementById("descuento").value)
    
        // Convertir los valores a números
        precio = parseFloat(precio);
        descuento = parseFloat(descuento);
    
        // Validar que los valores sean válidos
            precioFinal = precio - (precio * (descuento / 100));
    
            // Mostrar el resultado en la página
            document.getElementById("resultado").innerHTML = `El precio final con descuento es: $ ${precioFinal}` 
    }

    calcularTotal() {
        // Obtener los valores del formulario
        let total, impuestos, totalConImpuestos
        total = parseFloat(document.getElementById("total").value);
        impuestos = parseFloat(document.getElementById("impuestos").value);

        // Calcular el monto total a pagar, incluyendo impuestos
        totalConImpuestos = total + (total * (impuestos / 100));

        // Mostrar el resultado
        document.getElementById("resultado").innerHTML = `El monto total a pagar, incluyendo impuestos, es: $ ${totalConImpuestos}`
    }

    calcularNuevoSalario() {
        // Obtener los valores del formulario
        let salarioActual, porcentajeAumento, nuevoSalario
        
        salarioActual = parseFloat(document.getElementById("salarioActual").value);
        porcentajeAumento = parseFloat(document.getElementById("porcentajeAumento").value);

        // Calcular el nuevo salario después del aumento
        nuevoSalario = salarioActual + (salarioActual * (porcentajeAumento / 100));

        // Mostrar el resultado
        document.getElementById("resultado").innerHTML = `Su nuevo salario después del aumento es: $ ${nuevoSalario}` 
    }

    calcularCompra() {
        // Definir variables
        let totalCompra, descuento, totalConDescuento, cantidad, precio, i, total
        totalCompra = 0; descuento = 0; totalConDescuento = 0;

        // Obtener la cantidad de artículos
        cantidad = parseFloat(document.getElementById("cantidad").value);
        precio = parseFloat(document.getElementById("precio").value);
        //parseInt(prompt("Ingrese la cantidad de artículos que va a comprar:"));

        // Calcular el total de la compra
        total = 0;
        for (i = 1; i <= cantidad; i++) {
            precio = parseFloat(prompt(`Ingrese el precio del artículo ${i}:`));

            totalCompra += precio * cantidad;
        }

        // Aplicar descuento si el total de la compra es mayor a 100
        if (totalCompra > 100) {
            descuento = totalCompra * 0.10;
            totalConDescuento = totalCompra - descuento;
            document.getElementById("resultado").innerHTML = `El total de la compra con un 10% de descuento es: ${totalConDescuento}`
            //alert("El total de la compra con un 10% de descuento es: " + totalConDescuento);
        } else {
            document.getElementById("resultado").innerHTML = `El total de la compra es: ${totalCompra}`
        }
    }

    // Ejercicios 30 al 36
    Ejercicio30() {

        let salario = parseFloat(document.getElementById("salario").value);

    if (!isNaN(salario) && salario >= 0) {
        
        let impuesto;

        if (salario <= 10000) {
            impuesto = salario * 0.05;
        } else if (salario <= 20000) {
            impuesto = salario * 0.10;
        } else {
            impuesto = salario * 0.15;
        }
        document.getElementById("resultado").innerHTML = `El impuesto sobre la renta es: $${impuesto.toFixed(2)}`;
    } else {
        document.getElementById("resultado").innerHTML = "Ingrese un salario válido y positivo.";
    }
    }

    Ejercicio31() {
    let salario = parseFloat(document.getElementById("salario").value);
    let antiguedad = parseInt(document.getElementById("antiguedad").value);

    // Verificar si el salario y antigüedad son números válidos y positivos
    if (!isNaN(salario) && !isNaN(antiguedad) && salario >= 0 && antiguedad >= 0) {
        // Calcular el bono por antigüedad
        let bono = antiguedad > 5 ? salario * 0.05 : 0;

        // Mostrar el resultado
        document.getElementById("resultado").innerHTML = `El bono por antigüedad es: $${bono.toFixed(2)}`;
    } else {
        // Manejar el caso en que el salario o antigüedad no sean números válidos o no sean positivos
        document.getElementById("resultado").innerHTML = "Ingrese valores válidos y positivos.";
    }

    }

    Ejercicio32() {
    let distancia = parseInt(document.getElementById("distancia").value);

    if (!isNaN(distancia) && distancia >= 0) {
        let costoEnvio = distancia < 50 ? 10 : 20;
        document.getElementById("resultado").innerHTML = `El costo de envío es: $${costoEnvio}`;
    } else {
        document.getElementById("resultado").innerHTML = "Ingrese una distancia válida y positiva.";
    }
    }

    Ejercicio33() {
        let totalCompras = parseFloat(document.getElementById("totalCompras").value);
        let resp

    if (!isNaN(totalCompras) && totalCompras >= 0) {
        let descuento = totalCompras > 500 ? totalCompras * 0.10 : 0;
        document.getElementById("resultado").innerHTML = `Su descuento por lealtad es: $${descuento.toFixed(2)}`;
    } else {
        document.getElementById("resultado").innerHTML = "Ingrese un total de compras válido y positivo.";
    }
    }

    Ejercicio34() {
        let cantidad = parseInt(document.getElementById("cantidad").value);
        let precioUnitario = parseFloat(document.getElementById("precioUnitario").value);
    
        
        if (!isNaN(cantidad) && !isNaN(precioUnitario) && cantidad > 0 && precioUnitario > 0) {
            
            let descuento;
    
            if (cantidad >= 10 && cantidad <= 50) {
                descuento = precioUnitario * 0.05;
            } else if (cantidad > 50 && cantidad <= 100) {
                descuento = precioUnitario * 0.10;
            } else if (cantidad > 100) {
                descuento = precioUnitario * 0.15;
            } else {
                descuento = 0;
            }
            let precioTotal = (cantidad * precioUnitario) - descuento;
            document.getElementById("resultado").innerHTML = `Descuento aplicado: $${descuento.toFixed(2)}<br>El precio total con descuento es: $${precioTotal.toFixed(2)}`;
        } else {
            // Manejar el caso en que la cantidad o precio unitario no sean números válidos o no sean positivos
            document.getElementById("resultado").innerHTML = "Ingrese valores válidos y positivos.";
        }
    }

    Ejercicio35() {
    let horasServicio = parseInt(document.getElementById("horasServicio").value);

    if (!isNaN(horasServicio) && horasServicio >= 0) {
        let costoHora = 10; // Precio por hora
        let costoTotal;

        if (horasServicio > 10) {
            costoTotal = horasServicio * costoHora * 0.8; // Aplicar descuento del 20% si las horas son más de 10
        } else {
            costoTotal = horasServicio * costoHora;
        }
        document.getElementById("resultado").innerHTML = `El costo total del servicio es: $${costoTotal.toFixed(2)}`;
    } else {
        document.getElementById("resultado").innerHTML = "Ingrese un número válido y positivo de horas de servicio.";
    }
    }

    Ejercicio36() {
        let numeroIngresado = parseInt(document.getElementById("sumaPare").value);
            if (!isNaN(numeroIngresado) && numeroIngresado > 0) {
                let sumaPares = 0;
                for (let i = 1; i <= numeroIngresado; i++) {
                    if (i % 2 === 0) {
                        sumaPares += i;
                    }
                }
                document.getElementById("resultado").innerHTML = `La suma de los números pares del 1 al ${numeroIngresado} es: ${sumaPares}`;
            } else {
                document.getElementById("resultado").innerHTML = "Ingrese un número válido y positivo.";
            }
    }

    Ejercicio37() {
        var num = parseInt(document.getElementById('numero').value);
        
        if (!isNaN(num)) {
            var resultado = '';
            for (var mul = 1; mul <= 12; mul++) {
                var resul = num * mul;
                resultado += num + ' x ' + mul + ' = ' + resul + '<br>';
            }
            document.getElementById('resultado').innerHTML = resultado;
        } else {
            alert('Por favor, ingresa un número válido.');
        }
    }

    Ejercicio38() {
        let pos = 0, cv = 0, frase,resp
        frase = document.getElementById("frase").value
        frase = frase.toLowerCase()
        while (pos < frase.length){
            if (frase[pos] == 'a' || frase[pos] == 'e' || frase[pos] == 'i' || frase[pos] == 'o' || frase[pos] == 'u'){
                cv=cv +1 
            }
            pos++
        }
        resp = document.getElementById("resultado")
        resp.innerHTML = `cantidad vocales: ${cv}`
    }

    Ejercicio39() {
        let palabraIngresada = document.getElementById("palabra").value;
        let contadorDigitos = 0;
        if (palabraIngresada.trim() !== "") {
           
            for (let i = 0; i < palabraIngresada.length; i++) {
                let caracter = palabraIngresada.charAt(i);
                
                if (!isNaN(parseInt(caracter))) {
                    contadorDigitos++;
                }
            }

            document.getElementById("resultado").innerHTML = `La palabra "${palabraIngresada}" tiene ${contadorDigitos} dígitos.`;
        } else {
            document.getElementById("resultado").innerHTML = "Ingrese una palabra válida.";
        }
    }

    Ejercicio40() {
        let numeroAleatorio = Math.floor(Math.random() * 100) + 1;

        let intentoUsuario = parseInt(document.getElementById("adivinaNumero").value);
        if (!isNaN(intentoUsuario)) {
                if (intentoUsuario === numeroAleatorio) {
                    // El usuario adivinó correctamente
                    document.getElementById("resultado").innerHTML = "¡Felicidades! Has adivinado el número.";
                } else {
                    // El usuario no adivinó, dar pistas
                    if (intentoUsuario < numeroAleatorio) {
                        document.getElementById("resultado").innerHTML = "Intenta con un número más grande.";
                    } else {
                        document.getElementById("resultado").innerHTML = "Intenta con un número más pequeño.";
                    }
                }
        } else {
                // El usuario no ha ingresado un número válido
                document.getElementById("resultado").innerHTML = "Ingresa un número válido.";
        }
    }

    Ejercicio41() {
        let palabraIngresada = document.getElementById("palabra").value.toLowerCase();
            let contadorLetras = 0;

            // Verificar si la palabra ingresada no está vacía
            if (palabraIngresada.trim() !== "") {
                // Utilizar un bucle for para contar el número de letras del alfabeto
                for (let i = 0; i < palabraIngresada.length; i++) {
                    let caracter = palabraIngresada.charAt(i);
                    // Verificar si el caracter actual es una letra del alfabeto
                    if (/^[a-z]$/.test(caracter)) {
                        contadorLetras++;
                    }
                }

                // Mostrar el resultado
                document.getElementById("resultado").innerHTML = `La palabra "${palabraIngresada}" tiene ${contadorLetras} letras del alfabeto.`;
            } else {
                // Manejar el caso en que no se ingresa una palabra
                document.getElementById("resultado").innerHTML = "Ingrese una palabra válida.";
            }
    }

    Ejercicio42() {
        let suma = 0;
        let numero = 1;

        // Utilizar un bucle while para sumar los números impares del 1 al 100
        while (numero <= 100) {
            suma += numero;
            numero += 2; // Incrementar en 2 para pasar al siguiente número impar
        }

        // Mostrar el resultado
        document.getElementById("resultado").innerHTML = `La suma de los números impares del 1 al 100 es: ${suma}`;
    }

    Ejercicio43() {
        let palabraIngresada = document.getElementById("palabra").value;
            let cantidadCaracteres = palabraIngresada.length;

            // Mostrar el resultado
            document.getElementById("resultado").innerHTML = `La palabra "${palabraIngresada}" tiene ${cantidadCaracteres} caracteres.`;
    }

    Ejercicio44() {
        let inputNumero = document.getElementById("numero");
        let numero = parseInt(inputNumero.value);
        let suma = 0;
        while (numero >= 0) {
            suma += numero;
            inputNumero.value = "";
            numero = parseInt(prompt("Ingrese otro número (negativo para finalizar):"));
        }
        document.getElementById("resultado").innerHTML = `Suma total: ${suma}`;
    }

}

let ope = new Ejercicio()

// Ejercicios del 45 al 51
function iniciarCuentaRegresiva(){   //ejercicio 45
    const numero = parseInt(document.getElementById("numero").value);

    if (!isNaN(numero) && numero > 0) {
        mostrarCuentaRegresiva(numero);
    } else {
        alert("Ingrese un número entero positivo válido.");
    }
    function mostrarCuentaRegresiva(numero) {
        let countdown = numero;
        let countdownInterval = setInterval(function() {
            if (countdown > 0) {
                document.getElementById("resultado").innerHTML = `Cuenta Regresiva: ${countdown}`;
                countdown--;
            } else {
                clearInterval(countdownInterval);
                document.getElementById("resultado").innerHTML = "¡Cuenta Regresiva Completa!";
            }
        }, 1000); // Actualiza cada segundo (1000 milisegundos)
    }
}

function calcularSuma(){     //ejercicio 46
    const numerosInput = document.getElementById("numeros");
    const numerosString = numerosInput.value;
    if (numerosString.trim() === "") {
        alert("Ingrese al menos un número.");
        return;
    }
    const numeros = numerosString.split(",").map(num => parseInt(num.trim())).filter(num => !isNaN(num));
    const suma = sumarElementos(numeros);
    mostrarResultado(suma);
    function sumarElementos(arreglo) {
        return arreglo.reduce((suma, numero) => suma + numero, 0);
    }
    function mostrarResultado(suma) {
        const respElement = document.getElementById("resultado");
        respElement.innerHTML = `La suma de los números ingresados es: ${suma}`;
    }
}

function promedioNotas(){ //Ejercicio 47
    let resp,pro,acu=0,pos,lon,notas = document.getElementById("notas").value
    notas = notas.split(";")
    lon = notas.length
    for(pos=0;pos < lon;pos++){
        acu=acu +parseFloat(notas[pos])
    }
    pro = acu / lon
    pro =  Math.round(pro * 100) / 100;
    resp = document.getElementById("resultado")
    resp.innerHTML = `Promedio de Notas:[${notas}] = ${pro}` 
}

function encontrarMayorMenor(){    //ejercicio 48
    const numerosInput = document.getElementById("numeros");
    const numerosString = numerosInput.value.trim();
    if (numerosString === "") {
        alert("Ingrese al menos un número.");
        return;
    }
    const numerosArray = numerosString.split(",").map(numero => parseInt(numero.trim()));

    if (numerosArray.some(isNaN)) {
        alert("Ingrese números válidos separados por coma.");
        return;
    }
    const resultado = encontrarMayorYMenor(numerosArray);
    mostrarResultado(resultado);
    function encontrarMayorYMenor(arreglo) {
        if (arreglo.length === 0) {
            return { mayor: null, menor: null };
        }
        let mayor = arreglo[0];
        let menor = arreglo[0];
        for (let i = 1; i < arreglo.length; i++) {
            if (arreglo[i] > mayor) {
                mayor = arreglo[i];
            }
            if (arreglo[i] < menor) {
                menor = arreglo[i];
            }
        }
        return { mayor, menor };
    }
    function mostrarResultado(resultado) {
        const respContainer = document.getElementById("resultado");
        respContainer.innerHTML = `El mayor valor es: ${resultado.mayor}, y el menor valor es: ${resultado.menor}`;
    }
}

function buscarElemento(){    //ejercicio 49
    const numeroInput = document.getElementById("numero");
    const numero = parseFloat(numeroInput.value.trim());
    if (isNaN(numero)) {
        alert("Ingrese un número válido.");
        return;
    }
    const arreglo = [3, 7, 1, 9, 5]; 
    const encontrado = arreglo.includes(numero);
    mostrarResultado(encontrado);
    function mostrarResultado(encontrado) {
        const respContainer = document.getElementById("resultado");
        respContainer.innerHTML = encontrado
            ? "El número está presente en el arreglo."
            : "El número no está presente en el arreglo.";
    }
}

function contarParesImpares(){     //ejercicio 50
    const numerosInput = document.getElementById("numeros");
    const numerosString = numerosInput.value.trim();
    if (numerosString === "") {
        alert("Ingrese al menos un número.");
        return;
    }
    const numerosArray = numerosString.split(",").map(numero => parseInt(numero.trim()));
    if (numerosArray.some(isNaN)) {
        alert("Ingrese números válidos separados por coma.");
        return;
    }
    const resultado = contarParesEImpares(numerosArray);
    mostrarResultado(resultado);
    function contarParesEImpares(arreglo) {
        let pares = 0;
        let impares = 0;
        for (let i = 0; i < arreglo.length; i++) {
            if (arreglo[i] % 2 === 0) {
                pares++;
            } else {
                impares++;
            }
        }
        return { pares, impares };
    }
    function mostrarResultado(resultado) {
        const respContainer = document.getElementById("resultado");
        respContainer.innerHTML = `Total de números pares: ${resultado.pares}, Total de números impares: ${resultado.impares}`;
    }
}
function invertirArreglo() {  //ejercicio 51
    const numerosInput = document.getElementById("numeros");
    const numerosString = numerosInput.value.trim();
    if (numerosString === "") {
        alert("Ingrese al menos un número.");
        return;
    }
    const numerosArray = numerosString.split(",").map(numero => parseInt(numero.trim()));
    if (numerosArray.some(isNaN)) {
        alert("Ingrese números válidos separados por coma.");
        return;
    }
    const resultado = invertirArregloNumeros(numerosArray);
    mostrarResultado(resultado);
}
function invertirArregloNumeros(arreglo) {
    return arreglo.reverse();
}
function mostrarResultado(resultado) {
    const respContainer = document.getElementById("resultado");
    respContainer.innerHTML = `Arreglo invertido: [${resultado.join(", ")}]`;
}

// EJERCICIOS DEL 52 AL 62 O 57 AL 62

function buscarIndice() {
    var valorBuscado = document.getElementById("valor").value;
    var arreglo = [1, 3, 5, 7, 3, 9, 3, 11];
    var indices = [];

    for (var i = 0; i < arreglo.length; i++) {
      if (arreglo[i] == parseInt(valorBuscado)) {
        indices.push(i);
      }
    }

    var resultado = indices.length > 0
      ? `El valor ${valorBuscado} aparece en los siguientes índices: ${indices.join(", ")}`
      : `El valor ${valorBuscado} no se encuentra en el arreglo.`;

    document.getElementById("resultado").innerText = resultado;
  }

  function saludar() {
    alert("¡Hola! Bienvenido a mi página.");
  }

  function sumarNumeros() {
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);
    let resultado = document.getElementById("resultado");

    // Validar si se ingresaron valores válidos
    if (isNaN(numero1) || isNaN(numero2)) {
        resultado.innerHTML = "Por favor, ingrese números válidos.";
        return;
    }

    // Llamar a la función para sumar y mostrar el resultado
    let suma = sumar(numero1, numero2);
    resultado.innerHTML = `La suma de ${numero1} + ${numero2} es: ${suma}.`;
}

// Definir la función para sumar dos números
function sumar(a, b) {
    return a + b;
}

function multiplicar(num1,num2) {
    let resul = 0
    resul = num1 * num2	
    return resul
}
function multiplicacion() {
    let n1 = 0, n2=0,resp,r
    n1 = document.getElementById("n1").value
    n2 = document.getElementById("n2").value
    n1 = parseFloat(n1)
    n2 = parseFloat(n2)
    r = this.multiplicar(n1,n2)
    resp = document.getElementById("resultado")
    resp.innerHTML = `${n1}*${n2}=${r}`

}

function determinarParImpar() {
    var numero = parseInt(document.getElementById("numero").value);

    if (!isNaN(numero)) {
      esParImpar(numero);
    } else {
      document.getElementById("resultado").innerText = "Ingrese un número válido.";
    }
  }

  function esParImpar(num) {
    if (num % 2 === 0) {
      document.getElementById("resultado").innerText = `${num} es un número par.`;
    } else {
      document.getElementById("resultado").innerText = `${num} es un número impar.`;
    }
  }

  function calcularYMostrarArea() {
    var base = parseFloat(document.getElementById("base").value);
    var altura = parseFloat(document.getElementById("altura").value);

    if (!isNaN(base) && !isNaN(altura)) {
      var area = calcularAreaRectangulo(base, altura);
      document.getElementById("resultado").innerText = `El área del rectángulo es: ${area}`;
    } else {
      document.getElementById("resultado").innerText = "Ingrese valores válidos para base y altura.";
    }
  }

  function calcularAreaRectangulo(base, altura) {
    return base * altura;
  }

  function imprimirNombre() {
    alert("Nuestros nombres son: isaac, Alejandra, Sonnia, Oscar, Geancarlos, Daniela y Andres");
  }

  function convertirYMostrar() {
    var gradosCelsius = parseFloat(document.getElementById("celsius").value);

    if (!isNaN(gradosCelsius)) {
      var gradosFahrenheit = convertirCelsiusAFahrenheit(gradosCelsius);
      document.getElementById("resultado").innerText = `La temperatura en Fahrenheit es: ${gradosFahrenheit} °F`;
    } else {
      document.getElementById("resultado").innerText = "Ingrese un valor válido para grados Celsius.";
    }
  }

  function convertirCelsiusAFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
  }

  function ContarYMostrar() {
    var frase = document.getElementById("frase").value;
    var caracter = document.getElementById("caracter").value;

    if (frase && caracter) {
      var contador = contarCaracterEnFrase(frase, caracter);
      document.getElementById("resultado").innerText = `El carácter '${caracter}' aparece ${contador} veces en la frase.`;
    } else {
      document.getElementById("resultado").innerText = "Ingrese una frase y un carácter.";
    }
  }

  function contarCaracterEnFrase(frase, caracter) {
    var contador = 0;
    for (var i = 0; i < frase.length; i++) {
      if (frase.charAt(i) === caracter) {
        contador++;
      }
    }
    return contador;
  }

  function imprimirNumeros() {
    for (var i = 1; i <= 10; i++) {
      alert(i);
    }
  }

  function sumarYMostrar() {
    var numerosInput = document.getElementById("numeros").value;
    var numeros = numerosInput.split(',').map(Number);

    if (numeros.every(isNumber)) {
      var suma = sumarListaNumeros(numeros);
      document.getElementById("resultado").innerText = `La suma de los números es: ${suma}`;
    } else {
      document.getElementById("resultado").innerText = "Ingrese una lista válida de números.";
    }
  }

  function isNumber(value) {
    return !isNaN(value);
  }

  function sumarListaNumeros(lista) {
    return lista.reduce(function(a, b) {
      return a + b;
    }, 0);
  }