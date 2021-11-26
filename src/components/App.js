import React, { Component } from "react";
import Nav from "./Nav";
import BreadcrumbsContainer from "../containers/Breadcrumbs";
import "../App.css";

class App extends Component {
  render() {
    const { rootChannels } = this.props;
    return (
      <div className="App">
        <Nav items={rootChannels} />
        <BreadcrumbsContainer />
      </div>
    );
  }
}

export default App;
