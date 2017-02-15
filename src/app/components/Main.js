import React from "react";

export const Main = (props) => {
        return(
        <div className = "row">
            <div className = "row">
               <div className = "col-xs-10 col-xs-offset-1">
                   <h3> Main Component </h3>
                </div>
            </div>
             <div className = "row">
               <div className = "col-xs-10 col-xs-offset-1">
                  <button className = "btn btn-primary"
                   onClick = {() => props.changeUsername('Siddhesh')}>Change Username</button>
                </div>
            </div>
        </div>  
        );
}


Main.PropTypes = {
    changeUsername : React.PropTypes.func
}