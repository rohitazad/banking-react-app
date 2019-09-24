import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class SimpleInterstClcContainer extends React.Component {
  render() {
    return (
      <>
        <h1>SimpleInterstClcContainer Continer</h1>
        <p>My baSimpleInterstClcContainersic cls ocnt</p>
        <Container>
          <Row>
            <Col>
              <hr className="foo-hr" />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default SimpleInterstClcContainer;
