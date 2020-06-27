using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace API_Ecommerce.Model.Entidades
{
    [Table("tbl_pedido")]
    public class Pedido
    {
        [Key]
        public int id_pedido { get; set; }
        public string nome { get; set; }
        public string email { get; set; }
        public string telefone { get; set; }
        public float valor_total { get; set; }
    }
}
