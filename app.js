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


// ============================================
// ARRAY DONDE SE GUARDAN TODOS LOS MOVIMIENTOS
// ============================================
let movimientos = [];


// ============================================
// PIDE DATOS AL USUARIO Y AGREGA UN MOVIMIENTO
// ============================================
function registrarMovimiento() {
  const nombre = prompt('Nombre del movimiento:');
  const tipo = prompt('Tipo (ingreso/gasto):');
  const monto = parseFloat(prompt('Monto:')); // convierte texto a número decimal

  // valida que todo esté correcto antes de guardar
  if (!nombre || (tipo !== 'ingreso' && tipo !== 'gasto') || isNaN(monto) || monto <= 0) {
    alert('Datos inválidos. Intenta de nuevo');
    return; // sale de la función sin guardar nada
  }

  // crea una instancia de Movimiento y la agrega al array
  movimientos.push(new Movimiento(nombre, tipo, monto));
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
movimientos.forEach((movimiento, indice) => {
  console.log(`${indice + 1}. ${movimiento.datosMovimiento()}`);
});