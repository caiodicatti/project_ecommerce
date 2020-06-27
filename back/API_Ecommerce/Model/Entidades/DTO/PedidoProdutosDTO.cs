using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API_Ecommerce.Model.Entidades.DTO
{
    public class PedidoProdutosDTO
    {
        public int numero { get; set; }
        public string nome { get; set; }
        public string email { get; set; }
        public string telefone { get; set; }
        public float valorTotal { get; set; }
        public List<Cesta> produtos { get; set; }
    }
}
