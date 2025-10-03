document.getElementById('orcamentoForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const area = parseFloat(document.getElementById('area').value);
    const tipoAmbiente = document.getElementById('tipoAmbiente').value;
    const nivelDetalhe = document.getElementById('nivelDetalhe').value;

    let precoBase = 0;
    switch (tipoAmbiente) {
        case 'sala': precoBase = 60; break;
        case 'quarto': precoBase = 55; break;
        case 'cozinha': precoBase = 65; break;
        case 'banheiro': precoBase = 50; break;
        default: precoBase = 58;
    }

    let fatorDetalhe = 25.00;
    if (nivelDetalhe === 'premium') fatorDetalhe = 35.00;
    else if (nivelDetalhe === 'alto_padrao') fatorDetalhe = 65.00;

    const valorEstimado = Math.round(area * fatorDetalhe);

    document.getElementById('resultadoOrcamento').innerHTML = `
        <div class="alert alert-success">
            <h5 class="mb-2">Orçamento Estimado:</h5>
            <p class="mb-1"><strong>R$ ${valorEstimado.toLocaleString('pt-BR')}</strong></p>
            <small class="text-muted">Este valor é uma ESTIMATIVA. O orçamento final pode variar conforme detalhes do projeto, os dias nós definimos.</small>
        </div>
    `;
});