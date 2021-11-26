import React, { Component } from "react";
import NavItemContainer from "../containers/NavItem";
import "../App.css";

export default class Nav extends Component {
  render() {
    const { items } = this.props;
    return (
      <nav className={"nav"}>
        {items &&
          items.map((id) => (
            <NavItemContainer id={id} key={id} rootChannelId={id} />
          ))}
      </nav>
    );
  }
}
