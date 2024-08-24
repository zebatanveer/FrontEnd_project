import React from'react';

const ProfileDetails = ({ profile }) => {
  if (!profile) {
    return (
      <div className="text-center p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
        Profile not found
      </div>
    );
  }

  return (
    <>
      <h1 className="text-3xl font-bold text-center mb-4 text-blue-500">Profile Summary</h1>
      <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
        <div className="flex justify-center mb-4">
          <img
            src={profile.photo}
            alt={profile.name}
            className="w-24 h-24 rounded-full object-cover border-2 border-blue-500"
          />
        </div>
        <h1 className="text-2xl font-bold text-center mb-2 text-blue-900">{profile.name}</h1>
        <p className="text-lg text-gray-600 text-center mb-4">{profile.description}</p>
        <div className="flex flex-col mb-4">
          <div className="flex justify-between mb-2">
            <p className="text-lg font-bold text-blue-600">Contact:</p>
            <p className="text-lg text-gray-600">{profile.contactInfo}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-lg font-bold text-blue-600">Interests:</p>
            <p className="text-lg text-gray-600">{profile.interests.join(', ')}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileDetails;