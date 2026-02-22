function iniciarToDo() {
    let tarefas = [];

    const input = document.getElementById('tarefa-input');
    const adicionarBtn = document.getElementById('adicionar-btn');
    const lista = document.getElementById('lista-tarefas');
    const contador = document.getElementById('contador');
    const salvarBtn = document.getElementById('salvar-btn');
    const filtros = document.querySelectorAll('.filtro-btn');

    if(localStorage.getItem('tarefas')) {
      tarefas = JSON.parse(localStorage.getItem('tarefas'));
      renderizarTarefas();
    }

    adicionarBtn.addEventListener('click', () => {
      const texto = input.value.trim();
      if(texto) {
        tarefas.push({ texto, concluida: false });
        input.value = '';
        renderizarTarefas();
      }
    });

    function renderizarTarefas(filtro='todas') {
      lista.innerHTML = '';
      let filtradas = tarefas;
      if(filtro === 'pendentes') filtradas = tarefas.filter(t => !t.concluida);
      if(filtro === 'concluidas') filtradas = tarefas.filter(t => t.concluida);

      filtradas.forEach((t, index) => {
        const li = document.createElement('li');
        if(t.concluida) li.classList.add('concluida');

        const span = document.createElement('span');
        span.textContent = t.texto;

        const editarBtn = document.createElement('button');
        editarBtn.textContent = '✏️';
        editarBtn.onclick = () => {
          const novoTexto = prompt('Edite a tarefa:', t.texto);
          if(novoTexto) tarefas[index].texto = novoTexto;
          renderizarTarefas(filtro);
        };

        const excluirBtn = document.createElement('button');
        excluirBtn.textContent = '🗑️';
        excluirBtn.onclick = () => {
        tarefas = tarefas.filter(item => item !== t); 
        renderizarTarefas(filtro);
        };


        const concluirBtn = document.createElement('button');
        concluirBtn.textContent = '✔️';
        concluirBtn.onclick = () => {
          tarefas[index].concluida = !tarefas[index].concluida;
          renderizarTarefas(filtro);
        };

        li.appendChild(span);
        li.appendChild(editarBtn);
        li.appendChild(excluirBtn);
        li.appendChild(concluirBtn);
        lista.appendChild(li);
      });

      contador.textContent = tarefas.length;
    }

    filtros.forEach(btn => {
      btn.addEventListener('click', () => {
        renderizarTarefas(btn.dataset.filtro);
      });
    });

    salvarBtn.addEventListener('click', () => {
      localStorage.setItem('tarefas', JSON.stringify(tarefas));
      alert('Tarefas salvas com sucesso!');
    });
}