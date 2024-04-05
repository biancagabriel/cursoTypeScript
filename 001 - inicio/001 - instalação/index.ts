/*
npm install -g typescript
tsc --init

plugin: code runner 
npm i -g ts-node
ctrl + alt + n
*/

console.log("npm install -g typescript");

const pedido = (pedido: string) =>{
    return `deu bom seu pedido ${pedido}`
}

console.log(pedido("1234"));