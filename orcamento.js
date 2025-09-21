document.getElementById('orcamentoForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const area = parseFloat(document.getElementById('area').value);
    const tipoAmbiente = document.getElementById('tipoAmbiente').value;
    const nivelDetalhe = document.getElementById('nivelDetalhe').value;
    const prazo = parseInt(document.getElementById('prazo').value);

    let precoBase = 0;
    switch (tipoAmbiente) {
        case 'sala': precoBase = 60; break;
        case 'quarto': precoBase = 55; break;
        case 'cozinha': precoBase = 65; break;
        case 'banheiro': precoBase = 50; break;
        default: precoBase = 58;
    }

    let fatorDetalhe = 1;
    if (nivelDetalhe === 'intermediario') fatorDetalhe = 1.25;
    else if (nivelDetalhe === 'premium') fatorDetalhe = 1.5;

    let fatorPrazo = 1;
    if (prazo < 7) fatorPrazo = 1.3;
    else if (prazo < 15) fatorPrazo = 1.15;

    const valorEstimado = Math.round(area * precoBase * fatorDetalhe * fatorPrazo);

    document.getElementById('resultadoOrcamento').innerHTML = `
        <div class="alert alert-success">
            <h5 class="mb-2">Orçamento Estimado:</h5>
            <p class="mb-1"><strong>R$ ${valorEstimado.toLocaleString('pt-BR')}</strong></p>
            <small class="text-muted">Este valor é uma estimativa. O orçamento final pode variar conforme detalhes do projeto.</small>
        </div>
    `;
});