const uploadBtn = document.getElementById('upload-btn');
const inputUpload = document.getElementById('image-upload');

uploadBtn.addEventListener('click',() => {
    inputUpload.click();
})

function lerConteudoDoArquivo(arquivo){
    //O new promise é uma maneira de criar uma nova instancia de uma promisse que é usado para lidar com operações assíncronas no JavaScript.(O termo assíncrono refere-se a uma operação ou execução que ocorre de forma independente do fluxo principal de um programa, permitindo que outras partes do código sejam executadas enquanto essa operação está em andamento)
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
            //O await é usado para esperar a promisse ser completada antes de continuar com o próximo passo.
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

inputTags.addEventListener('keypress', (evento) =>{
    //Key: evento que detecta a tecla pressionada
    if (evento.key === "Enter"){
        //Evento que evita que ocorra a perca de informações no formulário caso a tela atualize.
        evento.preventDefault()
        //Remove os espaços em branco antes e dps da palavra
        const tagTexto = inputTags.value.trim();
        //If para verificar se algo foi digitado no campo.
        if (tagTexto !== ""){
            const tagNova = document.createElement("li");
            //Criação da tag digitada no campo inputTags
            tagNova.innerHTML = `<p>${tagTexto}</p> <img src="./img/close-black.svg" class="remove-tag">`
            listaTags.appendChild(tagNova);
            inputTags.value = "";
        }
    }
})


//Remover tags
listaTags.addEventListener("click",(evento) =>{
    //O target está pegando o evento do clique e definindo onde que está acontecendo esse clique.
    if(evento.target.classList.contains("remove-tag")){
        const tagQueQueremosRemover = evento.target.parentElement;
        listaTags.removeChild(tagQueQueremosRemover)
    }
})
