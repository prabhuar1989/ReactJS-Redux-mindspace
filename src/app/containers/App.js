import React from "react";
import {render} from "react-dom";
import {connect} from "react-redux";

import {Main} from "../components/Main";
import {User} from "../components/User";

import {setName} from "../actions/userActions";
import {changeAge} from "../actions/formActions";
import {changeName} from "../actions/formActions";

class App extends React.Component{
   

    render(){
        return(
            <div className = "container">
                <Main 
                changeName = {() => this.props.changeName}
                name = {this.props.form.name}
                age = {this.props.form.age}
                changeAge = {() => this.props.changeAge}
                />
                <User form = {this.props.form} age = {this.props.form} />
            </div>
        );
    }
}


const mapStateToProps = (state)=>{
    return({
        math : state.math,
        user : state.user,
        form : state.form
        }
    );
}

const mapDispatchToProps = (dispatch)=>{
    return({
        changeAge : (event) => {
            dispatch(changeAge(event.target.value));
        },
        changeName : (event) => {
            dispatch(changeName(event.target.value));
        }
        });
}

export default connect(mapStateToProps , mapDispatchToProps) (App);