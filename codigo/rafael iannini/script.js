const jsonData1 = {
  imagem: "caminho/para/imagem1.png",
  nome: "Nome do Produto 1"
};
const jsonData2 = {
  imagem: "caminho/para/imagem2.png",
  nome: "Nome do Produto 2"
};
const jsonData3 = {
  imagem: "caminho/para/imagem3.png",
  nome: "Nome do Produto 3"
};
const jsonData4 = {
  imagem: "caminho/para/imagem4.png",
  nome: "Nome do Produto 4"
};

function preencherDados(idImagem, idNome, data) {
  document.getElementById(idImagem).innerHTML = `<img src="${data.imagem}" class="img-fluid" alt="Imagem">`;
  document.getElementById(idNome).innerText = data.nome;
}

preencherDados('imagem1', 'nome1', jsonData1);
preencherDados('imagem2', 'nome2', jsonData2);
preencherDados('imagem3', 'nome3', jsonData3);
preencherDados('imagem4', 'nome4', jsonData4);

document.getElementById('meuFormulario').addEventListener('submit', function(event) {
  event.preventDefault();
  const email = document.getElementById('email').value;
  console.log('E-mail digitado: ', email);
});