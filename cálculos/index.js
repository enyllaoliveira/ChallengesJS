// let resultCalculator = document.getElementById('resultCalculator')
let btnCalculator = document.getElementsByClassName('btnCalculator')

let number = document.getElementById('number')
let btn = document.getElementById('btn')
let result = document.getElementById('result')

let numberSum1 = document.getElementById('numberSum1')
let numberSum2 = document.getElementById('numberSum2')
let numberSum3 = document.getElementById('numberSum3')
let numberSum4 = document.getElementById('numberSum4')
let numberSum5 = document.getElementById('numberSum5')
let numberSum6 = document.getElementById('numberSum6')
let button = document.getElementById('button')
let resultSum = document.getElementById('resultSum')
  
let name = document.getElementById("name")
let oldSalary = document.getElementById("oldSalary")
let btn2 = document.getElementById("btn2") 
let resultSalario = document.getElementById('resultSalario')
let percentage 
let increase
let newSalary 

function insert(num) {
  var numberCalculator = document.getElementById('resultCalculator').innerHTML;
  document.getElementById('resultCalculator').innerHTML = numberCalculator + num
}

function clean () {
    document.getElementById('resultCalculator').innerHTML = "";
}

function back() {
    var result = document.getElementById('resultCalculator').innerHTML;
    document.getElementById('resultCalculator').innerHTML = result.substring(0, result.length -1)
}

function calculate () {
    var result = document.getElementById('resultCalculator').innerHTML;
    if (result) {
        document.getElementById('resultCalculator').innerHTML = eval(result)
    }
}

btn.classList.add('disabled')
btn.style.pointerEvents = 'none'
number.addEventListener('keyup', validadeMultiplication)
validadeMultiplication()

button.classList.add('disabled')
button.style.pointerEvents = 'none'
numberSum1.addEventListener('keyup', validadeSum)
numberSum2.addEventListener('keyup', validadeSum)
numberSum3.addEventListener('keyup', validadeSum)
numberSum4.addEventListener('keyup', validadeSum)
numberSum5.addEventListener('keyup', validadeSum)
numberSum6.addEventListener('keyup', validadeSum)
validadeSum()

btn2.classList.add('disabled')
btn2.style.pointerEvents = 'none'
name.addEventListener('keyup', validateSalary)
oldSalary.addEventListener('keyup', validateSalary)
validateSalary()

function validadeMultiplication () {
    if (number.value !== '') {
        btn.classList.remove('disabled')
        btn.removeAttribute('style')
    }  else {
        btn.classList.add('disabled')
        btn.style.pointerEvents = 'none'
    }
}

function validadeSum () {
    if (numberSum1.value !== '' &&
        numberSum2.value !== '' &&
        numberSum3.value !== '' &&
        numberSum4.value !== '' &&
        numberSum5.value !== '' &&
        numberSum6.value !== ''
        ) {
        button.classList.remove('disabled')
        button.removeAttribute('style')
    } else {
        button.classList.add('disabled')
        button.style.pointerEvents = 'none'
    }
}

function validateSalary () {
    if (name.value !== '' &&
            oldSalary !== ''
        ) {
            btn2.classList.remove('disabled')
            btn2.removeAttribute('style')
    } else {
        btn2.classList.add('disabled')
        btn2.style.pointerEvents = 'none'
    }
}


btn.addEventListener('click', clique) 
function clique () {
    let numberValue = Number(number.value);
    let numbers = ''

    for (let i = 0; i < 11; i++) {
        numbers += `<p> A multiplicação entre ${numberValue} x ${i} é igual a ${numberValue* i }</p>`
    }

    result.innerHTML = numbers;
}


button.addEventListener('click', calcular)
    function calcular () {
    let acumulador = 0
    let numbers2 = [
        parseFloat(document.getElementById('numberSum1').value),
        parseFloat(document.getElementById('numberSum2').value),
        parseFloat(document.getElementById('numberSum3').value),
        parseFloat(document.getElementById('numberSum4').value),
        parseFloat(document.getElementById('numberSum5').value),
        parseFloat(document.getElementById('numberSum6').value)
    ];

        for (let i = 0; i < numbers2.length; i++) {
            acumulador += numbers2[i]
        }
        resultSum.innerHTML = acumulador;
}

btn2.addEventListener('click', calculo)
function calculo() {
let oldSalaryConvertido = Number(oldSalary.value)
if(oldSalaryConvertido < 280) {
    percentage = 0.20;
    increase = oldSalaryConvertido * percentage;
    newSalary = increase + oldSalaryConvertido;
} else if(oldSalaryConvertido > 280 && oldSalaryConvertido < 700) {
    percentage = 0.15;
    increase = oldSalaryConvertido * percentage;
    newSalary = increase + oldSalaryConvertido;    
} else if(oldSalaryConvertido > 700 && oldSalaryConvertido < 1500) {
    percentage = 0.1;
    increase = oldSalaryConvertido * percentage;
    newSalary = increase + oldSalaryConvertido;    
} else {
    percentage = 0.05;
    increase = oldSalaryConvertido * percentage;
    newSalary = increase + oldSalaryConvertido;   
}
resultpayment.innerHTML = `<p> Olá, ${name.value}.</p>
 <p>Seu salário antigo era de R$${oldSalaryConvertido},00.</p>
 <p> O percentual do seu aumento será de ${percentage}%.</p>
 <p> O seu novo salário será de R$${newSalary},00. </p>`
}


