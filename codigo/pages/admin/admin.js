// Carrega e exibe produtos
async function loadAndDisplayProducts() {
    try {
        const response = await fetch('https://api-render-pet.onrender.com/produtos', {
            method: 'GET',
        });

        if (!response.ok) throw new Error('Erro ao buscar produtos');

        const products = await response.json();
        const container = document.getElementById('lista-produtos');

        products.forEach((product, index) => {
            const productElement = document.createElement('div');
            productElement.innerHTML = `
                <h3>${product.nome}</h3>
                <img src="${product.imagem}" alt="${product.nome}">
                <button onclick="editProduct(${index}, '${product.id}')">Editar</button>
                <button onclick="deleteProduct(${index}, '${product.id}')">Deletar</button>
            `;
            container.appendChild(productElement);
        });
    } catch (error) {
        console.error('Erro:', error);
    }
}

// Carrega e exibe serviços
// Carrega e exibe serviços
async function loadAndDisplayServices() {
    try {
        const response = await fetch('https://api-render-pet.onrender.com/servicos', {
            method: 'GET',
        });

        if (!response.ok) throw new Error('Erro ao buscar serviços');

        const services = await response.json();
        const container = document.getElementById('lista-servicos');

        // Limpa o container antes de adicionar novos elementos
        container.innerHTML = '';

        services.forEach((service, index) => {
            const serviceElement = document.createElement('div');
            serviceElement.innerHTML = `
                <h3>${service.nome}</h3>
                <img src="${service.imagem}" alt="${service.nome}">
                <p>${service.atendimentos}</p>
                <button onclick="editService(${index}, '${service.id}')">Editar</button>
                <button onclick="deleteService(${index}, '${service.id}')">Deletar</button>
            `;
            container.appendChild(serviceElement);
        });
    } catch (error) {
        console.error('Erro:', error);
    }
}

// Função para editar um serviço
async function editService(index, serviceId) {
    const newName = prompt("Digite o novo nome do serviço:");
    const newImageURL = prompt("Digite a nova URL da imagem:");
    const newDescription = prompt("Digite a nova descrição do atendimento:");

    if (newName && newImageURL && newDescription) {
        try {
            const response = await fetch(`https://api-render-pet.onrender.com/servicos/${serviceId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ nome: newName, imagem: newImageURL, atendimentos: newDescription })
            });

            if (!response.ok) throw new Error('Erro ao editar serviço');

            alert(`${newName} foi editado com sucesso.`);
            loadAndDisplayServices(); // Recarrega a lista de serviços após a edição
            location.reload(); // Recarrega a página
        } catch (error) {
            console.error('Erro:', error);
            alert('Erro ao editar serviço.');
        }
    } else {
        alert("Por favor, preencha todos os campos.");
    }
}

// Função para deletar um serviço
async function deleteService(index, serviceId) {
    try {
        const response = await fetch(`https://api-render-pet.onrender.com/servicos/${serviceId}`, {
            method: 'DELETE',
        });

        if (!response.ok) throw new Error('Erro ao deletar serviço');

        alert(`O serviço foi deletado`);
        loadAndDisplayServices(); // Recarrega a lista de serviços após a exclusão
        location.reload(); // Recarrega a página
    } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao deletar serviço.');
    }
}


// Event listener para carregar e exibir produtos e serviços quando a página é carregada
document.addEventListener('DOMContentLoaded', function() {
    // Carrega e exibe produtos
    loadAndDisplayProducts();

    // Carrega e exibe serviços
    loadAndDisplayServices();
});

// Função para editar um produto
async function editProduct(index, productId) {
    const newName = prompt("Digite o novo nome do produto:");
    const newImageURL = prompt("Digite a nova URL da imagem:");

    if (newName && newImageURL) {
        try {
            const response = await fetch(`https://api-render-pet.onrender.com/produtos/${productId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ nome: newName, imagem: newImageURL })
            });

            if (!response.ok) throw new Error('Erro ao editar produto');

            alert(`${newName} foi editado com sucesso.`);
            loadAndDisplayProducts(); // Recarrega a lista de produtos após a edição
            location.reload(); // Recarrega a página
        } catch (error) {
            console.error('Erro:', error);
            alert('Erro ao editar produto.');
        }
    } else {
        alert("Por favor, preencha ambos os campos.");
    }
}

// Função para deletar um produto
async function deleteProduct(index, productId) {
    try {
        const response = await fetch(`https://api-render-pet.onrender.com/produtos/${productId}`, {
            method: 'DELETE',
        });

        if (!response.ok) throw new Error('Erro ao deletar produto');

        alert(`O produto foi deletado`);
        loadAndDisplayProducts(); // Recarrega a lista de produtos após a exclusão
        location.reload(); // Recarrega a página
    } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao deletar produto.');
    }
}
