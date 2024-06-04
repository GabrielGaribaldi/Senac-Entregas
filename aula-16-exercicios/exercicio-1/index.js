
// Solicitar a idado do usuário e estabelecer a idade mínima
let idadeUsuario = Number(prompt("Digite sua idade"))
let idadeMinima = 18

// Verificar se o usuário pode ou não dirigir
if (idadeUsuario >= idadeMinima) {
    console.log("Você pode dirigir")
} else {
    console.log("Você não pode dirigir")
}