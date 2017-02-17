import React from "react";

export const Main = (props) => {
        return(
        <div className = "row">
            <div className = "row">
               <div className = "col-xs-10 col-xs-offset-1">
                   <h3> Input your details </h3>
                </div>
            </div>

             <div className = "row">
               <div className = "col-xs-10 col-xs-offset-1">
                 
               </div>
            </div>

            <div className = "row">
               <div className = "col-xs-10 col-xs-offset-1">
                      <label>Name:  
                        <input type="text" value={props.name} onChange={props.changeName()} />
                      </label>
                </div>
            </div>

              <div className = "row">
               <div className = "col-xs-10 col-xs-offset-1">
                      <label>Age:  
                        <input type="text" value={props.age} onChange={props.changeAge()} />
                      </label>
                </div>
            </div>
        </div>  
        );
}


Main.PropTypes = {
    changeName : React.PropTypes.func,
    changeAge : React.PropTypes.func,
    name : React.PropTypes.string,
    age : React.PropTypes.string
}