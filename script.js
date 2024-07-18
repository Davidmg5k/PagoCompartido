$(document).ready(function() {
    let apartamentoCount = 0;

    $('#agregarApartamento').click(function() {
        apartamentoCount++;
        const nuevoApartamento = `
            <div class="mb-3 apartamento-input">
                <label for="apartamento${apartamentoCount}" class="form-label">Servicio ${apartamentoCount}</label>
                <input type="number" class="form-control" id="apartamento${apartamentoCount}" placeholder="Número de habitantes">
            </div>
        `;
        $('#apartamentos').append(nuevoApartamento);
    });

    $('#calcular').click(function() {
        const costoTotal = parseFloat($('#costoTotal').val());
        const habitantes = [];

        $('.apartamento-input input').each(function() {
            const valor = parseInt($(this).val());
            if (!isNaN(valor)) {
                habitantes.push(valor);
            }
        });

        if (isNaN(costoTotal) || habitantes.length === 0) {
            alert('Por favor, ingrese el costo total y al menos un servicio con variantes.');
            return;
        }

        const costos = calcularCostoPorApartamento(costoTotal, habitantes);
        mostrarResultados(costos);
    });

    function mostrarResultados(costos) {
        let resultadosHTML = '<h2 class="text-center mb-3">Resultados</h2><div class="row justify-content-center">';
        costos.forEach((costo, index) => {
            resultadosHTML += `
                <div class="col-md-3 mb-3">
                    <div class="card">
                        <div class="card-body text-center">
                            <h5 class="card-title">Apartamento ${index + 1}</h5>
                            <p class="card-text">$${costo.toFixed(2)}</p>
                        </div>
                    </div>
                </div>
            `;
        });
        resultadosHTML += '</div>';
        $('#resultados').html(resultadosHTML).addClass('show');
    }
});
