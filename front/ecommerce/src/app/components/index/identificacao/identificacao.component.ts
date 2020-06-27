import { Router } from '@angular/router';
import { CestaService } from './../../../servicos/cesta.service';
import { PedidoService } from './../../../servicos/pedido.service';
import { PaginacaoService } from './../../../servicos/paginacao.service';
import { ClienteService } from './../../../servicos/cliente.service';
import { Cliente } from './../../../classe/cliente';
import { Component, OnInit } from '@angular/core';
import { Cesta } from 'src/app/classe/cesta';

@Component({
  selector: 'app-identificacao',
  templateUrl: './identificacao.component.html',
  styleUrls: ['./identificacao.component.css']
})
export class IdentificacaoComponent implements OnInit {

  public nome: string = '';
  public email: string;
  public telefone: string;

  constructor(private rota: Router,
    private clienteService: ClienteService,
    private servicoPaginacao: PaginacaoService,
    private servicoPedido: PedidoService,
    private servicoCesta: CestaService) { }

  ngOnInit(): void {
    var campoTel = document.querySelector('#inputTelefone');

    campoTel.addEventListener('keypress', function () {
      formataCampoTelefone(this);

    });

    function formataCampoTelefone(telefone) {

      if (telefone.value.length == 0) {
        telefone.value += '(';
      }
      if (telefone.value.length == 3) {
        telefone.value += ') ';
      }
      if (telefone.value.length == 9) {
        telefone.value += '-';
      }
      if (telefone.value.length >= 14 && telefone.value[5] == 9) {
        let hifen = telefone.value[9];
        let posicao_num = telefone.value[10];
        let telefone_array = telefone.value.split('');
        telefone_array[9] = posicao_num;
        telefone_array[10] = hifen;
        telefone.value = telefone_array.join('');
      }
      if (telefone.value.length == 13 && telefone.value[10] == '-') {
        let hifen = telefone.value[10];
        let posicao_num = telefone.value[9];
        let telefone_array = telefone.value.split('');
        telefone_array[10] = posicao_num;
        telefone_array[9] = hifen;
        telefone.value = telefone_array.join('')
      }

    }
  }

  verificaCampos() {
    let verifica: boolean = true;

    if (this.nome == '' || this.nome == undefined) {
      verifica = false;
    }

    if (this.email == '' || this.email == undefined) {
      verifica = false;
    }

    if (this.telefone == '' || this.telefone == undefined) {
      verifica = false;
    }

    return verifica;
  }

  salvarCliente() {
    let verifica: boolean = this.verificaCampos();
    if (verifica) {

      let cliente: Cliente = {
        nome: this.nome,
        email: this.email,
        telefone: this.telefone
      }

      this.clienteService.salvarCliente(cliente);
      // Salvando o cliente no Pedido e retornando o ID;
      this.servicoPedido.salvarPedido().subscribe(
        resp => {
          // Salvando a lista de compras com ID do pedido
          let id_pedido = resp.id_pedido;
          let listaProdutos = this.servicoCesta.getLista();
          let ListaCestaCompra: Cesta[] = [];
          listaProdutos.forEach(function (e, i) {
            let objCesta: Cesta = {
              id_pedido: id_pedido,
              nome: e.nome,
              preco: e.preco,
              qtd: e.qtd,
              preco_qtd: e.preco_qtd
            };

            ListaCestaCompra.push(objCesta);
          });
          this.servicoCesta.salvarCestaCompra(ListaCestaCompra).subscribe(
            r => {
              this.rota.navigate(['/pedido'], { queryParams: { id_pedido: id_pedido } });
            },
            err => {
              console.log(err);
            }
          )
        },
        error => {
          console.log(error);
        }
      )

    } else {
      alert('Por favor, preencha todos os campos.')
    }

  }


}
