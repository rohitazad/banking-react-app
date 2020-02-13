import React from "react";



import FormSelectCom from '../../../ShareCommon/FormComponent/Select';
import FormNumberCom from '../../../ShareCommon/FormComponent/Number';

//const customData = require('../../../Assets/JsonApiData/incomeTaxJson.json');
function FormCom(props) {
    const selectObjData = props._objData;

    console.log('__selectObjData', selectObjData.default);
    const formSeclectComRender = () => {
        return selectObjData.map((i, j) => {
            //return console.log(i);
            if (i.type === 'select') {
                return <FormSelectCom key={i.controlId} _selectObj={i} />
            } else if (i.type === 'number') {
                return <FormNumberCom key={i.controlId} _selectObj={i} />
            }
            return null
        })
    }

    return (
        <>
            {formSeclectComRender()}
        </>
    )
}

export default FormCom;