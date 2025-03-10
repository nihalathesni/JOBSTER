import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function PostDetail() {
  const { state: post } = useLocation();

  if (!post) {
    return <div className="text-center p-6 text-gray-600">Post not found</div>;
  }

  return (
    <div className="bg-slate-200 min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow container mx-auto p-6 max-w-3xl bg-white rounded-lg shadow-lg flex flex-col items-center mt-8 mb-8">
        {/* Header Section */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{post.username}</h1>
          <p className="text-sm text-gray-500">Posted on {new Date(post.date).toLocaleDateString()}</p>
        </div>

        {/* Image Section */}
        <div className="flex justify-center mb-6 w-full">
          <img 
            src={post.imageUrl} 
            alt="Post" 
            className="w-full max-w-md h-64 object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Content Section */}
        <div className="mb-6 w-full">
          <p className="text-gray-700 text-lg leading-relaxed break-words">{post.fullContent}</p>
        </div>

        {/* Apply Now Button */}
        <div className="text-center w-full">
          <Link to='/messages'>
          <button 
            className="bg-[#7b8fbd] text-white px-6 py-2 rounded-lg hover:bg-[#45577E] transition duration-300 ease-in-out transform hover:scale-105"
          >
            Apply Now
          </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PostDetail;