//O CÓDIGO NÃO ESTÁ RODANDO - VER COM O FELIPE O QUE ACONTECEU

// Como pré-requisito para a busca binária: o conjunto de dados
// PRECISA estar ordenado pelo critério de busca
let comp = 0
function buscaBinaria(lista, valorBusca) {
    let inicio = 0
    let fim = lista.length - 1

while(fim >= inicio) {
// Math.floor: retira as casas decimais de um número.
// Math.ceil  e Math.round: arredonda para cima.
    let meio = Math.floor((fim + inicio) / 2)

// Verifica se o valor na posição média é o valor de busca
    if(valorBusca === lista[meio]) {
        comp++
        return meio
    }
    else if(valorBusca < lista[meio]) {
        comp += 2
        fim = meio -1   // nessa parte o fim do vetor passa a ser a posição que antecede o meio do vetor.
    }   
    else {   // quando o valorBusca é  > lista[meio]
    comp += 2
    inicio = meio + 1
        }
    }
return - 1     // quando o valor não for encontrado
}

let vetorNomes = require('./dados/vetor-nomes')

console.time('FAUSTO')
console.log(buscaBinaria(vetorNomes, 'FAUSTO'))
console.timeEnd('FAUSTO')
console.log('Comparações: ', comp)
console.log('--------------------------------------------')
comp = 0
console.time('ZOZIMO')
console.log(buscaBinaria(vetorNomes, 'ZOZIMO'))
console.timeEnd('ZOZIMO')
console.log('Comparações: ', comp)