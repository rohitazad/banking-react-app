import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup'


function IncomeTextResult(props) {
    console.log('__result data ', props);

    let numToWords = (n) => {
        const arr = x => Array.from(x);
        const num = x => Number(x) || 0;
        //const str = x => String(x);
        const isEmpty = xs => xs.length === 0;
        const take = n => xs => xs.slice(0, n);
        const drop = n => xs => xs.slice(n);
        const reverse = xs => xs.slice(0).reverse();
        const comp = f => g => x => f(g(x));
        const not = x => !x;
        const chunk = n => xs =>
            isEmpty(xs) ? [] : [take(n)(xs), ...chunk(n)(drop(n)(xs))];

        // numToWords :: (Number a, String a) => a -> String


        let a = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

        let b = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

        let g = ['', 'thousand', 'million', 'billion', 'trillion', 'quadrillion', 'quintillion', 'sextillion', 'septillion', 'octillion', 'nonillion'];

        // this part is really nasty still
        // it might edit this again later to show how Monoids could fix this up

        let makeGroup = ([ones, tens, huns]) => {
            return [num(huns) === 0 ? '' : a[huns] + ' hundred ', num(ones) === 0 ? b[tens] : (b[tens] && b[tens]) + '-' || '', a[tens + ones] || a[ones]].join('');
        };

        let thousand = (group, i) => group === '' ? group : `${group} ${g[i]}`;
        if (typeof n === 'number')
            return numToWords(String(n));
        else if (n === '0')
            return 'zero';
        else
            return comp(chunk(3))(reverse)(arr(n))
                .map(makeGroup)
                .map(thousand)
                .filter(comp(not)(isEmpty))
                .reverse()
                .join(' ');
    }

    // const numberIntoWords = (num) => {
    //     let a = ['', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine ', 'ten ', 'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen '];
    //     let b = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    //     if ((num = num.toString()).length > 9) return 'overflow';
    //     let n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    //     if (!n) return; var str = '';
    //     str += (n[1] !== 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'crore ' : '';
    //     str += (n[2] !== 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'lakh ' : '';
    //     str += (n[3] !== 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'thousand ' : '';
    //     str += (n[4] !== 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'hundred ' : '';
    //     str += (n[5] !== 0) ? ((str !== '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) + 'rupes only ' : '';
    //     return str;
    // }

    const numberConvertIntoINDRupes = (amount, decimalCount = 2, decimal = ".", thousands = ",") => {
        try {
            decimalCount = Math.abs(decimalCount);
            decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

            const negativeSign = amount < 0 ? "-" : "";

            let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
            let j = (i.length > 3) ? i.length % 3 : 0;

            return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");
        } catch (e) {
            console.log(e)
        }
    }
    const taxableValueTextPrint = (objTaxValue, totalTaxValue) => {
        return totalTaxValue === 0 ? <ListGroup.Item as="li"> Your tax is 0 </ListGroup.Item> : objTaxValue.map((i, j) => {
            return i._deductionTax !== 0 ? <ListGroup.Item as="li" key={j}>
                <span>{numberConvertIntoINDRupes(i._income)}</span>
                <span>{i._taxPercentage} %</span>
                <strong>INR {numberConvertIntoINDRupes(i._deductionTax)}</strong>
            </ListGroup.Item> : null
        })
    }
    const _oldResultData = () => {
        return <Card>
            <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1"> Old Tax Slab For {props._userDetails.assessmentyear} </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
                <Card.Body>

                    <ListGroup as="ul">
                        <ListGroup.Item as="li" active> Tax for  {props._userDetails.assessmentyear} OLD Slab</ListGroup.Item>
                        <ListGroup.Item as="li">
                            <span>Your Total Salary is</span>
                            <strong title={numToWords(props._incomeTaxValue.totalIncome)}>{numberConvertIntoINDRupes(props._incomeTaxValue.totalIncome)} </strong>
                        </ListGroup.Item>
                        <ListGroup.Item as="li">
                            <span>Your Total Deduction 80C  is</span>
                            <strong>{numberConvertIntoINDRupes(props._incomeTaxValue._totalDedection_80c)}</strong>
                        </ListGroup.Item>
                        <ListGroup.Item as="li">
                            <span>Your Total Deduction 80D is</span>
                            <strong>{numberConvertIntoINDRupes(props._incomeTaxValue._totalDedection_80d)}</strong>
                        </ListGroup.Item>
                        <ListGroup.Item as="li">
                            <span>After Deduction 80C and 80D Your   Salary is</span>
                            <strong>{numberConvertIntoINDRupes(props._incomeTaxValue.totalIncome - (props._incomeTaxValue._totalDedection_80c + props._incomeTaxValue._totalDedection_80d))}</strong>
                        </ListGroup.Item>
                        <ListGroup.Item as="li">
                            <span>Your Taxable  Salary is</span>
                            <strong>{numberConvertIntoINDRupes(props._incomeTaxValue._old_taxableSalary)}</strong>
                        </ListGroup.Item>
                        <ListGroup.Item as="li">
                            <span>Your Total Tax  is</span>
                            <strong>{numberConvertIntoINDRupes(props._incomeTaxValue._totalTaxPayable_old)}</strong>
                        </ListGroup.Item>
                    </ListGroup>
                    <hr />
                    <ListGroup as="ul">
                        <ListGroup.Item as="li" active> Tax Calculation base on   {props._userDetails.assessmentyear} OLD Slab</ListGroup.Item>
                        {taxableValueTextPrint(props._incomeTaxValue._arrayValueTaxableOldOption, props._incomeTaxValue._totalTaxPayable_old)}
                    </ListGroup>

                </Card.Body>
            </Accordion.Collapse>
        </Card>
    };
    const _newResultData = () => {
        return <Card>
            <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">New Tax Slab For {props._userDetails.assessmentyear} </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
                <Card.Body>
                    <ListGroup as="ul">
                        <ListGroup.Item as="li" active> Tax for  {props._userDetails.assessmentyear} New Slab</ListGroup.Item>
                        <ListGroup.Item as="li">
                            <span>Your Total Salary is</span>
                            <strong title={numToWords(props._incomeTaxValue.totalIncome)}>{numberConvertIntoINDRupes(props._incomeTaxValue.totalIncome)} </strong>
                        </ListGroup.Item>
                        <ListGroup.Item as="li">
                            <span>Your Taxable  Salary is</span>
                            <strong>{numberConvertIntoINDRupes(props._incomeTaxValue._new_taxableSalary)}</strong>
                        </ListGroup.Item>
                        <ListGroup.Item as="li">
                            <span>Your Total Tax  is</span>
                            <strong>{numberConvertIntoINDRupes(props._incomeTaxValue._totalTaxPayable)}</strong>
                        </ListGroup.Item>
                    </ListGroup>
                    <hr />
                    <ListGroup as="ul">
                        <ListGroup.Item as="li" active> Tax Calculation base on   {props._userDetails.assessmentyear} New Slab</ListGroup.Item>
                        {taxableValueTextPrint(props._incomeTaxValue._arrayValueTaxableNewOption, props._incomeTaxValue._totalTaxPayable)}
                    </ListGroup>
                </Card.Body>
            </Accordion.Collapse>
        </Card>;
    };


    const htmlRender = () => {
        if (props._userDetails && props._userDetails.assessmentyear === '2020-21') {
            return <Accordion defaultActiveKey="0">
                {_oldResultData()}
                {_newResultData()}
            </Accordion>
        } else if (props._userDetails && props._userDetails.assessmentyear === '2019-20') {
            return <Accordion defaultActiveKey="0">
                {_oldResultData()}
            </Accordion>
        }
        return "no data";
    }

    return <>
        {
            htmlRender()
        }

    </>
}

export default IncomeTextResult;