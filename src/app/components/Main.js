import React from "react";

export class Main extends React.Component {
      render(){
        return(
        <div className = "row">
            <div className = "row">
               <div className = "col-xs-10 col-xs-offset-1">
                   <h3> Main Component </h3>
                </div>
            </div>
             <div className = "row">
               <div className = "col-xs-10 col-xs-offset-1">
                  <button className = "btn btn-primary" onClick = {() => this.props.changeUsername("Anna")}>Change Username</button>
                </div>
            </div>
        </div>  
        );
    }
}


Main.PropTypes = {
    changeUsername : React.PropTypes.func
}