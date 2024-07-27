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

    // Função para carregar lista de manutenções
    function loadManutencoes() {
        fetch('http://localhost:8080/api/manutencoes')
            .then(response => response.json())
            .then(data => {
                const manutencaoList = document.getElementById('manutencaoList');
                manutencaoList.innerHTML = '';
                data.forEach(manutencao => {
                    const row = `
                        <tr>
                            <td>${manutencao.id}</td>
                            <td>${manutencao.veiculo}</td>
                            <td>${manutencao.descricao}</td>
                            <td>${manutencao.data}</td>
                            <td>
                                <button class="btn btn-warning btn-sm">Editar</button>
                                <button class="btn btn-danger btn-sm">Excluir</button>
                            </td>
                        </tr>
                    `;
                    manutencaoList.insertAdjacentHTML('beforeend', row);
                });
            })
            .catch(error => console.error('Erro:', error));
    }

    // Função para adicionar nova manutenção
    if (document.getElementById('manutencaoForm')) {
        document.getElementById('manutencaoForm').addEventListener('submit', function (event) {
            event.preventDefault();
            const veiculo = document.getElementById('veiculo').value;
            const descricao = document.getElementById('descricao').value;
            const data = document.getElementById('data').value;

            fetch('http://localhost:8080/api/manutencoes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ veiculo, descricao, data })
            })
                .then(response => response.json())
                .then(data => {
                    alert('Manutenção adicionada com sucesso!');
                    window.location.href = 'manutencoes.html';
                })
                .catch(error => console.error('Erro:', error));
        });
    }

    // Função para carregar lista de usuários
    function loadUsuarios() {
        fetch('http://localhost:8080/api/usuarios')
            .then(response => response.json())
            .then(data => {
                const usuarioList = document.getElementById('usuarioList');
                usuarioList.innerHTML = '';
                data.forEach(usuario => {
                    const row = `
                        <tr>
                            <td>${usuario.id}</td>
                            <td>${usuario.nome}</td>
                            <td>${usuario.email}</td>
                            <td>
                                <button class="btn btn-warning btn-sm">Editar</button>
                                <button class="btn btn-danger btn-sm">Excluir</button>
                            </td>
                        </tr>
                    `;
                    usuarioList.insertAdjacentHTML('beforeend', row);
                });
            })
            .catch(error => console.error('Erro:', error));
    }

    // Função para adicionar novo usuário
    if (document.getElementById('usuarioForm')) {
        document.getElementById('usuarioForm').addEventListener('submit', function (event) {
            event.preventDefault();
            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const senha = document.getElementById('senha').value;

            fetch('http://localhost:8080/api/usuarios', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ nome, email, senha })
            })
                .then(response => response.json())
                .then(data => {
                    alert('Usuário adicionado com sucesso!');
                    window.location.href = 'usuarios.html';
                })
                .catch(error => console.error('Erro:', error));
        });
    }

    // Função para login
    if (document.getElementById('loginForm')) {
        document.getElementById('loginForm').addEventListener('submit', function (event) {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            fetch('http://localhost:8080/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            })
                .then(response => {
                    if (response.ok) {
                        alert('Login bem-sucedido!');
                        window.location.href = 'index.html';
                    } else {
                        alert('Credenciais inválidas.');
                    }
                })
                .catch(error => console.error('Erro:', error));
        });
    }

    // Carregar listas ao carregar a página
    if (document.getElementById('veiculoList')) {
        loadVeiculos();
    }
    if (document.getElementById('manutencaoList')) {
        loadManutencoes();
    }
    if (document.getElementById('usuarioList')) {
        loadUsuarios();
    }
});
