import React from 'react';
import Layout from './Layout';

export default function AboutUs() {
  return (
    <Layout>
      <main className="relative px-4 sm:px-8 py-12 max-w-3xl mx-auto min-h-[80vh] flex flex-col justify-center">
        <div className="absolute inset-0 w-full h-full bg-cover bg-center opacity-20 -z-10" style={{backgroundImage: "url('/images/farmer-with-paddy.png')"}}></div>
        <h2 className="text-3xl font-bold text-green-900 mb-4 relative">About Us</h2>
        <p className="text-lg text-gray-800 mb-6 relative">
          PaddyKart is dedicated to empowering Indian paddy farmers by connecting them directly with bulk buyers, rice mills, and vendors. Our platform eliminates middlemen, ensuring fair prices and transparent transactions for everyone involved.
        </p>
        <div className="bg-white rounded-lg shadow p-6 mb-8 relative">
          <h3 className="text-xl font-semibold text-green-800 mb-2">Our Mission</h3>
          <p className="text-gray-700 mb-4">
            We strive to make paddy trading simple, secure, and beneficial for both farmers and buyers. By leveraging technology, we help farmers list their harvests, access logistics and storage solutions, and reach a wider market.
          </p>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Direct connections between farmers and buyers</li>
            <li>Verified farmer and buyer profiles</li>
            <li>Support for logistics and storage</li>
            <li>Transparent and fair pricing</li>
          </ul>
        </div>
        <div className="text-green-900 font-medium relative">
          Join us in transforming the paddy supply chain and supporting India's agricultural community!
        </div>
      </main>
    </Layout>
  );
}
