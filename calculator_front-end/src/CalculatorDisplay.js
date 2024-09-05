import React from 'react';

function CalculatorDisplay(props) {

    return (
        <input 
            value={props.text}
            readOnly={true} />
        );
    }

    export default CalculatorDisplay;