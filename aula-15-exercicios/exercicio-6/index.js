
const condicao1 = prompt('Você já concluiu o ensino médio? Sim ou Não').toLowerCase()
const condicao2 = prompt('Você possui 18 anos ou mais? Sim ou Não').toLowerCase()
const condicao3 = prompt('Você está matriculado em outra faculdade? Sim ou Não').toLowerCase()



function faculdade (cond1, cond2, cond3) {
    if ((cond1 === 'sim') && (cond2 === 'sim') && (cond3 === 'não')) {
        console.log('Você está apto a estudar nesta faculdade')
    } else {
        console.log('Você não está apto a estudar nesta faculdade')
    }
}

faculdade(condicao1, condicao2, condicao3)