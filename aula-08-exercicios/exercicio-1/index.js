
//Perguntar a idade do usuário.
const idadeUsuario1 = Number(prompt("Qual sua idade?"))
console.log("Sua idade é:", idadeUsuario1)

//Perguntar a idade do seu melhor amigo ou da sua melhor amiga.
const idadeUsuario2 = Number(prompt("Qual a idade do seu melhor amigo ou da sua melhor amiga?"))
console.log("A idade do seu melhor amigo ou da sua melhor amiga é:", idadeUsuario2)

// Calcular e imprimir (true/false) se o usuário1 tem maior idade que o usuário2
const maiorIdade = idadeUsuario1 > idadeUsuario2
console.log("Sua idade é maior do que a do seu melhor amigo ou da sua melhor amiga?", maiorIdade)

// Calcular e imprimir a diferença de idade entre o usuário1 e o usuário2
const diferencaIdade = idadeUsuario1 - idadeUsuario2
console.log("A diferença de idade entre vocês é:", diferencaIdade, "anos.")


