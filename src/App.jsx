import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import ProfileList from './pages/profilelist/ProfileList';
import ProfileDetails from './components/profiledetails/ProfileDetails';
import AdminDashboard from './pages/admin/AdminDashboard';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import profilesData from './data/profiledata.json'
// Corrected import statement

const App = () => {
   const [profiles, setProfiles] = useState(profilesData.profiles);

  return (
    <Router>
      <Navbar />
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profiles" element={<ProfileList profiles={profiles} />} />
        <Route path="/profiles/:id" element={<ProfileDetails profiles={profiles} />} />
        <Route path="/admin" element={<AdminDashboard profiles={profiles} setProfiles={setProfiles} />} />
      </Routes>
      <br /><br />
      <Footer />
    </Router>
  );
};

export default App;
