
// Criar uma variável de escopo global
const carrinho = []

// Criar objetos que representem frutas
const mamao = {
    nome: 'Mamão',
    disponibilidade: true,
}

const melancia = {
    nome: 'Melância',
    disponibilidade: true,
}

const pera = {
    nome: 'Pera',
    disponibilidade: true,
}

// Criar uma função que receba um objeto "fruta" por parâmetro e coloque-o dentro de "carrinho".
function adicionarFrutas(fruta) {
    let adicionar = carrinho.push(fruta)

    return adicionar
}


// Declarar a função para adicionar frutas (objetos criados) ao carrinho
adicionarFrutas(mamao)
adicionarFrutas(melancia)
adicionarFrutas(pera)

// Imprimir "carrinho" (variável global) no console
console.log(carrinho) 










