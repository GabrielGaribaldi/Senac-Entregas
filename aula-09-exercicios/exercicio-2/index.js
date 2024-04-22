
//Pedir uma frase para o usuário
const frase = prompt("Digite uma frase:")

//Escrever toda a frase em letras maiúsculas
const fraseMaiuscula = frase.toUpperCase()

//Substituir todos os "O" por "I" na frase
const fraseModificada = fraseMaiuscula.replaceAll("O","I")

//Medir o tamanho da frase
const tamanho = frase.length

//Imprimir no console
console.log("Frase original:", frase)
console.log("Tamanho da frase:", tamanho)
console.log("Frase Maiúscula:", fraseMaiuscula)
console.log("Frase em letras trocadas:", fraseModificada)



