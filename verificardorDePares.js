const encontrarPares = (array) => {
    return array.filter(num => num % 2 === 0);
}

// Exemplo de uso
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = encontrarPares(numeros);
console.log("Números pares:", pares);

