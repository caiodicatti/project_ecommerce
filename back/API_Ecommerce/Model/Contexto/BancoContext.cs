using API_Ecommerce.Model.Entidades;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API_Ecommerce.Model.Contexto
{
    public class BancoContext: DbContext
    {
        public BancoContext(DbContextOptions<BancoContext> options) :
            base(options)
        {
        }

        public DbSet<Produto> Produto { get; set; }
        public DbSet<Pedido> Pedido { get; set; }
        public DbSet<Cesta> Cesta { get; set; }
    }


}
