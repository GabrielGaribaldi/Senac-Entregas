
// Crie uma função que receba 2 números (num1 e num2)
// Compara os números entre si

// Criar uma função
function compararNumeros(num1, num2) {
    console.log('Número 1: ', num1)
    console.log('Número 2: ', num2)

    if (num1 > num2) {
        console.log(`O número ${num1} é MAIOR do que o número ${num2}`)
    } else if (num1 < num2) {
        console.log(`O número ${num1} é MENOR do que o número ${num2}`)
    } else {
        console.log(`O número ${num1} é IGUAL ao número ${num2}`)
    }
    console.log('-----')
}

compararNumeros(6, 6)
compararNumeros(9, 3)
compararNumeros(12, 15)
compararNumeros(18, 18)