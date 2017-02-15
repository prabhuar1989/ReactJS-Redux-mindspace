export function addNumber(number){
    return{
        type : "ADD",
        payLoad : number
    };
}

export function subtractNumber(number){
    return{
        type : "SUBTRACT",
        payLoad : number
    };
}