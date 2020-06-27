import { Produto } from './produto';
export class pedidoProdutosDTO {
    public nome: string;
    public email: string;
    public telefone: string;
    public valor_total: number;
    public produtos: Produto[];
}