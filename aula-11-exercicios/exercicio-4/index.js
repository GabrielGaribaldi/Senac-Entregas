
// Criar função que recebe array de números
function dividirPrimeiroUltimo (listaDeNumeros) {
    // Descobrir os números
    let primeiro = listaDeNumeros[0]
    let ultimo = listaDeNumeros[listaDeNumeros.length - 1]

    // Dividir os números por 2
    primeiro = primeiro / 2
    ultimo = ultimo / 2

    // Criar um novo array
    const novaLista = [ primeiro, ultimo ]

    //retornar novaLista
    return novaLista
}

// Criar alguns arrays
const lista1 = [ 2, 4, 6, 8 ]
const lista2 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
const lista3 = [ -10, 75, 8.5 ]


// Imprimir os resultados no console
console.log(dividirPrimeiroUltimo(lista1))
console.log(dividirPrimeiroUltimo(lista2))
console.log(dividirPrimeiroUltimo(lista3))