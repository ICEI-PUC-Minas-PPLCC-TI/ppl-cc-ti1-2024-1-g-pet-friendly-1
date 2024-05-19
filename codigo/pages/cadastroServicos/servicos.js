document.addEventListener('DOMContentLoaded', function() {
  function loadServices() {
      var servicosArmazenados = JSON.parse(localStorage.getItem('servicos')) || [];
      servicosArmazenados.forEach(function(servico, index) {
          var imgDiv = document.createElement('div');
          imgDiv.id = 'imagem' + (index + 1);
          imgDiv.innerHTML = '<img src="' + servico.imagem + '" class="img-fluid">';

          var nomeH5 = document.createElement('h5');
          nomeH5.id = 'nome' + (index + 1);
          nomeH5.style.fontWeight = "800";
          nomeH5.style.color = "#E85D0C";
          nomeH5.style.marginTop = "-15px!important";
          nomeH5.style.marginBottom = "-5px";
          nomeH5.classList.add("mt-3");
          nomeH5.innerText = servico.nome;

          var atendimentoH2 = document.createElement('h2');
          atendimentoH2.id = 'atendimento' + (index + 1);
          atendimentoH2.style.fontSize = "11px";
          atendimentoH2.style.fontWeight = "800";
          atendimentoH2.style.color = "#E85D0C";
          atendimentoH2.classList.add("mt-3");
          atendimentoH2.innerText = servico.atendimentos;

          var cardBody = document.createElement('div');
          cardBody.className = "card-body text-center";
          cardBody.innerHTML = `
              ${imgDiv.outerHTML}
              ${nomeH5.outerHTML}
              ${atendimentoH2.outerHTML}
              <button href="#" id="corB2${index + 1}" class="btn mt-3 text-light fw-bold rounded-4">Veja Mais <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
              </svg></button>
          `;

          var col = document.createElement('div');
          col.className = "col serviceStyle";
          col.style.width = "33%";
          col.innerHTML = cardBody.outerHTML;

          var row = document.querySelector('.service-cont');
          if (row) {
              row.appendChild(col);
          }
      });
  }

  loadServices();
});
