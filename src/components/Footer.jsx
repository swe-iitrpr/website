import React from "react";

const Footer = () => (
  <footer id="contact" className="bg-violet-700 text-white text-center py-8 mt-12">
    <div className="flex justify-center space-x-6 mb-4">
      <a href="https://instagram.com/swe_iitropar" target="_blank" rel="noopener noreferrer">
        <img src="/assets/instagram.jpg" alt="Instagram" className="w-10 h-10 hover:opacity-80 rounded" />
      </a>
      <a href="https://www.linkedin.com/company/swe-iit-ropar-affiliate/" target="_blank" rel="noopener noreferrer">
        <img src="/assets/linkedin.png" alt="LinkedIn" className="w-10 h-10 hover:opacity-80 rounded" />
      </a>
      <a href="https://github.com/swe-iitrpr" target="_blank" rel="noopener noreferrer">
        <img src="/assets/github.png" alt="GitHub" className="w-10 h-10 hover:opacity-80 rounded" />
      </a>
    </div>

    <p className="text-sm">© {new Date().getFullYear()} SWE IIT Ropar | All Rights Reserved</p>
  </footer>
);

export default Footer;
