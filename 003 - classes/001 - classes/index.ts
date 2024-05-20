/*
uma classe é uma estrutura de programação orientada a objetos que tem um conjunto de propriedades e métodos.
é um modelo para criar objetos, permitindo que voce defina uma estrutura com propriedades e comportamentos

 */

class Pessoa {
    nome: string ;
    idade: number;

    constructor(nome: string, idade: number){
        this.nome = nome;
        this.idade = idade;
    }
}

const pessoa1 =  new Pessoa("bianca", 27)
const pessoa2 =  new Pessoa("mãe", 27)
console.log(pessoa1.nome);
console.log(pessoa1.idade);
console.log(pessoa1);
console.log(pessoa2);