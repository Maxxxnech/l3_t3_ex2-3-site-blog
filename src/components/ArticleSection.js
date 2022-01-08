import React, { Component } from "react";
import Article from "./Article";
import ArticleHeader from "./ArticleHeader";
import ArticleFooter from "./ArticleFooter";
import "./css/ArticleSection.css"

export default class Section extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    var {header, img, article, paragraphs, footer} = this.props;
    return (
      <section className="articleSection">       
          <ArticleHeader header={header} />
          <Article img={img} article={article} paragraphs={paragraphs} />
          <ArticleFooter footer={footer} />
      </section>
    );
  }
}
