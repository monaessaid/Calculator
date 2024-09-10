import React from 'react';

function CalculatorButton(props) {
    return (
        <input
            type= 'button'
            value= {props.caption}
            className = {props.caption === "=" ? "calculator-equal-button": "calculator-buttons"}
            onClick={props.onClick}
            />
    );
}

export default CalculatorButton;