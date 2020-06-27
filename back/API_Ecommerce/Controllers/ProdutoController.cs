using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API_Ecommerce.Model.Contexto;
using API_Ecommerce.Model.Entidades;
using Microsoft.AspNetCore.Mvc;
using System.Data.Entity;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace API_Ecommerce.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProdutoController : ControllerBase
    {
        private readonly BancoContext _context;
        public ProdutoController(BancoContext context)
        {
            _context = context;
        }


        [HttpGet]
        [Route("listarProdutos")]
        public ActionResult<IEnumerable<Produto>> listarProdutos()
        {
            var produtos = _context.Produto.AsNoTracking().ToList();
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
                    foreach(Produto obj in produtos)
                    {
                        _context.Produto.Add(obj);
                    }
                    
                    _context.SaveChanges();
                    return Ok(produtos);
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
