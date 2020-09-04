function buscaSequancial(lista, valorBusca, fnComp) {
    for
}

if(fnComp(lista[i], valorBusca)) return i


const listaNomes = require ('./dados/lista-nomes')

function comparaNome(obj, nome) {
    //Retorna true se o atributo first_name do objeto for ihual a nome
    return obj.first_name === nome
}


//universo de busca
//'FAUSTO' é o que estou procurando
console.time('FAUSTO')
//console.log(buscaSequencial(listaNomes, 'FAUSTO', comparaNome))
//outra forma de fazer a linha de cima
console.log(buscaSequencial(listaNomes, 'FAUSTO', (obj, nome) => obj.first_name === nome)
console.timeEnd('FAUSTO')

console.time('FAUSTO')


console.log('----------')

// Encontrar o primeiro nome da lista que possui mais de 10000 pessoas registradas com ele
// insiro let pos, pois quero enxergar o objeto e não somente a posição dele
/* (obj, valor) => obj.frenquency_total > valor) : é uma função de callback, como foi utilizada 
ela então não precisaremos utilizar a function comparaNome 
*/
let pos = buscaSequencial(listaNomes, 10000, (obj, valor) => obj.frenquency_total > valor)
//Exibe o objeto da posição encontrada e depois a própria posição
console.log(listaNomes[pos], pos)
console.timeEnd('10000')