import React from "react";
import Alert from "react-bootstrap/Alert";
import Badge from "react-bootstrap/Badge";

import { Commafy } from "../../../ShareCommon/Utils";

const HomeLoanResultCom = props => {
  return (
    <>
      <div className="loan-sec">
        <Alert variant="primary" className="custom-badge">
          <Alert.Heading>Loan EMI</Alert.Heading>
          <Badge pill variant="success">
            ₹ {Commafy(+props.loanEMI)}
          </Badge>
        </Alert>

        <Alert variant="primary" className="custom-badge">
          <Alert.Heading>Total Interest Payable</Alert.Heading>
          <Badge pill variant="success">
            ₹ {Commafy(+props.totalInterestPayable)}
          </Badge>
        </Alert>

        <Alert variant="primary" className="custom-badge">
          <Alert.Heading>Total Payment (Principal + Interest)</Alert.Heading>
          <Badge pill variant="success">
            ₹ {Commafy(+props.totalPaymentPrincipalInterest)}
          </Badge>
        </Alert>

        <Alert variant="primary" className="custom-badge">
          <Alert.Heading>Interest Percentage</Alert.Heading>
          <Badge pill variant="success">
            {props.interestPercentage}
          </Badge>
        </Alert>
      </div>
    </>
  );
};

export default HomeLoanResultCom;
