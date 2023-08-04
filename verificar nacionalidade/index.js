let btn = document.getElementsByClassName('btn')[0]
let container = document.getElementsByClassName('container')[0]
let text = document.getElementsByClassName('situation') [0]

btn.addEventListener('click', clique) 
    function clique() {
    let country = document.getElementById('country')
    let countryValue = country.value.toUpperCase()
        
        if (countryValue === 'BRASIL') {
            text.innerHTML = 'Você é brasileiro'
            text.classList.add('text')
        }
     else {
        text.innerHTML = "Você é estrangeiro"
        text.classList.add('text')
     }
    }


