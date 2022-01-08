//Основной блок, содержит секции с новостями. Использует flex
import React, { Component } from "react";
import Section from "./ArticleSection";
import "./css/Main.css";


export default class Main extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    var { articles } = this.props;
    return (
      <main>
          {articles &&
            articles.length &&
            articles.map((article , i) => (
              <Section
                key={i}
                {...article}
              />
            ))}
      </main>
    );
  }
}
