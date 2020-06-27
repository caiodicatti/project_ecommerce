using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace API_Ecommerce.Model.Entidades
{
    [Table("tbl_cesta_compra")]
    public class Cesta
    {
        [Key]
        public int id_cesta_compra { get; set; }
        public int id_pedido { get; set; }
        public string nome { get; set; }
        public double preco { get; set; }
        public int qtd { get; set; }
        public double preco_qtd { get; set; }

    }
}
