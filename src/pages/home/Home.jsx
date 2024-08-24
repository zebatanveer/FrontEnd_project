import React from'react';

const Home = () => {
  return (
    
   <div className="container mx-auto  pt-16">
     <div className="h-screen bg-gray-100">
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-5xl font-bold text-blue-500 mb-4">Welcome to Profile Map</h1>
        <p className="text-2xl text-gray-600 mb-8">A platform to connect with others and view their profiles</p>
        <img src="hero.png" />
        <div className="bg-blue-500 p-4 text-white text-center rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">What is Profile Map?</h2>
          <p className="text-lg mb-8">Profile Map is a platform that allows you to connect with others and view their profiles. With our platform, you can easily find and connect with people who share similar interests and passions.</p>
          <button className="bg-white hover:bg-gray-100 text-blue-500 font-bold py-2 px-4 rounded">Learn More</button>
        </div>
      </div>
    </div>
   </div>
  );
};

export default Home;