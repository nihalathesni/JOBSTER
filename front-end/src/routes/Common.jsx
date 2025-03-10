import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from '../pages/common/WelcomPage'
import LoginForm from '../pages/common/LoginForm';
import HomePage from '../pages/common/HomePage';
import Profile from '../pages/common/ProfileLanding';
import SignupPage from '../pages/common/SignupPage';
import MessagesPage from '../pages/common/MessagesPage';
import About from '../pages/common/About';
import PostDetail from '../components/common/PostDetail';
import CompanyProfile from '../pages/company/CompanyProfile';
import JobSeekerProfile from '../pages/candidates/JobSeekerProfile';
import Faqs from '../pages/common/Faqs';
import Help from '../pages/common/Help';
import Contact from '../pages/common/Contact';
function Common() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<WelcomePage />} />
          <Route path='/login' element={<LoginForm />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/home' element={<HomePage/>} />
          <Route path='/profile' element={<Profile/>}/>     
          <Route path='/messages' element={<MessagesPage/>}/>
          <Route path='/aboutus' element={<About/>}/>
          <Route path="/post/:id" element={<PostDetail />} />
          <Route path="/job-seeker-profile" element={<JobSeekerProfile />} />
          <Route path="/company-profile" element={<CompanyProfile />} />
          <Route path='/faqs' element={<Faqs />}/>
          <Route path='/help' element={<Help />}/>
          <Route path='/contact' element={<Contact />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default Common;