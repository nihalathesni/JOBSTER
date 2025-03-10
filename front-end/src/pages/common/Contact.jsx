import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    alert('Thank you! Your message has been sent.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="max-w-3xl mx-auto py-10 px-6">
      <h1 className="text-3xl font-bold text-[#45577E] mb-6">Contact Us</h1>

      <p className="text-gray-700 mb-4">
        Have questions or need assistance? Fill out the form below and we’ll get back to you as soon as possible.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold">Your Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:ring-[#45577E] focus:ring-2"
            required
          />
        </div>

        <div>
          <label className="block font-semibold">Your Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:ring-[#45577E] focus:ring-2"
            required
          />
        </div>

        <div>
          <label className="block font-semibold">Your Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:ring-[#45577E] focus:ring-2"
            rows="4"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-[#45577E] text-white py-2 px-4 rounded-md hover:bg-[#324463] transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
