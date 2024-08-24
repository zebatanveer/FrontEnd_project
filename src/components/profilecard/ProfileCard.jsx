import React from'react';

const ProfileCard = ({ profile, onSummaryClick, isSelected }) => {
  return (
    <div
      className={`p-4 border rounded-lg shadow-lg flex flex-col items-center ${
        isSelected? 'border-2 border-blue-500' : ''
      }`}
    >
      <img src={profile.photo} alt={profile.name} className="rounded-full w-32 h-32 mb-4" />
      <h3 className="text-xl font-semibold">{profile.name}</h3>
      <p className="text-gray-600 mb-4">{profile.description}</p>
      <button
        onClick={() => onSummaryClick(profile)}
        className={`bg-blue-500 text-white px-4 py-2 rounded ${
          isSelected? 'bg-blue-700' : ''
        }`}
      >
        Summary
      </button>
    </div>
  );
};

export default ProfileCard;