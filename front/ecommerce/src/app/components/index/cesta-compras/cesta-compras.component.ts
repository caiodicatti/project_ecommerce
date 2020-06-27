import { PaginacaoService } from './../../../servicos/paginacao.service';
import { CestaService } from './../../../servicos/cesta.service';
import { Produto } from './../../../classe/produto';
import { Component, OnInit } from '@angular/core';
import { ProdutoService } from 'src/app/servicos/produto.service';

@Component({
  selector: 'app-cesta-compras',
  templateUrl: './cesta-compras.component.html',
  styleUrls: ['./cesta-compras.component.css']
})
export class CestaComprasComponent implements OnInit {

  constructor(
    private servicoProduto: ProdutoService,
    private servicoCesta: CestaService,
    private servicoPaginacao: PaginacaoService) { }

  public produtos: Produto[] = this.servicoCesta.getLista();
  public valorTotal: number = this.servicoCesta.somaValorCompra();
  public valorInput: number = 0;

  ngOnInit(): void {
  }

  acrescenta(produto) {
    this.valorTotal = this.valorTotal + produto.preco;
    produto.qtd = produto.qtd + 1;
    produto.preco_qtd = produto.qtd * produto.preco;
    this.servicoCesta.setValorTotal(this.valorTotal);

  }

  decrementa(produto) {
    produto.preco_qtd = (produto.qtd - 1) * produto.preco;

    if ((produto.qtd - 1) <= 0) {
      produto.qtd = 1;
      produto.preco_qtd = produto.preco;

      let verifica = confirm("Deseja mesmo excluir este produto de sua lista de compras?")
      if (verifica) {
        this.valorTotal = this.valorTotal - produto.preco;
        this.servicoCesta.setValorTotal(this.valorTotal);
        this.servicoCesta.removeListaProduto(produto.id_produto);

        // alterando o inList
        this.produtos.forEach(function (el, i) {
          if (el.id_produto == produto.id_produto) {
            el.inList = false;
          }
        });
      }

    } else {
      this.valorTotal = this.valorTotal - produto.preco;
      this.servicoCesta.setValorTotal(this.valorTotal);
      produto.qtd = produto.qtd - 1;
    }


  }

  formataValor(valor: number) {
    var valorFormatado = valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return valorFormatado;
  }

  paginacao() {
    this.servicoPaginacao.setPagina(3);
  }

}
