

// Declarar uma função que não receba nenhum parâmetro
function sobreMim () {

    // Imprimir uma mensagem no console
    const frase = `Eu sou Gabriel, tenho 28 anos, moro em São Leopoldo e sou estudante.`
    console.log(frase)
}

// Invocar a função
sobreMim()


// Declarar uma segunda função que receba quatro parâmetros
function sobreAlguem (nome, idade, cidade, profissao) {
    return `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade}  e sou ${profissao}.`
    
}

// Informar dados para serem usados nos parâmetros da segunda função 
const nome = "Marcos"
const idade = 23
const cidade = "Novo Hamburgo"
const profissao = "Engenheiro"

// Imprimir uma mensagem no console
console.log(sobreAlguem(nome, idade, cidade, profissao))

