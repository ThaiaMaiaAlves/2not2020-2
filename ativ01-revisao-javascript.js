/*

   DADOS PARA O EXERCÍCIO

   nome;sigla;area;populacao
   Sergipe;SE;21915.08;2278308
   Alagoas;AL;27848.14;3322820
   Rio Grande do Norte;RN;52811.05;3479010
   Paraíba;PB;56469.78;3996496
   Pernambuco;PE;98148.32;9496294
   Ceará;CE;148920.47;9075649
   Piauí;PI;251577.74;3264531
   Maranhão;MA;331937.45;7035055
   Bahia;BA;564733.18;14812617

*/

// "estadosNe" é um array, que nada mais é que um vetor, ou uma lista.
// forma tradicional: let estadosNe = Array()
let estadosNe = []

//nome, sigla, area, populacao = chamamos de "atributos"
//'Sergipe', 'SE', 21915.08 e 2278308 = chamamos de "valor"
/*Tudo que esta entre chaves é o "objeto". Tudo que está dentro do objeto é chamado através do nome, 
do let que atribuo a ele.
*/
// Lista é um conjunto de dados e a organização através de índices.
let estado1 = {
   nome: 'Sergipe',
   sigla: 'SE',
   area: 21915.08,
   populacao: 2278308   // Aqui não inserimos vírgula pois é o último atributo
}

/*
   1) Crie objetos para os demais Estados, segundo o modelo acima, e acrescente-os
      ao vetor estadosNe usando push().
*/
console.log ('--- Exercício 1 ---')
let estado2 = {
    nome: 'Alagoas',
    sigla: 'AL',
    area: 27848.14,
    populacao: 3322820
}

let estado3 = {
    nome: 'Rio Grande do Norte',
    sigla: 'RN',
    area: 52811.05,
    populacao: 3479010
}
  
let estado4 = {
    nome: 'Paraíba',
    sigla: 'PB',
    area: 56469.78,
    populacao: 3996496
}

let estado5 = {
    nome: 'Pernambuco',
    sigla: 'PE',
    area: 98148.32,
    populacao: 9496294
}

let estado6 = {
    nome: 'Ceará',
    sigla: 'CE',
    area: 148920.47,
    populacao: 9075649
}

let estado7 = {
    nome: 'Piauí',
    sigla: 'PI',
    area: 251577.74,
    populacao: 3264531
}

let estado8 = {
    nome: 'Maranhão',
    sigla: 'MA',
    area: 331937.45,
    populacao: 7035055
}

let estado9 = {
    nome: 'Bahia',
    sigla: 'BA',
    area: 564733.18,
    populacao: 14812617 
}
/*O .push indica uma função que será executada no vetor estadosNe e conforme a regra do javaScript
em seguida deve vir o () por ser uma função, por isso .push()
*/
estadosNe.push(estado1)
estadosNe.push(estado2)
estadosNe.push(estado3)
estadosNe.push(estado4)
estadosNe.push(estado5)
estadosNe.push(estado6)
estadosNe.push(estado7)
estadosNe.push(estado8)
estadosNe.push(estado9)

console.log(estadosNe)

console.log ('--- Exercício 2 ---')
/*
   2) Escreva uma arrow function que receba dois parâmetros, área e população, e
      calcule a densidade demográfica retornando o resultado da divisão da
      segunda pela primeira. pop/ área
*/

// O "=>"" que é responsável por ocultar os nomes "function" e return
/*let densidade_demografica = function(area, populacao){
    return populacao / area
}
*/
let densidade_demografica = (area, populacao) => populacao / area;

console.log ('--- Exercício 3 ---')
/*
   3) Percorra o vetor estadosNe usando um for tradicional. Para cada estado,
      chame a arrow function criada em 2) e efetue o cálculo correspondente.
      Com o resultado do cálculo, crie uma propriedade chamada 'densidade
      demográfica' para cada objeto representando um Estado.

      Durante este mesmo loop, elimine a propriedade 'sigla' dos objetos.

*/
// o "for" é usado para executar uma ação em cada posição de uma vetor, que isso aconteça um de cada vez.
// densidade é a minha variável
// densidade_demografica é a minha função
// estadosNe é o (Array) é o vetor
// [i] é o índice que indica a posição do vetor
// ".area" e ".populacao" são as propriedades do objeto estadosNe

for (let i = 0; i < estadosNe.length; i++) {
    let densidade = densidade_demografica (estadosNe[i].area, estadosNe[i].populacao)
    estadosNe[i]['densidade demografica'] = densidade
    delete estadosNe[i].sigla
}
    console.log(estadosNe)     

    console.log ('--- Exercício 4 ---')
/* 4) Escreva uma arrow function que receba um objeto. Na função, use for..in
      para extrair as propriedades e seus valores e exibi-los com console.log().
*/

//NÃO ENTENDI ARROW FUNCTION
console.log ('Exercício 4')


// A variável novoObjeto está recebendo o parâmetro da função "estado".
// "estado" é um objeto
let novoObjeto = estado => {
    for (let prop in estado) {
        console.log(`propriedade: ${prop}, valor:${estado[prop]}`)
    }
}

/*for (let i = 0; i < estadosNe.length; i++) {
    for(let atrib in estadosNe[i]) {
        //console.log(`propriedade: ${prop} , valor: ${np[prop]}`)
       //console.log('Atributo: ' + atrib + '; valor: ' + estadosNe[i][atrib]);
       console.log(`Atributo: ${atrib}, valor:${estadosNe[i][atrib]}`)        
    }
    console.log ('--------------------------------------------') 
}
*/

console.log ('--- Exercício 5 ---')
/* 5) Percorra o vetor estadosNe usando for..of. Para cada objeto no vetor,
      invoque a função escrita em 4) para exibi-lo.
      */
     //for..of : percorre o vetor atribuindo o elemento (o objeto) a variável declarada a cada nova iteração.
for(let objeto of estadosNe) {
    novoObjeto(objeto)       
    console.log ('--------')
}

console.log ('--- Exercício 6 ---')
/*
   6)
      a) Declare um vetor vazio.
      b) Insira no vetor criado no item a) apenas o nome de cada Estado, conforme
         os dados no topo deste arquivo, um de cada vez. Faça as inserções de 
         modo que o vetor final esteja em ordem alfabética. No caso, o primeiro 
         Estado (Sergipe), pode ser inserido com push(), mas o segundo (Alagoas)
         deve ser inserido com unshift(), para manter a ordem alfabética. 
         O terceiro Estado (Rio Grande do Norte) deve ser inserido entre os dois 
         já existentes, e assim por diante.

*/
// Criação do vetor vazio
vetor = []

//Inserção dos nomes dos estados
vetor.push('Sergipe')
vetor.unshift('Alagoas')
vetor.splice(1,0,'Rio Grande do Norte')
vetor.splice(1, 0, 'Paraíba')
vetor.splice(2, 0, 'Pernambuco')
vetor.splice(1, 0, 'Ceará')
vetor.splice(4, 0, 'Piauí')
vetor.splice(2, 0, 'Maranhão')
vetor.splice(1,0, 'Bahia')
console.log(vetor)




