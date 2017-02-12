import React from "react";
import {render} from "react-dom";

import {Main} from "./Main";
import {User} from "./User";

export class App extends React.Component{
    constructor(){
        super();
    }

    changeUsername(newName){

    }

    render(){
        return(
            <div className = "container">
                <Main changeUsername = {this.changeUsername.bind(this)} />
                <User userName = "Ashwin" />
            </div>
        );
    }
}