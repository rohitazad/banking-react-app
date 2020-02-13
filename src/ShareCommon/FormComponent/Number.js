/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import Form from 'react-bootstrap/Form';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


function FormNumberCom(props) {
    return (
        <>
            <Form.Group as={Row} controlId={props._selectObj.controlId}>
                <Form.Label column sm={props._selectObj.labelSM}> {props._selectObj.labelText} </Form.Label>
                <Col sm={props._selectObj.selectSM}>
                    <Form.Control type="number" name={props._selectObj.name} readOnly={props._selectObj.disabled} disabled={props._selectObj.disabled} placeholder={props._selectObj.placeholder} />
                </Col>
            </Form.Group>
        </>
    )
}

export default FormNumberCom;