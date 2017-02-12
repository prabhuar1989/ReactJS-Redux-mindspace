// import React from "react";
// import {render} from "react-dom";

// import {Main} from "./components/Main";
// import {User} from "./components/User";

// class App extends React.Component{
//     constructor(){
//         super();
//         this.state = {
//             userName : "Max"
//         }
//     }

//     changeUsername(newName){
//         this.setState({
//             userName : newName
//         });
//     }

//     render(){
//         return(
//             <div className = "container">
//                 <Main changeUsername = {this.changeUsername.bind(this)} />
//                 <User userName = {this.state.userName} />
//             </div>
//         );
//     }
    

// }

// render(<App />,document.getElementById("App"));



import {createStore,combineReducers} from "redux";


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

const store = createStore(combineReducers({mathReducer,userReducer}));

store.subscribe(() =>{
    console.log("Store Updated !!",store.getState());
});

store.dispatch({
    type : "ADD",
    payLoad : 100
});

store.dispatch({
    type : "ADD",
    payLoad : 100
});

store.dispatch({
    type : "SUBTRACT",
    payLoad : 50
});

store.dispatch({
    type : "SET_NAME",
    payLoad : "Siddhesh"
});

store.dispatch({
    type : "SET_AGE",
    payLoad : 30
});











