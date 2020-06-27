import { ActivatedRoute, Router } from '@angular/router';
import { PaginacaoService } from './../../servicos/paginacao.service';
import { PedidoService } from './../../servicos/pedido.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pedido-finalizado',
  templateUrl: './pedido-finalizado.component.html',
  styleUrls: ['./pedido-finalizado.component.css']
})
export class PedidoFinalizadoComponent implements OnInit {

  public listaPedido: any = [];

  constructor(private rota: Router,
    private rotaAR: ActivatedRoute,
    private servicoPedido: PedidoService,
    private servicoPaginacao: PaginacaoService) { }

  ngOnInit(): void {
    this.getListaPedido();
  }

  getListaPedido() {

    this.rotaAR.queryParams.subscribe(
      param => {
        this.servicoPedido.getPedido(param.id_pedido).subscribe(
          resp => {
            this.listaPedido = resp;
          },
          error => {
            console.log(error);
          }
        )
      }
    )

  }

  formataValor(valor: number) {
    var valorFormatado = valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return valorFormatado;
  }

  paginacao() {
    this.rota.navigate(['/']);
  }

}
