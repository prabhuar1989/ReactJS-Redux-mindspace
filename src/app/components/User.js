import React from "react";

export class User extends React.Component{
    render(){
        return(
        <div className = "row">

            <div className = "row">
               <div className = "col-xs-10 col-xs-offset-1">
                  <h3>User Component</h3>
                </div>
            </div>

            <div className = "row">
               <div className = "col-xs-10 col-xs-offset-1">
                  <p>The username is : {this.props.userName}</p>
                </div>
            </div>

        </div>
        );
    }

}


User.PropTypes = {
    userName : React.PropTypes.string
}