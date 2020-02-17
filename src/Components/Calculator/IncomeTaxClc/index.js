import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import IncomeTextResult from './result';
import BudgetTextDetails from './budgetDetails';


import * as _IncomeTaxJson from "../../../Assets/JsonApiData/IncomeTax.json";
import * as _IncomeTaxDeductionJson from "../../../Assets/JsonApiData/IncomeTaxDeductionJson.json";
import * as _BudgetDataText from "../../../Assets/JsonApiData/BudgetTextDetails.json";



import FormCom from './form';


function IncomeTaxClcComp(props) {

    const [formValue, setFormValue] = useState();
    const [allIncomeValue, setAllIncomeValue] = useState();

    const selectObjData = _IncomeTaxJson.default;
    const deductionsData = _IncomeTaxDeductionJson.default;


    const taxFormSubmit = (e) => {

        //console.log('__e', e);
        e.preventDefault();
        const formEvent = new FormData(e.target);
        const _formdata = {
            assessmentyear: formEvent.get('assessmentyear') ? formEvent.get('assessmentyear') : null,
            taxpayer: formEvent.get('taxpayer') ? formEvent.get('taxpayer') : null,
            forperson: formEvent.get('forperson') ? formEvent.get('forperson') : null,
            incomesalary: formEvent.get('incomesalary') ? formEvent.get('incomesalary') : 0,
            othersalary: formEvent.get('othersalary') ? formEvent.get('othersalary') : 0,
            lifeinsurance: formEvent.get('lifeinsurance') ? formEvent.get('lifeinsurance') : 0,
            ppfamount: formEvent.get('ppfamount') ? formEvent.get('ppfamount') : 0,
            tuitionfees: formEvent.get('tuitionfees') ? formEvent.get('tuitionfees') : 0,
            any80c: formEvent.get('any80c') ? formEvent.get('any80c') : 0,
            mediclaim: formEvent.get('mediclaim') ? formEvent.get('mediclaim') : 0
        }
        //console.log('_formdata', _formdata);


        const _userIcomeValues = calculateTaxResult(_formdata);
        if (_formdata.assessmentyear === '0' || _formdata.assessmentyear === null) {
            alert('Please select a Assessment year')
        } else {
            setFormValue(_formdata);
            setAllIncomeValue(_userIcomeValues);
        }

    }
    const calculate80Cdeduction = (data) => {
        let deduction80C = data;
        let deductionValue = 150000;
        if (deduction80C < deductionValue) {
            return deduction80C;
        }
        return deductionValue;
    }
    const calculate80Ddeduction = (data) => {
        let deducation80D = data;
        let deduction80Dvalue = 50000;
        if (deducation80D < deduction80Dvalue) {
            return deducation80D;
        }
        return deduction80Dvalue;
    }
    const calculateTaxSalb = (amount, percentage) => {
        return amount * percentage / 100;
    }
    const calculateTaxResult = (_formdata) => {
        let totalIncome = Number(_formdata.incomesalary) + Number(_formdata.othersalary);
        let totalDedection80c = Number(_formdata.lifeinsurance) + Number(_formdata.ppfamount) + Number(_formdata.tuitionfees) + Number(_formdata.any80c);
        let medical = Number(_formdata.mediclaim);
        let netTotalDeduction80c = calculate80Cdeduction(totalDedection80c);
        let netTotalDecuction80D = calculate80Ddeduction(medical);
        let taxableSalary = totalIncome;
        let oldOptiontaxableSalary = totalIncome - (netTotalDeduction80c + netTotalDecuction80D);

        let to_2_5lack = taxableSalary > 250000 ? 250000 : taxableSalary;
        let to_25_to_5lack = taxableSalary > 500000 ? 250000 : taxableSalary - to_2_5lack;
        let to_5_to_75lack = taxableSalary > 750000 ? 250000 : taxableSalary - (to_2_5lack + to_25_to_5lack);
        let to_75_to_10lack = taxableSalary > 1000000 ? 250000 : taxableSalary - (to_2_5lack + to_25_to_5lack + to_5_to_75lack);
        let to_10_to_12_5lack = taxableSalary > 1250000 ? 250000 : taxableSalary - (to_2_5lack + to_25_to_5lack + to_5_to_75lack + to_75_to_10lack);
        let to_12_5_to_15lack = taxableSalary > 1500000 ? 250000 : taxableSalary - (to_2_5lack + to_25_to_5lack + to_5_to_75lack + to_75_to_10lack + to_10_to_12_5lack);
        let to_15_more = taxableSalary - (to_2_5lack + to_25_to_5lack + to_5_to_75lack + to_75_to_10lack + to_10_to_12_5lack + to_12_5_to_15lack);


        let to_2_5lack_old = oldOptiontaxableSalary > 250000 ? 250000 : oldOptiontaxableSalary;
        let to_25_to_5lack_old = oldOptiontaxableSalary > 500000 ? 250000 : oldOptiontaxableSalary - to_2_5lack_old;
        let to_5_to_10lack_old = oldOptiontaxableSalary > 1000000 ? 500000 : oldOptiontaxableSalary - (to_25_to_5lack_old + to_2_5lack_old);
        let to_10_more_old = oldOptiontaxableSalary - (to_2_5lack_old + to_25_to_5lack_old + to_5_to_10lack_old);

        const userTotalIncomeValue = {
            totalIncome: totalIncome,
            totalDedection_80c: totalDedection80c,
            totalDedection_mediclaim_80D: medical,
            _totalDedection_80c: netTotalDeduction80c,
            _totalDedection_80d: netTotalDecuction80D,
            _new_taxableSalary: taxableSalary > 250000 ? taxableSalary - 250000 : 0,
            _old_taxableSalary: oldOptiontaxableSalary > 500000 ? oldOptiontaxableSalary - 250000 : 0,
            _taxPayableForNewOption: {
                _0to2_5lack: {
                    _income: to_2_5lack,
                    _taxPercentage: 0,
                    _deductionTax: calculateTaxSalb(to_2_5lack, 0)
                },
                _2_5to5lack: {
                    _income: to_25_to_5lack,
                    _taxPercentage: 5,
                    _deductionTax: calculateTaxSalb(to_25_to_5lack, 5)
                },
                _5to7_5lack: {
                    _income: to_5_to_75lack,
                    _taxPercentage: 10,
                    _deductionTax: calculateTaxSalb(to_5_to_75lack, 10)
                },
                _7_5to10lack: {
                    _income: to_75_to_10lack,
                    _taxPercentage: 15,
                    _deductionTax: calculateTaxSalb(to_75_to_10lack, 15)
                },
                _10to12_5lack: {
                    _income: to_10_to_12_5lack,
                    _taxPercentage: 20,
                    _deductionTax: calculateTaxSalb(to_10_to_12_5lack, 20)
                },
                _12_5to15lack: {
                    _income: to_12_5_to_15lack,
                    _taxPercentage: 25,
                    _deductionTax: calculateTaxSalb(to_12_5_to_15lack, 25)
                },
                _15to_more: {
                    _income: to_15_more,
                    _taxPercentage: 30,
                    _deductionTax: calculateTaxSalb(to_15_more, 30)
                }
            },
            _arrayValueTaxableNewOption:
                [

                    {
                        _income: to_2_5lack,
                        _taxPercentage: 0,
                        _deductionTax: calculateTaxSalb(to_2_5lack, 0)
                    },
                    {
                        _income: to_25_to_5lack,
                        _taxPercentage: 5,
                        _deductionTax: calculateTaxSalb(to_25_to_5lack, 5)
                    },
                    {
                        _income: to_5_to_75lack,
                        _taxPercentage: 10,
                        _deductionTax: calculateTaxSalb(to_5_to_75lack, 10)
                    },
                    {
                        _income: to_75_to_10lack,
                        _taxPercentage: 15,
                        _deductionTax: calculateTaxSalb(to_75_to_10lack, 15)
                    },
                    {
                        _income: to_10_to_12_5lack,
                        _taxPercentage: 20,
                        _deductionTax: calculateTaxSalb(to_10_to_12_5lack, 20)
                    },
                    {
                        _income: to_12_5_to_15lack,
                        _taxPercentage: 25,
                        _deductionTax: calculateTaxSalb(to_12_5_to_15lack, 25)
                    },
                    {
                        _income: to_15_more,
                        _taxPercentage: 30,
                        _deductionTax: calculateTaxSalb(to_15_more, 30)
                    }

                ]
            ,
            _arrayValueTaxableOldOption: [
                {
                    _income: to_2_5lack_old,
                    _taxPercentage: 0,
                    _deductionTax: calculateTaxSalb(to_2_5lack_old, 0)
                },
                {
                    _income: to_25_to_5lack_old,
                    _taxPercentage: oldOptiontaxableSalary > 500000 ? 5 : 0,
                    _deductionTax: oldOptiontaxableSalary > 500000 ? calculateTaxSalb(to_25_to_5lack_old, 5) : calculateTaxSalb(to_25_to_5lack_old, 0)
                },
                {
                    _income: to_5_to_10lack_old,
                    _taxPercentage: 20,
                    _deductionTax: calculateTaxSalb(to_5_to_10lack_old, 20)
                },
                {
                    _income: to_10_more_old,
                    _taxPercentage: 30,
                    _deductionTax: calculateTaxSalb(to_10_more_old, 30)
                }
            ],
            _totalTaxPayable: calculateTaxSalb(to_2_5lack, 0) + calculateTaxSalb(to_25_to_5lack, 5) + calculateTaxSalb(to_5_to_75lack, 10) + calculateTaxSalb(to_75_to_10lack, 15) + calculateTaxSalb(to_10_to_12_5lack, 20) + calculateTaxSalb(to_12_5_to_15lack, 25) + calculateTaxSalb(to_15_more, 30),
            _taxPayableForOldOption: {
                _0to2_5lack: {
                    _income: to_2_5lack_old,
                    _taxPercentage: 0,
                    _deductionTax: calculateTaxSalb(to_2_5lack_old, 0)
                },
                _2_5to5lack: {
                    _income: to_25_to_5lack_old,
                    _taxPercentage: oldOptiontaxableSalary > 500000 ? 5 : 0,
                    _deductionTax: oldOptiontaxableSalary > 500000 ? calculateTaxSalb(to_25_to_5lack_old, 5) : calculateTaxSalb(to_25_to_5lack_old, 0)
                },
                _5to10lack: {
                    _income: to_5_to_10lack_old,
                    _taxPercentage: 20,
                    _deductionTax: calculateTaxSalb(to_5_to_10lack_old, 20)
                },
                _10to_more: {
                    _income: to_10_more_old,
                    _taxPercentage: 30,
                    _deductionTax: calculateTaxSalb(to_10_more_old, 30)
                }

            },
            _totalTaxPayable_old: (oldOptiontaxableSalary > 500000 ? calculateTaxSalb(to_25_to_5lack_old, 5) : calculateTaxSalb(to_25_to_5lack_old, 0)) + calculateTaxSalb(to_5_to_10lack_old, 20) + calculateTaxSalb(to_10_more_old, 30)


        }
        return userTotalIncomeValue;
    }


    useEffect(() => {
        //console.log('__usereffect function running ......')
        const calculateResult = () => {
            // console.log('_formValue', formValue);
            // console.log('_allIncomeValue', allIncomeValue);
        }
        calculateResult();
    }, [formValue, allIncomeValue])

    return (
        <>
            <Container>
                <Card className="mT20">
                    <Card.Header>Income Tax  Calculator</Card.Header>
                    <Card.Body className="incomeForm">
                        <Form name="incomeTaxCalculate" onSubmit={taxFormSubmit}>
                            <Card.Header>Income Source</Card.Header>
                            <Row>
                                <Col>
                                    <FormCom _objData={selectObjData} />
                                </Col>
                            </Row>
                            <Card.Header>Deductions</Card.Header>
                            <Row>
                                <Col>
                                    <FormCom _objData={deductionsData} />
                                </Col>
                            </Row>
                            <Button variant="primary" className="custom-btn" type="submit">Calculate Tax</Button>
                            <div className="incomeResult">
                                <IncomeTextResult _incomeTaxValue={allIncomeValue} _userDetails={formValue} />
                            </div>
                        </Form>


                        <BudgetTextDetails _budgetDataText={_BudgetDataText.default} />
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
}

export default IncomeTaxClcComp;
