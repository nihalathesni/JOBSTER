import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/home1.jpg';
import Img1 from '../../assets/home2.jpg';
import Footer from '../../components/common/Footer';
import { motion } from 'framer-motion';

function WelcomePage() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-screen w-full flex flex-col justify-center items-center text-center">
        <div className="absolute inset-0 bg-[url('./assets/home1.jpg')] bg-cover bg-center blur-xs"></div>
        <div className="absolute inset-0 bg-black/40"></div>

        <motion.div
          className="relative z-10 px-6"
          initial={{ scale: 2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <h1 className="text-white text-4xl sm:text-6xl md:text-8xl font-bold mb-4">
            LOOKING FOR A <br /> PART-TIME JOB?
          </h1>
          <p className="text-white text-lg sm:text-2xl md:text-3xl mb-6">
            Then you're at the right place! Connect with top <br className="hidden sm:block" />
            companies and kickstart your career today.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
            <Link to="/login">
              <button className="px-6 py-3 bg-white text-[#A0AECE] text-lg sm:text-xl font-semibold rounded-md hover:bg-[#8b98b7] transition duration-300">
                Login
              </button>
            </Link>
            <Link to="/signup">
              <button className="px-6 py-3 bg-transparent border-2 border-white text-white text-lg sm:text-xl font-semibold rounded-md hover:bg-white hover:text-[#A0AECE] transition duration-300">
                Signup
              </button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Why Jobster Section
      <div className="h-screen w-full flex flex-col md:flex-row">
        <div className="h-full w-full md:w-[50%] flex justify-center items-center flex-col p-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl text-[#A0AECE] font-extrabold mb-3.5 text-center">
            Why Jobster
          </h1>
          <p className="text-center mb-3.5 text-lg sm:text-xl md:text-2xl leading-relaxed font-medium text-[#45577E]">
            Jobster makes finding part-time jobs easy by connecting job seekers with top companies. Whether you're a student, freelancer, or business, our platform offers smart job recommendations, real-time chat, and secure payments for a seamless experience. Start your journey with Jobster today!
          </p>
          <Link to="/signup">
            <button className="px-6 py-3 border-2 bg-[#A0AECE] border-white text-white text-lg sm:text-xl font-semibold rounded-md hover:bg-white hover:text-[#A0AECE] transition duration-300">
              Signup
            </button>
          </Link>
        </div>

        <div className="h-full w-full md:w-[50%] flex justify-center items-center p-4">
          <img
            src={Img1}
            alt="Jobster"
            className="h-auto w-full md:w-[70%] max-h-[90%] object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

      <div className="min-h-screen flex items-center justify-around  p-4">
        <div className="animate-slide-up bg-[#A0AECE] p-8 rounded-lg shadow-lg max-w-6xl w-full mx-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6 text-white">
            <h1 className="text-4xl font-bold ">Why job seekers love us</h1>
            <div className="space-y-4">
              <p className="text-lg ">
                Connect directly with founders at top startups - no third party recruiters allowed.
              </p>
              <p className="text-lg ">
                Everything you need to know, all upfront. View salary, stock options, and more before applying.
              </p>
              <p className="text-lg ">
                Say goodbye to cover letters - your profile is all you need. One click to apply and you’re done.
              </p>
              <p className="text-lg ">
                Unique jobs at startups and tech companies you can’t find anywhere else.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-white">Why recruiters love us</h1>
            <div className="space-y-4 text-white">
              <p className="text-lg ">
                Tap into a community of 10M+ engaged, startup-ready candidates.
              </p>
              <p className="text-lg ">
                Everything you need to kickstart your recruiting — set up job posts, company branding, and HR tools within 10 minutes, all for free.
              </p>
              <p className="text-lg ">
                A free applicant tracking system, or free integration with any ATS you may already use.
              </p>
              <p className="text-lg ">
                Let us handle the heavy-lifting with RecruiterCloud. Our new AI-Recruiter scans 500M+ candidates, filters it down based on your unique calibration, and schedules your favorites on your calendar in a matter of days.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer /> */}
    </div>
  );
}

export default WelcomePage;
