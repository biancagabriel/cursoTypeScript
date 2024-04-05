const error = ():never => {
    throw new Error("algo deu errado");
}

const loop = () : never => {
    while(true){
        console.log("olá")
    }
};

const validate = (value : string | number) => {
    if(typeof value === "string"){
        return console.log("é uma string");
    }else if (typeof value === "number"){
      return console.log("é um number"); 
    }

    console.log(error())
};

validate("b");