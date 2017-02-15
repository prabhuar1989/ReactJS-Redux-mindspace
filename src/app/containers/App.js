import React from "react";
import {render} from "react-dom";
import {connect} from "react-redux";

import {Main} from "../components/Main";
import {User} from "../components/User";

import {setName} from "../actions/userActions";
import {changeText} from "../actions/formActions";
import {submitForm} from "../actions/formActions";

class App extends React.Component{
   

    render(){
        return(
            <div className = "container">
                <Main 
                changeText = {() => this.props.changeText}
                text = {this.props.form.text}
                />
                <User userName = {this.props.form.text} />
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
        setName : (name) => {
            dispatch(setName(name));
        },
        changeText : (event) => {
            dispatch(changeText(event.target.value));
        }
        });
}

export default connect(mapStateToProps , mapDispatchToProps) (App);