document.addEventListener("DOMContentLoaded", () => {
    fetchProductDataForButton();
  });
  
  const openBtn = document.getElementById("openModal");
  const closeBtn = document.getElementById("closeModal");
  const modal = document.getElementById("modal");
  
  openBtn.addEventListener("click", () => {
    modal.classList.add("open");
    fetchProductDataForModal();
  });
  
  closeBtn.addEventListener("click", () => {
    modal.classList.remove("open");
  });
  
  const fetchProductDataForButton = () => {
    const produtoId = localStorage.getItem('produtoId');
  
    fetch(`https://api-render-pet.onrender.com/produtos/${produtoId}`)
      .then(response => response.json())
      .then(produto => {
        const avaliacoes = produto.avaliacoes;
  
        let totalRatings = 0;
        let ratingSum = 0;
  
        for (let rating in avaliacoes) {
          const count = avaliacoes[rating];
          totalRatings += count;
          ratingSum += count * parseInt(rating);
        }
  
        const ratingAverage = (ratingSum / totalRatings).toFixed(1);
  
        document.querySelector('.Rating-outer h2').innerHTML = ratingAverage;
        document.querySelector('.Rating-outer p').innerHTML = totalRatings + " Avaliações";
        document.querySelector('.star-inner-outer').style.width = (ratingAverage / 5) * 100 + "%";
      })
      .catch(error => {
        console.error('Erro ao carregar avaliações do produto:', error);
      });
  };
  
  const fetchProductDataForModal = () => {
    const produtoId = localStorage.getItem('produtoId');
  
    fetch(`https://api-render-pet.onrender.com/produtos/${produtoId}`)
      .then(response => response.json())
      .then(produto => {
        const avaliacoes = produto.avaliacoes;
        const comentarios = produto.comentarios;
  
        let totalRatings = 0;
        let ratingSum = 0;
        let ratingsArray = [];
  
        for (let rating in avaliacoes) {
          const count = avaliacoes[rating];
          totalRatings += count;
          ratingSum += count * parseInt(rating);
          ratingsArray.push({
            star: parseInt(rating),
            count: count
          });
        }
  
        const ratingAverage = (ratingSum / totalRatings).toFixed(1);
  
        document.querySelector('.Rating h2').innerHTML = ratingAverage;
        document.querySelector('.Rating p').innerHTML = totalRatings + " Avaliações";
        document.querySelector('.star-inner').style.width = (ratingAverage / 5) * 100 + "%";
  
        document.querySelector('.rating-progress').innerHTML = '';
        ratingsArray.forEach(rating => {
          const ratingProgress = `
            <div class="rating-progress-value">
              <p>${rating.star} <i class="fas fa-star"></i></p>
              <div class="progress">
                <div class="bar" style="width: ${(rating.count / totalRatings) * 100}%;"></div>
              </div>
              <p>${rating.count.toLocaleString()}</p>
            </div>
          `;
          document.querySelector('.rating-progress').innerHTML += ratingProgress;
        });
  
        document.querySelector('.comments').innerHTML = '';
        comentarios.forEach(comment => {
          const commentElement = `
            <div class="comment">
              <p><strong>${comment.rating} <i class="fas fa-star"></i></strong></p>
              <p>${comment.comment}</p>
            </div>
          `;
          document.querySelector('.comments').innerHTML += commentElement;
        });
      })
      .catch(error => {
        console.error('Erro ao carregar avaliações do produto:', error);
      });
  };
  