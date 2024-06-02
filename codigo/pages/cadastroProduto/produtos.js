window.onload = function() {
    fetch('https://api-render-pet.onrender.com/produtos')
     .then(response => response.json())
     .then(produtos => {
          produtos.forEach(function(produto, index) {
              var imgDiv = document.createElement('div');
              imgDiv.id = 'imagem' + (index + 1);
              imgDiv.innerHTML = '<img src="' + produto.imagem + '" class="img-fluid">';
              
              var nomeH5 = document.createElement('h5');
              nomeH5.id = 'nome' + (index + 1);
              nomeH5.style.fontWeight = "800";
              nomeH5.style.color = "#E85D0C";
              nomeH5.style.marginTop = "-15px!important";
              nomeH5.style.marginBottom = "-5px";
              nomeH5.classList.add("mt-3");
              nomeH5.innerText = produto.nome;
              
              var cardBody = document.createElement('div');
              cardBody.className = "card-body text-center";
              cardBody.innerHTML = `
                  ${imgDiv.outerHTML}
                  ${nomeH5.outerHTML}
                  <button href="#" id="corB2${index + 1}" class="btn mt-3 text-light fw-bold rounded-4">Veja Mais <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                      <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                  </svg></button>
              `;
              
              var col = document.createElement('div');
              col.className = "col productStyle";
              col.innerHTML = cardBody.outerHTML;
              
              var row = document.querySelector('.product-cont');
              row.appendChild(col);
              
              // Adiciona um evento de clique ao botão
              document.getElementById(`corB2${index + 1}`).addEventListener('click', function() {
                  // Armazena o ID do produto no localStorage e redireciona para a página de detalhes
                  localStorage.setItem('produtoId', produto.id);
                  window.location.href = 'detalhes.html';
              });
          });
      })
     .catch(error => console.error('Erro ao carregar produtos:', error));
}
