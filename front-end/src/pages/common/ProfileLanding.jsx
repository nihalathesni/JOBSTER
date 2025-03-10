import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import bgImage from '../../assets/profile.jpg';

const ProfileLanding = () => {
  const navigate = useNavigate();

  return (
    <div 
      className="relative h-screen w-full flex flex-col justify-center items-center text-center bg-cover bg-center" 
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <motion.div
        className="relative z-10 px-6 max-w-3xl"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-white text-3xl sm:text-5xl md:text-7xl font-bold mb-4">
          BUILD YOUR PROFILE TODAY
        </h1>
        <p className="text-white text-md sm:text-lg md:text-2xl mb-6">
          Get started by creating a profile and unlock opportunities. Whether you're looking for a job or hiring talent, we’ve got you covered!
        </p>

        <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
          <button 
            onClick={() => navigate('/job-seeker-profile')}
            className="px-6 py-3 bg-white text-[#A0AECE] text-lg sm:text-xl font-semibold rounded-md hover:bg-[#8b98b7] transition duration-300"
          >
            I am looking for jobs
          </button>
          <button 
            onClick={() => navigate('/company-profile')}
            className="px-6 py-3 bg-transparent border-2 border-white text-white text-lg sm:text-xl font-semibold rounded-md hover:bg-white hover:text-[#A0AECE] transition duration-300"
          >
            I am looking for candidates
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default ProfileLanding;
