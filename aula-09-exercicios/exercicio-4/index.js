

// criar um array com os valores de 1-6
const numeros = [ 1, 2, 3, 4, 5, 6 ]
console.log("Números originais:", numeros)

//determinar o tamanho do Array
const tamanho = numeros.length

//adicionar os numeros de 7-10
const adicionar = numeros.push(7, 8, 9, 10)
console.log("Números após adição do 7 a 10:", numeros)

// remover os numeros 4 e 5
const remover = numeros.splice(3, 2)
console.log("Números após remoção do 4 e 5:", numeros)

//determinar o novo tamanho do Array
const novoTamanho = numeros.length

//console.log("Números originais:", numeros)
console.log("Tamanho original:", tamanho)
console.log("Novo tamanho:", novoTamanho)




