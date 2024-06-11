
// Definições básicas
let continuar = true

const dados = [{
	nome: "Joâo da Silva",
	nascimento: "01/02/1990", // 25
	peso: 70,
	tipoSanguineo: "AB-",
	ultimaDoacao: "01/01/2022",
}, {
	nome: "Maria Santos",
	nascimento: "31/12/1989", // 35
	peso: 65,
	tipoSanguineo: "A+",
	ultimaDoacao: "03/02/2022",
}, {
	nome: "José Almeida",
	nascimento: "27/07/1979", // 45 
	peso: 80,
	tipoSanguineo: "O+",
	ultimaDoacao: "10/01/2022",
}, {
	nome: "Ana Oliveira",
	nascimento: "20/05/1997", // 27
	peso: 58,
	tipoSanguineo: "B-",
	ultimaDoacao: "22/04/2022",
}, {
	nome: "Carlos Silva",
	nascimento: "22/08/1994", // 30
	peso: 75,
	tipoSanguineo: "A-",
	ultimaDoacao: "14/03/2022",
}]

// Função para cadastro
function cadastrar() {

	// Pedir dados do usuário
	const nome = prompt("Informe seu nome e sobrenome:")
	const nascimento = prompt("Informe data de nascimento: (Data no formato dd/mm/aaaa)")
	const peso = Number(prompt("Informe seu peso: (somente números)"))
	const tipoSanguineo = prompt("Informe seu tipo sanguíneo:")
	const ultimaDoacao = prompt("Informe a data da sua última doação: (Data no formato dd/mm/aaaa)")

	// Armazenar os dados coletados em um objeto
	const novosDados = {
		nome: nome,
		nascimento: nascimento,
		peso: peso,
		tipoSanguineo: tipoSanguineo,
		ultimaDoacao: ultimaDoacao,
	}
	dados.push(novosDados)

	// Apresentar mensagem de sucesso
	console.log(`Dados cadastrados com sucesso!`)
	console.log("-------------------------------------------")
}

// Função para listar
function listar() {

	console.log("LISTAGEM DE DOADORES:")
	console.log("---------------------")

	// Apresentar lista no console
	for (let cont = 0; cont < dados.length; cont++) {
		const nome = dados[cont].nome
		const nascimento = dados[cont].nascimento
		const peso = dados[cont].peso
		const tipoSanguineo = dados[cont].tipoSanguineo
		const ultimaDoacao = dados[cont].ultimaDoacao
		console.log(`${cont+1}) Nome: ${nome} | Data de nascimento: ${nascimento} | Peso: ${peso}kg | Tipo sanguíneo: ${tipoSanguineo} | Data da última doação: ${ultimaDoacao}`)
	}
	console.log("-------------------------------------------")
}


// Função para buscar doador por tipo sanguíneo
function buscarTipoSanguineo() {
	const buscaSangue = prompt("Digite o tipo sanguíneo desejado:").toUpperCase()
	
	console.log(`RESULTADO DA BUSCA: "${buscaSangue}"`)
	console.log("---------------------")

	for (let cont = 0; cont < dados.length; cont++) {

		if (buscaSangue === dados[cont].tipoSanguineo) {
			const nome = dados[cont].nome
			const nascimento = dados[cont].nascimento
			const peso = dados[cont].peso
			const tipoSanguineo = dados[cont].tipoSanguineo
			const ultimaDoacao = dados[cont].ultimaDoacao

			console.log(`${cont + 1}) Nome: ${nome} | Data de nascimento: ${nascimento} | Peso: ${peso}kg | Tipo sanguíneo: ${tipoSanguineo} | Data da última doação: ${ultimaDoacao}`)
		} 
	}
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
