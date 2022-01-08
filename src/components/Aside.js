import React, { Component } from "react";
import "./css/Aside.css";
export default class Aside extends Component {
  render() {
    var asideItems = this.props.asideItems;
    return (
      <aside>
        {asideItems &&
          asideItems.map &&
          asideItems.map((item, i) => <article key={i}>
            <h3>{item.header}</h3>
            <p>{item.text}</p>
          </article>)}
      </aside>
    );
  }
}
