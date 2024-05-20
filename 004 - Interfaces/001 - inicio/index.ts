/*
as interfaces definem contratos em seu código, elas também forncem nomes explicitos para verificação de tipo
*/

interface IPessoa{
    nome: string;
    idade: number;
    readonly cpf: number;
    enabled(): boolean;
}

//mesma leitura da interface
let pessoa: IPessoa = {
    nome: "bianca", 
    idade: 28, 
    cpf: 1111111,
enabled: () => {
    return true;
    }, 
};

class Joao implements IPessoa {
    nome: string = "joao";
    idade: number = 17;
    readonly cpf: number = 1111;
    enabled(): boolean {
        return true;
    }
}