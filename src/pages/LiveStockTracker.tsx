import React, { useState, useEffect } from 'react';
import { Activity, Eye, Heart, Thermometer, Droplets, Wind } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

interface LiveStockData {
  totalChickens: number;
  totalEggs: number;
  dailyEggProduction: number;
  temperature: number;
  humidity: number;
  feedLevel: number;
  waterLevel: number;
  healthStatus: 'excellent' | 'good' | 'warning' | 'critical';
  lastUpdated: string;
}

const LiveStockTracker: React.FC = () => {
  const [stockData, setStockData] = useState<LiveStockData>({
    totalChickens: 0,
    totalEggs: 0,
    dailyEggProduction: 0,
    temperature: 0,
    humidity: 0,
    feedLevel: 0,
    waterLevel: 0,
    healthStatus: 'good',
    lastUpdated: new Date().toISOString(),
  });

  const [isConnected, setIsConnected] = useState(false);

  // Simulate real-time data updates
  useEffect(() => {
    const generateRealisticData = (): LiveStockData => {
      const baseTime = Date.now();
      const variation = Math.sin(baseTime / 10000) * 0.1; // Slow variation
      
      return {
        totalChickens: Math.floor(1200 + Math.random() * 50),
        totalEggs: Math.floor(800 + Math.random() * 100),
        dailyEggProduction: Math.floor(850 + variation * 50 + Math.random() * 20),
        temperature: Number((22 + variation * 3 + Math.random() * 2).toFixed(1)),
        humidity: Math.floor(65 + variation * 10 + Math.random() * 5),
        feedLevel: Math.floor(75 + Math.random() * 20),
        waterLevel: Math.floor(80 + Math.random() * 15),
        healthStatus: Math.random() > 0.9 ? 'warning' : 'good' as 'excellent' | 'good' | 'warning' | 'critical',
        lastUpdated: new Date().toISOString(),
      };
    };

    // Initial data load
    setStockData(generateRealisticData());
    setIsConnected(true);

    // Update data every 5 seconds to simulate real-time updates
    const interval = setInterval(() => {
      setStockData(generateRealisticData());
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getHealthStatusColor = (status: string) => {
    switch (status) {
      case 'excellent': return 'text-green-600 bg-green-100';
      case 'good': return 'text-blue-600 bg-blue-100';
      case 'warning': return 'text-yellow-600 bg-yellow-100';
      case 'critical': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusDot = (status: string) => {
    switch (status) {
      case 'excellent': return 'bg-green-500';
      case 'good': return 'bg-blue-500';
      case 'warning': return 'bg-yellow-500';
      case 'critical': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <>
      <Helmet>
        <title>Live Stock Tracker - Real-time Farm Monitoring | FarmFresh Poultry</title>
        <meta name="description" content="Monitor our farm in real-time. Live statistics, environmental conditions, and stock levels from FarmFresh Poultry farm." />
      </Helmet>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold text-gray-800">Live Stock Tracker</h1>
            <div className="flex items-center space-x-2">
              <div className={`w-3 h-3 rounded-full ${isConnected ? 'bg-green-500' : 'bg-red-500'} animate-pulse`}></div>
              <span className="text-sm font-medium text-gray-600">
                {isConnected ? 'Connected' : 'Disconnected'}
              </span>
            </div>
          </div>
          <p className="text-gray-600">
            Monitor our farm operations in real-time. Data updates every 5 seconds.
          </p>
          <p className="text-sm text-gray-500 mt-1">
            Last updated: {new Date(stockData.lastUpdated).toLocaleString()}
          </p>
        </div>

        {/* Status Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Live Chickens</p>
                <p className="text-3xl font-bold text-gray-800">{stockData.totalChickens.toLocaleString()}</p>
              </div>
              <Activity className="w-8 h-8 text-amber-600" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Eggs in Storage</p>
                <p className="text-3xl font-bold text-gray-800">{stockData.totalEggs.toLocaleString()}</p>
              </div>
              <Eye className="w-8 h-8 text-blue-600" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Daily Production</p>
                <p className="text-3xl font-bold text-gray-800">{stockData.dailyEggProduction}</p>
                <p className="text-sm text-gray-500">eggs today</p>
              </div>
              <Heart className="w-8 h-8 text-green-600" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Health Status</p>
                <div className="flex items-center mt-2">
                  <div className={`w-3 h-3 rounded-full ${getStatusDot(stockData.healthStatus)} mr-2`}></div>
                  <span className={`text-sm font-medium px-2 py-1 rounded-full ${getHealthStatusColor(stockData.healthStatus)}`}>
                    {stockData.healthStatus.charAt(0).toUpperCase() + stockData.healthStatus.slice(1)}
                  </span>
                </div>
              </div>
              <Activity className="w-8 h-8 text-purple-600" />
            </div>
          </div>
        </div>

        {/* Environmental Conditions */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Environmental Conditions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-red-100 rounded-lg">
                <Thermometer className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Temperature</p>
                <p className="text-2xl font-bold text-gray-800">{stockData.temperature}°C</p>
                <p className="text-sm text-gray-500">Optimal: 20-25°C</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Droplets className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Humidity</p>
                <p className="text-2xl font-bold text-gray-800">{stockData.humidity}%</p>
                <p className="text-sm text-gray-500">Optimal: 60-70%</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="p-3 bg-green-100 rounded-lg">
                <Wind className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Air Quality</p>
                <p className="text-2xl font-bold text-gray-800">Good</p>
                <p className="text-sm text-gray-500">Ventilation: Active</p>
              </div>
            </div>
          </div>
        </div>

        {/* Resource Levels */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Resource Levels</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm font-medium text-gray-600">Feed Level</p>
                <p className="text-sm font-semibold text-gray-800">{stockData.feedLevel}%</p>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div 
                  className={`h-4 rounded-full transition-all duration-300 ${
                    stockData.feedLevel > 50 ? 'bg-green-500' : 
                    stockData.feedLevel > 25 ? 'bg-yellow-500' : 'bg-red-500'
                  }`}
                  style={{ width: `${stockData.feedLevel}%` }}
                ></div>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                {stockData.feedLevel > 50 ? 'Sufficient feed available' : 
                 stockData.feedLevel > 25 ? 'Feed running low' : 'Critical: Refill needed'}
              </p>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm font-medium text-gray-600">Water Level</p>
                <p className="text-sm font-semibold text-gray-800">{stockData.waterLevel}%</p>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div 
                  className={`h-4 rounded-full transition-all duration-300 ${
                    stockData.waterLevel > 50 ? 'bg-blue-500' : 
                    stockData.waterLevel > 25 ? 'bg-yellow-500' : 'bg-red-500'
                  }`}
                  style={{ width: `${stockData.waterLevel}%` }}
                ></div>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                {stockData.waterLevel > 50 ? 'Water supply is good' : 
                 stockData.waterLevel > 25 ? 'Water level moderate' : 'Critical: Water refill needed'}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600 text-sm">
            Data is updated automatically every 5 seconds from our farm monitoring systems.
          </p>
        </div>
      </div>
    </>
  );
};

export default LiveStockTracker;