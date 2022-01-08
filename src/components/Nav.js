import React, { Component } from "react";

import MyButton from "./MyButton";

import {
  ButtonGroup,
} from "@blueprintjs/core";

import "./css/Nav.css";

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }
  
  render() {
    var navItems = this.props.navItems;
    return (
      <nav>
        <ButtonGroup vertical large alignText="left">
          {navItems &&
            navItems.map &&
            navItems.map((el, i) => (
              < MyButton key={i} icon={el.icon} text={el.text} />
            ))}
        </ButtonGroup>
      </nav>
    );
  }
}
