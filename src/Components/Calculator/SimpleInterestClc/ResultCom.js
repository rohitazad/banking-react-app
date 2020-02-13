import React from "react";
import Alert from "react-bootstrap/Alert";
import Badge from "react-bootstrap/Badge";

import { Commafy, InWord } from "../../../ShareCommon/Utils";

function ResultCom(props) {
  const pateResultData =
    props.finalAmount && props.finalAmount > 0 ? (
      <>
        <Alert variant="primary" className="custom-badge">
          <Alert.Heading>Total Interest Get</Alert.Heading>
          <Badge pill variant="success">
            ₹ {Commafy(props.totalInterest)}
          </Badge>
        </Alert>
        <Alert variant="success" className="custom-badge">
          <Alert.Heading>Total Amount Get</Alert.Heading>
          <Badge pill variant="primary">
            ₹ {Commafy(props.finalAmount)}
          </Badge>
          <hr />
          <Badge variant="secondary">{InWord(props.finalAmount)}</Badge>
        </Alert>{" "}
      </>
    ) : null;
  return <>{pateResultData}</>;
}

export default ResultCom;
