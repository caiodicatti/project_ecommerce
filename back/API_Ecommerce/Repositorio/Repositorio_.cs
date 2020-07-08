using API_Ecommerce.Model.Contexto;
using API_Ecommerce.Model.Entidades;
using API_Ecommerce.Model.Entidades.DTO;
using API_Ecommerce.Repositorio.Interfaces;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;

namespace API_Ecommerce.Repositorio
{
    public class Repositorio_ : IRepositorio_
    {
        private readonly BancoContext _context;

        public Repositorio_()
        {
        }

        public Repositorio_(BancoContext context)
        {
            _context = context;
        }


        #region Produto
        // Produto
        public List<Produto> listarProdutos()
        {
            var produtos = _context.Produto.AsNoTracking().ToList();
            return produtos;
        }

        public List<Produto> cadastrarProduto(List<Produto> produtos)
        {
            try
            {
                foreach (Produto obj in produtos)
                {
                    _context.Produto.Add(obj);
                }

                _context.SaveChanges();
                return produtos;

            }
            catch (Exception e)
            {
                throw new Exception(e.Message);
            }
        }

        #endregion

        #region Pedido

        public PedidoProdutosDTO getPedido_ID(int id_pedido)
        {
            try
            {
                PedidoProdutosDTO retorno = new PedidoProdutosDTO();
                Pedido pedido = new Pedido();
                List<Cesta> cesta = new List<Cesta>();


                pedido = _context.Pedido.Where(x => x.id_pedido == id_pedido).FirstOrDefault();
                cesta = _context.Cesta.Where(c => c.id_pedido == id_pedido).ToList();

                if (pedido != null && cesta != null)
                {
                    retorno.numero = pedido.id_pedido;
                    retorno.nome = pedido.nome;
                    retorno.email = pedido.email;
                    retorno.telefone = pedido.telefone;
                    retorno.valorTotal = pedido.valor_total;
                    retorno.produtos = cesta;

                }

                return retorno;

            }
            catch (Exception e)
            {
                throw new Exception(e.Message);
            }

        }

        public Pedido cadastrarPedido(Pedido pedido)
        {
            try
            {
                _context.Pedido.Add(pedido);
                _context.SaveChanges();
                return pedido;
            }
            catch (Exception e)
            {
                throw new Exception(e.Message);
            }
        }

        #endregion

        #region Cesta

        public void cadastrarCestaCompra(List<Cesta> cestaCompras)
        {
            try
            {
                foreach (Cesta obj in cestaCompras)
                {
                    _context.Cesta.Add(obj);
                }
                _context.SaveChanges();

            }
            catch (Exception e)
            {
                throw new Exception(e.Message);
            }
        }

        #endregion
    }
}