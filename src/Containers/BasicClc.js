import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class BasicClcContainer extends React.Component {
  render() {
    return (
      <>
        <h1>Basic cls Continer</h1>
        <p>My basic cls ocnt</p>
        <Container>
          <Row>
            <Col>asdfasdfasdf</Col>
            <Col>asdfasdfasdf</Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default BasicClcContainer;
