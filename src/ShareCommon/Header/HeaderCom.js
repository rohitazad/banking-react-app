import React, { Component } from "react";
import NavDropDown from "./NavDropDown.js";
import { NavLink } from "react-router-dom";

class HeaderCom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false,
      mobileClass: false,
      childDataNav: [
        {
          title: "Basic",
          link: "/basic"
        },
        {
          title: "Simple Interest",
          link: "/simple-interest"
        },
        {
          title: "Home Loan EMI",
          link: "/home-loan-emi"
        }
        // {
        //   title: "Vehicle Loan EMI",
        //   link: "/vehicle-loan-emi"
        // }
      ]
    };
    this.showDropdown = this.showDropdown.bind(this);
    this.dropDownHide = this.dropDownHide.bind(this);
  }
  showDropdown(e) {
    e.preventDefault();
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }
  dropDownHide(e) {
    if (e && e.relatedTarget) {
      e.relatedTarget.click();
    }
    this.setState({ isToggleOn: false });
  }
  mobileHandle = e => {
    this.setState(prevState => ({
      mobileClass: !prevState.mobileClass
    }));
  };

  render() {
    const classDropdownMenu =
      "dropdown-menu" + (this.state.isToggleOn ? " show" : "");

    return (
      <div>
        <nav
          className="navbar navbar-expand-lg navbar-light info-color"
          bg="primary"
          variant="dark"
        >
          <NavLink className="navbar-brand" to="/">
            R.A.M Bank
          </NavLink>
          <button
            onClick={this.mobileHandle}
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={`collapse navbar-collapse ${
              this.state.mobileClass ? "show" : ""
              }`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink
                  to="/"
                  activeClassName="active"
                  exact={true}
                  className="nav-link"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="active"
                  className="nav-link"
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="active"
                  className="nav-link"
                  to="/income-tax-calculator"
                >
                  Income Tax Calculator
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  onClick={this.showDropdown}
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  onBlur={this.dropDownHide}
                >
                  Calculators
                </a>
                <NavDropDown
                  classDropdownMenu={classDropdownMenu}
                  linkData={this.state.childDataNav}
                />
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="active"
                  className="nav-link"
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default HeaderCom;
