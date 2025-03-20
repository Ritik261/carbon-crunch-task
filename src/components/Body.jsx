import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import earth from '../assets/climate.png';

gsap.registerPlugin(ScrollTrigger);

const Body = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const element = sectionRef.current;

    gsap.fromTo(element.querySelector('.text-content'), {
      opacity: 0,
      x: -100,
    }, {
      opacity: 1,
      x: 0,
      duration: 1.5,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top center',
        end: 'bottom center',
        scrub: true,
      },
    });

    gsap.fromTo(element.querySelector('.image-content'), {
      opacity: 0,
      x: 100,
    }, {
      opacity: 1,
      x: 0,
      duration: 1.5,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top center',
        end: 'bottom center',
        scrub: true,
      },
    });
  }, []);

  return (
    <div ref={sectionRef} className="flex flex-col md:flex-row items-center justify-between px-6 py-12 bg-world-map bg-cover bg-center min-h-screen">
      <div className="text-content w-full md:w-1/2 mb-8 md:mb-0">
        <h1 className="text-3xl md:text-6xl font-bold mb-4">GHG Accounting Scope 1, Scope 2, Scope 3</h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          Track, minimize, offset, and report your carbon emissions effortlessly to drive faster decarbonization progress.
        </p>
      </div>
      <div className="image-content w-full md:w-auto">
        <img src={earth} className="w-full md:w-[450px] h-auto" alt="Earth" />
      </div>
    </div>
  );
};

export default Body;