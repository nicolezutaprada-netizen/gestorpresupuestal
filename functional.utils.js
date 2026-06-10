const obtenerIngresos = ingresos => ingresos.filter(valor => valor > 0); //mayores a 0

const obtenerGastos = gastos => gastos.filter(valor => valor < 0);  //menores a 0     //filter dvuelve a los q cumplen una codicion

const montoAbsoluto = monto => monto.map(valor=> Math.abs(valor)) ; //convierte a positivo    //map transforma cada elemento de una lista

const buscarPrimerGastoMayor = (valores, monto) => valores.find(valor => valor < -monto); //menores a -40  //devuelve solo al primero q cumpla la condicion

const contarGastos=numerodegasto => numerodegasto.filter(valor => valor < 0);

const calcularsaldo = lista => lista.reduce((acumulador, valor) => acumulador + valor, 0);  // el reduce de una lista devuelve un solo valor
                                       //parametros de valor reduce  acumulador inicia en 0,  valor=recorre indices      acum + valor= nuevo acumulador   0=valor inicial
                //1ra vuelta= acumulador=0 por el 0 del valor inicial,  valor=3000 (recurre el inidice 0 primero)	nuevoacumulador=3000

const totalIngresos = totalingresos1 => obtenerIngresos(totalingresos1).reduce((acumulador, valor) => acumulador + valor, 0);  //primer parametro acumula 2do recorre el array

const totalGastos = valoresgastos => obtenerGastos(valoresgastos).reduce((acumulador, valor) => acumulador + valor, 0);

const numerodegastos = gastos => contarGastos(gastos).length;

const generarValoresReporte = reportes => [ reportes.length, totalIngresos(reportes), totalGastos(reportes), calcularsaldo(reportes)];



const imprimirReporte = (nom, val) => {
  console.log('--- Resumen Final ---');
  
  val.forEach((valor, indice) => {  //para imprimir registrar foreach y el primer parsmetro pone los elementos y el segundo la posicion
    const tipo = valor > 0 ? 'ingreso' : 'gasto';
    console.log(`  ${indice + 1}. ${nom[indice]} (${tipo}): $${Math.abs(valor).toFixed(2)}`);  //math convierte cuqluier numero a positivo y tifixed 2 redondea  a 2 deciamles
  });


  const reporte = generarValoresReporte(val);
  console.log('Total movimientos:', reporte[0]);
  console.log('Total ingresos: $' + reporte[1].toFixed(2));
  console.log('Total gastos: $' + Math.abs(reporte[2]).toFixed(2));
  console.log('Saldo: $' + reporte[3].toFixed(2));
  console.log('Cantidad de gastos', numerodegastos(val));
}; 


const promedioIngresos = ingresospositivos => {
  const ingresos = obtenerIngresos(ingresospositivos);
  if (ingresos.length === 0) return 0;
  return totalIngresos(ingresospositivos)/ ingresos.length;
};


