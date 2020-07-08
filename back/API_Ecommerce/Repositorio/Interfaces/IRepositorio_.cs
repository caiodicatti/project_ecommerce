using API_Ecommerce.Model.Entidades;
using API_Ecommerce.Model.Entidades.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API_Ecommerce.Repositorio.Interfaces
{
    public interface IRepositorio_
    {
        public List<Produto> listarProdutos();
        public List<Produto> cadastrarProduto(List<Produto> produtos);
        public PedidoProdutosDTO getPedido_ID(int id_pedido);
        public Pedido cadastrarPedido(Pedido pedido);
        public void cadastrarCestaCompra(List<Cesta> cestaCompras);

    }
}
