/*
a palavra static define um método estático para a classe.
Métodos estáticos não são chamados na instancia de classe, em vez disso são chamados na própria classe.
geralmente são funções utilitárias, como funções para criar ou clonar objetos
*/

class Utils{
   static cloneObject(object : Array<{}>){
        return JSON.parse(JSON.stringify(Object.assign(object)));
    }
}

//const utils = new Utils();

const tenis1: {tamanho: number, estoque: boolean} = {
    tamanho: 41,
    estoque: true
}

const tenis2: {tamanho: number, estoque: boolean} = {
    tamanho: 41,
    estoque: true
}

console.log(Utils.cloneObject([tenis1,tenis2]));