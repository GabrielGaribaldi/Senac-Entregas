
let palavras1 = ["Oi", "sumido", "tudo", "bem?", "Saudades"]

function criarFrase(listaDePalavras) {

    let frase = ""

    for (let palavra of listaDePalavras) {
        frase = frase + palavra + " "
    }
    return frase
}

console.log(criarFrase(palavras1))

