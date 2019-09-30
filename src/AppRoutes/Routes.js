import React, { Component } from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";

import HeaderCom from "../ShareCommon/Header/HeaderCom";
//import FooterIndex from "../ShareCommon/Footer/FooterIndex";
import HomeContainer from "../Containers/HomeContainer";
import AboutContainer from "../Containers/AboutContainer";
import ContactContainer from "../Containers/ContactContainer";
import BasicClcContainer from "../Containers/BasicClc";
import SimpleInterstClcContainer from "../Containers/SimpleInterstClc";
import HomeLoanEmiClcContainer from "../Containers/HomeLoanEmiClc";

class RoutesComponents extends Component {
  render() {
    return (
      <>
        <Router>
          <HeaderCom />
          <Switch>
            <Route exact path="/" component={HomeContainer} />
            <Route path="/about" component={AboutContainer} />
            <Route path="/contact" component={ContactContainer} />

            <Route path="/basic" component={BasicClcContainer} />
            <Route
              path="/simple-interest"
              component={SimpleInterstClcContainer}
            />
            <Route path="/home-loan-emi" component={HomeLoanEmiClcContainer} />
          </Switch>
          {/* <FooterIndex /> */}
        </Router>
      </>
    );
  }
}

export default RoutesComponents;
