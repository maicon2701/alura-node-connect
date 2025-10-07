const uploadBtn = document.getElementById('upload-btn');
const inputUpload = document.getElementById('image-upload');

uploadBtn.addEventListener('click',() => {
    inputUpload.click();
})

function lerConteudoDoArquivo(arquivo){
    //O new promise é uma maneira de criar uma nova instancia de uma promisse que é usado para lidar com operações assíncronas no JavaScript.(O termo assíncrono refere-se a uma operação ou execução que ocorre de forma independente do fluxo principal de um programa, permitindo que outras partes do código sejam executadas enquanto essa operação está em andamento)
    //A palavra-chave new em JavaScript é usada para criar uma nova instância de um objeto a partir de uma função construtora. Basicamente, ela serve para instanciar objetos que têm propriedades e métodos definidos em uma função
    return new Promise((resolve, reject) => {
        //A função readAsDataURL é um método do objeto FileReader em JavaScript, que é usado para ler o conteúdo de arquivos locais. Ao chamar readAsDataURL, o arquivo é convertido em uma URL de dados (data URL), que pode ser usada, por exemplo, para exibir imagens ou outros tipos de arquivos diretamente em um navegador.
        const leitor = new FileReader();
        leitor.onload = () =>{
            resolve({url: leitor.result, nome:arquivo.name})
        }

        leitor.onerror = () => {
            reject(`Erro na leitura do arquivo ${arquivo.name}`)

        }

        leitor.readAsDataURL(arquivo)
    })
}