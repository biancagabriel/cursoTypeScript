const fn = (nome:string, idade?: number) => {
   if(!idade){
    return `nome: ${nome}, idade: sem valor definido`;
   }
   return `nome: ${nome}, idade: ${idade}`;
};

console.log(fn("bianca", 27));
console.log(fn("bianca"));