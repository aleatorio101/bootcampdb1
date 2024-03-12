function encontrarPares(array) {
    var numerosPares = [];

    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            numerosPares.push(array[i]);
        }
    }

    return numerosPares;
}

// Exemplo de uso
var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var pares = encontrarPares(numeros);
console.log("Números pares:", pares);
