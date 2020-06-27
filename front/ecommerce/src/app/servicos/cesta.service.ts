import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from '../classe/produto';
import { Cesta } from '../classe/cesta';

@Injectable({
  providedIn: 'root'
})
export class CestaService {

  private listaProdutos: Produto[] = [];
  private valorCompra: number = 0;
  header = new HttpHeaders({ 'Content-Type': 'application/json' });
  urlBase = "https://localhost:44391/api/Cesta/";

  constructor(private http: HttpClient) { }

  insereListaProduto(prod: Produto) {

    let verifica: boolean = false;

    if (this.listaProdutos.length > 0) {
      this.listaProdutos.forEach(function (e, i) {
        if (e.id_produto == prod.id_produto) {
          verifica = true;
        }
      });
    }

    if (verifica == false) {
      this.listaProdutos.push(prod);
    } else {
      alert(`O produto ${prod.nome} ja consta em sua lista de compra`)
    }

  }

  removeListaProduto(id: Number) {

    let posicao: number;

    this.listaProdutos.forEach(function (e, i) {
      if (e.id_produto == id) {
        posicao = i;
      }
    });

    this.listaProdutos.splice(posicao, 1)
  }

  getLista() {
    return this.listaProdutos;
  }

  setValorTotal(vlrCompra: number) {
    this.valorCompra = vlrCompra;
  }

  getValorTotal() {
    return this.valorCompra;
  }

  somaValorCompra() {
    let aux = 0;
    this.listaProdutos.map(function (e) {
      aux += e.preco;
    })

    this.valorCompra = aux;
    return aux;
  }

  // API
  salvarCestaCompra(listaCesta: Cesta[]) {
    return this.http.post<Cesta[]>(this.urlBase + "cadastrarCestaCompra", listaCesta);
  }

}
