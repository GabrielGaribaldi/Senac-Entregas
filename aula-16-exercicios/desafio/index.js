

// Coletar informações do usuário
let nome = prompt("Nome Completo:")
let tipoJogo = prompt("Tipo de jogo: IN (internacional); DO (doméstico):").toUpperCase()
let etapaJogo = prompt("Etapa do jogo: SF (semi-final); DT (decisão de terceiro lugar); FI (final)").toUpperCase()
let categoria = Number(prompt("Categoria: 1, 2, 3 ou 4:"))
let quantIngressos = Number(prompt("Quantidade de ingressos:"))

// parâmetros
let nCategoria = categoria - 1
let precoDolar = 5
let moeda
let valorIngresso
let valorTotal

// Tabela de valores dos ingressos
const tabelaValores = {
    "SF": [1320, 880, 550, 220],
    "DT": [660, 440, 330, 170],
    "FI": [1980, 1320, 880, 330],
}

// Tabela etapas dos jogos
const tabelaEtapaJogo = {
    "SF": ["Semi-Final"],
    "DT": ["Terceiro Lugar"],
    "FI": ["Final"],
}

// Verificar tipo de ingressos a serem vendidos
if (tipoJogo === "DO") {
    valorIngresso = tabelaValores[etapaJogo][nCategoria]
    valorTotal = valorIngresso * quantIngressos
    tipoJogo = "Doméstico"
    etapaJogo = tabelaEtapaJogo[etapaJogo][0]
    moeda = "R$"

} else if (tipoJogo === "IN") {
    valorIngresso = tabelaValores[etapaJogo][nCategoria] / precoDolar
    valorTotal = valorIngresso * quantIngressos
    tipoJogo = "Internacional"
    etapaJogo = tabelaEtapaJogo[etapaJogo][0]
    moeda = "U$"
}

// Imprimir no console
console.log("---Dados da compra---")
console.log("Nome do cliente: ", nome)
console.log("Tipo do jogo: ", tipoJogo)
console.log("Etapa do jogo: ", etapaJogo)
console.log("Categoria: ", categoria)
console.log("Quantidade de Ingressos: ", quantIngressos)
console.log("---Valores---")
console.log("Valor do ingresso: ",moeda, valorIngresso)
console.log("Valor total: ", moeda, valorTotal)




