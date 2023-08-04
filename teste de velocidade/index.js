let speed = document.getElementById("speed")
let btn = document.getElementById ("btn")
let information2 = document.getElementsByClassName ("information2") [0]
let situation = document.getElementById('situation')

btn.classList.add('disabled')
btn.style.pointerEvents = 'none'
speed.addEventListener('keyup', validate)
validate()

function validate() {
    if (speed.value != 0) {
        btn.classList.remove('disabled')
        btn.removeAttribute('style')
    } else {
        btn.classList.add('disabled')
        btn.style.pointerEvents = 'none'
    }
}

btn.addEventListener('click', clique)
    function clique() {
        if(speed.value > 60) {
            situation.innerHTML = `<p> Você ultrapassou a velocidade permitida e será multado </p>`
        }
        else {
            situation.innerHTML = `<p> Você está na velocidade permitida. Continue assim! </p>`
        }
    }

