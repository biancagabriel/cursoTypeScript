// variavel com _ antes é private

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

class Bianca extends Pessoa{
    //igual no java
    constructor(){
        super("Bianca", 27);
    }
}

class Mae extends Pessoa{
    //igual no java
}

const bianca = new Bianca();
const mae = new Mae("mae",56)
console.log(bianca);
console.log(bianca.idade);