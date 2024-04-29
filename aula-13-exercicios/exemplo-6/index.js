

// ESPALHAMENTO OU SPREAD "..."

const usuario = {
    nome: 'José', 
    idade: 89,
    email: 'jose@gmail.com'

}

// Duplicar com spread
const novo = {
    ...usuario,
    email: 'jose2@gmail.com',
}

// Imprimir no console
console.log(novo)



