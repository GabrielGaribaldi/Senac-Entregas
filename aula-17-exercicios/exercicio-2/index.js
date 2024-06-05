
function encontrarMaiorNumero (listaDeNumeros) {
    let maiorNumero = listaDeNumeros[0]

    for (let i = 1; i < listaDeNumeros.length; i++) {
        if (listaDeNumeros[i] > maiorNumero) {
            maiorNumero = listaDeNumeros[i]
        }
    }
    return maiorNumero
}

console.log(encontrarMaiorNumero([ 12, 4, 17, 18, 27, 31]))