// Função para validar login
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const usuario = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;

    if (usuario === 'admin' && senha === 'admin123') {
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('retaguarda-card').style.display = 'block';
    } else if (usuario && senha) {
        document.getElementById('login-container').style.display = 'none';
    } else {
        document.getElementById('login-feedback').textContent = 'Usuário ou senha incorretos.';
    }
});

// Função para criar um novo chamado
document.getElementById('form-chamado').addEventListener('submit', function(event) {
    event.preventDefault();
    const titulo = document.getElementById('titulo').value;
    const descricao = document.getElementById('descricao').value;
    const prioridade = document.getElementById('prioridade').value;

    const novoChamado = {
        titulo: titulo,
        descricao: descricao,
        prioridade: prioridade,
    };

    document.getElementById('feedback').textContent = 'Chamado criado com sucesso!';
    document.getElementById('form-chamado').reset();

    carregarChamados();
});

// Função para carregar chamados
function carregarChamados() {
    const listaChamados = [
        { titulo: 'Problema no servidor', descricao: 'Servidor inativo', prioridade: 'Alta' },
        { titulo: 'Erro no sistema', descricao: 'Bug detectado', prioridade: 'Média' }
    ];

    const listaElement = document.getElementById('lista-chamados');
    const listaElementAdmin = document.getElementById('lista-chamados-admin');
    listaElement.innerHTML = '';
    listaElementAdmin.innerHTML = '';

    listaChamados.forEach(chamado => {
        const li = document.createElement('li');
        li.textContent = `${chamado.titulo} - Prioridade: ${chamado.prioridade}`;
        listaElement.appendChild(li);

        // Exibindo para admins
        const liAdmin = document.createElement('li');
        liAdmin.textContent = `${chamado.titulo} - ${chamado.descricao} - Prioridade: ${chamado.prioridade}`;
        listaElementAdmin.appendChild(liAdmin);
    });
}
