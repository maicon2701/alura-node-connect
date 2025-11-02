const uploadBtn = document.getElementById('upload-btn');
const inputUpload = document.getElementById('image-upload');

uploadBtn.addEventListener('click',() => {
    inputUpload.click();
})

function lerConteudoDoArquivo(arquivo){
    //O new promise é uma maneira de criar uma nova instancia de uma promise que é usado para lidar com operações assíncronas no JavaScript.(O termo assíncrono refere-se a uma operação ou execução que ocorre de forma independente do fluxo principal de um programa, permitindo que outras partes do código sejam executadas enquanto essa operação está em andamento)
    //A palavra-chave new em JavaScript é usada para criar uma nova instância de um objeto a partir de uma função construtora. Basicamente, ela serve para instanciar objetos que têm propriedades e métodos definidos em uma função
    return new Promise((resolve, reject) => {
        
        // Cria um novo leitor de arquivo
        const leitor = new FileReader();
        leitor.onload = () => {
            // Resolve a Promise com um objeto contendo a URL e o nome do arquivo
            resolve({ url: leitor.result, nome: arquivo.name });
        };

        leitor.onerror = () => {
            // Rejeita a Promise com uma mensagem de erro personalizada
            reject(`Erro na leitura do arquivo ${arquivo.name}`);
        };
        //A função readAsDataURL é um método do objeto FileReader em JavaScript, que é usado para ler o conteúdo de arquivos locais. Ao chamar readAsDataURL, o arquivo é convertido em uma URL de dados (data URL: base64), que pode ser usada, por exemplo, para exibir imagens ou outros tipos de arquivos diretamente em um navegador.
        leitor.readAsDataURL(arquivo)
    })
}

const imagemPrincipal = document.querySelector(".main-imagem")
const nomeDaImagem = document.querySelector(".container-imagem-nome p")

//O async informa que a função é assincrona
inputUpload.addEventListener("change", async (evento) =>{
    //Essa linha serve para "entrar" no evento e pegar o arquivo que está sendo enviado
    const arquivo = evento.target.files[0]

    if(arquivo){
        //Se o carregamento do arquivo der certo ele vai colocar a imagem carregada e o nome da imagem no projeto.
        try{
            //O await é usado para esperar a promise ser completada antes de continuar com o próximo passo.
            const conteudoDoArquivo = await lerConteudoDoArquivo(arquivo);    
            imagemPrincipal.src = conteudoDoArquivo.url;
            nomeDaImagem.textContent = conteudoDoArquivo.nome;
        //Se der errado vai retornar a mensagem abaixo
        } catch (error){
            console.log("Erro na leitura do arquivo")
        }
    }
})

const inputTags = document.getElementById("input-tags");
const listaTags = document.getElementById("lista-tags")

//Remover tags
listaTags.addEventListener("click",(evento) =>{
    //O target está pegando o evento do clique e definindo onde que está acontecendo esse clique.
    if(evento.target.classList.contains("remove-tag")){
        const tagQueQueremosRemover = evento.target.parentElement;
        listaTags.removeChild(tagQueQueremosRemover)
    }
})

//Verifica se há tags disponiveis
const tagsDisponiveis = ["Front-end","Programação","Data Science","Full-Stack","HTML","CSS","JavaScript"]
//Simulação de requisição a um servidor
async function verificarTagsDisponiveis(tagTexto){
     return new Promise((resolve) =>{
        //SetTimeout é uma função que executa um código ou uma função após um determinado período de tempo.
        setTimeout(() => {
            resolve(tagsDisponiveis.includes(tagTexto))
            //1000: Definição de milisegundos. 1000ms = 1s 
        }, 1000)
     })
}



inputTags.addEventListener('keypress', async (evento) =>{
    //Key: evento que detecta a tecla pressionada
    if (evento.key === "Enter"){
        //Evento que evita que ocorra a perca de informações no formulário caso a tela atualize.
        evento.preventDefault()
        //Remove os espaços em branco antes e dps da palavra
        const tagTexto = inputTags.value.trim();
        //If para verificar se algo foi digitado no campo.
        if (tagTexto !== ""){
            //O try/catch foi adicionado para capturar um erro se ele surgir.
            try{
            const tagExiste = await verificarTagsDisponiveis(tagTexto);
            if (tagExiste){
                const tagNova = document.createElement("li");
                //Criação da tag digitada no campo inputTags
                tagNova.innerHTML = `<p>${tagTexto}</p> <img src="./img/close-black.svg" class="remove-tag">`
                listaTags.appendChild(tagNova);
                inputTags.value = "";
            } else {
                alert("Tag não foi encontrada.")
            }
        } catch(error){
            console.error("Erro ao verificar a existência da tag.");
            alert("Erro ao verificar a existência da tag. Verifique o console.")
        }
        }
    }
})

const botaoPublicar = document.querySelector(".botao-publicar");

botaoPublicar.addEventListener("click", async (evento) => {
    evento.preventDefault();
    const nomeDoProjeto = document.getElementById("nome").value;
    const descricaoDoProjeto = document.getElementById("descricao").value;
    //Array.from cria um novo array a partir  de um objeto semelhante a um array.
    //.map() é uma função de array que cria um novo array preenchido com os resultados de uma função fornecida para cada elemento do array de origem. É uma maneira eficiente de transformar dados em um areray de maneira funcional.
    const tagsProjeto = Array.from(listaTags.querySelectorAll("p")).map((tag) => tag.textContent)

    console.log(nomeDoProjeto)
    console.log(descricaoDoProjeto)
    console.log(tagsProjeto)

})

async function publicarProjeto(nomeDoProjeto,descricaoDoProjeto,tagsProjeto){
    return new Promise ((resolve,reject) =>{
        setTimeout(() => {
            const deuCerto = Math.random() > 0.5;

            if (deuCerto){
                resolve("Projeto publicado com sucesso")
            } else {
                reject("Não deu para publicar o projeto")
            }
        }, 2000);
    })
}
