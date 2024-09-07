import React from 'react';
import CalculatorPanel from './CalculatorPanel';

class Calculator extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            result: "",
            numbers: ["", ""],
            numberIdx: 0,
        };
    }

    operationHandler(operation) {

    }

    numberHandler(number) {

    }

    dotHandler() {

    }

    clearHandler() {

    }

    equalHandler() {

    }

    render () {

        return (
            <div className="calculator-grid-container">
                <CalculatorPanel 
                    result={this.state.result}
                    numberClicked={this.numberHandler.bind(this)}
                    operationClicked={this.operationHandler.bind(this)}
                    dotClicked={this.dotHandler.bind(this)}
                    equalClicked={this.equalHandler.bind(this)}
                    clearClicked={this.clearHandler.bind(this)}
                />
            </div>
        )

    }
}

export default Calculator;