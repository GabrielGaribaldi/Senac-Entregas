


let nome = 'g' // prompt("Nome Completo:")
let tipoJogo = 'in' // prompt("Tipo de jogo: IN (internacional); DO (doméstico):").toUpperCase()
let etapaJogo = 'SF' // prompt("Etapa do jogo: SF (semi-final); DT (decisão de terceiro lugar); FI (final)").toUpperCase()
let categoria = 1 // Number(prompt("Categoria: 1, 2, 3 ou 4:"))
let quantIngressos = 2 // Number(prompt("Quantidade de ingressos:"))

let precoDolar = 5
let valorIngresso
let valorTotal

const tabelaValores = {
    "SF": [ 1320, 880, 550, 220 ]
}
tabelaValores[etapaJogo][categoria]
// ingressos
if (etapaJogo === "SF") {
    switch (categoria) {
        case 1:
            valorIngresso = 1320
            break;
        case 2:
            valorIngresso = 880
            break;
        case 3:
            valorIngresso = 550
            break;
        case 4:
            valorIngresso = 220
            break;
        default:
    }
    etapaJogo = "Semi-final"
    valorTotal = valorIngresso * quantIngressos
}

if (etapaJogo === "DT") {
    switch (categoria) {
        case 1:
            valorIngresso = 660
            break;
        case 2:
            valorIngresso = 440
            break;
        case 3:
            valorIngresso = 330
            break;
        case 4:
            valorIngresso = 170
            break;
        default:
    }
    etapaJogo = "Terceiro Lugar"
    valorTotal = valorIngresso * quantIngressos
}

if (etapaJogo === "FI") {
    switch (categoria) {
        case 1:
            valorIngresso = 1980
            break;
        case 2:
            valorIngresso = 1320
            break;
        case 3:
            valorIngresso = 880
            break;
        case 4:
            valorIngresso = 330
            break;
        default:
    }
    etapaJogo = "Final"
    valorTotal = valorIngresso * quantIngressos
}

if (tipoJogo === "DO") {
    tipoJogo = "Doméstico"
} else if (tipoJogo === "IN") {
    tipoJogo = "Internacional"
}



// Imprimir no console
console.log("---Dados da compra---")
console.log("Nome do cliente: ", nome)
console.log("Tipo do jogo: ", tipoJogo)
console.log("Etapa do jogo: ", etapaJogo)
console.log("Categoria: ", categoria)
console.log("Quantidade de Ingressos: ", quantIngressos)
console.log("---Valores--- ")
console.log("Valor do ingresso: ", valorIngresso)
console.log("Valor total: ", valorTotal)




