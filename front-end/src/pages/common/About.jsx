import { FaBriefcase, FaUsers, FaHandshake } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import About1 from "../../assets/about1.jpg"
import About2 from "../../assets/about2.jpg"

const fadeInVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
};

export default function About() {
  const [page, setPage] = useState(1);

  return (
    <div className="bg-slate-200 min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 flex flex-col justify-center py-12">
        <div className="max-w-6xl mx-auto px-6 text-gray-800 w-full">
          <motion.h1 
            className="text-4xl font-bold text-center text-[#45577E] mb-8"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
          >
            About Jobster
          </motion.h1>

          {/* Navigation Buttons */}
          <div className="flex justify-center space-x-4 mb-8">
            <button 
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                page === 1 
                  ? 'bg-[#45577E] text-white shadow-lg' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-300'
              }`}
              onClick={() => setPage(1)}
            >
              Overview
            </button>
            <button 
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                page === 2 
                  ? 'bg-[#45577E] text-white shadow-lg' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-300'
              }`}
              onClick={() => setPage(2)}
            >
              Our Mission
            </button>
            <button 
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                page === 3 
                  ? 'bg-[#45577E] text-white shadow-lg' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-300'
              }`}
              onClick={() => setPage(3)}
            >
              Our Team
            </button>
          </div>

          {/* Page Content */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            {page === 1 && (
              <motion.div initial="hidden" animate="visible" variants={fadeInVariants}>
                <p className="text-lg text-center mb-10 text-gray-700">
                  Jobster is a cutting-edge platform connecting job seekers with top companies.
                  Whether you're looking for a part-time gig or the perfect candidate,
                  we simplify the hiring process for both job seekers and employers.
                </p>
                <div className="grid md:grid-cols-3 gap-8">
                  {[ 
                    { Icon: FaUsers, title: "For Job Seekers", text: "Create a profile, showcase your skills, and connect with companies offering part-time opportunities." },
                    { Icon: FaBriefcase, title: "For Companies", text: "Post job vacancies, find qualified candidates, and streamline your hiring process." },
                    { Icon: FaHandshake, title: "Seamless Connection", text: "Real-time chat, application tracking, and notifications to keep everyone connected." }
                  ].map((item, index) => (
                    <motion.div 
                      key={index} 
                      className="bg-gray-50 p-6 rounded-lg shadow-sm text-center"
                      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                      animate={{ opacity: 1, x: 0, transition: { duration: 0.8, delay: index * 0.2 } }}
                    >
                      <item.Icon className="text-blue-500 text-5xl mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-2 text-gray-800">{item.title}</h3>
                      <p className="text-gray-600">{item.text}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {page === 2 && (
              <motion.div initial="hidden" animate="visible" variants={fadeInVariants} className="text-center">
                <h2 className="text-2xl font-semibold text-[#45577E] mb-6">Our Mission</h2>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
                  At Jobster, we strive to bridge the gap between job seekers and employers by providing a
                  user-friendly, efficient, and reliable platform that fosters career growth and business success.
                </p>
                <div className="w-full h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                <img src={About1} alt="About Jobster" className="w-full h-64 object-cover rounded-lg" />
                </div>
              </motion.div>
            )}

            {page === 3 && (
              <motion.div initial="hidden" animate="visible" variants={fadeInVariants} className="text-center">
                <h2 className="text-2xl font-semibold text-[#45577E] mb-6">Our Team</h2>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
                  Meet the passionate team behind Jobster, working hard to revolutionize the job market.
                </p>
                <div className="w-full h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                <img src={About2} alt="Our Team" className="w-full h-64 object-cover rounded-lg" />
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}