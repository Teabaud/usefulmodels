import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import '../utils/chartSetup';

interface InteractivePlotProps {
  data: {
    labels: string[];
    values: number[];
  };
}

const InteractivePlot: React.FC<InteractivePlotProps> = ({ data }) => {
  const [sliderValue, setSliderValue] = useState(50);

  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: 'My Dataset',
        data: data.values.map(val => val * (sliderValue / 50)),
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  return (
    <div>
      <Line data={chartData} />
      <input
        type="range"
        min="1"
        max="100"
        value={sliderValue}
        onChange={(e) => setSliderValue(Number(e.target.value))}
        style={{ width: '100%' }}
      />
    </div>
  );
};

export default InteractivePlot;
