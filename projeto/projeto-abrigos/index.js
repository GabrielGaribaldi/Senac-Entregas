
// Definições básicas
let continuar = true
const dados = [{
	nome: "Casa do Caminho",
	endereco: "Rua do Amanhecer, 123, Centro",
	telefone: "(11) 1234-5678",
	capacidade: 20,
	cidade: "Canoas",
}, {
	nome: "Abrigo Esperança",
	endereco: "Rua da Solidariedade, 321, Vila Esperança",
	telefone: "(11) 9876-5432",
	capacidade: 30,
	cidade: "São Leopoldo",
}, {
	nome: "Casa dos Amigos",
	endereco: "Av. da Fraternidade, 456, Centro",
	telefone: "(11) 5555-4444",
	capacidade: 25,
	cidade: "Porto Alegre",
}, {
	nome: "Abrigo do Bem",
	endereco: "Rua da Esperança, 789, Rio Branco",
	telefone: "(11) 7777-8888",
	capacidade: 35,
	cidade: "São Leopoldo",
}, {
	nome: "Casa dos Anjos",
	endereco: "Av. da Paz, 159, Centro",
	telefone: "(11) 3333-2222",
	capacidade: 15,
	cidade: "São Leopoldo",
}]

console.log(dados)


// Função para cadastro
function cadastrar() {

	const nome = prompt("Informe o nome do abrigo:")
	const endereco = prompt("Informe o endereço do abrigo:")
	const telefone = prompt("Informe o telefone do abrigo: (99) 9999-9999")
	const capacidade = Number(prompt("Informe a capacidade de lotação do abrigo: Somente números"))
	const cidade = prompt("Informe a Cidade do abrigo:")

	const novosDados = {
		nome: nome,
		endereco: endereco,
		telefone: telefone,
		capacidade: capacidade,
		cidade: cidade,
	}
	dados.push(novosDados)
}


// Função para listar
function listar() {
	console.log("LISTA DE ABRIGOS:")
	for (const [indice, objeto] of dados.entries()) {
		console.log(`${indice + 1} | Nome: ${objeto.nome} | Endereço: ${objeto.endereco} | Telefone: ${objeto.telefone}kg | Capacidade: ${objeto.capacidade} | Cidade: ${objeto.cidade}`)

	}
}


// Função para buscar
function buscar() {
	const busca = prompt("Qual cidade você está?").toLowerCase()
	let cont = 0

	console.log("BUSCA POR CIDADE")
	console.log(`RESULTADO DA BUSCA: "${busca}"`)

	for (const [indice, objeto] of dados.entries()) {
		let cidade = objeto.cidade.toLowerCase()
		if (cidade.includes(busca) === true) {
			console.log(`${indice + 1} | Nome: ${objeto.nome} | Endereço: ${objeto.endereco} | Telefone: ${objeto.telefone}kg | Capacidade: ${objeto.capacidade} | Cidade: ${objeto.cidade}`)
			cont = cont + 1
		}
	}
	if (cont < 1) {
		console.log("Nenhum resultado encontrado!")
	}
}


// Função para sair
function sair() {
	continuar = false
	console.log("Tchau! Para reiniciar, atualize a aba do navegador.")
}


// Loop para perguntar ao usuário
while (continuar) {
	// Formatar pergunta
	let pergunta = "ABRIGOS TEMPORÁRIOS\n"
	pergunta += "-------------------------\n"
	pergunta += "Escolha uma opção:\n"
	pergunta += "1. Cadastrar abrigo\n"
	pergunta += "2. Listar abrigos\n"
	pergunta += "3. Procurar abrigo\n"
	pergunta += "0. Sair"

	// Guardar resposta
	let resposta = Number(prompt(pergunta))

	// Identificar resposta e chamar função
	switch (resposta) {
		case 1:
			cadastrar()
			break
		case 2:
			listar()
			break
		case 3:
			buscar()
			break
		case 0:
			sair()
			break
	}
}