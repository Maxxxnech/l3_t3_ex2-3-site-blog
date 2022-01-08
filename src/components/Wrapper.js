//Обёртка для средней части приложения (Nav, Main, Aside), использует flex
//A <content> element was proposed but rejected for HTML 5

import React, { Component } from "react";
import Main from "./Main";
import Nav from "./Nav";
import Aside from "./Aside";

import "./css/Wrapper.css"

export default class Wrapper extends Component {
  render() {
    var { navItems, articles, asideItems } = this.props;
    return (
      <div className="wrapper">
        <Nav navItems={navItems} />
        <Main articles={articles} />
        <Aside asideItems={asideItems} />
      </div>
    );
  }
}
