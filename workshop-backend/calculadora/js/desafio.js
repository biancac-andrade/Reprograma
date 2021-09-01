var inputValor = document.querySelector('#valor-hora')
var inputHoras = document.querySelector('#horas-projeto')
var resultado = document.querySelector('span')

function calcular(){   
    var valor = inputValor.valueAsNumber   
    var horas = inputHoras.valueAsNumber 

    var valorHora = valor * horas
    var valorDuasCasas = valorHora.toFixed(2)    

    resultado.textContent = 'R$' + valorDuasCasas

}