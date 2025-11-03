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


async function publicarProjeto(nomeProjeto, descricaoProjeto, tagsProjeto) {
    return new Promise((resolve, reject) => {
        // Simulação de tempo de resposta de 2 segundos
        setTimeout(() => {
            // Simulação de sucesso ou falha aleatória (50% de chance de sucesso)
            if (Math.random() < 0.5) {
                resolve(`Projeto '${nomeProjeto}' publicado com sucesso!`);
            } else {
                reject(new Error(`Falha ao publicar o projeto '${nomeProjeto}'. Tente novamente.`));
            }
        }, 2000); // Tempo de espera de 2 segundos
    });
}


// Exemplo de uso da função publicarProjeto
const nome = "Meu Projeto";
const descricao = "Descrição do meu projeto...";
const tags = ["frontend", "web", "javascript"];

publicarProjeto(nome, descricao, tags)