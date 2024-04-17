
const nome = prompt("Qual seu nome?")
const anoNascimento = Number(prompt("Em que ano você nasceu?"))
const anoAtual = Number(prompt("Em que ano nós estamos?"))
const idadeAtual = anoAtual - anoNascimento
const idadeEm2050 = 2050 - anoNascimento

console.log("Nome:", nome)
console.log("Idade:", idadeAtual)
console.log("É maior de idade?", idadeAtual >= 18)
console.log("Idade em 2050:", idadeEm2050)


