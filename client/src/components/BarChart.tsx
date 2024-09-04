"use client";
import React from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function BarChart() {
  const [chartData, setChartData] = useState<any>(null);

  useEffect(() => {
    axios.get('/api/bar-chart-data')
      .then(response => setChartData(response.data))
      .catch(error => console.error(error));
  }, []);

  const data = {
    labels: chartData?.labels || [],
    datasets: [
      {
        label: 'Bar Chart Data',
        data: chartData?.data || [],
        backgroundColor: '#4ade80',
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
      {chartData && <Bar data={data} options={options} />}
    </div>
  );
}
