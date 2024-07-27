document.addEventListener('DOMContentLoaded', function () {
    // Função para carregar lista de veículos
    function loadVeiculos() {
        fetch('http://localhost:8080/api/veiculos')
            .then(response => response.json())
            .then(data => {
                const veiculoList = document.getElementById('veiculoList');
                veiculoList.innerHTML = '';
                data.forEach(veiculo => {
                    const row = `
                        <tr>
                            <td>${veiculo.id}</td>
                            <td>${veiculo.nome}</td>
                            <td>${veiculo.modelo}</td>
                            <td>${veiculo.ano}</td>
                            <td>
                                <button class="btn btn-warning btn-sm">Editar</button>
                                <button class="btn btn-danger btn-sm">Excluir</button>
                            </td>
                        </tr>
                    `;
                    veiculoList.insertAdjacentHTML('beforeend', row);
                });
            })
            .catch(error => console.error('Erro:', error));
    }

    // Chame a função para carregar os veículos ao carregar a página
    if (document.getElementById('veiculoList')) {
        loadVeiculos();
    }

    // Função para adicionar novo veículo
    if (document.getElementById('veiculoForm')) {
        document.getElementById('veiculoForm').addEventListener('submit', function (event) {
            event.preventDefault();
            const nome = document.getElementById('nome').value;
            const modelo = document.getElementById('modelo').value;
            const ano = document.getElementById('ano').value;

            fetch('http://localhost:8080/api/veiculos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ nome, modelo, ano })
            })
                .then(response => response.json())
                .then(data => {
                    alert('Veículo adicionado com sucesso!');
                    window.location.href = 'veiculos.html';
                })
                .catch(error => console.error('Erro:', error));
        });
    }
});
