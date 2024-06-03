
const nomePersonagem = prompt('Digite seu nome:').toLowerCase()

switch (nomePersonagem) {
    case 'harry':
        console.log('Você foi destinado para a Grifinória')
        break
    case 'ron':
        console.log('Você foi destinado para a Lufa-lufa')
        break
    case 'hermione':
        console.log('Você foi destinado para a Corvinal')
        break
    case 'draco':
        console.log('Você foi destinado para a Sonserina')
        break
    default:
        console.log('Você foi expulso de Hogwarts')
}

