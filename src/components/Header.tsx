"use client";

// @ts-nocheck
// 21st.dev Magic Component Platform
// Create a header component for a landing page
// Use the following color palette: primary #24afe3, secondary #f58634, accent #fcd561, background #ffffff, text #333333
// Include the SuperKiddos logo, navigation links, and a contact button
// Make the header responsive and sticky

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center">
              <div className="relative h-16 w-40">
                <Image
                  src="/images/logo.svg"
                  alt="SuperKiddos Dental & Orthodontics"
                  fill
                  style={{ objectFit: 'contain' }}
                  className={`${isScrolled ? 'opacity-100' : 'opacity-90'}`}
                />
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <a href="#" className={`font-medium text-sm tracking-wide transition-colors duration-200 ${isScrolled ? 'text-gray-600 hover:text-[#24afe3]' : 'text-white hover:text-[#fcd561]'}`}>HOME</a>
            <a href="#problem" className={`font-medium text-sm tracking-wide transition-colors duration-200 ${isScrolled ? 'text-gray-600 hover:text-[#24afe3]' : 'text-white hover:text-[#fcd561]'}`}>PROBLEM</a>
            <a href="#solution" className={`font-medium text-sm tracking-wide transition-colors duration-200 ${isScrolled ? 'text-gray-600 hover:text-[#24afe3]' : 'text-white hover:text-[#fcd561]'}`}>SOLUTION</a>
            <a href="#testimonials" className={`font-medium text-sm tracking-wide transition-colors duration-200 ${isScrolled ? 'text-gray-600 hover:text-[#24afe3]' : 'text-white hover:text-[#fcd561]'}`}>TESTIMONIALS</a>
            <a href="#features" className={`font-medium text-sm tracking-wide transition-colors duration-200 ${isScrolled ? 'text-gray-600 hover:text-[#24afe3]' : 'text-white hover:text-[#fcd561]'}`}>FEATURES</a>
            <a href="#faq" className={`font-medium text-sm tracking-wide transition-colors duration-200 ${isScrolled ? 'text-gray-600 hover:text-[#24afe3]' : 'text-white hover:text-[#fcd561]'}`}>FAQ</a>
          </nav>

          {/* Contact Button */}
          <div className="hidden md:flex items-center">
            <a href="https://www.patientviewer.com/WebSched/23_3_42/GWT/WebSched/WebSched.html?V=32335F335F3432&I=31302E31302E31312E3831&P=3530303032&R=3130303030&S=3130303030&T=3930303030&N=3834363036&K=3330323337&C=6402&UP=1&CID=30&RSC=406" target="_blank" rel="noopener noreferrer" className="bg-[#f58634] hover:bg-[#e47624] text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out inline-block">
              Schedule Your Free Consultation Today!
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-500 hover:text-gray-600 focus:outline-none"
            >
              <svg className={`h-6 w-6 ${isScrolled ? 'text-gray-600' : 'text-white'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-white shadow-lg`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#24afe3] hover:bg-gray-50" onClick={() => setIsMenuOpen(false)}>HOME</a>
          <a href="#problem" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#24afe3] hover:bg-gray-50" onClick={() => setIsMenuOpen(false)}>PROBLEM</a>
          <a href="#solution" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#24afe3] hover:bg-gray-50" onClick={() => setIsMenuOpen(false)}>SOLUTION</a>
          <a href="#testimonials" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#24afe3] hover:bg-gray-50" onClick={() => setIsMenuOpen(false)}>TESTIMONIALS</a>
          <a href="#features" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#24afe3] hover:bg-gray-50" onClick={() => setIsMenuOpen(false)}>FEATURES</a>
          <a href="#faq" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#24afe3] hover:bg-gray-50" onClick={() => setIsMenuOpen(false)}>FAQ</a>
          <a href="https://www.patientviewer.com/WebSched/23_3_42/GWT/WebSched/WebSched.html?V=32335F335F3432&I=31302E31302E31312E3831&P=3530303032&R=3130303030&S=3130303030&T=3930303030&N=3834363036&K=3330323337&C=6402&UP=1&CID=30&RSC=406" target="_blank" rel="noopener noreferrer" className="w-full mt-4 bg-[#f58634] hover:bg-[#e47624] text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out inline-block text-center">
            Schedule Your Free Consultation Today!
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
