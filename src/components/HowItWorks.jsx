import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import frame from '../assets/Frame8.png';

gsap.registerPlugin(ScrollTrigger);

const HowItWorks = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const element = sectionRef.current;

    gsap.fromTo(element.querySelectorAll('.step'), {
      opacity: 0,
      y: 50,
    }, {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.3,
      scrollTrigger: {
        trigger: element,
        start: 'top center',
        end: 'bottom center',
        scrub: true,
      },
    });

    gsap.fromTo(element.querySelector('.frame-img'), {
      opacity: 0,
    }, {
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: element,
        start: 'top center',
        end: 'bottom center',
        scrub: true,
      },
    });
  }, []);

  return (
    <div ref={sectionRef} className="px-6 py-12 text-center">
      <h2 className="text-green-600 text-lg mb-2">How It works?</h2>
      <h1 className="text-4xl font-bold mb-4">Getting Started is easy</h1>
      <p className="text-xl text-gray-600 mb-12">How carboncrunch SAAS works</p>
      
      <div className="flex flex-col md:flex-row justify-around mb-12">
        {[1, 2, 3].map((item) => (
          <div key={item} className="step w-full md:w-1/3 px-4 mb-8 md:mb-0">
            <h3 className="text-green-600 text-2xl font-bold mb-2">0{item}</h3>
            <h4 className="text-xl font-semibold mb-2">Track and manage your Net Zero Pathway</h4>
            <p className="text-gray-600">
              Set decarbonisation targets, obtain insights on the amount of emissions to be emitted by the target year.
            </p>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <img src={frame} alt="Dashboard" className="w-full max-w-4xl frame-img" />
      </div>
    </div>
  );
};

export default HowItWorks;