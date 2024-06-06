// Perguntar ao usuário a quantidade de pets
const quantPets = Number(prompt("Quantos pets você tem?"))
const quantMin = 1
// solicitar nome dos pets e guardar em um array
if (quantPets < quantMin) {
    console.log("Que pena! Você pode adotar um pet!")
}
else if (quantPets >= quantMin) {
    const nomesPets = [ ]

    // Coletar o nome de cada pet
    for (let cont = 0; cont < quantPets; cont++) {
    const nome = prompt(`Qual é o nome do seu ${cont + 1}º pet?`)
    nomesPets.push(nome)
    }

    // Imprimir no console o array com os nomes dos pets
    console.log(nomesPets)
}




