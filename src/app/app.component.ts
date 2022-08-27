import { Component } from '@angular/core';

import { Gasto } from './gasto.model';
import { GastosService } from './services/gastos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  nombreGasto = "";
  cantidadGasto = 0;
  gastos = [];
  presupuesto = 0;
  saldo = 0;
  saldoInicialIngresado = false;

  constructor(private presupuestosService: GastosService) { }

  ingresarSaldoInicial(): void {
    this.saldo = this.presupuesto;
    this.gastos = this.presupuestosService.getGastos();
    this.restarGastos();
    this.saldoInicialIngresado = true;
  }

  agregarGasto(): void {
    if (this.nombreGasto !== '') {
      const gasto = new Gasto(this.nombreGasto, this.cantidadGasto);
      this.gastos.push(gasto);
      this.saldo -= this.cantidadGasto;
      this.nombreGasto = '';
      this.cantidadGasto = 0;
    }
  }

  eliminarGasto(indiceGasto: number, cantidadGasto: number): void {
    this.gastos.splice(indiceGasto, 1);
    this.saldo += cantidadGasto;
  }

  private restarGastos(): void {
    for (const gasto of this.gastos) {
      this.saldo -= gasto.cantidad;
    }
  }
}
