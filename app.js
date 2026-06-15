
// ============================================
// CLASE MOVIMIENTO
// ============================================

  class Movimiento {
  constructor(nombre, tipo, valor) {
    this.nombre = nombre;   // nombre del movimiento (ej: "Salario")
    this.tipo = tipo;       // "ingreso" o "gasto"
    this.valor = valor;     // monto, siempre positivo
    this.fecha = new Date().toLocaleDateString(); // fecha de creación
  }

  // true si el movimiento es un ingreso
  esIngreso() {
    return this.tipo === "ingreso";
  }

  // true si el movimiento es un gasto
  esGasto() {
    return this.tipo === "gasto";
  }

  // devuelve un texto formateado del movimiento, ej: "Salario (ingreso): +$3000.00"
  datosMovimiento() {
    let signo;
    if (this.esIngreso()) {
      signo = "+";
    } else {
      signo = "-";
    }
    return `${this.nombre} (${this.tipo}): ${signo}$${this.valor.toFixed(2)}`;
  }
}

const form= document.getElementById("formulario");
const lista=document.getElementById("lista");
const presupuesto= new Presupuesto();

presupuesto.agregar(new Movimiento("Salario", "ingreso", 3000));
presupuesto.agregar(new Movimiento("Salario1", "ingreso", 4000));
presupuesto.agregar(new Movimiento("Cena", "gasto", 500));

//Construit el <li> de un movimiento
function liHTML (m){
    //evaluar si es ingreso
    const validaresingreso=m.esIngreso();

//declaracion de variables para asignar valores
let caja;
let texto;
let signo;

//estructura condicional clásica
if (validaresingreso){
    //si es verdadero es ingreso
    caja = 'bg-green-50 border-green-500';
    texto = 'text-green-700';
    signo = '+';
}
    else{
    //si es falso(gasto)
    caja = 'bg-red-50 border-red-500';
    texto = 'text-red-700';
    signo = '-';

    }

//retornar plantilla html con los valores ya definidos
  return `<li class="flex items-center justify-between p-3 border-l-4 rounded ${caja}">
    <span class="text-gray-800"><span class="font-medium">${m.nombre}</span> <span class="text-xs text-gray-500">(${m.tipo})</span></span>
    <span class="font-semibold ${texto}">${signo}$${m.valor.toFixed(2)}</span>
    </li>`;
}

//pinta la lista y el saldo desde el Presupuesto

// Función que pinta/dibuja todo en pantalla (lista de movimientos + saldo)
function render(){  //render

  // presupuesto.movimientos → el array con todos los movimientos guardados
  // .map(liHTML) → recorre cada movimiento y lo transforma en un string de HTML (un <li>)
  //   ejemplo: [{Salario}, {Cena}] → ["<li>Salario +$3000</li>", "<li>Cena -$500</li>"]
  // .join('') → une todos esos strings en UNO SOLO sin comas entre ellos
  //   ejemplo: "<li>Salario +$3000</li><li>Cena -$500</li>"
  // lista.innerHTML = → mete ese HTML resultante DENTRO del <ul id="lista">
  //   es decir: reemplaza TODO lo que había adentro por los <li> nuevos
  lista.innerHTML = presupuesto.movimientos.map(liHTML).join('');

  // document.getElementById('saldo') → busca el <p id="saldo"> en el HTML
  // .textContent = → cambia el texto visible de ese elemento
   // .textContent = → reemplaza el texto que se muestra en pantalla (para que el saldo se actualice cada vez que se agrega un movimiento)
  // presupuesto.saldo() → calcula ingresos - gastos (ej: 7000 - 500 = 6500)
  // .toFixed(2) → lo formatea con 2 decimales (6500 → "6500.00")
  // '$' + → le pega el símbolo del dólar adelante → "$6500.00"
  document.getElementById('saldo').textContent = '$' + presupuesto.saldo().toFixed(2);
}

// Al enviar el formulario: crea el movimiento, lo agrega y re-pinta


// Escucha el evento 'submit' del formulario (cuando el usuario presiona "Agregar") y por eso pone"submit" es el nombre del evento de agregar en HTML <button type="submit"
form.addEventListener('submit', function (e) {

  // Evita que la página se recargue (comportamiento default de un formulario)
  e.preventDefault();

  // Agarra el valor que el usuario escribió en el campo "Nombre"
  const nombre = document.getElementById('nombre').value;

  // Agarra la opción seleccionada del <select> ("ingreso" o "gasto")
  const tipo   = document.getElementById('tipo').value;

  // Agarra el monto y lo convierte de texto a número decimal con parseFloat
  const valor  = parseFloat(document.getElementById('monto').value);

  // Crea un objeto nuevo con esos 3 datos y lo mete al array de movimientos
  presupuesto.agregar(new Movimiento(nombre, tipo, valor));

  // Re-pinta la lista y el saldo en pantalla (para que aparezca el nuevo movimiento)
  render();

  // Limpia el formulario (vacía los campos para que el usuario pueda agregar otro)
  e.target.reset();
});

render();   // pinta los ejemplos al cargar



/*

// ============================================
// ARRAY DONDE SE GUARDAN TODOS LOS MOVIMIENTOS
// (renombrado a "listaMovimientos" para no chocar con
//  la clase "Movimiento" ni con el parámetro "movimiento")
// ============================================
let listaMovimientos = [];


// ============================================
// PIDE DATOS AL USUARIO Y AGREGA UN MOVIMIENTO
// ============================================
function registrarMovimiento() {
  const nombre = prompt('Nombre del movimiento:');
  const tipo = prompt('Tipo (ingreso/gasto):');
  const monto = parseFloat(prompt('Monto:')); // convierte texto a número decimal

  // valida que todo esté correcto antes de guardar
  if (!nombre || (tipo !== 'ingreso' && tipo !== 'gasto') || isNaN(monto) || monto <= 0) {  //ISNAN ES PARA VERIFICAR SI ALGO ES UN NUMERO
    alert('Datos inválidos. Intenta de nuevo');
    return; // sale de la función sin guardar nada
  }

  // crea una instancia de Movimiento ,agrega  array
  listaMovimientos.push(new Movimiento(nombre, tipo, monto));
}


// ============================================
// CICLO PRINCIPAL: registra movimientos hasta que el usuario diga "no"
// ============================================
let continuar = 'si';

while (continuar === 'si') {
  registrarMovimiento();
  continuar = prompt('¿Registrar otro movimiento? (si/no):');
}


// ============================================
// REPORTE FINAL: muestra cada movimiento usando datosMovimiento()
// ============================================

// forEach se usa porque solo queremos IMPRIMIR cada uno (efecto secundario),
// no transformar, filtrar ni acumular nada. Por eso no devuelve valor.
// ... todo lo anterior igual ...

// REPORTE FINAL: muestra cada movimiento usando datosMovimiento()
listaMovimientos.forEach((movimiento, indice) => {
  console.log(`${indice + 1}. ${movimiento.datosMovimiento()}`);
});

const presupuesto = new Presupuesto();

// Meter los movimientos
listaMovimientos.forEach(movimiento => {
  presupuesto.agregar(movimiento);
});

// usar presupuesto
const res = presupuesto.resumen();
console.log(`Cantidad de movimientos: ${res.cantidad}`);
console.log(`Total ingresos: $${res.ingresos}`);
console.log(`Total gastos: $${res.gastos}`);
console.log(`Saldo: $${res.saldo}`);
*/