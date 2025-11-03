async function publicarProjeto(nome, descricao, tagsProjeto) {
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

await publicarProjeto(nome, descricao, tags)