import React from 'react';
import Layout from './Layout';

export default function ContactFarmer() {
  return (
    <Layout>
      <main className="px-4 sm:px-8 py-12 max-w-5xl mx-auto min-h-[80vh] flex flex-col justify-center">
        {/* Sample Farmer Directory */}
        <h3 className="text-2xl font-bold text-green-900 mb-4">Featured Farmers</h3>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-white rounded-lg shadow p-6 flex gap-4 items-center">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Ramesh Kumar" className="w-16 h-16 rounded-full object-cover border" />
            <div>
              <h4 className="text-lg font-semibold text-green-800 mb-1">Ramesh Kumar</h4>
              <p className="text-gray-700 mb-1">Location: Andhra Pradesh</p>
              <p className="text-gray-700 mb-2">Variety: IR64 Paddy</p>
              <button className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800">Contact</button>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex gap-4 items-center">
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Sunita Devi" className="w-16 h-16 rounded-full object-cover border" />
            <div>
              <h4 className="text-lg font-semibold text-green-800 mb-1">Sunita Devi</h4>
              <p className="text-gray-700 mb-1">Location: Karnataka</p>
              <p className="text-gray-700 mb-2">Variety: Sona Masoori</p>
              <button className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800">Contact</button>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex gap-4 items-center">
            <img src="https://randomuser.me/api/portraits/men/65.jpg" alt="Ajay Singh" className="w-16 h-16 rounded-full object-cover border" />
            <div>
              <h4 className="text-lg font-semibold text-green-800 mb-1">Ajay Singh</h4>
              <p className="text-gray-700 mb-1">Location: Punjab</p>
              <p className="text-gray-700 mb-2">Variety: Pusa Basmati</p>
              <button className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800">Contact</button>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex gap-4 items-center">
            <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Lakshmi Rao" className="w-16 h-16 rounded-full object-cover border" />
            <div>
              <h4 className="text-lg font-semibold text-green-800 mb-1">Lakshmi Rao</h4>
              <p className="text-gray-700 mb-1">Location: Telangana</p>
              <p className="text-gray-700 mb-2">Variety: BPT 5204</p>
              <button className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800">Contact</button>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
