const mathReducer = (state = {result : 0, lastValues : []}, action) => {  //math reducer handles multiple actions
        switch(action.type){
            case "ADD" : state = {
                ...state,
                result : state.result + action.payLoad,
                lastValues : [...state.lastValues,action.payLoad]
            }
            break;
            case "SUBTRACT" : state = {
                 ...state,
                result : state.result - action.payLoad,
                lastValues : [...state.lastValues,action.payLoad]
            }
            break ;
        }
        return state;
};

export default mathReducer;