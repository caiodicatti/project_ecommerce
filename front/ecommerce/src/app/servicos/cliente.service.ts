import { Cliente } from './../classe/cliente';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private cliente: Cliente;

  constructor() { }

  salvarCliente(c: Cliente) {
    this.cliente = c;
  }

  getCliente() {
    return this.cliente;
  }
}
