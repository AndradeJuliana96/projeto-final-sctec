function carregarProjeto(nome) {
  const area = document.getElementById("area-projeto");
  area.innerHTML = "";

  if (nome === "velha") {
    area.innerHTML = `
            <div class="container-jogo">
                <h2>Jogo da Velha</h2>

                <div id="tabuleiro-jogo" class="tabuleiro">
                    <button class="celula"></button>
                    <button class="celula"></button>
                    <button class="celula"></button>
                    <button class="celula"></button>
                    <button class="celula"></button>
                    <button class="celula"></button>
                    <button class="celula"></button>
                    <button class="celula"></button>
                    <button class="celula"></button>
                </div>

                <button id="botaoReiniciar">Reiniciar</button>
            </div>
        `;

    iniciarJogoDaVelha();
  }
  if (nome === "simulador") {
    area.innerHTML = `
            <h2>Simulador de Investimentos</h2>
    <div class="simulador-card">
        <div class="input-group">
            <label for="valorInicial">Valor Inicial (R$)</label>
            <input type="number" id="valorInicial" value="10000">
        </div>

        <div class="input-group">
            <label for="aporteMensal">Aporte Mensal (R$)</label>
            <input type="number" id="aporteMensal" value="0">
        </div>

        <div class="input-group">
            <label for="taxaAnual">Taxa de Juros Anual (%)</label>
            <input type="number" id="taxaAnual" value="0">
        </div>

        <div class="input-group">
            <label for="tempo">Tempo (anos)</label>
            <input type="number" id="tempo" value="0">
        </div>

        <button class="btn-calcular" onclick="calcularJuros()">Calcular Juros</button>

        <div id="resultado" class="resultado-display">
            </div>
    </div>
        `;

    calcularJuros();
  }
  if (nome === "calculadora") {
    area.innerHTML = `
       <div class="card" onclick="abrirCalculadora()">
  <h2>Calculadora</h2>
 </div>
<div id="calculadora-container" class="calculadora" style="display:none;">
  <input type="text" id="display" disabled>

  <div class="calc-grid">
    <div class="numeros">
      <button onclick="adicionarNumero('7')">7</button>
      <button onclick="adicionarNumero('8')">8</button>
      <button onclick="adicionarNumero('9')">9</button>

      <button onclick="adicionarNumero('4')">4</button>
      <button onclick="adicionarNumero('5')">5</button>
      <button onclick="adicionarNumero('6')">6</button>

      <button onclick="adicionarNumero('1')">1</button>
      <button onclick="adicionarNumero('2')">2</button>
      <button onclick="adicionarNumero('3')">3</button>

      <button onclick="adicionarNumero('0')">0</button>
      <button onclick="adicionarNumero('.')">.</button>
      <button onclick="limpar()">C</button>
    </div>

    <div class="operadores">
      <button onclick="adicionarOperador('+')">+</button>
      <button onclick="adicionarOperador('-')">-</button>
      <button onclick="adicionarOperador('*')">*</button>
      <button onclick="adicionarOperador('/')">/</button>
      <button onclick="calcular()">=</button>
    </div>
  </div>
</div>
        

`;
    abrirCalculadora();
  }

  if (nome === "toDo") {
    area.innerHTML = `
    <div class="todo-container">
        <h2>To-Do List Avançada</h2>
        <input type="text" id="tarefa-input" placeholder="Digite sua tarefa">
        <button id="adicionar-btn">+ Adicionar Tarefa</button>

    <div class="filtros">
        <button class="filtro-btn" data-filtro="todas">Todas</button>
        <button class="filtro-btn" data-filtro="pendentes">Pendentes</button>
        <button class="filtro-btn" data-filtro="concluidas">Concluídas</button>
    </div>

    <ul id="lista-tarefas"></ul>

        <p>Total de Tarefas: <span id="contador">0</span></p>
        <button id="salvar-btn">💾 Salvar no localStorage</button>
    </div>
        `;
    iniciarToDo();
  }
}
