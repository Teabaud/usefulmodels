import React, { useState } from 'react';

interface SimulationComponentProps {
  parameter1: number;
  parameter2: number;
}

const SimulationComponent: React.FC<SimulationComponentProps> = ({ parameter1, parameter2 }) => {
  const [param1, setParam1] = useState(parameter1);
  const [param2, setParam2] = useState(parameter2);

  const result = param1 * param2;

  return (
    <div>
      <div>
        <label>
          Parameter 1:
          <input
            type="number"
            value={param1}
            onChange={(e) => setParam1(Number(e.target.value))}
          />
        </label>
      </div>
      <div>
        <label>
          Parameter 2:
          <input
            type="number"
            value={param2}
            onChange={(e) => setParam2(Number(e.target.value))}
          />
        </label>
      </div>
      <div>
        <strong>Result: {result}</strong>
      </div>
    </div>
  );
};

export default SimulationComponent;
