

// Criar dois objetos 
const usuario1 = {
    nome: 'Bruno',
    idade: 23,
    profissao: 'Instrutor',
}

const usuario2 = {
    nome: 'Vitor',
    idade: 17,
    profissao: 'Estudante',
}

// Criar uma função que retorna informações de um objeto
function minhaFuncao (pessoa) {
        let resultado = [ pessoa.nome, pessoa.nome.length, pessoa.idade, pessoa.profissao, pessoa.profissao.length ]
    
        return resultado
}

// Imprimir a declaração da função no console
console.log(minhaFuncao(usuario1))
console.log(minhaFuncao(usuario2))

