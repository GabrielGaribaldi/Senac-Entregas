

// Criar constante no escolo global
const escopoGlobal = true

// Definir nova função
function imprimirVariaveis () {
    //Criar constante no escopo local
    const escopoLocal = true

    // Imprimir variáveis
    console.log("Variável global", escopoGlobal)
    console.log("Variável local", escopoLocal)
}

// Invocar a função
imprimirVariaveis()

// Tentar imprimir variáveis fora do escopo da função
console.log("Variável global", escopoGlobal)

// A variável escopoLocal não será impressa
console.log("Variável local", escopoLocal)
