document.addEventListener('DOMContentLoaded', function() {
    function loadEvents() {
        fetch('https://api-pet-pugp.onrender.com/evento')
            .then(response => response.json())
            .then(eventos => {
                const carouselInner = document.querySelector('.carousel-inner');

                eventos.forEach((evento, index) => {
                    const slide = document.createElement('div');
                    slide.className = 'carousel-item' + (index === 0 ? ' active' : '');

                    slide.innerHTML = `
                        <div class="card text-center">
                            <img src="${evento.imagem}" class="card-img-top img-fluid" alt="${evento.nome}">
                            <div class="card-body">
                                <h5 class="card-title" style="font-weight: 800; color: #E85D0C;">${evento.nome}</h5>
                                <p class="card-text" style="font-size: 11px; font-weight: 800; color: #E85D0C;">${evento.descrição}</p>
                                <button class="btn mt-3 text-light fw-bold rounded-4" style="background-color: #d6660a;">Veja Mais <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                                    <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                                </svg></button>
                            </div>
                        </div>
                    `;

                    carouselInner.appendChild(slide);
                });
            })
            .catch(error => console.error('Erro ao carregar eventos:', error));
    }

    loadEvents();
});
