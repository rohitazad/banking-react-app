/* eslint-disable react/jsx-no-comment-textnodes */
import React, { Component } from "react";
import { Route, Switch } from "react-router";
import { HashRouter as Router } from "react-router-dom";
// import { BrowserRouter as Router } from "react-router-dom";
//<<Router basename={process.env.PUBLIC_URL}>
import HeaderCom from "../ShareCommon/Header/HeaderCom";
import FooterIndex from "../ShareCommon/Footer/FooterIndex";
import HomeContainer from "../Containers/HomeContainer";
import AboutContainer from "../Containers/AboutContainer";
import ContactContainer from "../Containers/ContactContainer";
import BasicClcContainer from "../Containers/BasicClc";
import SimpleInterstClcContainer from "../Containers/SimpleInterstClc";
import HomeLoanEmiClcContainer from "../Containers/HomeLoanEmiClc";
//import VehicleLoanClc from "../Containers/VehicleLoanClc";
// <Route path="/vehicle-loan-emi" component={VehicleLoanClc} />
import IncomeTaxClcContainer from "../Containers/IncomeTaxClc";

class RoutesComponents extends Component {
  render() {
    return (
      <>
        <Router basename='/'>
          <HeaderCom />
          <Switch>
            <Route exact path="/" component={IncomeTaxClcContainer} />
            <Route exact path="/home" component={HomeContainer} />
            <Route path="/about" component={AboutContainer} />
            <Route path="/contact" component={ContactContainer} />

            <Route path="/basic" component={BasicClcContainer} />
            <Route
              path="/simple-interest"
              component={SimpleInterstClcContainer}
            />
            <Route path="/income-tax-calculator" component={IncomeTaxClcContainer} />
            <Route path="/home-loan-emi" component={HomeLoanEmiClcContainer} />

            <Route path='*' component={HomeContainer} />
          </Switch>
          <FooterIndex />
        </Router>
      </>
    );
  }
}

export default RoutesComponents;
