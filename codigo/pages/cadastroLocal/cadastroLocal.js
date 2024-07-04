document.getElementById('formLocal').addEventListener('submit', function(e) {
    e.preventDefault();

    var urlImagem = document.getElementById('urlImagem').value;
    var nomeLocal = document.getElementById('nomeLocal').value;
    var endereço = document.getElementById('localEndereço').value;

    // Gerando um ID fictício para demonstração
    var novoLocal = {
        id: Date.now(),
        imagem: urlImagem,
        nome: nomeLocal,
        endereço: endereço
    };

    // Substituindo localStorage pela chamada à API
    fetch('https://api-render-pet.onrender.com/local', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(novoLocal)
    })
 .then(response => response.json())
 .then(data => {
        if (data.success) {
            alert('Local cadastrado com sucesso. Atualize a página de local.');
        } else {
            alert('Local cadastrado com sucesso.');
        }
    })
 .catch(error => console.error('Erro:', error));
});
