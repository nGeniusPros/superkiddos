"use client";

// @ts-nocheck
// 21st.dev Magic Component Platform
// Create a final call to action section for a landing page
// Use the following color palette: primary #24afe3, secondary #f58634, accent #fcd561, background #ffffff, text #333333
// The section should have a headline "Ready to See the SuperKiddos OMT Difference?"
// Include a clear and compelling primary CTA button
// Include a brief summary of benefits
// Include contact information

import React from 'react';
import Image from 'next/image';

const FinalCTASection = () => {
  return (
    <section id="final-cta" className="py-16 relative overflow-hidden bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative w-full h-full flex justify-center items-center">
          <a href="https://www.patientviewer.com/WebSched/23_3_42/GWT/WebSched/WebSched.html?V=32335F335F3432&I=31302E31302E31312E3831&P=3530303032&R=3130303030&S=3130303030&T=3930303030&N=3834363036&K=3330323337&C=6402&UP=1&CID=30&RSC=406" target="_blank" rel="noopener noreferrer">
            <Image
              src="/images/finalcta.png"
              alt="Schedule Your Free Consultation Today"
              width={1200}
              height={400}
              style={{ objectFit: 'contain', width: '100%', height: 'auto' }}
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
