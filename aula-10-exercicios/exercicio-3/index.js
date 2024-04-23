
//criar um array vazio
const listaDeTarefas = [ ]

//pedir ao usuario 3 tarefas (separadamente)
const tarefa1 = prompt("Digite a tarefa 1:")
const tarefa2 = prompt("Digite a tarefa 2:")
const tarefa3 = prompt("Digite a tarefa 3:")

//armazenar as tarefas do usuario na array
listaDeTarefas.push(tarefa1, tarefa2, tarefa3)

//imprimir a array no console
console.log("As tarefas são:")
console.log(listaDeTarefas)

//pedir que o usuario digite qual tarefa ele já realizou
let tarefaRealizada = Number(prompt(`Digite qual tarefa você já realizou. Sendo 1: ${tarefa1}, 2: ${tarefa2}, 3: ${tarefa3}.`))
tarefaRealizada = tarefaRealizada - 1

//remover da array a tarefa que o usuario escolheu
listaDeTarefas.splice(tarefaRealizada, 1)

//imprimir novamente a array no console
console.log("Ainda restaram as seguintes tarefas:")
console.log(listaDeTarefas)




