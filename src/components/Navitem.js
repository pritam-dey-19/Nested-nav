import React, { Component } from "react";
import NavItemContainer from "../containers/NavItem";
import "../App.css";

export default class Navitem extends Component {
  render() {
    const {
      rootChannelId,
      isActive,
      onClick,
      channel,
      channel: { name, children },
    } = this.props;
    const className = isActive
      ? "nav__item__children show"
      : "nav__item__children";

    return (
      <div>
        <li
          className={"nav__item"}
          onClick={() => onClick(rootChannelId, channel)}
        >
          {name}
        </li>
        <ul className={className}>
          {children &&
            children.map((child) => (
              <NavItemContainer
                id={child}
                key={child}
                rootChannelId={rootChannelId}
              />
            ))}
        </ul>
      </div>
    );
  }
}
