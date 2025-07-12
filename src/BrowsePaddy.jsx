import React from 'react';
import Layout from './Layout';

export default function BrowsePaddy() {
  return (
    <Layout>
      <main className="px-4 sm:px-8 py-12 max-w-5xl mx-auto min-h-[80vh] flex flex-col justify-center">
        <h2 className="text-3xl font-bold text-green-900 mb-4">Browse Paddy</h2>
        <p className="text-lg text-gray-800 mb-6">
          Explore all available paddy varieties from farmers across India. Use filters to find the best match for your needs.
        </p>
        {/* Filter UI placeholder */}
        <div className="mb-8 flex flex-wrap gap-4">
          <input type="text" placeholder="Search by variety..." className="border px-4 py-2 rounded w-48" />
          <input type="text" placeholder="Location..." className="border px-4 py-2 rounded w-48" />
          <input type="number" placeholder="Min Quantity (tons)" className="border px-4 py-2 rounded w-48" />
          <button className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800">Filter</button>
        </div>
        {/* Sample listing cards */}
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold text-green-800 mb-2">IR64 Paddy</h3>
            <p className="text-gray-700 mb-2">Location: Andhra Pradesh</p>
            <p className="text-gray-700 mb-2">Quantity: 10 tons</p>
            <button className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800">Contact Farmer</button>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold text-green-800 mb-2">Sona Masoori</h3>
            <p className="text-gray-700 mb-2">Location: Karnataka</p>
            <p className="text-gray-700 mb-2">Quantity: 8 tons</p>
            <button className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800">Contact Farmer</button>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold text-green-800 mb-2">BPT 5204</h3>
            <p className="text-gray-700 mb-2">Location: Telangana</p>
            <p className="text-gray-700 mb-2">Quantity: 12 tons</p>
            <button className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800">Contact Farmer</button>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold text-green-800 mb-2">MTU 1010</h3>
            <p className="text-gray-700 mb-2">Location: West Bengal</p>
            <p className="text-gray-700 mb-2">Quantity: 15 tons</p>
            <button className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800">Contact Farmer</button>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold text-green-800 mb-2">Swarna Paddy</h3>
            <p className="text-gray-700 mb-2">Location: Odisha</p>
            <p className="text-gray-700 mb-2">Quantity: 9 tons</p>
            <button className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800">Contact Farmer</button>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold text-green-800 mb-2">Pusa Basmati</h3>
            <p className="text-gray-700 mb-2">Location: Punjab</p>
            <p className="text-gray-700 mb-2">Quantity: 7 tons</p>
            <button className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800">Contact Farmer</button>
          </div>
        </div>
      </main>
    </Layout>
  );
}
