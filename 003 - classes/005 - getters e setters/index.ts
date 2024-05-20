/*
getter retorna o valor e set define/atualiza

*/

class Pessoa {
    public nome: string ;
    public idade: number;

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

class Bianca extends Pessoa{
    //igual no java
    private _profissao: string = "programador";
    constructor(){
        super("Bianca", 27);
    }

    get profissao(){
        //função, validação, regex
        return this._profissao;
    }

    set profissao(valor: string){
        this._profissao = valor;
    }
}

const bianca = new Bianca();
console.log(bianca.profissao);
bianca.profissao = "dev java";
console.log(bianca.profissao);