import React from "react";
import Table from "react-bootstrap/Table";
import { Commafy } from "../../../ShareCommon/Utils";

const TableFormateDataCom = props => {
  console.log(props);
  return (
    <>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Payment No.</th>
            <th>Begining Balance Principal</th>
            <th>EMI</th>
            <th>Principal</th>
            <th>Interest</th>
            <th>Ending Balance Principal</th>
          </tr>
        </thead>
        <tbody>
          {props.emiDataObj && props.emiDataObj.length > 0
            ? props.emiDataObj.map(item => {
                return (
                  <tr key={item.startDateData}>
                    <td>{item.startDateData}</td>
                    <td>{Commafy(item.beginingBalance.toFixed(2))}</td>
                    <td>{item.emiPay.toFixed(2)}</td>
                    <td>{item.principalePayData.toFixed(2)}</td>
                    <td>{item.InterestPay.toFixed(2)}</td>
                    <td>{item.endiningBalance.toFixed(2)}</td>
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
