import { PaginacaoService } from './../../servicos/paginacao.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  public pagina: number = 1;
  constructor(private servicoPaginacao: PaginacaoService) { }

  ngOnInit(): void {
    this.servicoPaginacao.setPagina(1);
  }

  atualizaPagina() {
    return this.servicoPaginacao.getPagina();
  }

}
