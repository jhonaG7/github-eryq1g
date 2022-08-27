import { Injectable } from '@angular/core';

import { Gasto } from '../gasto.model';

@Injectable({
  providedIn: 'root',
})
export class GastosService {

  private gastos: Gasto[] = [
    {nombre: 'Primer gasto', cantidad: 100},
    {nombre: 'Segundo gasto', cantidad: 50},
    {nombre: 'Tercer gasto', cantidad: 200},
    {nombre: 'Cuarto gasto', cantidad: 200},
    {nombre: 'Quinto gasto', cantidad: 10},
    {nombre: 'Sexto gasto', cantidad: 20},
  ];

  constructor() { }

  getGastos(): Gasto[] {
    return this.gastos;
  }
}
