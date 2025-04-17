"use client";

// @ts-nocheck
// 21st.dev Magic Component Platform
// Create a feature/benefit section for a landing page that highlights why SuperKiddos Dental & Orthodontics is the right choice
// Use the following color palette: primary #24afe3, secondary #f58634, accent #fcd561, background #ffffff, text #333333
// The section should have a headline "Why is SuperKiddos Dental & Orthodontics the Right Choice for Your Child?"
// Include a table or list that links features to benefits for both children and parents
// Make the section visually appealing and easy to understand

import React from 'react';
import Image from 'next/image';

const FeatureSection = () => {
  const features = [
    {
      feature: "Certified Dental & Orthodontic Specialists",
      childBenefit: "Expert care tailored to their specific needs",
      parentBenefit: "Confidence in the qualifications and experience of therapists",
      insight: "Emphasizes the specialized training and expertise in pediatric dental and orthodontic care"
    },
    {
      feature: "Personalized Treatment Plans",
      childBenefit: "Program designed for their unique challenges",
      parentBenefit: "Assurance that the therapy is specifically for their child",
      insight: "Highlights the individualized approach and customized care"
    },
    {
      feature: "Gentle, Non-Invasive Therapy",
      childBenefit: "Comfortable and safe experience for your child",
      parentBenefit: "Peace of mind knowing the treatment is not painful",
      insight: "Addresses potential parental concerns about the nature of the therapy"
    },
    {
      feature: "Addresses Root Causes",
      childBenefit: "Long-term solutions, not just temporary fixes",
      parentBenefit: "Reduced likelihood of recurring issues",
      insight: "Emphasizes the sustainable and lasting impact of our treatments"
    },
    {
      feature: "Improved Muscle Function",
      childBenefit: "Clearer speech, easier breathing, better swallowing",
      parentBenefit: "Enhanced overall health and well-being of their child",
      insight: "Directly links the therapy to tangible improvements in key areas of concern"
    },
    {
      feature: "Convenient Woodland Hills Location",
      childBenefit: "Easy access to appointments",
      parentBenefit: "Convenient for busy families in the area",
      insight: "Highlights the accessibility and local presence"
    },
    {
      feature: "Comprehensive Range of Services",
      childBenefit: "All their dental and orthodontic needs can be met here",
      parentBenefit: "One-stop solution for their child's oral health",
      insight: "Showcases the broader expertise of SuperKiddos"
    }
  ];

  return (
    <section id="features" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#333333]">
          Why is SuperKiddos Dental & Orthodontics the Right Choice for Your Child?
        </h2>

        {/* Feature Table for Desktop */}
        <div className="hidden md:block overflow-hidden rounded-lg shadow mb-12">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-[#24afe3]">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                  Feature
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                  Benefit for Child
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                  Benefit for Parent
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {features.map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium text-[#24afe3]">{item.feature}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-700">{item.childBenefit}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-700">{item.parentBenefit}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Feature Cards for Mobile */}
        <div className="md:hidden space-y-6">
          {features.map((item, index) => (
            <div key={index} className="bg-gray-50 rounded-lg shadow-sm p-4">
              <h3 className="font-bold text-[#24afe3] mb-2">{item.feature}</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs uppercase font-semibold text-[#24afe3] mb-1">For Your Child</p>
                  <p className="text-sm text-[#333333]">{item.childBenefit}</p>
                </div>
                <div>
                  <p className="text-xs uppercase font-semibold text-[#24afe3] mb-1">For You</p>
                  <p className="text-sm text-[#333333]">{item.parentBenefit}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Image */}
        <div className="mt-12 grid md:grid-cols-2 gap-8 items-center">
          <div className="relative h-72 md:h-96 rounded-lg overflow-hidden shadow-lg">
            <div className="absolute inset-0 bg-[#24afe3]/10"></div>
            <Image
              src="/images/Comprehensive Care.png"
              alt="SuperKiddos Dental & Orthodontics features and benefits"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              className=""
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#24afe3]/30 to-transparent"></div>
          </div>
          <div className="text-left">
            <h3 className="text-2xl font-bold text-[#24afe3] mb-4">Comprehensive Care for Your Child</h3>
            <p className="text-lg text-gray-700 mb-6">
              At SuperKiddos Dental & Orthodontics, we believe in treating the whole child, not just the symptoms.
              Our approach focuses on long-term development and well-being.
            </p>
            <div className="inline-block bg-[#fcd561] rounded-lg px-6 py-3 font-bold text-[#333333]">
              Your child's health and happiness is our priority
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
