const formReducer = (state = {text : "Ashwin"}, action) => { 
        switch(action.type){
            case "CHANGE_TEXT" : state = {
                ...state,
                text : action.payLoad
            }
            break;
        }
        return state;
};

export default formReducer;