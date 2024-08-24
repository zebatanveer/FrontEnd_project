import React, { useState } from "react";
import profilesData from "../../data/profiledata.json";
import ProfileForm from "./ProfileFrom";
// Make sure the import path is correct

const AdminDashboard = () => {
  const [profiles, setProfiles] = useState(profilesData.profiles);
  const [editingProfile, setEditingProfile] = useState(null);

  // Add a new profile
  const addProfile = (profile) => {
    const newProfile = { id: Date.now(), ...profile };
    setProfiles([...profiles, newProfile]);
  };

  // Delete a profile
  const deleteProfile = (id) => {
    setProfiles(profiles.filter((profile) => profile.id !== id));
  };

  // Update a profile
  const updateProfile = (updatedProfile) => {
    setProfiles(
      profiles.map((profile) =>
        profile.id === updatedProfile.id ? updatedProfile : profile
      )
    );
    setEditingProfile(null);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Admin Page</h2>
      <div className="mb-4">
        <ProfileForm
          onSave={editingProfile ? updateProfile : addProfile}
          profile={editingProfile}
          onCancel={() => setEditingProfile(null)}
        />
      </div>
      <div className="grid grid-cols-1 gap-4">
        {profiles.map((profile) => (
          <div key={profile.id} className="p-4 border border-gray-300 rounded-lg shadow-md">
            <h3 className="text-xl font-bold">{profile.name}</h3>
            <p>{profile.description}</p>
            <p>{profile.location}</p>
            <div className="flex justify-between mt-4">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                onClick={() => setEditingProfile(profile)}
              >
                Update
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-lg"
                onClick={() => deleteProfile(profile.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
