const formReducer = (state = {name : "Ashwin" , age : 27}, action) => { 
        switch(action.type){
            case "CHANGE_NAME" : state = {
                ...state,
                name : action.payLoad
            }
            break;
             case "CHANGE_AGE" : state = {
                ...state,
                age : action.payLoad
            }
            break;
        }
        return state;
};

export default formReducer;