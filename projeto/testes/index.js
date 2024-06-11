

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

// Função para listar
function listar() {
	console.log("---------------------")
	console.log("LISTAGEM DE DOADORES:")
	console.log("---------------------")

	for (let cont = 0; cont < dados.length; cont++) {
		const nome = dados[cont].nome
		const nascimento = dados[cont].nascimento
		const peso = dados[cont].peso
		const tipoSanguineo = dados[cont].tipoSanguineo
		const ultimaDoacao = dados[cont].ultimaDoacao

		console.log(`${cont + 1}) Nome: ${nome} | Data de nascimento: ${nascimento} | Peso: ${peso}kg | Tipo sanguíneo: ${tipoSanguineo} | Data da última doação: ${ultimaDoacao}`)
	}
}

function listar2() {

	console.log("LISTAGEM DE DOADORES:")
	console.log("---------------------")

	// Apresentar lista no console
	for (let i = 0; i < dados.length; i++) {
		const objeto = dados[i]
		const ordemCadastro = i++
		console.log(`${ordemCadastro}) Nome: ${objeto.nome} | Data de nascimento: ${objeto.nascimento} | Peso: ${objeto.peso}kg | Tipo sanguíneo: ${objeto.tipoSanguineo} | Data da última doação: ${objeto.ultimaDoacao}`)
	}
	console.log("-------------------------------------------")
}

listar2()

// Função para buscar doador por tipo sanguíneo
function buscarTipoSanguineo() {

	const buscaSangue = prompt("Digite o tipo sanguíneo desejado:").toUpperCase()

	console.log("RESULTADO DA BUSCA: ", buscaSangue)
	console.log("---------------------")
	if (buscaSangue != "") {
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
}




// if (possuiCadastro === false) {
//	console.log(`Nenhum resultado encontrado para "${buscaSangue}".`)
//}

function buscarUltimaDoacao() {
	const buscaDoacao = prompt("Digite a data desejada (dd/mm/aaaa):")

	console.log(`RESULTADO DA BUSCA: "${buscaDoacao}"`)
	console.log("---------------------")

	for (let cont = 0; cont < dados.length; cont++) {

		if (buscaDoacao === dados[cont].ultimaDoacao) {
			const nome = dados[cont].nome
			const nascimento = dados[cont].nascimento
			const peso = dados[cont].peso
			const tipoSanguineo = dados[cont].tipoSanguineo
			const ultimaDoacao = dados[cont].ultimaDoacao
			const ordemCadastro = cont + 1

			console.log(`${ordemCadastro}) Nome: ${nome} | Data de nascimento: ${nascimento} | Peso: ${peso}kg | Tipo sanguíneo: ${tipoSanguineo} | Data da última doação: ${ultimaDoacao}`)
		}
	}
}

