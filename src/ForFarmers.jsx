import React from 'react';
import Layout from './Layout';

export default function ForFarmers() {
  return (
    <Layout>
      <main className="relative px-4 sm:px-8 py-12 max-w-3xl mx-auto min-h-[80vh] flex flex-col justify-center">
        <div className="absolute inset-0 w-full h-full bg-cover bg-center opacity-20 -z-10" style={{backgroundImage: "url('/images/farmer-with-paddy.png')"}}></div>
        <h2 className="text-3xl font-bold text-green-900 mb-4 relative">For Farmers</h2>
        <p className="text-lg text-gray-800 mb-6 relative">
          PaddyKart helps farmers sell their paddy directly to buyers, access logistics and storage, and get fair prices. List your harvest, connect with buyers, and grow your business with us!
        </p>
        <div className="bg-white rounded-lg shadow p-6 mb-8 relative">
          <h3 className="text-xl font-semibold text-green-800 mb-2">Farmer Benefits</h3>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Easy listing of paddy harvests</li>
            <li>Direct access to bulk buyers</li>
            <li>Support for transport and storage</li>
            <li>Verified buyer network</li>
            <li>Transparent payments</li>
          </ul>
        </div>
        <div className="text-green-900 font-medium relative">
          Join PaddyKart and empower your farming journey!
        </div>
      </main>
    </Layout>
  );
}
