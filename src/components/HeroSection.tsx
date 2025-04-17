"use client";

// @ts-nocheck
// 21st.dev Magic Component Platform
// Create a hero section for a landing page with a headline, subheadline, and call-to-action button
// The hero section should have a background image and be responsive
// Use the following color palette: primary #24afe3, secondary #f58634, accent #fcd561, background #ffffff, text #333333
// The headline should be "Is Your Child's Mouth Breathing Stealing Their Sleep (and Yours)?"
// The subheadline should be "SuperKiddos OMT offers a gentle, non-invasive therapy that retrains your child's oral muscles to promote natural nasal breathing, leading to more restful sleep for the whole family."
// The CTA button should say "Schedule Your Free Consultation Today!"

import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="relative w-full h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-[#24afe3]/20"></div>
          <Image
            src="/images/Hero Image.png"
            alt="Happy child at SuperKiddos Dental & Orthodontics"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#24afe3]/70 to-transparent"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
          Is Your Child's Mouth Breathing Stealing Their Sleep (and Yours)?
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto">
          SuperKiddos Dental & Orthodontics offers a gentle, non-invasive therapy that retrains your child's oral muscles to promote natural nasal breathing, leading to more restful sleep for the whole family.
        </p>
        <a
          href="https://www.patientviewer.com/WebSched/23_3_42/GWT/WebSched/WebSched.html?V=32335F335F3432&I=31302E31302E31312E3831&P=3530303032&R=3130303030&S=3130303030&T=3930303030&N=3834363036&K=3330323337&C=6402&UP=1&CID=30&RSC=406"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#f58634] hover:bg-[#e47624] text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 inline-block"
        >
          Schedule Your Free Consultation Today!
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
