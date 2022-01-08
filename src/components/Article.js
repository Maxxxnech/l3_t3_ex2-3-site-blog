import React, { Component } from "react";
import "./css/Article.css";

export default class Article extends Component {
  // constructor(props) {
  //   super(props);
  // }
  img = this.props.img ? (
    <img {...this.props.img} width="auto" height="50%"></img>
  ) : (
    ""
  );
  render() {
    var { article, paragraphs } = this.props;
    console.log(paragraphs)
    return (
      <article>
        {this.img} 
        {article}
        {paragraphs && paragraphs.map((par, i) => <p key={i}>{par}</p>)}
      </article>
    );
  }
}
