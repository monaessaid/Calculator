import React from 'react';
import './App.css';
import Calculator from './Calculator';
import CalculatorApi from './CalculatorApi';
import CalculatorPanel from './CalculatorPanel';

function App() {
  return (
    <div className="App">
        <header className="App-header">
          <Calculator calculatorApi={new CalculatorApi('http://127.0.0.1:8080')} />
          {/* <CalculatorPanel /> */}
        </header>
    </div>
  );
}

export default App;