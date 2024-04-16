
let nome 
let idade

console.log(typeof nome)
console.log(typeof idade)

/*
Foi impresso "undefined" em ambos os casos devido ao fato 
de não ter sido atribuído nenhum valor à variável
*/

nome = prompt("Qual seu nome?")
idade = prompt("Qual sua idade?")

console.log(typeof nome)
console.log(typeof idade)

/*
Foi impresso "string" em ambos os casos devido ao fato 
do comando "prompt" sempre retornar os valores das variáveis 
no tipo "string"
*/

console.log("Olá", nome, "você tem", idade, "anos.")