import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaginacaoService {

  private pagina: number = 1;

  constructor() { }

  getPagina() {
    return this.pagina;
  }

  setPagina(pag: number) {
    this.pagina = pag;
  }

}
