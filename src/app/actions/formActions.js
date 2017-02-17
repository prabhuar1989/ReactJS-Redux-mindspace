export function changeAge(age){
    return{
        type : "CHANGE_AGE",
        payLoad : age
    };
}

export function changeName(name){
    return{
        type : "CHANGE_NAME",
        payLoad : name
    };
}
