import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-200 mt-10 border-t">
      {/* App Download Section */}
      <div className="px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-6 max-w-7xl mx-auto">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">
            Find amazing deals on the go.
          </h2>
          <a href="#" className="text-blue-600 font-semibold text-lg">
            Download OLX app now!
          </a>
        </div>
        <div className="flex items-center gap-4">
          <img src="/appstore.webp" alt="App Store" className="h-40" />
          <img src="/playstore.png" alt="Google Play" className="h-40" />
          <img src="/appstore.png" alt="App Gallery" className="h-40" />
        </div>
      </div>

      <hr className="my-4" />

      {/* Footer Links Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 px-4 pb-8 max-w-7xl mx-auto text-sm text-gray-600">
        <div>
          <h4 className="font-semibold text-gray-800 mb-2">Popular Categories</h4>
          <ul className="space-y-1">
            <li>Cars</li>
            <li>Flats for rent</li>
            <li>Mobile Phones</li>
            <li>Jobs</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-gray-800 mb-2">Trending Searches</h4>
          <ul className="space-y-1">
            <li>Bikes</li>
            <li>Watches</li>
            <li>Books</li>
            <li>Dogs</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-gray-800 mb-2">About Us</h4>
          <ul className="space-y-1">
            <li>About Dubizzle Group</li>
            <li>OLX Blog</li>
            <li>Contact Us</li>
            <li>OLX for Businesses</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-gray-800 mb-2">OLX</h4>
          <ul className="space-y-1">
            <li>Help</li>
            <li>Sitemap</li>
            <li>Terms of use</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-gray-800 mb-2">Follow Us</h4>
          <div className="flex gap-4 text-xl text-gray-600">
            <FaTwitter />
            <FaFacebookF />
            <FaInstagram />
            <FaYoutube />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#002f34] text-white text-sm text-center py-4">
        Classifieds in Pakistan. © 2006–2025 OLX
      </div>
    </footer>
  );
}
