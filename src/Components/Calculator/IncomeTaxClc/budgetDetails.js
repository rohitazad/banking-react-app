import React from 'react';
import Table from 'react-bootstrap/Table'

function BudgetTextDetails(props) {
    //console.log(props);

    const htmlTableRender = (tableObj) => {
        //debugger
        return tableObj.map((i, j) => {
            let testD = [];
            if (i.type === 'head' && j === 0) {
                testD.push(<thead key={j + 100}><tr>
                    <th>
                        {i.title}
                    </th>
                    <th>
                        {i.title_2}
                    </th>
                </tr></thead>)
            } else if (i.type === 'text' && j !== 0) {
                testD.push(<tbody key={j + 102}><tr>
                    <td>
                        {i.title}
                    </td>
                    <td>
                        {i.title_2}
                    </td>
                </tr></tbody>)
            }
            return testD;
        })


    }

    const TableRenderData = () => {
        return <Table striped bordered hover>
            {htmlTableRender(props._budgetDataText.textDetailsText)}
        </Table>
    }
    return <>
        <h2>{props._budgetDataText.textDetailHeadText}</h2>
        {TableRenderData()}
    </>
}

export default BudgetTextDetails;