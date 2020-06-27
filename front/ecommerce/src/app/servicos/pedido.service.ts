import { pedidoProdutosDTO } from './../classe/pedidoProdutosDTO';
import { Pedido } from './../classe/pedido';
import { CestaService } from './cesta.service';
import { ClienteService } from './cliente.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  header = new HttpHeaders({ 'Content-Type': 'application/json' });
  urlBase = "https://localhost:44391/api/Pedido/";

  constructor(private http: HttpClient,
    private servicoCliente: ClienteService,
    private servicoCesta: CestaService) { }

  salvarPedido() {
    let cliente = this.servicoCliente.getCliente();
    let valorTotal: number = this.servicoCesta.getValorTotal();

    let obj: Pedido = {
      "nome": cliente.nome,
      "email": cliente.email,
      "telefone": cliente.telefone,
      "valor_total": valorTotal
    };

    return this.http.post<any>(this.urlBase + "cadastrarPedido", obj);

  }

  getPedido(id: number) {
    return this.http.get<pedidoProdutosDTO>(this.urlBase + "getPedido_ID/" + id);
  }
}
