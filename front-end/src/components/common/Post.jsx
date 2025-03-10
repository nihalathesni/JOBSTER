import React from 'react';

function Post({ post, onSeeMore }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="font-bold mb-2">{post.username}</div>
      <img src={post.imageUrl} alt="Post" className="rounded-lg object-cover w-full h-48" />
      <p className="my-2">{post.content}</p>
      <button 
        className="text-blue-500 hover:underline"
        onClick={onSeeMore}
      >
        See More
      </button>
    </div>
  );
}

export default Post;
