document.getElementById('formServico').addEventListener('submit', function(e) {
    e.preventDefault();
    var urlImagem = document.getElementById('urlImagem').value;
    var nomeServico = document.getElementById('nomeServico').value;
    var horarioAtendimento = document.getElementById('horarioAtendimento').value;
  
    var servicosArmazenados = JSON.parse(localStorage.getItem('servicos')) || [];
    servicosArmazenados.push({
        imagem: urlImagem,
        nome: nomeServico,
        atendimentos: horarioAtendimento
    });
  
    localStorage.setItem('servicos', JSON.stringify(servicosArmazenados));
    alert('Serviço cadastrado com sucesso Atualize a página de serviços.');
  });
  