const jsonData1 = {
  imagem: "https://i.imgur.com/XJOV5cz.png",
  nome: "Biscoito"
};
const jsonData2 = {
  imagem: "https://i.imgur.com/fnucWNM.png",
  nome: "Branca de Neve"
};
const jsonData3 = {
  imagem: "https://i.imgur.com/pOdy70A.png",
  nome: "Elfo"
};
const jsonData4 = {
  imagem: "https://i.imgur.com/vGdoU6f.png",
  nome: "T-rex"
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
