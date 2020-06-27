import { IdentificacaoComponent } from './index/identificacao/identificacao.component';
import { CestaComprasComponent } from './index/cesta-compras/cesta-compras.component';
import { ProdutosComponent } from './index/produtos/produtos.component';
import { FormsModule } from '@angular/forms';
import { ComponentsRoutingModule } from './components-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedidoFinalizadoComponent } from './pedido-finalizado/pedido-finalizado.component';
import { HttpClientModule } from '@angular/common/http';
import { IndexComponent } from './index/index.component';


@NgModule({
  declarations: [
    ProdutosComponent,
    CestaComprasComponent,
    IdentificacaoComponent,
    PedidoFinalizadoComponent,
    IndexComponent,
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    FormsModule,
    HttpClientModule,
  ]
})
export class ComponentsModule { }
