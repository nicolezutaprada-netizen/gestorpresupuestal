/* let frutas=['manzana' , 'pera','uva'];

console.log(frutas[0]); //imprime manzana
console.log(frutas[2]);  //uva


frutas.push('mango'); //agrega mango al final
console.log(frutas); //impreme manzana, pero y fruta
console.log(frutas.length);//impreme 4 ahora ya que se agrego mango


*/

let nombres = [];
let valores = [];


function registrarMovimiento(){

const nombre=prompt('Nombre del movimiento:');  

const tipo=prompt('Tipo(ingreso/gasto:)');
const monto=parseFloat(prompt('Monto:')); //convierte un string a número decimal.

if(!nombre|| (tipo!=='ingreso' && tipo !== 'gasto') || isNaN(monto) || monto <=0)  //isnan verifica si algo es número o no
{
alert('Datos inválidos.Intenta  de nuevo');

return;
}

//calcular el valor con signo
let valor;
if (tipo ==='ingreso'){
    valor=monto;
}
else if(tipo==='gasto'){
valor=-monto;
}


//guardar en ambos arrays-siemprejuntos

nombres.push(nombre);
valores.push(valor);


}




let continuar='si';

while(continuar =='si'){
    registrarMovimiento();
    continuar=prompt('¿Registrar otro movimiento?(si/no):');

}

//Reporte funcional (C06) — todo del archivo functional-utils.js
imprimirReporte(nombres, valores);
console.log('Promedio de ingresos: $' + promedioIngresos(valores).toFixed(2));








