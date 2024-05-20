/*
Classes, métodos e campos podem ser abstratos. Um método ou campo abstrato é aquele que não teve uma implementação fornecida.
O papael das classes abstratas é servir como uma classe base para subclasses que implementam todos os membros abstratos
quando uma classe não possui membros abstratos, ela é chamada de concreta

não pode usar private 
*/

abstract class Pessoa {
    protected nome: string = "";
    protected idade: number = 0;

    constructor(nome: string, idade: number){

    }
    public comer(comida:string){

    }
    public fazAniversario(){

    }

    protected abstract profissao: string; 
    public abstract qualSuaProfissao(): string;
    public abstract qualSeuSalario(salario: number):number;
}

class Maria extends Pessoa{
    protected profissao: string = "dev";
    constructor(){
        super("Maria",31);
    }
    public qualSuaProfissao(): string {
        return `Sua profissão é ${this.profissao}`;
    }
    public qualSeuSalario(salario: number): number {
        return salario;
    }
}

class Bianca extends Pessoa{
    protected profissao: string= "dev back";
    constructor(){
        super("Bianca",28);
    }
    public qualSuaProfissao(): string {
        return `Sua profissão é ${this.profissao}`;
    }
    public qualSeuSalario(salario: number): number {
        return salario;
    }

}

