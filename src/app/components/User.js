import React from "react";

export const User = (props) =>{

        return(
        <div className = "row">
            <div className = "row">
               <div className = "col-xs-10 col-xs-offset-1">
                  <h3>User Information</h3>
                </div>
            </div>

            <div className = "row">
               <div className = "col-xs-10 col-xs-offset-1">
                  <p>My Name is : {props.form.name} and my age is : {props.form.age}</p>
                </div>
            </div>
        </div>
        );

}


User.PropTypes = {
    form : React.PropTypes.object
}