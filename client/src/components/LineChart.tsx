"use client";
import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

export default function LineChart() {
  const [chartData, setChartData] = useState<any>(null);

  useEffect(() => {
    axios.get('/api/line-chart-data')
      .then(response => setChartData(response.data))
      .catch(error => console.error(error));
  }, []);

  const data = {
    labels: chartData?.labels || [],
    datasets: [
      {
        label: 'Line Chart Data',
        data: chartData?.data || [],
        borderColor: '#3b82f6',
        backgroundColor: 'rgba(59, 130, 246, 0.5)',
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      {chartData && <Line data={data} options={options} />}
    </div>
  );
}
