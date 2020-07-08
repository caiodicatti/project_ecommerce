using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API_Ecommerce.Model.Contexto;
using API_Ecommerce.Model.Entidades;
using API_Ecommerce.Model.Entidades.DTO;
using API_Ecommerce.Repositorio.Interfaces;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace API_Ecommerce.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PedidoController : ControllerBase
    {
        public PedidoController(IRepositorio_ repositorio)
        {
            repositorio_ = repositorio;
        }
        public IRepositorio_ repositorio_ { get; set; }

        // GET api/<PedidoController>/5
        [HttpGet("getPedido_ID/{id_pedido}")]
        public ActionResult<PedidoProdutosDTO> getPedido_ID(int id_pedido)
        {
            try
            {

                if (id_pedido != 0)
                {
                    var retorno = repositorio_.getPedido_ID(id_pedido);

                    if (retorno.nome != null || retorno.email != null || retorno.telefone != null || retorno.produtos != null)
                    {                       
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
                    var retorno = repositorio_.cadastrarPedido(pedido);
                    return Ok(retorno);
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
