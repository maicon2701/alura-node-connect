const publicarBtn = document.getElementById('publicar-btn')

publicarBtn.addEventListener('click', capturarEEnviarDados);

async function enviarDadosParaBanco(dados){
    return new Promise( (resolve) => {
        setTimeout(() => {
            console.log('Dados enviadas para o banco de dados:', dados)
            resolve('Sucesso')
        }, 1000)
    })
}

async function capturarEEnviarDados() {
    const nomeProjeto = document.getElementById('nome-projeto').value.trim();
    const descricaoProjeto = document.getElementById('descricao-projeto').value.trim();
    const tagsProjeto = document.getElementById('tag-input').value.trim();

    if (!nomeProjeto || !descricaoProjeto) {
        feedback.textContent = "Nome do projeto e descrição são obrigatórios.";
        feedback.style.color = "red";
        return;
    }

    const dados = {
        nome: nomeProjeto,
        descricao: descricaoProjeto,
        tags: tagsProjeto
    };

    try {
        const resultado = await enviarDadosParaBanco(dados);
        feedback.textContent = `Dados enviados com sucesso: ${resultado}`;
        feedback.style.color = "green";
    } catch (error) {
        feedback.textContent = "Erro ao enviar os dados.";
        feedback.style.color = "red";
    }
}