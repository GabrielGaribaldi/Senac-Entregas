
// Definições básicas
let continuar = true

const dados = [{
	nome: "Joâo da Silva",
	nascimento: "01/02/1990",
	peso: 70,
	tipoSanguineo: "AB-",
	ultimaDoacao: "01/01/2021",
}, {
	nome: "Maria Santos",
	nascimento: "31/12/1989",
	peso: 65,
	tipoSanguineo: "A+",
	ultimaDoacao: "03/02/2022",
}, {
	nome: "José Almeida",
	nascimento: "27/07/1979",
	peso: 80,
	tipoSanguineo: "O+",
	ultimaDoacao: "10/01/2018",
}, {
	nome: "Ana Oliveira",
	nascimento: "20/05/1997",
	peso: 58,
	tipoSanguineo: "B-",
	ultimaDoacao: "22/04/2022",
}, {
	nome: "Carlos Silva",
	nascimento: "22/08/1994",
	peso: 75,
	tipoSanguineo: "A-",
	ultimaDoacao: "14/03/2022",
}]

// Função para formatar os dados
function formatarDados(objeto, indice) {
	// Criar string vazia
	let string = ""

	// Verificar se há índice
	if (indice !== "") {
		// Verificar como será o peso
		const peso = isNaN(objeto.peso) ? objeto.peso : objeto.peso + "kg"

		// Criar objeto formatado
		const of = {
			indice: indice.toString().padEnd(3, " "),
			nome: objeto.nome.padEnd(20, " "),
			nascimento: objeto.nascimento.padEnd(13, " "),
			peso: peso.padEnd(6, " "),
			tipoSanguineo: objeto.tipoSanguineo.padEnd(6, " "),
			ultimaDoacao: objeto.ultimaDoacao,
		}

		// Inserir as informações na string
		string = `${of.indice} | ${of.nome} | ${of.nascimento} | ${of.peso} | ${of.tipoSanguineo} | ${of.ultimaDoacao}`
	}
	else {
		// Inserir as informações na string
		string = `Nome: ${objeto.nome} | Nascimento: ${objeto.nascimento} | Peso: ${objeto.peso}kg | Tipo: ${objeto.tipoSanguineo} | Última doação: ${objeto.ultimaDoacao}`
	}
	// Retornar string formatada
	return string
}

// Função para formatar os dados
function formatarCabecalho() {
	// Montar cabeçalho da lista
	const cabecalho = {
		nome: "NOME E SOBRENOME",
		nascimento: "NASCIMENTO",
		peso: "PESO",
		tipoSanguineo: "TIPO",
		ultimaDoacao: "ÚLTIMA DOAÇÃO",
	}
	return formatarDados(cabecalho, "#")
}

// Função para cadastro
function cadastrar() {

	// Pedir dados do usuário
	const nome = prompt("Informe seu nome e sobrenome:")
	const nascimento = prompt("Informe data de nascimento: (Data no formato dd/mm/aaaa)")
	const peso = Number(prompt("Informe seu peso: (somente números)"))
	const tipoSanguineo = prompt("Informe seu tipo sanguíneo:").toUpperCase()
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
	console.log(formatarDados(novosDados, ""))
	console.log(`Dados cadastrados com sucesso!`)
	console.log("----------------------------------------------------------------------------")
}

// Função para listar
function listar() {

	console.log("LISTA DE DOADORES:")
	console.log(formatarCabecalho())
	//console.log("# | NOME E SOBRENOME | ANIVERSÁRIO | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO")

	// Apresentar lista no console
	for (let i = 0; i < dados.length; i++) {
		const objeto = dados[i]
		const ordemCadastro = i + 1
		console.log(formatarDados(objeto, ordemCadastro))
	}
	console.log(`Dados listados com sucesso! ${dados.length} doador(es) encontrado(s).`)
	console.log("----------------------------------------------------------------------------")
}


// Função para buscar doador por tipo sanguíneo
function buscarTipoSanguineo() {
	const buscaSangue = prompt("Digite o tipo sanguíneo desejado:").toUpperCase()
	let cont = 0

	console.log("BUSCA POR TIPO SANGUÍNEO")
	console.log(`RESULTADO DA BUSCA: "${buscaSangue}"`)
	console.log(formatarCabecalho())

	for (let i = 0; i < dados.length; i++) {

		if (buscaSangue === dados[i].tipoSanguineo) {
			const objeto = dados[i]
			const ordemCadastro = i + 1
			cont = cont + 1 // Para contar o número de doadores encontrados
			console.log(formatarDados(objeto, ordemCadastro))
		}
	}
	console.log(`Dados listados com sucesso! ${cont} doador(es) encontrado(s).`)
	console.log("----------------------------------------------------------------------------")
}


// Função para buscar doador por data da última doação
function buscarUltimaDoacao() {
	const buscaDoacao = prompt("Digite o ano desejado (aaaa):")
	let cont = 0

	console.log("BUSCA POR DATA DE ÚLTIMA DOAÇÃO")
	console.log(`RESULTADO DA BUSCA: "${buscaDoacao}"`)
	console.log(formatarCabecalho())

	for (let i = 0; i < dados.length; i++) {
		const ultimaDoacao = dados[i].ultimaDoacao

		if (ultimaDoacao.includes(buscaDoacao) === true) {
			const objeto = dados[i]
			const ordemCadastro = i + 1
			cont = cont + 1 // Para contar o número de doadores encontrados
			console.log(formatarDados(objeto, ordemCadastro))
		}
	}
	console.log(`Dados listados com sucesso! ${cont} doador(es) encontrado(s).`)
	console.log("----------------------------------------------------------------------------")
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
	pergunta += "-----------------------------------------------------------------------------\n"
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