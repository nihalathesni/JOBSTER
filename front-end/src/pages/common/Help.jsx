import React from 'react';

const Help = () => {
  return (
    <div className="max-w-3xl mx-auto py-10 px-6">
      <h1 className="text-3xl font-bold text-[#45577E] mb-6">Help & Support</h1>

      <p className="text-gray-700 mb-4">
        Welcome to the Help Center! Here you can find answers to common issues and learn how to make the most of our platform.
      </p>

      <h2 className="text-xl font-semibold mt-6">Getting Started</h2>
      <p className="text-gray-700 mt-2">
        If you're new, check out our <a href="/faqs" className="text-[#45577E] underline">FAQs</a> page to get started with account setup and job applications.
      </p>

      <h2 className="text-xl font-semibold mt-6">Troubleshooting</h2>
      <p className="text-gray-700 mt-2">
        If you're experiencing issues with login, applications, or messages, try refreshing the page, clearing your cache, or checking your internet connection.
      </p>

      <h2 className="text-xl font-semibold mt-6">Contact Support</h2>
      <p className="text-gray-700 mt-2">
        If you need further assistance, visit our <a href="/contact" className="text-[#45577E] underline">Contact Us</a> page or email us at support@example.com.
      </p>
    </div>
  );
};

export default Help;
