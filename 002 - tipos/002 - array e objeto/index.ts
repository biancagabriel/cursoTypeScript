let array1: [string,string,number,boolean] = ["bianca gabriel", "teste", 123,false]; //tupla
let array2: Array<string | number | boolean> = [true, 123,"bianca", "gabriel"]; //array com varios valores e pega fora de ordem 

console.log(array1);
console.log(array2);

let obj1: {nome: string, sobrenome: string, idade: number, deuBom: boolean} = {
    nome: "bianca", 
    sobrenome: "gabriel",
    idade: 27,
    deuBom: true,
};

let obj2: Array<{nome: string; sobrenome: string; idade: number; deuBom: boolean;}> = [
    {
    nome: "bianca", 
    sobrenome: "gabriel",
    idade: 27,
    deuBom: true,
    },
    {
        nome: "bianca2", 
        sobrenome: "gabriel",
        idade: 28,
        deuBom: false,
    },
    {
        nome: "bianca", 
        sobrenome: "gabriel",
        idade: 29,
        deuBom: false,
    },
];

console.log(obj1);
console.log(obj2);