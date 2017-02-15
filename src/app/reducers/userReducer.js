const userReducer = (state = {name : "Ashwin", age : 27}, action) => {  //userReducer handles state of user
        switch(action.type){
            case "SET_NAME" : state = {
                ...state,
                name : action.payLoad
            }
            break;
            case "SET_AGE" : state = {
                 ...state,
                age : action.payLoad
            }
            break ;
        }
        return state;
};

export default userReducer;