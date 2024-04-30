// Criar uma função que imprima uma mensagem no console
function imprimirApelidos (objeto) {
    console.log(`Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos[0]}, ${objeto.apelidos[1]} ou ${objeto.apelidos[2]}.`)
       
}

// Criar um objeto
const pessoa = {
    nome: 'Vitor Hugo',
    apelidos: [ 'Vitinho', 'Vitão', 'Vit' ],
}

// Criar um novo objeto com spread substituindo os apelidos
const novosApelidos = {
    ...pessoa,
    apelidos: [ 'VH', 'Vi', 'Vitu' ],
}

// Declarar a função
imprimirApelidos(pessoa)
imprimirApelidos(novosApelidos)