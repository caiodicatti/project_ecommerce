CREATE DATABASE db_ecommerce;

-- Tabela de cliente
CREATE TABLE tbl_produtos(
id_produto integer auto_increment not null,
nome varchar(300),
imagem varchar(150),
preco float,
qtd integer,
preco_qtd float,
inList bool,
PRIMARY KEY(id_produto));

-- Tabela Filme
CREATE TABLE tbl_pedido(
id_pedido integer auto_increment not null,
nome varchar(300),
email varchar(200),
telefone varchar(80),
valor_total float,
PRIMARY KEY(id_pedido));

-- Tabela Locação
CREATE TABLE tbl_cesta_compra(
id_cesta_compra integer auto_increment not null,
id_pedido integer not null,
nome varchar(300),
preco float,
qtd integer,
preco_qtd float,
PRIMARY KEY(id_cesta_compra),
CONSTRAINT fk_tbl_cesta_compra_tbl_pedido FOREIGN KEY(id_pedido) REFERENCES tbl_pedido(id_pedido));
