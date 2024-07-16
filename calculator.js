function calcularCostoPorApartamento(costoTotal, habitantesPorApto) {
    const totalHabitantes = habitantesPorApto.reduce((a, b) => a + b, 0);
    const costoPorPersona = costoTotal / totalHabitantes;
    
    const costosPorApto = habitantesPorApto.map(hab => costoPorPersona * hab);
    
    return costosPorApto;
}