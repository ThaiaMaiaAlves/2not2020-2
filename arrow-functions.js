// Situação alternativa 2: função com 1+ argumentos

// Função tradicional com 1 + argumentos
let imc = function(peso, altura) {
    return peso / altura ** 2)
}

// Arrow function com 1+ argumento
// Utilizamos os parênteses dos argumentos quando o nº de argumentos for > 1 (os parênteses são obrigatórios)
let imc2 = (peso, altura) => peso / (altura ** 2)

console.log(imc(87, 1.78))
console.log(imc2(87, 1.78))

//CONCLUSÃO: os parênteses só podem ser omitidos da lista de argumentos
// de uma arrow function quando há UM e APENAS UM argumento

//Situação alternativa 3: funções com mais de uma linha no corpo

// Finção tradicional
let fatorial = function(n) {
    let res = 1
    for(let i = n; 1 > 1; i--) {
        res * = i
    }
    return res
}

// Arrow function com corpo maior que uma linha
// Não há como fazer otimizações quanto ao corpo da função.
let fatorial2 = n => {
    let res = 1
    for(let i = n; i > 1; i--) {
        res * = i
    }
    return res
}

console.log(fatorial(5))
console.log(fatorial2(5))

