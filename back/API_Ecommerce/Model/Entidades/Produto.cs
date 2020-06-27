using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace API_Ecommerce.Model.Entidades
{
    [Table("tbl_produtos")]
    public class Produto
    {
        [Key]
        public int id_produto { get; set; }
        public string nome { get; set; }
        public string imagem { get; set; }
        public float preco { get; set; }
        public int qtd { get; set; }
        public float preco_qtd { get; set; }
        public bool inList { get; set; }
    }

}
