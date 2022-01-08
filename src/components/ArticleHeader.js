import React, { Component } from "react";
import "./css/ArticleHeader.css"
export default class ArticleHeader extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
        <header>{this.props.header}</header>
    );
  }
}
