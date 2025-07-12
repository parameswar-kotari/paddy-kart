import React from 'react';
import Layout from './Layout';

export default function BulkOrders() {
  return (
    <Layout>
      <main className="relative px-4 sm:px-8 py-12 max-w-3xl mx-auto min-h-[80vh] flex flex-col justify-center">
        <div className="absolute inset-0 w-full h-full bg-cover bg-center opacity-20 -z-10" style={{backgroundImage: "url('/images/farmer-with-paddy.png')"}}></div>
        <h2 className="text-3xl font-bold text-green-900 mb-4 relative">Bulk Orders</h2>
        <p className="text-lg text-gray-800 mb-6 relative">
          PaddyKart connects bulk buyers, rice mills, and vendors directly with farmers for large quantity paddy purchases. Get access to verified suppliers, transparent pricing, and logistics support.
        </p>
        <div className="bg-white rounded-lg shadow p-6 mb-8 relative">
          <h3 className="text-xl font-semibold text-green-800 mb-2">Bulk Buyer Benefits</h3>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Direct sourcing from farmers</li>
            <li>Wide variety of paddy types</li>
            <li>Verified farmer profiles</li>
            <li>Logistics and storage assistance</li>
            <li>Competitive and transparent pricing</li>
          </ul>
        </div>
        <div className="text-green-900 font-medium relative">
          Register with PaddyKart for your bulk paddy needs!
        </div>
      </main>
    </Layout>
  );
}
