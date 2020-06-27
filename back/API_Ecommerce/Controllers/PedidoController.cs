using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API_Ecommerce.Model.Contexto;
using API_Ecommerce.Model.Entidades;
using API_Ecommerce.Model.Entidades.DTO;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace API_Ecommerce.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PedidoController : ControllerBase
    {
        private readonly BancoContext _context;
        public PedidoController(BancoContext context)
        {
            _context = context;
        }

        // GET api/<PedidoController>/5
        [HttpGet("getPedido_ID/{id_pedido}")]
        public ActionResult<PedidoProdutosDTO> getPedido_ID(int id_pedido)
        {
            try
            {
                PedidoProdutosDTO retorno = new PedidoProdutosDTO();
                Pedido pedido = new Pedido();
                List<Cesta> cesta = new List<Cesta>();

                if (id_pedido != 0)
                {
                    pedido = _context.Pedido.Where(x => x.id_pedido == id_pedido).FirstOrDefault();
                    cesta = _context.Cesta.Where(c => c.id_pedido == id_pedido).ToList();

                    if(pedido != null && cesta != null)
                    {
                        retorno.numero = pedido.id_pedido;
                        retorno.nome = pedido.nome;
                        retorno.email = pedido.email;
                        retorno.telefone = pedido.telefone;
                        retorno.valorTotal = pedido.valor_total;
                        retorno.produtos = cesta;

                        return Ok(retorno);

                    }
                    else
                    {
                        return Ok("A consulta não gerou resultados");
                    }

                }
                else
                {
                    return BadRequest("ID inválido");
                }

            }catch(Exception e)
            {
                throw new Exception(e.Message);
            }
        }

        // POST api/<PedidoController>
        [HttpPost]
        [Route("cadastrarPedido")]
        public ActionResult<Pedido> cadastrarPedido(Pedido pedido)
        {
            try
            {
                if(pedido != null)
                {
                    _context.Pedido.Add(pedido);
                    _context.SaveChanges();
                    return Ok(pedido);

                }
                else
                {
                    return BadRequest("Pedido inválido");
                }

            }catch(Exception e)
            {
                throw new Exception(e.Message);
            }
        }

    }
}
