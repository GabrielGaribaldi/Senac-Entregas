
const pokemon = prompt('Qual o seu Pokémon inicial? Bulbasauro, Charmander, Squirtle').toLowerCase()

switch (pokemon) {
    case 'bulbasauro':
        console.log('O Pokémon Bulbasauro é do tipo Planta e Veneno')
        break
    case 'charmander':
        console.log('O Pokémon Charmander é do tipo Fogo')
        break
    case 'squirtle':
        console.log('O Pokémon Squirtle é do tipo Água')
        break
    default:
        console.log('Pokémon não encontrado')
}

