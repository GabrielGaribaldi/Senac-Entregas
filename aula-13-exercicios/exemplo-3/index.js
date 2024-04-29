
// OBJETOS DENTRO DE OBJETOS
const donoDoPet = {
    nome: 'José',
    pet: {
        nome: 'jack',
        raca: 'Dálmata',
        idade: 1,
    }
}

console.log(`O nome da pessoa é ${donoDoPet.nome}, ela possui um pet chamado ${donoDoPet.pet.nome}, que é da raca ${donoDoPet.pet.raca} e tem ${donoDoPet.pet.idade} anos.`)
