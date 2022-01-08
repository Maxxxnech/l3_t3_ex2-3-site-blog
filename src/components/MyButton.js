import React from "react";
import {
  Button,
} from "@blueprintjs/core";

import  "./css/MyButton.css";

/**
 * Насденик от Blueprint Button
 * По клику включает спиннер
 */
 export default class MyButton extends Button {
    constructor(props) {
      super(props);
      this.state = {
        loading: false,
      };
    }
    loadingStarter(e) {
      this.setState({ loading: true });
      window.setTimeout(() => {
        this.setState({ loading: false });
      }, 1000);
    }
    render() {
      return (
        <Button
          loading={this.state.loading}
          onClick={(e) => this.loadingStarter(e)}
          {...this.props}
        />
      );
    }
  }