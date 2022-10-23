import React, { PureComponent } from "react";

interface INavbarProps {
  totalCount: number;
}

class Navbar extends PureComponent<INavbarProps> {
  render() {
    return (
      <nav className="navbar">
        <i className="navbar-logo fas fa-leaf"></i>
        <span>Habit Tracker</span>
        <span className="navbar-count">{this.props.totalCount}</span>
      </nav>
    );
  }
}

export default Navbar;
