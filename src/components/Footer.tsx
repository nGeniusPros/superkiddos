"use client";

// @ts-nocheck
// 21st.dev Magic Component Platform
// Create a footer component for a landing page
// Use the following color palette: primary #24afe3, secondary #f58634, accent #fcd561, background #ffffff, text #333333
// Include contact information, social media links, and copyright information
// Make the footer responsive

import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#333333] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#fcd561]">SuperKiddos Dental & Orthodontics</h3>
            <p className="text-gray-300 mb-4">
              Specialized Oral Myofunctional Therapy for children, helping them breathe better,
              sleep soundly, and speak clearly.
            </p>
            <p className="text-gray-300">
              Create Lasting Beautiful Healthy Smiles
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#fcd561]">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition duration-200">HOME</a></li>
              <li><a href="#problem" className="text-gray-300 hover:text-white transition duration-200">PROBLEM</a></li>
              <li><a href="#solution" className="text-gray-300 hover:text-white transition duration-200">SOLUTION</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-white transition duration-200">TESTIMONIALS</a></li>
              <li><a href="#features" className="text-gray-300 hover:text-white transition duration-200">FEATURES</a></li>
              <li><a href="#faq" className="text-gray-300 hover:text-white transition duration-200">FAQ</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#fcd561]">Contact Us</h3>
            <address className="not-italic text-gray-300 space-y-2">
              <p>5350 Topanga Canyon Blvd</p>
              <p>Woodland Hills, CA 91364</p>
              <p>Phone: 747-318-5448</p>
              <p>Email: info@superkiddos.com</p>
            </address>
          </div>

          {/* Office Hours */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#fcd561]">Office Hours</h3>
            <ul className="text-gray-300 space-y-2">
              <li>Monday: 9am - 5pm</li>
              <li>Tuesday: 9am - 5pm</li>
              <li>Wednesday: 9am - 5pm</li>
              <li>Thursday: 9am - 5pm</li>
              <li>Friday: 9am - 5pm</li>
              <li>Saturday: By appointment</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {currentYear} SuperKiddos Dental & Orthodontics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
