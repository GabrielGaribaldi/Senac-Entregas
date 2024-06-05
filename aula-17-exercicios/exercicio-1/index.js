
let numero
let soma = 0

while (numero != 0) {
    numero = Number(prompt("Digite um número para somar. Digite zero para parar."))
    soma = soma + numero
    console.log(numero)
}
console.log(`A soma dos número é ${soma}.`)