document.getElementById('formServico').addEventListener('submit', function(e) {
    e.preventDefault();

    var urlImagem = document.getElementById('urlImagem').value;
    var nomeServico = document.getElementById('nomeServico').value;
    var horarioAtendimento = document.getElementById('horarioAtendimento').value;

    // Gerando um ID fictício para demonstração
    var novoServico = {
        id: Date.now(),
        imagem: urlImagem,
        nome: nomeServico,
        atendimentos: horarioAtendimento
    };

    // Substituindo localStorage pela chamada à API
    fetch('https://api-render-pet.onrender.com/servicos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(novoServico)
    })
 .then(response => response.json())
 .then(data => {
        if (data.success) {
            alert('Serviço cadastrado com sucesso. Atualize a página de serviços.');
        } else {
            alert('Produto cadastrado com sucesso.');
        }
    })
 .catch(error => console.error('Erro:', error));
});
