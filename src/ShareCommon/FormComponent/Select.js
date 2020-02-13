/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import Form from 'react-bootstrap/Form';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


function FormSelectCom(props) {
    //console.log('FormSelectCom ----', props)
    const optionFun = (data) => {
        if (data) {
            return data.map(i => {
                return <option key={i.value} value={i.value}> {i.title}</option>
            })
        } else {
            return null;
        }
    }
    const selectOption = props._selectObj.selectOptionData ? optionFun(props._selectObj.selectOptionData) : null

    return (
        <>
            <Form.Group as={Row} controlId={props._selectObj.controlId}>
                <Form.Label column sm={props._selectObj.labelSM}> {props._selectObj.labelText} </Form.Label>
                <Col sm={props._selectObj.selectSM}>
                    <Form.Control as="select" readOnly={props._selectObj.disabled} disabled={props._selectObj.disabled} name={props._selectObj.name}>
                        {selectOption}
                    </Form.Control>
                </Col>
            </Form.Group>
        </>
    )
}

export default FormSelectCom;