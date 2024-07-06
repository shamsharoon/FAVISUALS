import React from 'react';

// Define constants for pricing data
const pricingData = [
  {
    title: 'Basic',
    price: '$50',
    description: 'The Basic Video Shoot Package is designed for clients who require professional video production without post production editing',
    features: [
      'Professional Video',
      'Professional Scene Setting'
    ],
    buttonText: 'Get started',
    buttonLink: '#',
    bgClass: 'bg-[#131313]',
    textColor: 'text-white',
    titleColor: 'text-white',
    translateY: 'lg:translate-y-[40px]'
  },
  {
    title: 'Premium',
    price: '$100',
    description: 'Elevate your video content with the Premium Package. This package combines professional videos, with advanced post-production, and colour grading',
    features: [
      'Professional Video',
      'Professional Scene Setting',
      'Premium Editing (Includes Effects)',
      'Colour Grading'
    ],
    buttonText: 'Get started',
    buttonLink: '#',
    bgClass: 'bg-[#2E2E2F]',
    textColor: 'text-white',
    titleColor: 'text-primary text-5xl font-extrabold',
    translateY: 'lg:translate-y-[0px]',
    borderClass: 'border-gold-gradient'
  },
  {
    title: 'Standard',
    price: '$80',
    description: 'The Standard Package is tailored for clients seeking professional video production with basic editing skills',
    features: [
      'Professional Video',
      'Professional Scene Setting',
      'Basic Editing'
    ],
    buttonText: 'Get started',
    buttonLink: '#',
    bgClass: 'bg-[#131313]',
    textColor: 'text-white',
    titleColor: 'text-white',
    translateY: 'lg:translate-y-[40px]'
  }
];

function Pricing() {
  return (
    <section id="pricing" className="bg-black">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-primary">Pricing</h2>
          <p className="mb-4 font-semibold text-white sm:text-xl">Here at FA Visuals we focus on the best quality work.</p>
        </div>
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          {/* Map over pricingData to render pricing cards */}
          {pricingData.map((item, index) => (
            <div key={index} className={`flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 ${item.translateY} ${item.bgClass} rounded-none border-4 shadow ${item.borderClass || 'border-primary'}`}>
              <h3 className={`mb-4 text-2xl ${item.titleColor}`}>{item.title}</h3>
              <p className={`font-medium ${item.textColor} sm:text-lg`}>{item.description}</p>
              <div className="flex justify-center items-baseline my-8">
                <span className="mr-2 text-5xl text-white font-extrabold">{item.price}</span>
              </div>
              {/* List */}
              <ul role="list" className="mb-8 space-y-4 text-left">
                {item.features.map((feature, idx) => (
                  <li key={idx} className="flex text-white items-center font-semibold space-x-3">
                    {/* Icon */}
                    <svg className="flex-shrink-0 w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
