document.addEventListener('DOMContentLoaded', function() {
    const produtoId = localStorage.getItem('produtoId');
    const productDetails = document.getElementById('productDetails');
    const formAvaliar = document.getElementById('formAvaliar');
    let selectedRating = 0;

    // Fetch product details and display them
    fetch(`https://api-pet-pugp.onrender.com/produtos/${produtoId}`)
        .then(response => response.json())
        .then(produto => {
            productDetails.innerHTML = `
                <div class="col-md-6">
                    <img src="${produto.imagem}" class="img-fluid" alt="${produto.nome}">
                </div>
                <div class="col-md-6">
                    <h1>${produto.nome}</h1>
                    <p>${produto.descricao}</p>
                </div>
            `;
        })
        .catch(error => {
            console.error('Erro ao carregar detalhes do produto:', error);
            productDetails.innerHTML = `<p class="text-danger">Erro ao carregar detalhes do produto: ${error.message}</p>`;
        });

    // Capture rating selection
    document.querySelectorAll('.star-widget input[name="rate"]').forEach(radio => {
        radio.addEventListener('change', function() {
            selectedRating = this.id.split('-')[1];
        });
    });

    // Handle form submission
    formAvaliar.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevents the default form submission behavior
        const comment = formAvaliar.querySelector('textarea').value;

        if (selectedRating && comment) {
            fetch(`https://api-pet-pugp.onrender.com/produtos/${produtoId}`)
                .then(response => response.json())
                .then(produto => {
                    // Update the ratings
                    if (produto.avaliacoes[selectedRating]) {
                        produto.avaliacoes[selectedRating]++;
                    } else {
                        produto.avaliacoes[selectedRating] = 1;
                    }

                    // Add the new comment
                    const newComment = {
                        rating: selectedRating,
                        comment: comment
                    };
                    produto.comentarios.push(newComment);

                    // Send updated product data back to the server
                    fetch(`https://api-pet-pugp.onrender.com/produtos/${produtoId}`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(produto)
                    })
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Erro ao atualizar o produto');
                        }
                        return response.json();
                    })
                    .then(updatedProduto => {
                        alert('Avaliação enviada com sucesso!');
                        console.log('Produto atualizado:', updatedProduto);
                    })
                    .catch(error => {
                        console.error('Erro ao enviar avaliação:', error);
                        alert('Erro ao enviar avaliação');
                    });
                })
                .catch(error => {
                    console.error('Erro ao carregar produto para atualização:', error);
                });
        } else {
            alert('Por favor, selecione uma classificação e escreva um comentário.');
        }
    });
});
