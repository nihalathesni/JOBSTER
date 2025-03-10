import React from 'react';
import { useNavigate } from 'react-router-dom';
import Post from './Post';
import post1 from '../../assets/post1.jpg';
import post2 from '../../assets/post2.jpg';
import post3 from '../../assets/post3.jpg';
import post4 from '../../assets/post4.webp';
import post5 from '../../assets/post5.jpeg';
import post6 from '../../assets/post6.avif';
import post7 from '../../assets/post7.jpg';
import post8 from '../../assets/post8.avif';
import post9 from '../../assets/post9.jpg';
import post10 from '../../assets/post10.jpg';

function Feed() {
  const navigate = useNavigate();

  const posts = [
    {
      id: 1,
      username: 'White_Events',
      content: 'We are URGENT HIRING!! We are an event management company looking for...',
      fullContent: 'We are URGENT HIRING!! We are an event management company looking for enthusiastic and reliable individuals to join our dynamic team for a part-time job at an upcoming grand wedding event. If you enjoy creating magical experiences, apply now!',
      imageUrl: post1,
    },
    {
      id: 2,
      username: 'Event_Planners_Inc',
      content: 'Join us for the most awaited corporate event of the year!',
      fullContent: 'Join us for the most awaited corporate event of the year! Exciting opportunities await. We are bringing together industry leaders, networking sessions, and entertainment all in one place!',
      imageUrl: post2,
    },
    {
      id: 3,
      username: 'Creative_Weddings',
      content: 'Check out our latest wedding event setup.',
      fullContent: 'Check out our latest wedding event setup. A perfect blend of tradition and modernity! We ensure every wedding has a unique and elegant touch with mesmerizing decorations.',
      imageUrl: post3,
    },
    {
      id: 4,
      username: 'Creative_Weddings',
      content: 'Check out our latest wedding event setup.',
      fullContent: 'Check out our latest wedding event setup. A perfect blend of tradition and modernity! We ensure every wedding has a unique and elegant touch with mesmerizing decorations.',
      imageUrl: post4,
    },
    {
      id: 5,
      username: 'Creative_Weddings',
      content: 'Check out our latest wedding event setup.',
      fullContent: 'Check out our latest wedding event setup. A perfect blend of tradition and modernity! We ensure every wedding has a unique and elegant touch with mesmerizing decorations.',
      imageUrl: post5,
    },
    {
      id: 6,
      username: 'Creative_Weddings',
      content: 'Check out our latest wedding event setup.',
      fullContent: 'Check out our latest wedding event setup. A perfect blend of tradition and modernity! We ensure every wedding has a unique and elegant touch with mesmerizing decorations.',
      imageUrl: post6,
    },
    {
      id: 7,
      username: 'Creative_Weddings',
      content: 'Check out our latest wedding event setup.',
      fullContent: 'Check out our latest wedding event setup. A perfect blend of tradition and modernity! We ensure every wedding has a unique and elegant touch with mesmerizing decorations.',
      imageUrl: post7,
    },
    {
      id: 8,
      username: 'Creative_Weddings',
      content: 'Check out our latest wedding event setup.',
      fullContent: 'Check out our latest wedding event setup. A perfect blend of tradition and modernity! We ensure every wedding has a unique and elegant touch with mesmerizing decorations.',
      imageUrl: post8,
    },
    {
      id: 9,
      username: 'Creative_Weddings',
      content: 'Check out our latest wedding event setup.',
      fullContent: 'Check out our latest wedding event setup. A perfect blend of tradition and modernity! We ensure every wedding has a unique and elegant touch with mesmerizing decorations.',
      imageUrl: post9,
    },
    {
      id: 10,
      username: 'Creative_Weddings',
      content: 'Check out our latest wedding event setup.',
      fullContent: 'Check out our latest wedding event setup. A perfect blend of tradition and modernity! We ensure every wedding has a unique and elegant touch with mesmerizing decorations.',
      imageUrl: post10,
    },
    
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {posts.map((post) => (
        <Post key={post.id} post={post} onSeeMore={() => navigate(`/post/${post.id}`, { state: post })} />
      ))}
    </div>
  );
}

export default Feed;
