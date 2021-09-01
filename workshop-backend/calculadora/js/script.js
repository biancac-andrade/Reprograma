// console.log('hello world')

var inputSalario = document.querySelector('#ganho-mes')
// console.log(inputSalario)


var inputHoras = document.querySelector('#horas-dia')
// console.log(inputHoras)

var resultado = document.querySelector('span')

function calcularValorHora(){
    // console.log('cliquei aqui')
    var salario = inputSalario.valueAsNumber
    // console.log(salario)
    var horas = inputHoras.valueAsNumber
        // console.log(horas)
        // horas multiplicando por dias trabalhados
    var horasMes = horas * 22
    var valorHora = salario / horasMes
    var valorDuasCasas = valorHora.toFixed(2)

    // var soma = salario + horas
    // console.log(resultado)
    resultado.textContent = 'R$' + valorDuasCasas

}