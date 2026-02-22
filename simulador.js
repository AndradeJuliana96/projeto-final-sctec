function calcularJuros() {

    const valorInicial = parseFloat(document.getElementById('valorInicial').value) || 0;
    const aporteMensal = parseFloat(document.getElementById('aporteMensal').value) || 0;
    const taxaAnual = parseFloat(document.getElementById('taxaAnual').value) || 0;
    const anos = parseFloat(document.getElementById('tempo').value) || 0;

   
    const taxaMensal = (taxaAnual / 100) / 12;
    const totalMeses = anos * 12;

   
    let montanteFinal = valorInicial * Math.pow(1 + taxaMensal, totalMeses);

  
    if (aporteMensal > 0) {
        if (taxaMensal > 0) {
            montanteFinal += aporteMensal * ((Math.pow(1 + taxaMensal, totalMeses) - 1) / taxaMensal);
        } else {
           
            montanteFinal += aporteMensal * totalMeses;
        }
    }


    const totalInvestido = valorInicial + (aporteMensal * totalMeses);
    const totalJuros = montanteFinal - totalInvestido;


    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
        <span>Montante Final:</span>
        <strong>R$ ${montanteFinal.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</strong>
        <span style="font-size: 0.85rem; margin-top: 10px; color: #666;">
            Total investido: R$ ${totalInvestido.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}<br>
            Total em juros: R$ ${totalJuros.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
        </span>
    `;
}