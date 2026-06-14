class Presupuesto {
    constructor() {
        this.movimientos = [];
    }

    agregar(movimientoss) {
        this.movimientos.push(movimientoss);
    }

    eliminar(nombre) {
        this.movimientos = this.movimientos.filter(movimiento1 => movimiento1.nombre !== nombre);
    }

    obtenerIngresos() {
        return this.movimientos.filter(movimiento2 => movimiento2.esIngreso());
    }

    obtenerGastos() {
        return this.movimientos.filter(movimiento3 => movimiento3.esGasto());
    }

    totalIngresos() {
        return this.obtenerIngresos()
            .reduce((acumulador, movimiento) => acumulador + movimiento.valor, 0);
    }

    totalGastos() {
        return this.obtenerGastos()
            .reduce((acumulador, movimiento) => acumulador + movimiento.valor, 0);
    }

    saldo() {
        return this.totalIngresos() - this.totalGastos();
    }

    buscarPorNombre(texto) {
        return this.movimientos.find(movimiento4 =>
            movimiento4.nombre.toLowerCase().includes(texto.toLowerCase()));
    }

    resumen() {
        return {
            cantidad: this.movimientos.length,
            ingresos: this.totalIngresos(),
            gastos: this.totalGastos(),
            saldo: this.saldo()
        };
    }
}