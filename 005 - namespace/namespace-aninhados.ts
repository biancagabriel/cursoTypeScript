/*
é uma forma especifica para organizar o código. 
Namespace são simplesmente objetos nomeados no namespace global
isso torna os namespaces uma construção 
*/

import { Pessoa1 } from "./pessoa1";

export namespace Pessoa {
   export namespace Maria{
        const data = 1+1;

    export let nome = "maria";
    export const calc = () => {
        return data;
        };
    }
    export namespace Joao{
        const data = 1+1;

    export let nome = "joao";
    export const calc = () => {
        return data;
        };
    }
}

console.log(Pessoa.Maria.nome);
console.log(Pessoa.Joao.nome);