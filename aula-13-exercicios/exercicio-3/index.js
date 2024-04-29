

// Criar um objeto
const filme = {
    nome:'O senhor dos anéis',
    diretor: 'Peter Jackson',
    ano: 2001,
    elenco: [{
        ator: 'Elijah Wood',
        personagem: 'Frodo',
    },{
        ator: 'Sean Astin',
        personagem: 'Sam',
    },{
        ator: 'Ian McKellen',
        personagem: 'Gandalf',

    }],
    visto: true,
}

// Adicionar uma propriedade
filme.personagens = [ 'Frodo', 'Sam', 'Gandalf']

// Imprimir lista de atores e personagens no console
console.log(`Ator: ${filme.elenco[0].ator} | Personagem: ${filme.elenco[0].personagem}`)
console.log(`Ator: ${filme.elenco[1].ator} | Personagem: ${filme.elenco[1].personagem}`)
console.log(`Ator: ${filme.elenco[2].ator} | Personagem: ${filme.elenco[2].personagem}`)


// Alterar a primeira pessoa do elenco
filme.elenco[0].ator = 'Xuxa'

// Imprimir no console todas as propriedades
console.log(filme)


