
// Solicitar o turno de estudo do usuário
// "M" (matutino), "V" (Vespertino) ou "N" (Noturno)
const turno = prompt("Qual turno você estuda? Matutino, Vespertino ou Noturno. Digite: M, V ou N").toUpperCase()


// Verificar o turno que o usuário estuda e imprimir uma mensagem
switch (turno) {
    case "M":
        console.log("Bom dia!")
        break;
    case "V":
        console.log("Boa tarde!")
        break;
    case "N":
        console.log("Boa noite!")
        break;
    default:
        console.log("Boa aula!")
        break;
}


