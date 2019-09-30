import React, { useState } from "react";
import { Formik } from "formik";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

function FormCom(props) {
  const [validated, setValidated] = useState(false);
  const [deposit_amount, setDeposit_amount] = useState("");
  const [InterestRate, setInterestRate] = useState("");
  const [TermDeposit, setTermDeposit] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    event.stopPropagation();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      //useEffect()
    } else {
      console.log("form validation", form);
      const userFormValueObj = {
        deposit_amount,
        InterestRate,
        TermDeposit
      };
      props.userFormValue(userFormValueObj);
    }
    setValidated(true);
  };
  const handleChange = e => {
    let inputVal = parseFloat(e.target.value);
    let inputName = e.target.name;
    if (inputName === "Interest_Rate") {
      setInterestRate(inputVal);
    } else if (inputName === "Deposit_amount") {
      setDeposit_amount(inputVal);
    } else if (inputName === "Term_Deposit") {
      setTermDeposit(inputVal);
    }
  };

  return (
    <Formik>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group controlId="validationDepositAmount">
          <Form.Label>Principal (Deposit) Amount</Form.Label>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroupPrepend">₹</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              type="number"
              placeholder="Depostit Amount (required)"
              aria-describedby="inputGroupPrepend"
              name="Deposit_amount"
              value={deposit_amount}
              onChange={handleChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please enter deposit amount.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>

        <Form.Group controlId="validationInterestRate">
          <Form.Label>Interest Rate </Form.Label>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroupPrepend">%</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              type="number"
              placeholder="Interest Rate"
              aria-describedby="inputGroupPrepend"
              name="Interest_Rate"
              value={InterestRate}
              onChange={handleChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please Interest Rate in %.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>

        <Form.Group controlId="validationTermDeposit">
          <Form.Label>Term Deposit </Form.Label>
          <InputGroup>
            <Form.Control
              type="number"
              placeholder="Term Deposit (required)"
              aria-describedby="inputGroupPrepend"
              name="Term_Deposit"
              value={TermDeposit}
              onChange={handleChange}
              required
            />
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroupPrepend">Years</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control.Feedback type="invalid">
              Please enter team deposit .
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>

        <Button type="submit">Calculate loan amount</Button>
      </Form>
    </Formik>
  );
}

// function FormCom() {
//

//
//   return (
//     <>
//       <Formik>
//         <Form noValidate validated={validated} onSubmit={handleSubmit}>
//           <Form.Group controlId="validationFormikDepositAmount">
//             <Form.Label>Principal (Deposit) Amount</Form.Label>
//             <InputGroup>
//               <InputGroup.Prepend>
//                 <InputGroup.Text id="depositAmount">₹</InputGroup.Text>
//               </InputGroup.Prepend>
//               <Form.Control
//                 type="number"
//                 placeholder="Depostit Amount (required)"
//                 aria-describedby="depositAmount"
//                 name="deposti_Amount"
//                 value="0"
//                 onChange={handleChange}
//                 isInvalid={!!errors.username}
//               />
//               <Form.Control.Feedback type="invalid">
//                 {errors.username}
//               </Form.Control.Feedback>
//             </InputGroup>
//           </Form.Group>

//           <Form.Group controlId="validationFormikInterestRate">
//             <Form.Label>Interest Rate</Form.Label>
//             <InputGroup>
//               <InputGroup.Prepend>
//                 <InputGroup.Text id="depositAmount">%</InputGroup.Text>
//               </InputGroup.Prepend>
//               <Form.Control
//                 type="number"
//                 placeholder="Interest Rate (required)"
//                 aria-describedby="depositAmount"
//                 name="Interest_rate"
//                 value="0"
//                 onChange={handleChange}
//                 isInvalid={!!errors.username}
//               />
//               <Form.Control.Feedback type="invalid">
//                 {errors.username}
//               </Form.Control.Feedback>
//             </InputGroup>
//           </Form.Group>

//           <Form.Group controlId="validationFormikTermDeposit">
//             <Form.Label>Term Deposit</Form.Label>
//             <InputGroup>
//               <InputGroup.Prepend>
//                 <InputGroup.Text id="TermDeposit">%</InputGroup.Text>
//               </InputGroup.Prepend>
//               <Form.Control
//                 type="number"
//                 placeholder="Term Deposit (required)"
//                 aria-describedby="TermDeposit"
//                 name="Term_deposit"
//                 value="0"
//                 onChange={handleChange}
//                 isInvalid={!!errors.username}
//               />
//               <Form.Control.Feedback type="invalid">
//                 {errors.username}
//               </Form.Control.Feedback>
//             </InputGroup>
//           </Form.Group>

//           <Button variant="primary" type="submit">
//             Calculate loan amount
//           </Button>
//         </Form>
//       </Formik>
//     </>
//   );
// }

export default FormCom;
