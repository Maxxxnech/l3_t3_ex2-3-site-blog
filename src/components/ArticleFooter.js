import React, { Component } from "react";
import "./css/ArticleFooter.css";
export default class ArticleFooter extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
        <footer className="articleFooter">{this.props.footer}</footer>
    );
  }
}
