
//pedir que o usuário insira dois números
const primeiroNumero = Number(prompt("Informe o primeiro número!"))
const segundoNumero = Number(prompt("Informe o segundo número!"))

//imprimir os dois números informados
console.log("primeiro número:", primeiroNumero)
console.log("segundo número:", segundoNumero)

//calcular se o primeiro numero é maior que segundo. E imprimir true/false
const numeroMaior = primeiroNumero > segundoNumero
console.log("O primeiro numero é maior que segundo?", numeroMaior)

//calcular se o primeiro numero é igual ao segundo. E imprimir true/false
const numeroIgual = primeiroNumero === segundoNumero
console.log("O primeiro numero é igual ao segundo?", numeroIgual)

//verificar se o primeiro numero é divisível pelo segundo. E imprimir true/false

console.log("O primeiro numero é divisível pelo segundo?", (primeiroNumero % segundoNumero) === 0)


//verificar se o segundo numero é divisível pelo primeiro. E imprimir true/false

console.log("O segundo numero é divisível pelo primeiro?", (segundoNumero % primeiroNumero) === 0)