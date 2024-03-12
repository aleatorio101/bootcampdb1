const encontrarImpares = (array) => {
    return array.filter(num => num % 2 !== 0);
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 13, 20, 17];
const impares = encontrarImpares(numeros);
console.log("os números impares são:", impares);
