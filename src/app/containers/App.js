import React from "react";
import {render} from "react-dom";
import {connect} from "react-redux";

import {Main} from "../components/Main";
import {User} from "../components/User";

import {setName} from "../actions/userActions";

class App extends React.Component{
   

    render(){
        return(
            <div className = "container">
                <Main changeUsername = {() => this.props.setName("Siddhesh")} />
                <User userName = {this.props.user.name} />
            </div>
        );
    }
}


const mapStateToProps = (state)=>{
    return({
        math : state.math,
        user : state.user
        }
    );
}

const mapDispatchToProps = (dispatch)=>{
    return{
        setName : (name) => {
            dispatch(setName(name));
        }
        };
}

export default connect(mapStateToProps , mapDispatchToProps) (App);