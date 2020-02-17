import React from 'react';
import Table from 'react-bootstrap/Table'

function BudgetTextDetails(props) {
    //console.log(props);

    const htmlTableRender = (tableObj) => {
        //debugger

        return tableObj.map((i, j) => {
            let testD = [];
            if (i.type === 'head') {
                testD.push(<tr key={j + 100}>
                    <th>
                        {i.title}
                    </th>
                    <th>
                        {i.title_2}
                    </th>
                </tr>)
            }

            return testD;

        })


    }

    const TableRenderData = () => {
        return <Table striped bordered hover>
            {htmlTableRender(props._budgetDataText.textDetailsText)}
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Mark</td>
                </tr>
            </tbody>
        </Table>
    }
    return <>
        <h2>{props._budgetDataText.textDetailHeadText}</h2>
        {TableRenderData()}
    </>
}

export default BudgetTextDetails;