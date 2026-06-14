//EJEMPLO:const calcularsaldo = lista => lista.reduce((acumulador, valor) => acumulador + valor.valor, 0);  
// el reduce de una lista devuelve un solo valor
//parametros de valor reduce  acumulador inicia en 0,  valor=recorre indices      acum + valor= nuevo acumulador   0=valor inicial
//1ra vuelta= acumulador=0 por el 0 del valor inicial,  valor=3000 (recurre el inidice 0 primero)	nuevoacumulador=3000





/*
// ============================================
// FUNCIONES PARA FILTRAR MOVIMIENTOS POR TIPO
// ============================================

// Recibe un array de movimientos y devuelve SOLO los que son "ingreso"
const obtenerIngresos = ingresos => 
  ingresos.filter(valor => valor.tipo === "ingreso"); 
  // .filter recorre el array y devuelve un array NUEVO 
  // con los elementos donde la condición es true
  // CORREGIDO: era "tipo1", ahora es "tipo" (así se llama la propiedad real)

// Recibe un array de movimientos y devuelve SOLO los que son "gasto"
const obtenerGastos = gastos => 
  gastos.filter(valor => valor.tipo === "gasto");
  // CORREGIDO: "tipo1" → "tipo", y "==" → "===" (comparación estricta)


// ============================================
// FUNCIONES PARA SUMAR TOTALES
// ============================================

// Suma todos los valores de los movimientos que son ingreso
const totalIngresos = totalingresos1 => 
  obtenerIngresos(totalingresos1)
    .reduce((acumulador, valor) => acumulador + valor.valor, 0);
    // .reduce recorre el array y va acumulando un solo resultado
    // parámetros: (acumulador, elementoActual) => nuevoAcumulador, valorInicial
    // acumulador empieza en 0 (último parámetro)
    // por cada vuelta: nuevoAcumulador = acumulador + valor.valor (el número del movimiento)
    // al final, "acumulador" tiene la SUMA TOTAL de todos los ingresos

// Suma todos los valores de los movimientos que son gasto
const totalGastos = valoresgastos => 
  obtenerGastos(valoresgastos)
    .reduce((acumulador, valor) => acumulador + valor.valor, 0);
    // misma lógica que totalIngresos, pero con los gastos


// ============================================
// SALDO (ingresos - gastos)
// ============================================

const calcularsaldo = movimientoss => 
  totalIngresos(movimientoss) - totalGastos(movimientoss);
  // calcula el total de ingresos, le resta el total de gastos
  // resultado: dinero disponible (puede ser positivo o negativo)


// ============================================
// BUSCAR EL PRIMER GASTO MAYOR A UN MONTO
// ============================================

const buscarprimergastomayor = (gastos, monto) => 
  obtenerGastos(gastos)
    .find(valor => valor.valor > monto);
    // CORREGIDO: antes era obtenerGastos(gastomayor, monto)
    // obtenerGastos solo necesita 1 argumento (el array), 
    // "monto" no le servía de nada ahí, así que se quitó
    //
    // .find devuelve el PRIMER elemento que cumple la condición
    // (o "undefined" si ninguno cumple)
    // condición: que el valor del gasto sea MAYOR que "monto"


// ============================================
// GENERA UN ARRAY CON TODOS LOS DATOS DEL REPORTE
// ============================================

const generarValoresReporte = reportes => [
  reportes.length,           // [0] cantidad total de movimientos
  totalIngresos(reportes),   // [1] suma de todos los ingresos
  totalGastos(reportes),     // [2] suma de todos los gastos
  calcularsaldo(reportes)    // [3] saldo final (ingresos - gastos)
];
// devuelve un ARRAY (no objeto), por eso luego se accede con [0], [1], [2], [3]


// ============================================
// IMPRIME EL REPORTE COMPLETO EN CONSOLA
// ============================================

const imprimirReporte = movimientos => {
  console.log('--- Resumen Final ---');

  // recorre cada movimiento y lo imprime con su posición (1, 2, 3...)
  movimientos.forEach((movimiento, indice) => {
    console.log(`  ${indice + 1}. ${movimiento.nombre} (${movimiento.tipo}): $${movimiento.valor.toFixed(2)}`);
    // .toFixed(2) → redondea el número a 2 decimales (ej: 45.5 → "45.50")
  });

  // genera el array con [cantidad, ingresos, gastos, saldo]
  const reporte = generarValoresReporte(movimientos);

  console.log('Total movimientos:', reporte[0]);
  console.log('Total ingresos: $' + reporte[1].toFixed(2));
  console.log('Total gastos: $' + reporte[2].toFixed(2));
  console.log('Saldo: $' + reporte[3].toFixed(2));
};

*/

