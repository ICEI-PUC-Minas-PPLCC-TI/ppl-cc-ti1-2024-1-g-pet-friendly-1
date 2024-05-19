document.getElementById('formCadastro').addEventListener('submit', function(e) {
    e.preventDefault();

    var nomeProduto = document.getElementById('nomeProduto').value;
    var urlImagem = document.getElementById('urlImagem').value;

    var produtosArmazenados = JSON.parse(localStorage.getItem('produtos')) || [];

    produtosArmazenados.push({ nome: nomeProduto, imagem: urlImagem });

    localStorage.setItem('produtos', JSON.stringify(produtosArmazenados));

    alert('Produto cadastrado com sucesso Agora, atualize a página principal.');
});
