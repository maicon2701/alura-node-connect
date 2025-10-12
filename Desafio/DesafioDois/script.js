const form = document.getElementById('cadastro-form')
const nome = document.getElementById('nome')
const email = document.getElementById('email')
const senha = document.getElementById('senha')
const erroNome = document.getElementById('erro-nome')
const erroEmail = document.getElementById('erro-email')
const erroSenha = document.getElementById('erro-senha')

form.addEventListener('submit', function(evento){
    evento.preventDefault()
    
    if(nome.value.trim() === ""){
        erroNome.textContent = 'O campo é obrigatório'
        return
    } else{
        erroNome.textContent = '';
    }
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(email.value.trim() === ''){
        erroEmail.textContent = 'O e-mail é obrigatório'
        return
    } else if (!regexEmail.test(email.value.trim())){
        erroEmail.textContent = 'O e-mail não é válido'
        return
    } else{
        erroEmail.textContent = ''
    }

    if (senha.value.trim() === ''){
        erroSenha.textContent = 'A senha é obrigatória.'
        return
    }else {
        senha.textContent = ''
    }
    form.submit()
})






