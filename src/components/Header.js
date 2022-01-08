import React, {Component} from "react";
import "./css/Header.css";

export default class Header extends Component {
    // constructor(props){
    //     super(props);
    // }
    render(){
        return(
            <header className="mainHeader">
                <h1>{this.props.text}</h1> 
                <p style={{margin: 0, color: "orange", fontStyle:"italic", fontSize: "smaller"}}>{this.props.altText}</p>
            </header>
        )
    }
}