
//Declarar uma função
function multiplicar (a, b) {
    // Retornar a multiplicação dos parâmetros
    return  a * b
}


//Declarar uma função usando formato de "Expressão"
const multiplicarExpressao = function (a, b) {
    // Retornar a multiplicação dos parâmetros
    return  a * b
}

//Declarar uma função usando formato de "Arrow funcion"
const multiplicarArrow = (a, b) => {
    // Retornar a multiplicação dos parâmetros
    return  a * b
}

// Imprimir no console
console.log(multiplicar(2,3))
console.log(multiplicarExpressao(2,3))
console.log(multiplicarArrow(2,3))