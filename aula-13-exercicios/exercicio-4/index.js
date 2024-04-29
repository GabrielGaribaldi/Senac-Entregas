
// Criar uma função
function manipularPessoa (objeto) {
    // Duplicar o objeto mantendo as propriedades
    const duplicata = {
        ...objeto,
        comidasFavoritas: [ 'Lasanha', 'Pizza', 'Hamburguer'],
        melhorAmigo: {
            nome: 'Marcos',
            idade: 23,
        },
    }

    // Imprimir seguindo o modelo
    console.log(`O nome da pessoa é ${duplicata.nome} e suas comidas preferidas são ${duplicata.comidasFavoritas[0]}, ${duplicata.comidasFavoritas[1]} e ${duplicata.comidasFavoritas[2]}. Seu melhor amigo se chama ${duplicata.melhorAmigo.nome} e tem ${duplicata.melhorAmigo.idade} anos.`)

}



// Criar um objeto pessoa
const pessoa1 = {
    nome: 'José',
    idade: 23,
}

// Criar um objeto pessoa
const pessoa2 = {
    nome: 'Maria',
    idade: 25,
}


// Chamar a função
manipularPessoa(pessoa1)
manipularPessoa(pessoa2)