

// Declarar uma função que receba 2 números como parâmetros
function somar (a, b) {
    
    // Somar as duas entradas
    const soma = a + b

    // Retornar o resultado
    return soma
}

// Invocar a função e imprimir o resultado no console
console.log(somar(33,39))

/////////////////////////////////////////////////////////////////////////////////////////////////////

// Declarar uma função que receba 2 números como parâmetros
function maiorOuIgual (a, b) {
    
    // Identificar se o primeiro é maior ou igaul ao segundo
    const maiorIgual = a >= b

    // E retornar o resultado
    return maiorIgual
}

// Invocar a função e imprimir o resultado no console
console.log(maiorOuIgual(12, 35))

/////////////////////////////////////////////////////////////////////////////////////////////////////

// Declarar uma função que receba 1 número como parâmetro
function verificarNumeroPar (numero) {
    
    // Identificar se o número é par
    const numeroPar = (numero % 2) === 0

    // E retornar o resultado
    return numeroPar
}

// Invocar a função e imprimir o resultado no console
console.log(verificarNumeroPar(56))

/////////////////////////////////////////////////////////////////////////////////////////////////////

// Declarar uma função que receba uma mensagem como parâmetro
function transformarMaiuscula (mensagem) {
    
    // Contar o tamanho da mensagem
    const tamanho = mensagem.length

    // Transformar a mensagem em maiuscula
    const maiuscula = mensagem.toUpperCase()

    // E retornar o resultado
    console.log("TAMANHO DA MENSAGEM:", tamanho)
    console.log("MENSAGEM:", maiuscula)
}

// Invocar a função
transformarMaiuscula("Bom dia, hoje é sexta feira e o dia está nublado")











