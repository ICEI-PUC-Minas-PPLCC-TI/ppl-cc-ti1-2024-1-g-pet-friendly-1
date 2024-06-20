document.getElementById('formCadastro').addEventListener('submit', function(e) {
    e.preventDefault();

    var nomeProduto = document.getElementById('nomeProduto').value;
    var urlImagem = document.getElementById('urlImagem').value;

    // Adicionando um campo 'id' fictício para demonstração
    var novoProduto = { id: Date.now(), nome: nomeProduto, imagem: urlImagem };

    // Substituindo localStorage pela chamada à API
    fetch('https://api-pet-pugp.onrender.com/produtos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(novoProduto)
    })
  .then(response => response.json())
  .then(data => {
        if (data.success) {
            alert('Produto cadastrado com sucesso. Agora, atualize a página principal.');
        } else {
            alert('Produto cadastrado com sucesso.');
        }
    })
  .catch(error => console.error('Erro:', error));
});
