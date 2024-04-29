
// Crie um objeto que represente um filme que contemple:
// Dados da direção
// Nome
// Ano de lançamento
// lista com o elenco
// Propriedade que diga se você já viu o filme ou não

const filme = {
    nome:'O senhor dos anéis',
    diretor: 'Peter Jackson',
    ano: 2001,
    atores: [ 'Elijah Wood', 'Sean Astin', 'Ian McKellen' ],
    visto: true,
}


console.log('nome: ', filme.nome)
console.log('diretor: ', filme.diretor)
console.log('ano de lançamento: ', filme.ano)
console.log('atores: ', filme.atores)
console.log('Já assisti este filme: ', filme.visto)
