

// SINTAXE DE UM OBJETO
const usuario = {
    nome: 'José',
    idade: 89,
    comidasFavoritas: [ 'Arroz', 'Feijão', 'Carne'],
    contarPiada: function () {
        console.log('Por que a galinha atravessou a rua?')
    },
}


// ACESSANDO O CONTEÚDO DO OBJETO USANDO A NOTAÇÃO DE "." (PONTO)
console.log(usuario.nome)
console.log(usuario.idade)
console.log(usuario.comidasFavoritas)


// ACESSANDO O CONTEÚDO DO OBJETO USANDO A NOTAÇÃO DE "[]" (COLCHETES)
console.log(usuario['nome'])
console.log(usuario['idade'])
console.log(usuario['comidasFavoritas'])
