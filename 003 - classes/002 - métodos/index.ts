class Pessoa {
    nome: string ;
    idade: number;

    constructor(nome: string, idade: number){
        this.nome = nome;
        this.idade = idade;
    }

    comer(comida: string){
        return `a ${this.nome} comeu ${comida}`
    }

    fezAniversario(){
        return `a ${this.nome} fez ${++this.idade} anos`
    }
}

const pessoa1 = new Pessoa("bianca", 27);
console.log(pessoa1.comer("sushi"));
console.log(pessoa1.fezAniversario());