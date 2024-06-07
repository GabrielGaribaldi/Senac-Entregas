
// Definições básicas
let continuar = true

const dados = [{
	id: 1,
	nome: "Joâo da Silva",
	idade: 25,
	peso: 70,
	TipoSanguineo: "AB-",
	ultimaDoacao: "01/01/2022",
}, {
	id: 2,
	nome: "Maria Santos",
	idade: 35,
	peso: 65,
	TipoSanguineo: "A+",
	ultimaDoacao: "03/02/2022",
}]
console.log(dados)

// Função para cadastro
function cadastrar() {
	/* 
		// Pedir dados do usuário
		let nome = prompt("Informe seu nome completo:")
		let idade = Number(prompt("Informe sua idade:"))
		let peso = Number(prompt("Informe seu peso (somente números):"))
		let TipoSanguineo = prompt("Informe seu tipo sanguíneo:")
		let ultimaDoacao = prompt("Informe a data da sua última doação (DD/MM/AAAA):")
	*/
	// Armazenar os dados coletados em um objeto
	let novosDados = {
		id: 3,
		nome: "José Almeida",
		idade: 45,
		peso: 80,
		TipoSanguineo: "O+",
		ultimaDoacao: "10/01/2022",
	}
	dados.push(novosDados)

	console.log("Função de cadastro")
	console.log(dados)
}



// Função para listar
function listar() {
	console.log("Função de lista")
}


// Função para buscar doador por tipo sanguíneo
function buscarTipoSanguineo() {
	console.log("Função de busca por tipo sanguíneo")
}


// Função para buscar doador por data da última doação
function buscarUltimaDoacao() {
	console.log("Função de busca por data da última doação")
}


// Função para sair
function sair() {
	continuar = false
	console.log("Tchau! Para reiniciar, atualize a aba do navegador.")
}


// Loop para perguntar ao usuário
while (continuar === true) {
	// Formatar pergunta
	let pergunta = "===== SISTEMA DE CADASTRO DE DOADORES DE SANGUE =====\n"
	pergunta += "-----------------------------------------------------\n"
	pergunta += "Escolha uma opção:\n"
	pergunta += "1. Cadastrar doador\n"
	pergunta += "2. Listar doadores\n"
	pergunta += "3. Buscar doador por tipo sanguíneo\n"
	pergunta += "4. Buscar doador por data da última doação\n"
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
			buscarTipoSanguineo()
			break
		case 4:
			buscarUltimaDoacao()
			break
		case 0:
			sair()
			break
	}
}
