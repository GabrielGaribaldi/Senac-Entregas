
const cond1 = prompt('Você já concluiu o ensino médio? Sim ou Não').toLowerCase()
const cond2 = prompt('Você possui 18 anos ou mais? Sim ou Não').toLowerCase()
const cond3 = prompt('Você está matriculado em outra faculdade? Sim ou Não').toLowerCase()

const validacao = (cond1 === 'sim') && (cond2 === 'sim') && (cond3 === 'não')

function faculdade() {
    if (validacao === true) {
        console.log('Você está apto a estudar nesta faculdade')
    } else {
        console.log('Você não está apto a estudar nesta faculdade')
    }
}

faculdade()
