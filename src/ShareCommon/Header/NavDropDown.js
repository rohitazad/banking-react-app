import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NavDropDown extends Component {
  render() {
    //console.log(this.props.linkData);
    return (
      <div
        className={this.props.classDropdownMenu}
        aria-labelledby="navbarDropdown"
      >
        {this.props.linkData.map(item => {
          return (
            <NavLink
              key={item.title}
              activeClassName="active"
              className="dropdown-item"
              to={item.link}
            >
              {item.title}
            </NavLink>
          );
        })}

        <NavLink
          activeClassName="active"
          className="dropdown-item"
          to="/contact"
        >
          Contact
        </NavLink>
      </div>
    );
  }
}

export default NavDropDown;
