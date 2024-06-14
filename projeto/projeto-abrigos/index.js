
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

// Função para formatar os dados
function formatarDados(objeto, indice) {
	// Criar string vazia
	let string = ""

	// Verificar se há índice
	if (indice !== "") {

		// Criar objeto formatado
		const of = {
			indice: indice.toString().padEnd(3, " "),
			nome: objeto.nome.padEnd(20, " "),
			endereco: objeto.endereco.padEnd(45, " "),
			telefone: objeto.telefone.padEnd(15, " "),
			capacidade: objeto.capacidade.toString().padEnd(10, " "),
			cidade: objeto.cidade,
		}

		// Inserir as informações na string
		string = `${of.indice} | ${of.nome} | ${of.endereco} | ${of.telefone} | ${of.capacidade} | ${of.cidade}`
	}
	else {
		// Inserir as informações na string
		string = `Nome: ${objeto.nome} | Endereco: ${objeto.endereco} | Telefone: ${objeto.telefone}kg | Capacidade: ${objeto.capacidade} | Cidade: ${objeto.cidade}`
	}
	// Retornar string formatada
	return string
}

// Função para formatar os dados
function formatarCabecalho() {
	// Montar cabeçalho da lista
	const cabecalho = {
		nome: "NOME E SOBRENOME",
		endereco: "ENDEREÇO",
		telefone: "TELEFONE",
		capacidade: "CAPACIDADE",
		cidade: "CIDADE",
	}
	return formatarDados(cabecalho, "#")
}

// Função para cadastro
function cadastrar() {
	console.clear()
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
	// Apresentar mensagem de sucesso
	console.log(formatarDados(novosDados, ""))
	console.log(`Dados cadastrados com sucesso!`)
	console.log("----------------------------------------------------------------------------")
}


// Função para listar
function listar() {
	console.clear()
	console.log("LISTA DE ABRIGOS:")
	console.log(formatarCabecalho())
	for (const [indice, objeto] of dados.entries()) {
		const codigo = indice + 1
		console.log(formatarDados(objeto, codigo))
	}
	console.log(`Dados listados com sucesso! ${dados.length} abrigo(s) encontrado(s).`)
	console.log("----------------------------------------------------------------------------")
}


// Função para buscar
function buscar() {
	console.clear()
	const busca = prompt("Qual cidade você está?").toLowerCase()
	let cont = 0
	console.log("BUSCA POR CIDADE")
	console.log(`RESULTADO DA BUSCA: "${busca}"`)

	console.log(formatarCabecalho())

	for (const [indice, objeto] of dados.entries()) {
		let cidade = objeto.cidade.toLowerCase()
		if (cidade.includes(busca) === true) {
			cont = cont + 1
			const codigo = indice + 1
			console.log(formatarDados(objeto, codigo))
		}

	}
	console.log(`Dados listados com sucesso! ${cont} abrigo(s) encontrado(s).`)
	console.log("----------------------------------------------------------------------------")
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