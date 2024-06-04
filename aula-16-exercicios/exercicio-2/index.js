
// Solicitar o turno de estudo do usuário
// "M" (matutino), "V" (Vespertino) ou "N" (Noturno)
const turno = prompt("Qual turno você estuda? Matutino, Vespertino ou Noturno. Digite: M, V ou N").toUpperCase()


// Verificar o turno que o usuário estuda e imprimir uma mensagem
if (turno === "M") {
    console.log("Bom dia!")
}
else if (turno === "V") {
    console.log("Boa tarde!")
}
else if (turno === "N") {
    console.log("Boa noite!")
}