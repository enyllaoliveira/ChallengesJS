let names = document.getElementById('name')
let password = document.getElementById('password')
let btn = document.getElementById('enter')

btn.addEventListener('click', clique)
    function clique() {    
       if (password.value == names.value) {
            wrongPassword.innerHTML = "*sua senha não deve ser igual ao seu nome"
        } else {
            window.location.href = "index.html";
        }
    }