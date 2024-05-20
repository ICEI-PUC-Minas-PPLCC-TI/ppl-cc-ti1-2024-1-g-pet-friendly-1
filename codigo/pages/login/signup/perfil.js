document.addEventListener('DOMContentLoaded', async function() {
    try {
        const response = await fetch('https://json-pet1.vercel.app/usuarios');
        
        if (!response.ok) { // Verifica se a resposta é válida
            throw new Error(`HTTP error status: ${response.status}`);
        }

        const usuarios = await response.json();
        const usuarioLogado = usuarios.find(u => u.usuario === 'admin'); // Substitua 'admin' pelo nome de usuário desejado

        if (usuarioLogado) {
            document.getElementById('nomeUsuarioInput').value = usuarioLogado.usuario;
            
            if (usuarioLogado.usuario === "admin") {
                const adminPanelButton = document.createElement("button");
                adminPanelButton.id = "adminPanelButton";
                adminPanelButton.className = "btn btn-success";
                adminPanelButton.textContent = "Painel de Admin";
                adminPanelButton.onclick = function() {
                    window.location.href = "../../admin/admin.html";
                };
                document.getElementById('formPerfil').appendChild(adminPanelButton);
            }
        } else {
            console.error('Usuário não encontrado na API.');
        }
    } catch (error) {
        console.error('Erro ao verificar o usuário:', error);
    }
});

document.getElementById('formPerfil').addEventListener('submit', async function(event) {
    event.preventDefault();
    const nomeUsuario = document.getElementById('nomeUsuarioInput').value;
    const senhaUsuario = document.getElementById('senhaUsuario').value;

    // Implementação da função updateUsuario ficaria aqui
    // await updateUsuario(nomeUsuario, senhaUsuario);

    window.location.href = '../../admin/admin.html'; // Ajuste o caminho conforme necessário
});


document.getElementById('deslogarButton').addEventListener('click', function() {
    console.log('Logout realizado');
    
    // Limpa a flag de login no localStorage
    localStorage.removeItem('usuarioLogado');
    
    // Redireciona o usuário para a página inicial
    window.location.href = '../../index.html';

    localStorage.removeItem('usuarioNome');
    atualizarLinks(); // Atualiza os links após o logout

    localStorage.removeItem('loggedIn');
    window.location.href = '../../index.html';
});
