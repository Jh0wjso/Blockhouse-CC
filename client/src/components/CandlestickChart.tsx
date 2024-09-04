"use client";
import { useEffect, useState } from 'react';
import { Chart as ChartJS } from 'chart.js/auto';
import { CandlestickController, CandlestickElement } from 'chartjs-chart-financial';
import { Chart } from 'react-chartjs-2';
import axios from 'axios';

ChartJS.register(CandlestickController, CandlestickElement);

export default function CandlestickChart() {
  const [chartData, setChartData] = useState<any>(null);

  useEffect(() => {
    axios.get('/api/candlestick-data')
      .then(response => setChartData(response.data))
      .catch(error => console.error(error));
  }, []);

  const data = {
    datasets: [
      {
        label: 'Candlestick Data',
        data: chartData?.data || [],
        color: {
          up: '#00ff00',
          down: '#ff0000',
          unchanged: '#0000ff',
        },
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: false,
      },
    },
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      {chartData && <Chart type="candlestick" data={data} options={options} />}
    </div>
  );
}
