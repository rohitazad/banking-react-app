import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import HomeLoanFormCom from "./HomeLoanFormCom";
import HomeLoanResultCom from "./HomeLoanResultCom";
import TableFormateDataCom from "./TablesFormateCom";

const HomeLoanIndex = props => {
  const [emiDataObj, setEmiDataObj] = useState();
  const [loanEMI, setLoanEMI] = useState();
  const [totalInterestPayable, setTotalInterestPayable] = useState();
  const [
    totalPaymentPrincipalInterest,
    setTotalPaymentPrincipalInterest
  ] = useState();
  const [interestPercentage, setInterestPercentage] = useState();

  const [totalEmiPrice, setTotalEmiPrice] = useState();
  const [emiPay, setEmiPay] = useState();
  const [principlePay, setPrinciplePay] = useState();
  const [startDate, setStartDate] = useState();

  const calulateHomeLoanEMI = loanData => {
    console.log(loanData);
    let loanAmount = loanData.deposit_amount;
    let numberOfMonths = loanData.TermDeposit * 12;
    let rateOfInterest = loanData.InterestRate;
    let monthlyInterestRatio = rateOfInterest / 100 / 12;

    let top = Math.pow(1 + monthlyInterestRatio, numberOfMonths);
    let bottom = top - 1;
    let sp = top / bottom;
    let emi = loanAmount * monthlyInterestRatio * sp;

    console.log(emi);
    setLoanEMI(emi);

    let full = numberOfMonths * emi;
    let interest = full - loanAmount;
    setTotalInterestPayable(interest);
    setTotalPaymentPrincipalInterest(full);

    console.log("loan emi click");

    let int_pge = (interest / full) * 100;
    let r = int_pge.toFixed(2) + " %";
    setInterestPercentage(r);
    console.log(int_pge);
    console.log(r);
    console.log("-------------------------------------------");
    let bb = parseInt(loanAmount);
    let int_dd = 0;
    let pre_dd = 0;
    let end_dd = 0;
    let rohitazad = [];

    let emiDataObjArray = [];
    for (let j = 1; j <= numberOfMonths; j++) {
      int_dd = bb * (rateOfInterest / 100 / 12);

      pre_dd = emi - int_dd;
      end_dd = bb - pre_dd;
      rohitazad.push({
        PaymentNo: j,
        BeginingBalance: bb,
        EMI: emi,
        Principal: pre_dd,
        Interest: int_dd,
        EndingBalance: end_dd
      });

      emiDataObjArray.push({
        emiPay: emi + int_dd,
        principalePayData: pre_dd,
        startDateData: j
      });

      console.log(emi, "____", int_dd, "____", pre_dd, j);

      bb = bb - pre_dd;
    }
    setTotalEmiPrice(rohitazad);
    setEmiDataObj(emiDataObjArray);

    // this.chartdrowMyRohitazad(
    //   loanAmount,
    //   this.totalPaymentPrincipalInterest,
    //   "Principal",
    //   "Total Payment  (Principal + Interest)"
    // );
  };
  return (
    <>
      <Container>
        <Card className="mT20">
          <Card.Header>Home Loan EMI Calculator</Card.Header>
          <Card.Body>
            <Card.Title>
              <h1>Home Loan EMI Calculator</h1>
            </Card.Title>

            <Row>
              <Col>
                <HomeLoanResultCom
                  loanEMI={(+loanEMI).toFixed(2)}
                  totalInterestPayable={(+totalInterestPayable).toFixed(2)}
                  totalPaymentPrincipalInterest={(+totalPaymentPrincipalInterest).toFixed(
                    2
                  )}
                  interestPercentage={interestPercentage}
                />
              </Col>
              <Col>
                <div className="">
                  <HomeLoanFormCom userFormValue={calulateHomeLoanEMI} />
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <TableFormateDataCom emiDataObj={emiDataObj} />
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default HomeLoanIndex;
