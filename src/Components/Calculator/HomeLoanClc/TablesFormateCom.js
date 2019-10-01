import React from "react";
import Table from "react-bootstrap/Table";

const TableFormateDataCom = props => {
  console.log(props);
  return (
    <>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Payment No.</th>
            <th>Begining Balance</th>
            <th>EMI</th>
            <th>Principal</th>
            <th>Interest</th>
            <th>Ending Balance</th>
          </tr>
        </thead>
        <tbody>
          {props.emiDataObj && props.emiDataObj.length > 0
            ? props.emiDataObj.map(item => {
                return (
                  <tr key={item.startDateData}>
                    <td>{item.startDateData}</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>{item.principalePayData}</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                );
              })
            : null}
        </tbody>
      </Table>
    </>
  );
};

export default TableFormateDataCom;
