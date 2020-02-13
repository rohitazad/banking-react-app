import React from "react";
import Alert from "react-bootstrap/Alert";

class HomeContainer extends React.Component {
  render() {
    return (
      <>
        <h1>
          <a
            href="https://react-bootstrap.github.io/"
            rel="noopener noreferrer"
            target="_blank"
          >
            React Bootstrap
          </a>
        </h1>
        <h2>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/FortAwesome/react-fontawesome"
          >
            Font awqasome
          </a>
        </h2>
        <h2>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="http://taxmann.com/taxcalc/taxcalc.aspx"
          >
            income Tax Calculators
          </a>
        </h2>
        <Alert dismissible variant="danger">
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>Change this and that and try again.</p>
        </Alert>
        <p>this is my home ocn</p>
      </>
    );
  }
}

export default HomeContainer;
