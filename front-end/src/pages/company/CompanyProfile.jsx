import React, { useState } from 'react';
import { FaCamera, FaEdit } from 'react-icons/fa';

const CompanyProfile = () => {
  const [profile, setProfile] = useState({
    companyName: '',
    industry: '',
    location: '',
    website: '',
    about: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Company Profile saved:', profile);
    alert('Profile saved successfully!');
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 py-10 px-4">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full relative">
        <div className="flex flex-col items-center mb-6">
          <div className="relative w-32 h-32 rounded-full bg-gray-300 flex items-center justify-center">
            <FaCamera className="text-gray-600 text-2xl" />
            <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" />
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mt-4">{profile.companyName || "Company Name"}</h1>
          <button className="mt-2 text-blue-600 flex items-center text-sm">
            <FaEdit className="mr-2" /> Edit Profile
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="companyName" value={profile.companyName} onChange={handleChange} placeholder="Company Name" className="input-field" />
          <input type="text" name="industry" value={profile.industry} onChange={handleChange} placeholder="Industry" className="input-field" />
          <input type="text" name="location" value={profile.location} onChange={handleChange} placeholder="Location" className="input-field" />
          <input type="url" name="website" value={profile.website} onChange={handleChange} placeholder="Website" className="input-field" />
          <textarea name="about" value={profile.about} onChange={handleChange} placeholder="About Company" rows="3" className="input-field"></textarea>
          <button type="submit" className="btn-primary w-full">Save Profile</button>
        </form>

        <button className="mt-6 w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700">+ Add Post</button>
      </div>
    </div>
  );
};

export default CompanyProfile;
