const enviarBtn = document.getElementById('enviar-btn')

enviarBtn.addEventListener('click', capturarEEnviarDados)

async function enviarDadosParaServidor(dados){
    return new Promise ((resolve) => {
        setTimeout(() => {
            console.log('Dados enviados para o servidor:', dados)
            resolve('Sucesso') 
        }, 1000);
    })
}

async function capturarEEnviarDados() {
    const nome = document.getElementById('nome').value.trim()
    const email = document.getElementById('email').value.trim()
    const mensagem = document.getelementById('mensagem').value.trim()


    if(!nome || !email || !mensagem){
        feedback.textContent = "Por favor, preencha todos os campos."
        feedback.style.color = "red"
        return;
    }


    const dados = {
        nome:nome,
        email: email,
        mensagem: mensagem
    }

    try{
        const resultado = await enviarDadosParaServidor(dados)
        feedback.textContent = `Dados enviados com sucesso: ${resultado}`
        feedback.style.color = "green"
    } catch (error){
        feedback.textContent = "Erro ao enviar os dados."
        feedback.style.color = "red"   
    }
}
