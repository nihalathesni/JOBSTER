import { FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#45577E] text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo Section */}
        <div>
          <h2 className="text-3xl font-bold">
            Jobster
          </h2>
        </div>

        {/* For Candidates */}
        <div>
          <h3 className="text-lg font-semibold mb-3">For Candidates</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#">Overview</a></li>
            <li><a href="#">Startup Jobs</a></li>
            <li><a href="#">Web3 Jobs</a></li>
            <li><a href="#">Featured</a></li>
            <li><a href="#">Salary Calculator</a></li>
            <li><a href="#">Startup Hiring Data</a></li>
            <li><a href="#">Tech Startups</a></li>
            <li><a href="#">Remote</a></li>
          </ul>
        </div>

        {/* For Recruiters */}
        <div>
          <h3 className="text-lg font-semibold mb-3">For Recruiters</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#">Overview</a></li>
            <li><a href="#">Recruit Pro</a></li>
            <li><a href="#">Curated</a></li>
            <li><a href="#">wellfound:ai</a></li>
            <li><a href="#">Hire Developers</a></li>
            <li><a href="#">Pricing</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#">About</a></li>
            <li><a href="#">Help</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Terms & Risks</a></li>
            <li><a href="#">Privacy & Cookies</a></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-gray-100 pt-6 text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Social Media Icons */}
          <div className="flex space-x-6">
            <a href="#" className="text-gray-300 hover:text-white text-2xl">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-300 hover:text-white text-2xl">
              <FaInstagram />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-gray-400 text-sm mt-4 md:mt-0">
            Copyright © 2025 Wellfound (formerly AngelList Talent). All rights reserved.
          </p>

          {/* Browse Links */}
          <p className="text-gray-300 text-sm mt-4 md:mt-0">
            Browse by: <a href="#" className="underline">Jobs</a>, <a href="#" className="underline">Remote Jobs</a>, 
            <a href="#" className="underline"> Locations</a>, <a href="#" className="underline">Startups</a>, 
            <a href="#" className="underline"> Startups Hiring</a>, <a href="#" className="underline">Industries</a>, 
            <a href="#" className="underline"> Tech Hubs</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
