"use client";

// @ts-nocheck
// 21st.dev Magic Component Platform
// Create a FAQ section for a landing page that addresses common concerns about OMT
// Use the following color palette: primary #24afe3, secondary #f58634, accent #fcd561, background #ffffff, text #333333
// The section should have a headline "Have Questions? We Have Answers."
// Include common questions and answers about cost, time commitment, effectiveness, pain, and differences from speech therapy
// Make the section interactive with expandable/collapsible questions

import React, { useState } from 'react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  const faqs = [
    {
      question: "How much does treatment cost?",
      answer: "We offer a free initial consultation to discuss your child's needs and determine if our treatment is the right fit. We also accept various insurance plans and offer financing options to make therapy accessible."
    },
    {
      question: "What is the time commitment for treatment?",
      answer: "The duration and frequency of treatment sessions vary depending on your child's specific needs, but most treatment plans involve sessions lasting between 30 to 60 minutes, typically scheduled a few weeks apart."
    },
    {
      question: "How effective is your treatment?",
      answer: "Our treatments have shown significant success in addressing various oral and dental issues. Our testimonials and the growing body of research support its effectiveness in improving sleep, speech, and breathing."
    },
    {
      question: "Is treatment painful for my child?",
      answer: "Our treatments are gentle and non-invasive. Most children find the procedures comfortable and even enjoyable. Our specialists are trained to work with children and make the experience positive."
    },
    {
      question: "How do your treatments help with speech issues?",
      answer: "While speech therapy focuses primarily on language and articulation, our treatments address the underlying muscle function and resting posture of the mouth and face, which can often contribute to speech issues. In many cases, our treatments and speech therapy can complement each other."
    },
    {
      question: "How long until we see results?",
      answer: "Every child is different, but many parents report seeing initial improvements within a few weeks of consistent therapy. More significant changes typically become apparent after 2-3 months of treatment."
    },
    {
      question: "What age is appropriate for your treatments?",
      answer: "Our treatments can be beneficial for children of various ages, from toddlers to teenagers. The therapy is adapted to be age-appropriate and engaging for each child."
    }
  ];

  return (
    <section id="faq" className="py-16 bg-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 w-40 h-40 rounded-full bg-[#24afe3] opacity-5"></div>
      <div className="absolute bottom-10 left-10 w-60 h-60 rounded-full bg-[#24afe3] opacity-5"></div>
      <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-[#f58634] opacity-5"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#333333]">
          Have Questions? We Have Answers.
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleQuestion(index)}
              >
                <span className="font-medium text-lg text-[#24afe3]">{faq.question}</span>
                <span className={`transform transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}>
                  <svg className="w-5 h-5 text-[#f58634]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </span>
              </button>
              <div
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 py-4' : 'max-h-0 py-0'
                }`}
              >
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700 mb-4">
            Still have questions? We're here to help!
          </p>
          <a href="https://www.patientviewer.com/WebSched/23_3_42/GWT/WebSched/WebSched.html?V=32335F335F3432&I=31302E31302E31312E3831&P=3530303032&R=3130303030&S=3130303030&T=3930303030&N=3834363036&K=3330323337&C=6402&UP=1&CID=30&RSC=406" target="_blank" rel="noopener noreferrer" className="bg-[#f58634] hover:bg-[#e47624] text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 inline-block">
            Schedule Your Free Consultation Today!
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
