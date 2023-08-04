let student = document.getElementById('name')
let year = document.getElementById('year')
let note1 = document.getElementById('note1')
let note2 = document.getElementById('note2')
let note3 = document.getElementById('note3')
let note4 = document.getElementById('note4')
let btn = document.getElementById('btn')
let result = document.getElementById('result')

btn.classList.add('disabled')
btn.style.pointerEvents = 'none'

note1.addEventListener('keyup', validate)
note2.addEventListener('keyup', validate)
note3.addEventListener('keyup', validate)
note4.addEventListener('keyup', validate)

validate()

function validate () {
    if (student.value != '' && year.value != 0 && note1.value != 0 && note2.value != 0 && note3.value != 0 && note4.value != 0) {
        btn.classList.remove('disabled')
        btn.removeAttribute('style')
    } else {
        btn.classList.add('disabled')
        btn.style.pointerEvents = 'none'
    }
}

btn.addEventListener('click', calcular)
    function calcular() {
        const note1value = parseFloat(note1.value)
        const note2value = parseFloat(note2.value)
        const note3value = parseFloat(note3.value)
        const note4value = parseFloat(note4.value)

        const sumNotes = note1value + note2value + note3value + note4value
        const numNotes = 4
        let media = sumNotes / numNotes

        if (media < 7) {
            result.innerHTML = `<p>Você reprovou.</p>`

        } else {
            result.innerHTML = `<p>Parabéns, ${student.value}! Você passou para o próximo ano.</p>`
        }
    }