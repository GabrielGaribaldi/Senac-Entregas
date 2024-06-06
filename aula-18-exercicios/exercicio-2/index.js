
// Criar um array somente com números
const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

// Declarar uma função que imprima cada valor do array em uma linha
function arrayValores(lista) {
    for (let n of lista) {
        console.log(n)
    }
}

// Criar uma função que imprima cada um dos valores do array divididos por 10
function arrayDivisao(lista) {
    for (let n of lista) {
        const divisor = 10
        const divisao = n / divisor
        console.log(`${n} dividido por ${divisor} é: ${divisao}`)
    }
}

// Criar uma função que cria um novo array contendo somente os números PARES do array original
function arrayPar(lista) {
    let par = []
    for (let n of lista) {
        if (n % 2 === 0) {
            par.push(n)
        }
    }
    console.log(par)
}

// Criar uma função que cria um novo array contendo strings
function arrayString(lista) {
    let novoArray = []
    for (let [i, numero] of lista.entries()) {
        novoArray.push(`O elemento do índice ${i} é: ${numero}`)
    }
    console.log(novoArray)
}

// Criar uma função que imprima no console o maior e o menor números contidos no array original
function arrayMaiorMenor(lista) {
    let maior = lista[0]
    let menor = lista[0]

    for (let n of lista) {
        if (n > maior) {
            maior = n
        } else if (n < menor) {
            menor = n
        }
    }
    console.log(`O maior número é: ${maior}`)
    console.log(`O menor número é: ${menor}`)
}

// Declarar funções
console.log(arrayOriginal)
 arrayValores(arrayOriginal)
 arrayDivisao(arrayOriginal)
 arrayPar(arrayOriginal)
 arrayString(arrayOriginal)
 arrayMaiorMenor(arrayOriginal)


