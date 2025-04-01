function appendValue(value) {
   const valorInput = document.querySelector('.display').value

   document.querySelector('.display').value = valorInput + value

}

function clearDisplay(){
    document.querySelector('.display').value = '' //funcao limpar a tela
}

function calculateResult() { //funcao calcular
    const valorInput = document.querySelector('.display').value

    document.querySelector('.display').value = eval(valorInput) //eval - Para avaliar uma ou mais declarações em JavaScript
 
}

function deletar() {
    const valorInput = document.querySelector('.display').value

    document.querySelector('.display').value = valorInput.slice(0, -1) //funcao deleta uma casa
}

function inverte() {
    const valorInput = document.querySelector('.display').value //funcao pra deixar o valor negativo

    document.querySelector('.display').value = valorInput * -1

}
