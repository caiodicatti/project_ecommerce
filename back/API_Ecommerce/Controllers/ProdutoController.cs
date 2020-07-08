using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API_Ecommerce.Model.Contexto;
using API_Ecommerce.Model.Entidades;
using Microsoft.AspNetCore.Mvc;
using System.Data.Entity;
using API_Ecommerce.Repositorio;
using API_Ecommerce.Repositorio.Interfaces;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace API_Ecommerce.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProdutoController : Controller
    {
        public ProdutoController(IRepositorio_ repositorio)
        {
            repositorio_ = repositorio;
        }
        public IRepositorio_ repositorio_ { get; set; }

        [HttpGet]
        [Route("listarProdutos")]
        public ActionResult<IEnumerable<Produto>> listarProdutos()
        {
            var produtos = repositorio_.listarProdutos();
            return Ok(produtos);
        }

        // POST api/<ProdutoController>
        [HttpPost]
        [Route("cadastrarProduto")]
        public ActionResult<Produto> cadastrarProduto(List<Produto> produtos)
        {
            try
            {
                if(produtos != null)
                {
                    var retorno = repositorio_.cadastrarProduto(produtos);
                    return Ok(retorno);
                }
                else
                {
                    return BadRequest("Produto inválido");
                }

            }
            catch (Exception e)
            {
                throw new Exception(e.Message);
            }
        }

    }
}
