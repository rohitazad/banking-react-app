import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const VehicleLoanIndex = props => {
  return (
    <>
      <Container>
        <Card className="mT20">
          <Card.Header>Vehicle Loan EMI Calculator</Card.Header>
          <Card.Body>
            <Card.Title>
              <h1>Vehicle Loan EMI Calculator</h1>
            </Card.Title>

            <Row>
              <Col>{34 + 34}</Col>
              <Col>asdfsdfsda</Col>
            </Row>
            <Row className="mT20">
              <Col>{3 + 4}</Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default VehicleLoanIndex;
