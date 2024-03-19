import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

function Calculator() {
  const [ratioSecondPart, setRatioSecondPart] = useState('');
  const [gas, setGas] = useState('');
  const [premix, setPremix] = useState('');

  useEffect(() => {
    if (ratioSecondPart !== '' && gas !== '') {
      const premixAmount = (gas / parseFloat(ratioSecondPart)) * 1000; // Convert liters to milliliters
      setPremix(premixAmount);
    } else {
      setPremix('');
    }
  }, [ratioSecondPart, gas]);

  return (
    <div className="calculator">
      <Form>
        <Form.Group controlId="ratio">
          <Form.Control
            type="number"
            placeholder="45"
            value={ratioSecondPart}
            onChange={(e) => setRatioSecondPart(e.target.value)}
          />
                    <Form.Label>:1</Form.Label>

        </Form.Group>
        <Form.Group controlId="gas">
          <Form.Control
            type="number"
            placeholder="10"
            value={gas}
            onChange={(e) => setGas(parseFloat(e.target.value))}
          />
          <Form.Label>L</Form.Label>
        </Form.Group>
      </Form>
      {/* This is a condition render statement. !=='' && is checking if premix is empty or not. */}
      {premix !== '' ? (
  <div className="premix-result">
    <p>Add <br/><span>{premix.toFixed(0)} ML</span> of premix <br/>to <br/><span2>{gas} litres</span2> of gas</p>
  </div>
) : (
  <div className="premix-result">
    <p>Add <br/><span>NaN ML of premix</span> <br/>to <br/><span2>NaN litres of gas</span2></p>  </div>
)}
    </div>
  );
}

export default Calculator;
