
//criar um Array com 5 comidas favoritas e imprimir no console
const comidas = [ "pizza", "lasanha", "churrasco", "sushi", "batata frita" ]
console.log(comidas)

//imprimir no console as 5 comidas em formato de lista
console.log("Essas são minhas comidas favoritas:")
console.log("1:", comidas[0])
console.log("2:", comidas[1])
console.log("3:", comidas[2])
console.log("4:", comidas[3])
console.log("5:", comidas[4])

//perguntar ao usuario uma comida favorita dele
const comidaUsuario = prompt("Qual a sua comida favorita?")

//trocar a segunda comida da lista pela resposta do usuario
comidas[1] = comidaUsuario

//imprimir no console a nova lista
console.log(comidas)
console.log("lista de comidas favoritas atualizada:")
console.log("1:", comidas[0])
console.log("2:", comidas[1])
console.log("3:", comidas[2])
console.log("4:", comidas[3])
console.log("5:", comidas[4])
