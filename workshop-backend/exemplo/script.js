// console.log('Ola mundo!')


var entrada = document.querySelector('input')

var saida = document.querySelector('#respostaAno')
// console.log(saida.textContent)
// saida.textContent = ano

function cliquei(){
    var ano = entrada.value
        // console.log(ano)
    saida.textContent = 'Resposta: ' + ano
}

//exemplo de função de soma
// function soma(num1,num2){
//     var soma = num1 + num2
//         console.log(soma)
  
// }
// soma(14,14)