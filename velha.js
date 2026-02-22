function iniciarJogoDaVelha() {
    const celulas = document.querySelectorAll(".celula");
    const botaoReiniciar = document.getElementById("botaoReiniciar");

    let jogadorAtual = "X";
    let jogoAtivo = true;

    const combinacoesVitoria = [
        [0,1,2], [3,4,5], [6,7,8], 
        [0,3,6], [1,4,7], [2,5,8], 
        [0,4,8], [2,4,6]           
    ];

    function verificarVencedor() {
        for (let combinacao of combinacoesVitoria) {
            const [a,b,c] = combinacao;

            if (
                celulas[a].textContent &&
                celulas[a].textContent === celulas[b].textContent &&
                celulas[a].textContent === celulas[c].textContent
            ) {
                alert(`Jogador ${celulas[a].textContent} venceu!`);
                jogoAtivo = false;
                return;
            }
        }

        const empate = [...celulas].every(c => c.textContent !== "");
        if (empate && jogoAtivo) {
            alert("Deu empate!");
            jogoAtivo = false;
        }
    }

    celulas.forEach(celula => {
        celula.addEventListener("click", () => {
            if (celula.textContent === "" && jogoAtivo) {
                celula.textContent = jogadorAtual;
                verificarVencedor();
                jogadorAtual = jogadorAtual === "X" ? "O" : "X";
            }
        });
    });

    botaoReiniciar.addEventListener("click", () => {
        celulas.forEach(c => c.textContent = "");
        jogadorAtual = "X";
        jogoAtivo = true;
    });

}
