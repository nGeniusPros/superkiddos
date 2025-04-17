"use client";

// @ts-nocheck
// 21st.dev Magic Component Platform
// Create a social proof section for a landing page that showcases testimonials from parents whose children have benefited from OMT
// Use the following color palette: primary #24afe3, secondary #f58634, accent #fcd561, background #ffffff, text #333333
// The section should have a headline "Don't Just Take Our Word For It: See What Other Parents Say"
// Include testimonials with anonymized parent names
// Display awards and certifications
// Make the section visually appealing and trustworthy

import React from 'react';
import Image from 'next/image';

const SocialProofSection = () => {
  const testimonials = [
    {
      quote: "My son used to snore so loudly we could hear him down the hall. After a few months of treatment at SuperKiddos Dental & Orthodontics, he sleeps quietly, and we're all getting much better rest!",
      parent: "Sarah M., Mother of 7-year-old",
      image: "/images/testimonial1.svg"
    },
    {
      quote: "We were concerned about our daughter's lisp. The therapists at SuperKiddos Dental & Orthodontics were so patient and now her speech is so much clearer. It's made a huge difference in her confidence!",
      parent: "Michael T., Father of 5-year-old",
      image: "/images/testimonial2.svg"
    },
    {
      quote: "After years of trying to help our son stop thumb sucking, their treatment was the solution we needed. The gentle approach and positive reinforcement at SuperKiddos Dental & Orthodontics worked wonders when nothing else did.",
      parent: "Jennifer K., Mother of 8-year-old",
      image: "/images/testimonial3.svg"
    }
  ];

  const certifications = [
    { name: "IAOM Certified", image: "/images/cert1.svg" },
    { name: "American Academy of Pediatrics Recognized", image: "/images/cert2.svg" },
    { name: "California Dental Association", image: "/images/cert3.svg" }
  ];

  return (
    <section id="testimonials" className="py-16 bg-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 w-40 h-40 rounded-full bg-[#24afe3] opacity-5"></div>
      <div className="absolute bottom-10 left-10 w-60 h-60 rounded-full bg-[#24afe3] opacity-5"></div>
      <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-[#f58634] opacity-5"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#333333]">
          Don't Just Take Our Word For It: See What Other Parents Say
        </h2>

        {/* Featured Testimonial Image */}
        <div className="relative h-80 md:h-[400px] mb-12 rounded-lg overflow-hidden shadow-lg">
          <div className="absolute inset-0 bg-[#24afe3]/10"></div>
          <Image
            src="/images/familysocialproof.png"
            alt="Happy family testimonial"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#24afe3]/80"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
            <p className="text-white text-xl font-bold mb-2">"Our experience has been amazing!"</p>
            <p className="text-white">Families love SuperKiddos Dental & Orthodontics</p>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 relative border-t-4 border-[#24afe3] hover:shadow-xl transition-shadow duration-300"
            >
              <div className="absolute -top-6 left-6">
                <div className="w-12 h-12 bg-[#fcd561] rounded-full flex items-center justify-center shadow-md">
                  <span className="text-3xl text-white font-serif">"</span>
                </div>
              </div>
              <p className="italic text-gray-700 mb-6 pt-6 leading-relaxed text-lg">"{testimonial.quote}"</p>
              <div className="flex items-center border-t pt-4 mt-2 border-gray-100">
                <div className="w-14 h-14 bg-gradient-to-r from-[#24afe3] to-[#1e9dcf] rounded-full mr-4 flex items-center justify-center text-white font-bold shadow-md">
                  {testimonial.parent.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-[#24afe3] text-lg">{testimonial.parent.split(',')[0]}</p>
                  <p className="text-gray-500 text-sm">{testimonial.parent.split(',')[1]?.trim()}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="bg-gray-50 rounded-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-center mb-8 text-[#333333]">
            Our Credentials & Certifications
          </h3>
          <div className="flex flex-wrap justify-center gap-12 mb-6">
            {certifications.map((cert, index) => (
              <div key={index} className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-48">
                <div className="w-20 h-20 bg-[#e6f7fd] rounded-full mb-4 flex items-center justify-center">
                  <span className="text-4xl">{index === 0 ? '🏅' : index === 1 ? '🎓' : '⭐'}</span>
                </div>
                <p className="font-semibold text-center text-[#24afe3]">{cert.name}</p>
                <p className="text-xs text-gray-500 text-center mt-2">Recognized Excellence</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 text-sm">Our therapists maintain the highest standards of professional certification and ongoing education</p>
        </div>

        {/* Trust badge */}
        <div className="text-center mt-12">
          <div className="inline-block bg-gradient-to-r from-[#24afe3]/10 to-[#fcd561]/10 rounded-lg shadow-md px-10 py-6 border border-[#24afe3]/20">
            <div className="flex items-center justify-center mb-3">
              <span className="text-2xl mr-2">🏆</span>
              <h4 className="text-[#24afe3] font-bold text-xl">Trusted by Families Throughout Southern California</h4>
            </div>
            <div className="flex justify-center items-center gap-4">
              <div className="text-center px-4 py-2 bg-white rounded-lg shadow-sm">
                <p className="text-3xl font-bold text-[#f58634]">500+</p>
                <p className="text-xs text-gray-600">Children Helped</p>
              </div>
              <div className="text-center px-4 py-2 bg-white rounded-lg shadow-sm">
                <div className="flex justify-center space-x-1">
                  <span className="text-[#f58634] text-xl">★</span>
                  <span className="text-[#f58634] text-xl">★</span>
                  <span className="text-[#f58634] text-xl">★</span>
                  <span className="text-[#f58634] text-xl">★</span>
                  <span className="text-[#f58634] text-xl">★</span>
                </div>
                <p className="text-xs text-gray-600">Average Rating</p>
              </div>
              <div className="text-center px-4 py-2 bg-white rounded-lg shadow-sm">
                <p className="text-3xl font-bold text-[#f58634]">2018</p>
                <p className="text-xs text-gray-600">Established</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
