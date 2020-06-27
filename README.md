## Arquitetura do projeto
- Angular
- ASP.NET Core 3.1
- MySQL

## O projeto consiste basicamente em 4 telas:
**Lista de produto:**
- Podendo adicionar ou remover produtos de sua cesta de compras.

**Cesta de compras:**
- Visualizando os produtos adicionados, podendo remove-los e alterar a quantidade de cada produto.

**Identificação do Cliente:**
- Será solicitado o nome, e-mail e telefone do mesmo.

**Pedido Realizado:**
- Nesta tela, será exibido as informações do cliente, o número do pedido e todos os produtos que foram adquiridos durante o processo.

## Replicando o Projeto

- O SQL para a criação do banco de dados se encontra no arquivo **sql_ecommerce.sql**.
- É necessário alterar a _ConnectionStrings_ do arquivo **appsettings.json** da API, sendo localizada dentro da pasta **back**.
