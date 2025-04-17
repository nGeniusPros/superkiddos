"use client";

// @ts-nocheck
// 21st.dev Magic Component Platform
// Create a solution/benefits section for a landing page that highlights the benefits of treatments at SuperKiddos Dental & Orthodontics
// Use the following color palette: primary #24afe3, secondary #f58634, accent #fcd561, background #ffffff, text #333333
// The section should have a headline "Unlock Your Child's Potential with Gentle Treatments at SuperKiddos"
// Include clear explanations of benefits: Improved Sleep, Clearer Speech, Easier Breathing, Proper Oral Development, etc.
// Include visuals that reinforce the benefits
// Add a secondary CTA

import React from 'react';
import Image from 'next/image';

const SolutionSection = () => {
  const benefits = [
    {
      title: "Improved Sleep",
      description: "Imagine your child sleeping soundly through the night, waking up refreshed and ready to learn. Our treatments help reduce snoring by up to 62% in children and promote natural nasal breathing, leading to deeper, more restorative sleep for your child and more peaceful nights for you.",
      icon: "/images/sleep-icon.svg"
    },
    {
      title: "Clearer Speech",
      description: "Help your child communicate with confidence. Our treatments focus on proper tongue and lip positioning, which can significantly improve articulation and reduce lisps. Our comprehensive approach can be a valuable tool in improving clarity, especially when combined with traditional speech therapy.",
      icon: "/images/speech-icon.svg"
    },
    {
      title: "Easier Breathing",
      description: "Our treatments retrain the muscles involved in breathing, encouraging a natural shift from mouth breathing to nasal breathing. This improves oxygen intake, which is vital for overall health and can even reduce the frequency of allergies and respiratory infections.",
      icon: "/images/breathing-icon.svg"
    },
    {
      title: "Proper Oral Development",
      description: "Give your child a healthy foundation for a lifetime of smiles. Our treatments guide proper jaw growth and alignment, reducing the likelihood of needing extensive orthodontic treatment later in life. Studies show improvements in craniofacial function and morphology with our approach, contributing to a more balanced and natural development.",
      icon: "/images/development-icon.svg"
    },
    {
      title: "Comfortable and Safe Therapy",
      description: "SuperKiddos Dental & Orthodontics offers a gentle, non-invasive approach tailored to your child's unique needs. Our therapy focuses on addressing the root causes of these issues, providing long-term solutions rather than just temporary fixes.",
      icon: "/images/therapy-icon.svg"
    },
    {
      title: "Peace of Mind for Parents",
      description: "Rest assured knowing your child is in expert hands. Our certified specialists provide qualified and experienced care designed specifically for children. We understand your concerns and are dedicated to helping your child achieve their full potential.",
      icon: "/images/peace-icon.svg"
    }
  ];

  return (
    <section id="solution" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#333333]">
          Unlock Your Child's Potential with Gentle Treatments at SuperKiddos
        </h2>
        <p className="text-lg text-center mb-12 max-w-3xl mx-auto text-gray-600">
          Our specialized therapy addresses the root causes of mouth breathing, thumb sucking, and related issues.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-md border-l-4 border-[#24afe3] hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-16 h-16 bg-[#e6f7fd] rounded-full flex items-center justify-center text-[#24afe3]">
                    <span className="text-3xl">
                      {benefit.title === "Improved Sleep" && "💤"}
                      {benefit.title === "Clearer Speech" && "🗣️"}
                      {benefit.title === "Easier Breathing" && "🫁"}
                      {benefit.title === "Proper Oral Development" && "🦷"}
                      {benefit.title === "Comfortable and Safe Therapy" && "👶"}
                      {benefit.title === "Peace of Mind for Parents" && "❤️"}
                    </span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 text-[#24afe3]">{benefit.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Visual reinforcement - Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-[#e6f7fd] rounded-lg shadow-md p-4 flex flex-col items-center">
            <div className="w-16 h-16 bg-[#24afe3] rounded-full flex items-center justify-center text-white mb-4">
              <span className="text-2xl">👤</span>
            </div>
            <h3 className="text-xl font-bold mb-2 text-[#24afe3] text-center">Personalized Care</h3>
            <p className="text-gray-700 text-center">Tailored treatment plans designed specifically for your child's unique needs.</p>
          </div>
          <div className="bg-[#e6f7fd] rounded-lg shadow-md p-4 flex flex-col items-center">
            <div className="w-16 h-16 bg-[#24afe3] rounded-full flex items-center justify-center text-white mb-4">
              <span className="text-2xl">🗣️</span>
            </div>
            <h3 className="text-xl font-bold mb-2 text-[#24afe3] text-center">Clearer Speech</h3>
            <p className="text-gray-700 text-center">Improved articulation and confidence in communication.</p>
          </div>
          <div className="bg-[#e6f7fd] rounded-lg shadow-md p-4 flex flex-col items-center">
            <div className="w-16 h-16 bg-[#24afe3] rounded-full flex items-center justify-center text-white mb-4">
              <span className="text-2xl">🫁</span>
            </div>
            <h3 className="text-xl font-bold mb-2 text-[#24afe3] text-center">Better Breathing</h3>
            <p className="text-gray-700 text-center">Improved nasal breathing for better health and sleep.</p>
          </div>
        </div>

        {/* Features and Benefits */}
        <div className="bg-gray-50 rounded-lg p-6 mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-[#24afe3] rounded-full flex items-center justify-center text-white mb-2">
                <span className="text-sm font-bold">1</span>
              </div>
              <p className="text-sm text-center">Certified Therapist</p>
              <p className="text-xs text-gray-500 text-center">Benefit text here</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-[#24afe3] rounded-full flex items-center justify-center text-white mb-2">
                <span className="text-sm font-bold">2</span>
              </div>
              <p className="text-sm text-center">Personalized Plans</p>
              <p className="text-xs text-gray-500 text-center">Benefit text here</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-[#24afe3] rounded-full flex items-center justify-center text-white mb-2">
                <span className="text-sm font-bold">3</span>
              </div>
              <p className="text-sm text-center">Non-Invasive Care</p>
              <p className="text-xs text-gray-500 text-center">Benefit text here</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-[#24afe3] rounded-full flex items-center justify-center text-white mb-2">
                <span className="text-sm font-bold">4</span>
              </div>
              <p className="text-sm text-center">Proven Therapy</p>
              <p className="text-xs text-gray-500 text-center">Benefit text here</p>
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/personalizedcare .png"
              alt="Personalized Care"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#24afe3]/90 to-[#1e3a5f]/80"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
              <p className="text-white font-bold text-xl">Personalized Care</p>
            </div>
          </div>
          <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/betterbreathing.png"
              alt="Better Breathing"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#24afe3]/90 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
              <p className="text-white font-bold text-xl">Better Breathing</p>
            </div>
          </div>
        </div>

        {/* Secondary CTA */}
        <div className="text-center">
          <a href="https://www.patientviewer.com/WebSched/23_3_42/GWT/WebSched/WebSched.html?V=32335F335F3432&I=31302E31302E31312E3831&P=3530303032&R=3130303030&S=3130303030&T=3930303030&N=3834363036&K=3330323337&C=6402&UP=1&CID=30&RSC=406" target="_blank" rel="noopener noreferrer" className="bg-[#24afe3] hover:bg-[#1e9dcf] text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 mr-4 inline-block">
            Want to Learn More About How We Can Help Your Child?
          </a>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;


