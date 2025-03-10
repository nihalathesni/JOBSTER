import React from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import Feed from '../../components/common/Feed';

function HomePage() {
  return (
    <div className='bg-slate-200 min-h-screen'>
      <Header />
      <div className="container mx-auto p-4">
        <Feed />
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
