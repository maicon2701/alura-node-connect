const btnUpload = document.getElementById('upload-btn');
const imagemUpload = document.getElementById('imagem-upload');
const imagemPrincipal = document.querySelector('.main-imagem');
const nomeImagem = document.querySelector('.container-imagem-nome');


btnUpload.addEventListener('click', () =>{
    imagemUpload.click();
})

function lerConteudoDoArquivo(arquivo){
    return new Promise((resolve,reject) => {
        const leitor = new FileReader();

        leitor.onload = () => {
            resolve({
                resultado: leitor.result,
                nome: arquivo.nome
            })
        }

        leitor.onerror = () => {
            reject(`Erro na leitura do arquivo ${arquivo.nome}`)
        }
        leitor.readAsDataURL(arquivo);
    })
}



function filtrarGatosPorCor(listaDeGatos, corDesejada){
    return listaDeGatos.filter(gato => gato.cor === corDesejada)
}



imagemUpload.addEventListener('change', async (evento) =>{
    const arquivo = evento.target.files[0];

    if(arquivo){
        try{
            const conteudoDoArquivo = await lerConteudoDoArquivo(arquivo);
            imagemPrincipal.src = conteudoDoArquivo.url;
            nomeImagem.textContent = conteudoDoArquivo.nome;
        } catch(erro){
            console.log(`Erro na leitura do arquivo: ${erro}`)
        }
    }

    function lerConteudoDoArquivo(arquivo){
        return new Promise((resolve, reject) =>{
            const leitor = new FileReader();
            leitor.onload = () => resolve({url: leitor.result, nome: arquivo.name})
            leitor.onerror = () => reject(leitor.error)
            leitor.readAsDataURL(arquivo);  
        })

    }

})



//Leitor de JSON
const upload = document.querySelector('#upload');
const conteudoArquivo = document.querySelector('conteudoArquivo');



upload.addEventListener('change', async (evento) => {
    const arquivo = evento.target.files[0];
    if(arquivo){
        try{
            const conteudo = await lerConteudoDoArquivo(arquivo);
            conteudoArquivo.textContent = conteudo.url;
        }catch(erro){
            console.log(`Erro na leitura do arquivo: ${erro}`)
        }
    }


    function lerConteudoDoArquivo(arquivo){
        return new Promise((resolve, reject) => {
            const leitor = new FileReader();
            leitor.onload = () => resolve({texto: leitor.result});
            leitor.onerror = () => reject(leitor.error);
            leitor.readAsText(arquivo);
        })
    }

    document.addEventListener('DOMContentLoaded', () => {
        const upload = document.querySelector('#upload')
        const listaDados = document.querySelector('#listaDados')

        upload.addEventListener('change', async (evento) => {
            const arquivo = evento.target.files[0];
            if(arquivo){
                try{
                    const conteudo = await lerConteudoDoArquivo(arquivo);
                    const dados = JSON.parse(conteudo.texto);
                    listaDados.innerHTML = '';
                    dados.forEach(dado => {
                        const li = document.createElement('li');
                        li.textContent = JSON.stringify(dado);
                        listaDados.appendChild(li);
                    })
                }catch(erro){
                    console.error('Erro na leitura do arquivo:', erro)
                }
            }
        })
    })

} )

function lerConteudoDoArquivo(arquivo){
    return new Promise((resolve, reject) => {
        const leitor = new FileReader();
        leitor.onload = () => resolve({texto: leitor.result});
        leitor.onerror = () => reject(leitor.error);
        leitor.readAsText(arquivo); 
    })
}


let listaDeGatos = [{nome: 'Mimi', cor: 'branco'}, {nome: 'Gatinha', cor:'Escaminha'}, {nome: 'Misquin', cor: 'Laranja'}]
let gatosLaranjas = filtrarGatosPorCor(listaDeGatos, 'Laranja');
console.log(gatosLaranjas,`${gatosLaranjas[0].nome}`);