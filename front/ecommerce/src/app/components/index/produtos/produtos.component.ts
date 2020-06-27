import { PaginacaoService } from '../../../servicos/paginacao.service';
import { CestaService } from '../../../servicos/cesta.service';
import { ProdutoService } from '../../../servicos/produto.service';
import { Produto } from '../../../classe/produto';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  constructor(
    private servicoProduto: ProdutoService,
    private servicoCesta: CestaService,
    private servicoPaginacao: PaginacaoService) { }

  public produtos: Produto[] = [];

  ngOnInit(): void {
    this.buscaListaProdutos();
  }

  buscaListaProdutos() {
    this.servicoProduto.getListaProdutos()
      .subscribe(
        resp => {
          this.produtos = resp;
        },
        error => {
          alert('Houve algum erro ao carregar produto')
        }
      )
  }

  adicionaProduto(e) {
    let produto: Produto = {
      id_produto: e.id_produto,
      nome: e.nome,
      imagem: e.imagem,
      preco: e.preco,
      qtd: e.qtd,
      preco_qtd: e.preco_qtd,
      inList: true
    };

    this.servicoCesta.insereListaProduto(produto);

    // alterando o inList
    this.produtos.forEach(function (el, i) {
      if (el.id_produto == e.id_produto) {
        el.inList = true;
      }
    });

  }

  removerProduto(e) {

    let verifica = confirm("Deseja mesmo excluir este produto de sua lista de compras?")
    if (verifica) {
      this.servicoCesta.removeListaProduto(e.id_produto);

      // alterando o inList
      this.produtos.forEach(function (el, i) {
        if (el.id_produto == e.id_produto) {
          el.inList = false;
        }
      });
    }
  }

  formataValor(valor: number) {
    var valorFormatado = valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return valorFormatado;
  }

  exibeLista() {

    console.log(this.servicoCesta.getLista());
  }

  paginacao() {
    this.servicoPaginacao.setPagina(2);
    this.servicoCesta.somaValorCompra();
  }

}
