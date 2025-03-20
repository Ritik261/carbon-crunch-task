import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import footerImg from '../assets/footer1.png';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const element = footerRef.current;

    gsap.fromTo(element.querySelectorAll('.footer-section'), {
      opacity: 0,
      y: 50,
    }, {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.3,
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom bottom',
        scrub: true,
      },
    });

    gsap.fromTo(element.querySelector('.footer-img'), {
      opacity: 0,
    }, {
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom bottom',
        scrub: true,
      },
    });
  }, []);

  return (
    <footer ref={footerRef} className="bg-gray-900 text-white">
      <div className="w-full">
        <img src={footerImg} alt="Carboncrunch" className="w-full footer-img" />
      </div>
      <div className="container mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between items-start mb-8 footer-section">
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h2 className="text-lg mb-4">Subscribe to our mailing list</h2>
            <div className="relative">
              <input
                type="email"
                placeholder="Enter email"
                className="p-2 bg-white text-black rounded-md w-full pr-20"
              />
              <button className="bg-green-500 text-white p-2 rounded-r-md absolute right-0 top-0 h-full">
                Subscribe
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/3 text-center mb-8 md:mb-0">
            <p>© Carboncrunch. All Rights Reserved.</p>
          </div>
          <div className="w-full md:w-1/3 text-right">
            <ul className="space-y-2">
              <li><a href="#home" className="hover:underline">Home</a></li>
              <li><a href="#about" className="hover:underline">About</a></li>
              <li><a href="#how-it-works" className="hover:underline">How it works</a></li>
              <li><a href="#contact" className="hover:underline">Contact us</a></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-6 footer-section">
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 mb-4 md:mb-0">
            <li><a href="mailto:info@carboncrunch.com" className="hover:underline">Email</a></li>
            <li><a href="https://facebook.com" className="hover:underline">Facebook</a></li>
            <li><a href="https://twitter.com" className="hover:underline">X - Twitter</a></li>
            <li><a href="https://instagram.com" className="hover:underline">Instagram</a></li>
          </ul>
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 mb-4 md:mb-0">
            <li><a href="#faqs" className="hover:underline">FAQs</a></li>
            <li><a href="#start-transaction" className="hover:underline">Start your transaction</a></li>
            <li><a href="#why-choose-us" className="hover:underline">Why choose us</a></li>
          </ul>
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
            <li><a href="#businesses" className="hover:underline">Businesses</a></li>
            <li><a href="#privacy-policy" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#refund-policy" className="hover:underline">Refund Policy</a></li>
            <li><a href="#terms-conditions" className="hover:underline">Terms & Conditions</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;