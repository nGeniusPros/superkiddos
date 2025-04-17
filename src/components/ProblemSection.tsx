"use client";

// @ts-nocheck
// 21st.dev Magic Component Platform
// Create a problem/agitation section for a landing page that highlights the issues related to mouth breathing, thumb sucking, and sleep difficulties in children
// Use the following color palette: primary #24afe3, secondary #f58634, accent #fcd561, background #ffffff, text #333333
// The section should have a headline "Is Your Child Tossing and Turning? Don't Ignore the Signs of Mouth Breathing."
// Include bullet points for each problem category (Mouth Breathing, Thumb Sucking, Sleep Difficulties)
// Make the section visually engaging and emotionally impactful

import React from 'react';
import Image from 'next/image';

const ProblemSection = () => {
  const problemCategories = [
    {
      title: "Mouth Breathing & Oral Issues",
      icon: "🫁",
      points: [
        "Restless Nights and Tired Days: Mouth breathing often leads to poor sleep quality, leaving your child (and you) feeling exhausted.",
        "Increased Risk of Illness: Mouth breathing bypasses the nose's natural filters, potentially increasing susceptibility to allergies and respiratory infections.",
        "Dental Dangers: Dry mouth from mouth breathing creates a breeding ground for bacteria, raising the risk of cavities and gum disease.",
        "Facial Development Concerns: Chronic mouth breathing can affect how your child's face grows, potentially leading to a longer face and narrower airway.",
        "Oral & Facial Abnormalities: Improper oral function can lead to facial asymmetry and structural abnormalities that affect appearance and function.",
        "Speech Difficulties: Improper tongue positioning and oral muscle function can lead to articulation problems and unclear speech."
      ]
    },
    {
      title: "Behavioral & Development Issues",
      icon: "👦",
      points: [
        "Bed Wetting: Breathing disorders during sleep can contribute to nighttime bed wetting even in older children.",
        "Behavioral Problems: Poor sleep quality and breathing issues can manifest as hyperactivity, poor attention span, and behavioral challenges.",
        "Learning Difficulties: Oxygen deprivation from improper breathing can impact cognitive function and academic performance.",
        "Eating Disorders: Oral muscle dysfunction can lead to difficulties with chewing, swallowing, and food aversions.",
        "Irritability & Fatigue: Chronic breathing issues lead to poor sleep quality, resulting in daytime fatigue and mood problems."
      ]
    },
    {
      title: "Sleep & Breathing Problems",
      icon: "💤",
      points: [
        "Snoring & Sleep Apnea: Mouth breathing and improper oral posture can lead to snoring and potentially dangerous breathing pauses during sleep.",
        "Thumb Sucking: Prolonged thumb sucking can push teeth out of alignment and affect proper oral development.",
        "Concentration Challenges: Reduced oxygen intake due to mouth breathing can impact focus and may even be mistaken for ADHD.",
        "Struggles at School: Lack of quality sleep impacts memory, learning, and overall academic performance.",
        "Health and Development at Risk: Consistent sleep deprivation can hinder your child's healthy growth and development.",
        "Family Stress: Sleepless nights take a toll on everyone, increasing parental stress and fatigue."
      ]
    }
  ];

  return (
    <section id="problem" className="py-16 bg-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 w-40 h-40 rounded-full bg-[#24afe3] opacity-5"></div>
      <div className="absolute bottom-10 left-10 w-60 h-60 rounded-full bg-[#24afe3] opacity-5"></div>
      <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-[#f58634] opacity-5"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#333333]">
          Is Your Child Struggling? Don't Ignore These Warning Signs.
        </h2>
        <p className="text-lg text-center mb-12 max-w-3xl mx-auto text-[#333333]">
          Mouth breathing, behavioral issues, and sleep problems may indicate underlying oral myofunctional disorders.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {problemCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 transition-transform duration-300 hover:transform hover:scale-105"
            >
              <div className="text-6xl mb-4 text-center">{category.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-[#24afe3] text-center">{category.title}</h3>
              <ul className="space-y-3">
                {category.points.map((point, pointIndex) => {
                  const [boldPart, restOfPoint] = point.split(': ');
                  return (
                    <li key={pointIndex} className="flex items-start">
                      <span className="text-[#f58634] mr-2">•</span>
                      <span className="text-[#333333]">
                        <strong className="text-[#333333]">{boldPart}:</strong> {restOfPoint}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Consultation Image and CTA */}
        <div className="mt-12 grid md:grid-cols-2 gap-8 items-center">
          <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
            <div className="absolute inset-0 bg-[#24afe3]/10"></div>
            <Image
              src="/images/consultationwithdr.png"
              alt="Consultation with SuperKiddos Dental & Orthodontics"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#24afe3]/50 to-transparent"></div>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-[#24afe3] mb-4">Ready to Take the First Step?</h3>
            <p className="text-lg text-[#333333] mb-6">
              Our friendly team is here to answer all your questions and help you determine if our therapy is right for your child.
            </p>
            <a href="https://www.patientviewer.com/WebSched/23_3_42/GWT/WebSched/WebSched.html?V=32335F335F3432&I=31302E31302E31312E3831&P=3530303032&R=3130303030&S=3130303030&T=3930303030&N=3834363036&K=3330323337&C=6402&UP=1&CID=30&RSC=406" target="_blank" rel="noopener noreferrer" className="bg-[#f58634] hover:bg-[#e47624] text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 inline-block">
              Schedule Your Free Consultation Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
