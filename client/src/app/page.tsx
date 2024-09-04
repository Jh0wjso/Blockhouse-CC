import BarChart from '@/components/BarChart';
import CandlestickChart from '@/components/CandlestickChart';
import LineChart from '@/components/LineChart';
import PieChart from '@/components/PieChart';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Gráfico Candlestick */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Candlestick Chart</h2>
            <CandlestickChart />
          </div>
          
          {/* Gráfico Line */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Line Chart</h2>
            <LineChart />
          </div>

          {/* Gráfico Bar */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Bar Chart</h2>
            <BarChart />
          </div>

          {/* Gráfico Pie */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Pie Chart</h2>
            <PieChart />
          </div>
        </div>
      </div>
    </div>
  );
}
