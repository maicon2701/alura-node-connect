
//Função que simula a verificação de disponibilidade do usuário
async function verificarUsuarioDisponivel (usuario){
    return new Promise( (resolve) => {
        setTimeout(() => {
            const usuariosCadastrados = ['teste1', 'teste2', 'teste3']
            resolve(!usuariosCadastrados.includes(usuario))
        }, 1000);
    }, )
}

//Evento que consulta a disponibilidade do usuário ao perder o foco do campo de input
document.getElementById('usuario-input').addEventListener('blur', async function (event) {
    const usuario = event.target.value;

    if(usuario.trim() !== ""){
        try{
            const usuarioDisponivel = await verificarUsuarioDisponivel(usuario);
            exibirFeedbackUsuario(usuarioDisponivel, usuario);
        } catch (error){
            console.error('Erro ao verificar a disponibilidade do usuário:', error);
            exibirFeedbackErrousuario();
        }
    }
})


function exibirFeedbackUsuario(disponivel, usuario){
    const feedbackElemento = document.getElementById('usuario-feedback');
    if (disponivel){
        feedbackElemento.textContent = `O usuário ${usuario} está disponível.`;
        feedbackElemento.style.color = "green";
    }else {
        feedbackElemento.textContent = `O usuário ${usuario} já está cadastrado.`;
        feedbackElemento.style.color = "red";   
    }
}

