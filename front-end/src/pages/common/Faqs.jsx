import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { question: 'How do I create an account?', answer: 'Click on "Sign Up", enter your details, and follow the instructions.' },
    { question: 'How can I reset my password?', answer: 'Go to the login page, click "Forgot Password?" and follow the steps.' },
    { question: 'How do I apply for a job?', answer: 'Browse jobs, click the listing, and hit "Apply Now".' },
    { question: 'How do I update my profile?', answer: 'Go to "Profile" and click "Edit" to update your details.' },
    { question: 'How can I delete my account?', answer: 'Contact support at support@example.com to request account deletion.' },
    { question: 'What should I do if I don’t get a job response?', answer: 'Follow up with the employer and keep applying to other jobs.' },
    { question: 'Is my personal information secure?', answer: 'Yes, we use encryption and security measures to protect your data.' },
    { question: 'Can I contact employers directly?', answer: 'Yes, if the employer has enabled direct messaging on the platform.' },
    { question: 'Are there any fees for job seekers?', answer: 'No, job seekers can apply for jobs for free.' },
    { question: 'How can I report inappropriate content?', answer: 'Use the "Report" button or contact support with details.' },
    { question: 'Can I save job listings to apply later?', answer: 'Yes, use the "Save Job" button to bookmark listings for later.' },
  ];

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Split FAQs into two columns
  const leftColumnFaqs = faqs.slice(0, Math.ceil(faqs.length / 2));
  const rightColumnFaqs = faqs.slice(Math.ceil(faqs.length / 2));

  return (
    <div className="max-w-5xl mx-auto py-10 px-6">
      <h1 className="text-3xl font-bold text-[#45577E] mb-6 text-center">Frequently Asked Questions</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Left Column */}
        <div>
          {leftColumnFaqs.map((faq, index) => (
            <div key={index} className="border rounded-lg p-4 bg-white shadow-md mb-6">
              <button
                className="flex justify-between items-center w-full text-left"
                onClick={() => toggleDropdown(index)}
              >
                <h2 className="text-lg font-semibold text-[#45577E]">{faq.question}</h2>
                <FontAwesomeIcon
                  icon={openIndex === index ? faChevronUp : faChevronDown}
                  className="text-[#45577E]"
                />
              </button>
              {openIndex === index && (
                <p className="mt-3 text-gray-700">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div>
          {rightColumnFaqs.map((faq, index) => {
            const adjustedIndex = index + leftColumnFaqs.length; // Adjust index for right column
            return (
              <div key={adjustedIndex} className="border rounded-lg p-4 bg-white shadow-md mb-6">
                <button
                  className="flex justify-between items-center w-full text-left"
                  onClick={() => toggleDropdown(adjustedIndex)}
                >
                  <h2 className="text-lg font-semibold text-[#45577E]">{faq.question}</h2>
                  <FontAwesomeIcon
                    icon={openIndex === adjustedIndex ? faChevronUp : faChevronDown}
                    className="text-[#45577E]"
                  />
                </button>
                {openIndex === adjustedIndex && (
                  <p className="mt-3 text-gray-700">{faq.answer}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Faqs;