

// Declarar uma função que de SOMA com dois parâmetros
function somar (a,b) {

    // Somar os dois números
    const adicao = a + b
    
    // Retornar o resultado
    return adicao
}


// Declarar uma função que de SUBTRAÇÃO com dois parâmetros
function subtrair (a,b) {

    // Subtrair o primeiro pelo segundo número
    const subtracao = a - b
    
    // Retornar o resultado
    return subtracao
}

// Declarar uma função que de MULTIPLICAÇÃO com dois parâmetros
function multiplicar (a,b) {

    // Multiplicar os dois números
    const multiplicacao = a * b
    
    // Retornar o resultado
    return multiplicacao
}

// Declarar uma função que de DIVISÃO com dois parâmetros
function dividir (a,b) {

    // Dividir o primeiro pelo segundo número
    const divisao = a / b
    
    // Retornar o resultado
    return divisao
}

// Pedir dois números ao usuário
const primeiroNumero = Number(prompt("Informe um número:"))
const segundoNumero = Number(prompt("Informe outro número:"))


// Imprimir no console o resultado das operações
console.log(`Numeros inseridos: ${primeiroNumero} e ${segundoNumero}`)
console.log(`--`)
console.log(`Soma: `,somar(primeiroNumero,segundoNumero))
console.log(`Diferença: `,subtrair(primeiroNumero,segundoNumero))
console.log(`Multiplicação: `,multiplicar(primeiroNumero,segundoNumero))
console.log(`Divisão: `,dividir(primeiroNumero,segundoNumero))
