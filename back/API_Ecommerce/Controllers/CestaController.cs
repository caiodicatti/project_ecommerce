using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API_Ecommerce.Model.Contexto;
using API_Ecommerce.Model.Entidades;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace API_Ecommerce.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CestaController : ControllerBase
    {

        private readonly BancoContext _context;
        public CestaController(BancoContext context)
        {
            _context = context;
        }

        // POST api/<CestaController>
        [HttpPost]
        [Route("cadastrarCestaCompra")]
        public ActionResult<Cesta> cadastrarCestaCompra(List<Cesta> cestaCompras)
        {
            try
            {
                if (cestaCompras != null)
                {

                    foreach (Cesta obj in cestaCompras)
                    {
                        _context.Cesta.Add(obj);
                    }
                    _context.SaveChanges();
                    return Ok();

                }
                else
                {
                    return BadRequest("Requisição inválida");
                }

            }
            catch (Exception e)
            {
                throw new Exception(e.Message);
            }
        }

    }
}
