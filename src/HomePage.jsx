import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Layout from './Layout';

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <Layout>
      {/* Hero Section */}
      <section
        className="relative bg-green-100 px-4 sm:px-8 py-20 min-h-[480px] flex items-center"
        style={{
          backgroundImage: "url('/images/Farmer.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
        }}
      >
        <div className="absolute inset-0 bg-green-100 bg-opacity-80"></div>
        <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-start gap-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-950 drop-shadow-xl leading-tight mb-2">
            Sell or Buy Paddy<br />
            <span className="block">Directly from Indian Farmers</span>
          </h2>
          <p className="text-lg text-green-900 max-w-xl drop-shadow-xl mb-6 font-medium">
            Connecting paddy farmers to bulk buyers, rice mills, and vendors — no middlemen involved.
          </p>
          <button
            className="bg-green-800 text-white px-8 py-3 rounded text-lg font-semibold shadow hover:bg-green-900 transition"
            onClick={() => navigate('/PaddyListings')}
          >
            Explore Paddy Listings
          </button>
        </div>
      </section>

      {/* Buyers Section */}
      <section className="bg-[#fffbe6] px-4 sm:px-8 py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">Get Fresh Paddy from Trusted Farmers</h3>
            <p className="text-gray-700 text-lg mb-8 max-w-md">
              Find verified farmers across India growing varieties like IR64, Sona Masoori, BPT, and more.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-green-800 text-white px-6 py-2 rounded font-semibold shadow hover:bg-green-900 transition">Browse Paddy</button>
              <button className="border border-green-800 text-green-800 px-6 py-2 rounded font-semibold bg-white hover:bg-green-50 transition">Contact a Farmer</button>
            </div>
          </div>
          <div className="flex justify-center order-1 md:order-2 mb-8 md:mb-0">
             <img
              src="/images/Paddy Bags.png"
              alt="Paddy Bags"
              className="rounded-lg shadow-lg w-full max-w-md object-cover"
            />
          </div>
        </div>
      </section>

      {/* Farmer Section */}
      <section className="bg-[#f9f6ee] px-4 sm:px-8 py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center mb-8 md:mb-0">
            <img
              src="/images/Farmer with Paddy.png"
              alt="Farmer with Paddy"
              className="rounded-lg shadow-lg w-full max-w-md object-cover"
            />
          </div>
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">Are You a Paddy Farmer? Sell Your Crop Easily</h3>
            <p className="text-gray-700 text-lg mb-8 max-w-md">
              List your paddy harvest with one click. We connect you directly with verified buyers.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-green-800 text-white px-6 py-2 rounded font-semibold shadow hover:bg-green-900 transition">Register as Farmer</button>
              <button className="border border-green-800 text-green-800 px-6 py-2 rounded font-semibold bg-white hover:bg-green-50 transition">See How It Works</button>
            </div>
          </div>
        </div>
      </section>

      {/* Transport/Storage Section */}
      <section className="bg-[#fffbe6] px-4 sm:px-8 py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">Need Help with Transport or Storage?</h3>
            <p className="text-gray-700 text-lg mb-8 max-w-md">
              We offer warehouse tie-ups and logistics assistance for smoother transactions.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="border border-green-800 text-green-800 px-6 py-2 rounded font-semibold bg-white hover:bg-green-50 transition">Get Storage Help</button>
              <button className="border border-green-800 text-green-800 px-6 py-2 rounded font-semibold bg-white hover:bg-green-50 transition">Request Transport</button>
            </div>
          </div>
          <div className="flex justify-center mb-8 md:mb-0">
            <img
              src="/images/Transport Tractor.png"
              alt="Transport Tractor"
              className="rounded-lg shadow-lg w-full max-w-md object-cover"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}
