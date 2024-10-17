
    // Solicitar al usuario un número//
    var numero = prompt("Ingresa un número para calcular su raíz cuadrada:");

    // Convertir el texto ingresado a número
    var numeroConvertido = Number(numero);
    
    // Verificar si el número es válido
    if (numeroConvertido >= 0) {
        // Calcular la raíz cuadrada
        var raizCuadrada = Math.sqrt(numeroConvertido);
        
        // Mostrar el resultado
        alert("La raíz cuadrada de " + numeroConvertido + " es: " + raizCuadrada);
    } else {
        // Mostrar un mensaje de error si el número no es válido
        alert("Por favor, ingresa un número mayor o igual a 0.");
    }
    