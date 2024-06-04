
// Solicitar o gênero do filme e o preço do ingresso
const genero = prompt("Qual o gênero do filme?").toLowerCase()
const ingresso = Number(prompt("Qual o valor do ingresso?"))

// Validações
let validaGenero = "fantasia"
let validaIngresso = 15 // preço máximo do ingresso


// Verificar se irão assistir o filme
if ((genero === validaGenero) && (ingresso < validaIngresso)) {
    console.log("Bom Filme!")
}
else{
    console.log("Escolha outro filme :(") 
}
