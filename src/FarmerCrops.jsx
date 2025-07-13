import React from 'react';
import Layout from './Layout';

export default function FarmerCrops() {
  return (
    <Layout>
      <main className="px-4 sm:px-8 py-12 max-w-6xl mx-auto min-h-[80vh]">
        <h2 className="text-3xl font-bold text-green-900 mb-8">Your Cultivated Crops</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <img src="/images/Paddy Bags.png" alt="Paddy" className="w-24 h-24 object-cover mb-4 rounded-full border" />
            <h3 className="text-xl font-semibold text-green-800 mb-2">Paddy</h3>
            <p className="text-gray-700 mb-2">Quantity: 10 tons</p>
            <button className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800">Sell Now</button>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <img src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=200&q=80" alt="Corn" className="w-24 h-24 object-cover mb-4 rounded-full border" />
            <h3 className="text-xl font-semibold text-green-800 mb-2">Corn</h3>
            <p className="text-gray-700 mb-2">Quantity: 5 tons</p>
            <button className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800">Sell Now</button>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <img src="https://images.unsplash.com/photo-1518976024611-38a2b1b1c8b9?auto=format&fit=crop&w=200&q=80" alt="Groundnut" className="w-24 h-24 object-cover mb-4 rounded-full border" />
            <h3 className="text-xl font-semibold text-green-800 mb-2">Groundnut</h3>
            <p className="text-gray-700 mb-2">Quantity: 3 tons</p>
            <button className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800">Sell Now</button>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <img src="https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=200&q=80" alt="Tomato" className="w-24 h-24 object-cover mb-4 rounded-full border" />
            <h3 className="text-xl font-semibold text-green-800 mb-2">Tomato</h3>
            <p className="text-gray-700 mb-2">Quantity: 2 tons</p>
            <button className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800">Sell Now</button>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <img src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=200&q=80" alt="Brinjal" className="w-24 h-24 object-cover mb-4 rounded-full border" />
            <h3 className="text-xl font-semibold text-green-800 mb-2">Brinjal</h3>
            <p className="text-gray-700 mb-2">Quantity: 1 ton</p>
            <button className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800">Sell Now</button>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <img src="https://images.unsplash.com/photo-1506089676908-3592f7389d4d?auto=format&fit=crop&w=200&q=80" alt="Chillies" className="w-24 h-24 object-cover mb-4 rounded-full border" />
            <h3 className="text-xl font-semibold text-green-800 mb-2">Chillies</h3>
            <p className="text-gray-700 mb-2">Quantity: 0.5 ton</p>
            <button className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800">Sell Now</button>
          </div>
        </div>
      </main>
    </Layout>
  );
}
