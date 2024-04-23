
//solicitar nome e email do usuário
const nome = prompt("Qual seu nome?")
const email = prompt("Qual seu email?")

//transformar o email em letras minusculas
const emailMinusculo = email.toLowerCase()

//imprimir os dados no console
console.log(`O e-mail ${emailMinusculo} foi cadastrado com sucesso.`)
console.log(`Seja bem-vinda(o), ${nome}!`)

