document.getElementById('formEvento').addEventListener('submit', function(e) {
    e.preventDefault();

    var urlImagem = document.getElementById('urlImagem').value;
    var nomeEvento = document.getElementById('nomeEvento').value;
    var descriçãoEvento = document.getElementById('descriçãoEvento').value;

    // Gerando um ID fictício para demonstração
    var novoEvento = {
        id: Date.now(),
        imagem: urlImagem,
        nome: nomeEvento,
        descrição: descriçãoEvento
    };

    // Substituindo localStorage pela chamada à API
    fetch('https://api-pet-pugp.onrender.com/evento', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(novoEvento)
    })
 .then(response => response.json())
 .then(data => {
        if (data.success) {
            alert('Evento cadastrado com sucesso. Atualize a página de eventos.');
        } else {
            alert('Evento cadastrado com sucesso.');
        }
    })
 .catch(error => console.error('Erro:', error));
});
