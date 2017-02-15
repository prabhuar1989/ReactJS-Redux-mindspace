import React from "react";

export const User = (props) =>{

        return(
        <div className = "row">

            <div className = "row">
               <div className = "col-xs-10 col-xs-offset-1">
                  <h3>User Component</h3>
                </div>
            </div>

            <div className = "row">
               <div className = "col-xs-10 col-xs-offset-1">
                  <p>The username is : {props.userName}</p>
                </div>
            </div>

        </div>
        );

}


User.PropTypes = {
    userName : React.PropTypes.string
}