function abrirCalculadora() {
  const container = document.getElementById('calculadora-container');
  container.style.display = 'block';
}

let expressao = '';

function adicionarNumero(num) {
  expressao += num;
  atualizarDisplay();
}

function adicionarOperador(op) {
  if (expressao !== '' && !isNaN(expressao.slice(-1))) {
    expressao += op;
    atualizarDisplay();
  }
}

function atualizarDisplay() {
  document.getElementById('display').value = expressao;
}

function calcular() {
  try {
    expressao = eval(expressao).toString();
    atualizarDisplay();
  } catch {
    expressao = '';
    alert('Expressão inválida');
    atualizarDisplay();
  }
}

function limpar() {
  expressao = '';
  atualizarDisplay();
}