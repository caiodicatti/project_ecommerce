import { Injectable } from '@angular/core';
import { Produto } from '../classe/produto';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {


  header = new HttpHeaders({ 'Content-Type': 'application/json' });
  urlBase = "https://localhost:44391/api/Produto/";

  constructor(private http: HttpClient) { }

  getListaProdutos() {
    //return this.listaProdutos;
    return this.http.get<Produto[]>(this.urlBase + "listarProdutos")
  }

}
