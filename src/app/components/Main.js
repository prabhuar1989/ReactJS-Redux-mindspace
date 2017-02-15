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
                 
                </div>
            </div>

            <div className = "row">
               <div className = "col-xs-10 col-xs-offset-1">
                 
                      <label>Name:  
                        <input type="text" value={props.text} onChange={props.changeText()} />
                      </label>
                     
               
                </div>
            </div>
        </div>  
        );
}


Main.PropTypes = {
    changeText : React.PropTypes.func,
    text : React.PropTypes.string
}