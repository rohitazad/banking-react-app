import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import FormCom from "./FormCom";
import ResultCom from "./ResultCom";

class SimpleInterestClcComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formValue: {
        deposit_amount: 0,
        InterestRate: 0,
        TermDeposit: 0
      },
      totalInterest: 0,
      finalAmount: 0
    };
  }

  userFormValue = form_Value => {
    this.setState(
      {
        formValue: {
          deposit_amount: form_Value.deposit_amount,
          InterestRate: form_Value.InterestRate,
          TermDeposit: form_Value.TermDeposit
        }
      },
      () => {
        this.simpleInterestDeposit();
      }
    );
  };
  simpleInterestDeposit = () => {
    console.log("formValue", this.state.formValue);
    let depositAmount = this.state.formValue.deposit_amount;
    let interestRate = this.state.formValue.InterestRate;
    let numberOfMonth = this.state.formValue.TermDeposit * 12;
    let monthlyInterestRatio = interestRate / 100 / 12;

    let totalInterest = depositAmount * monthlyInterestRatio * numberOfMonth;
    totalInterest = Math.round(totalInterest);
    let finalAmount = totalInterest + depositAmount;
    finalAmount = Math.round(finalAmount);
    this.setState({
      totalInterest,
      finalAmount
    });
  };

  render() {
    return (
      <>
        <Container>
          <Card className="mT20">
            <Card.Header>Simple Interest Calculator</Card.Header>
            <Card.Body>
              <Card.Title>
                <h1>This is only just basic Simple Interest Calculator</h1>
              </Card.Title>

              <Row>
                <Col>
                  <ResultCom
                    totalInterest={this.state.totalInterest}
                    finalAmount={this.state.finalAmount}
                  />
                </Col>
                <Col>
                  <div className="">
                    <FormCom userFormValue={this.userFormValue} />
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Container>
      </>
    );
  }
}

export default SimpleInterestClcComp;
