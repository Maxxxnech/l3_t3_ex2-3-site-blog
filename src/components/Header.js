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
                <p style={{color: "orange", fontStyle:"italic"}}>Кнопки навигации - декоративные (blueprintjs). Таблица подвала - динамическая</p>
            </header>
        )
    }
}