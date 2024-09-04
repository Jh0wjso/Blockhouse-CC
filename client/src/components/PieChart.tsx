"use client";
import { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import axios from 'axios';

export default function PieChart() {
  const [chartData, setChartData] = useState<any>(null);

  useEffect(() => {
    axios.get('/api/pie-chart-data')
      .then(response => setChartData(response.data))
      .catch(error => console.error(error));
  }, []);

  const data = {
    labels: chartData?.labels || [],
    datasets: [
      {
        label: 'Pie Chart Data',
        data: chartData?.data || [],
        backgroundColor: ['#f87171', '#60a5fa', '#fbbf24'],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {},
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      {chartData && <Pie data={data} options={options} />}
    </div>
  );
}
