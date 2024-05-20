/*
public - acessado por todas as classes
protected - só pode ser acessada pela mesma classe e classes filhas
private - acessada pela própria classe
// variavel com _ antes é private


*/

class Pessoa {
    public nome: string ;
    public idade: number;
    private _profissao: string = "programador";

    constructor(nome: string, idade: number){
        this.nome = nome;
        this.idade = idade;
    }

    public comer(comida: string){
        return `a ${this.nome} comeu ${comida}`
    }

    public fezAniversario(){
        return `a ${this.nome} fez ${++this.idade} anos`
    }
}

const pessoa = new Pessoa("bianca",27);
