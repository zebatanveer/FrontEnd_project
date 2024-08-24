import React, { useState, useEffect } from "react";

const ProfileForm = ({ onSave, profile, onCancel }) => {
  const [formState, setFormState] = useState({
    name: "",
    description: "",
    location: "",
    contactInfo: "",
    interests: "",
  });

  useEffect(() => {
    if (profile) {
      setFormState(profile);
    } else {
      setFormState({
        name: "",
        description: "",
        location: "",
        contactInfo: "",
        interests: "",
      });
    }
  }, [profile]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...formState, interests: formState.interests.split(",") });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded-lg shadow-md">
      <div className="mb-4">
        <label className="block text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          value={formState.name}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-lg"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Description</label>
        <input
          type="text"
          name="description"
          value={formState.description}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-lg"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Location</label>
        <input
          type="text"
          name="location"
          value={formState.location}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-lg"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Contact Info</label>
        <input
          type="email"
          name="contactInfo"
          value={formState.contactInfo}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-lg"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Interests</label>
        <input
          type="text"
          name="interests"
          value={formState.interests}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-lg"
          placeholder="Comma separated values"
          required
        />
      </div>
      <div className="flex justify-end">
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-lg">
          {profile ? "Update" : "Add"} Profile
        </button>
        {profile && (
          <button onClick={onCancel} className="ml-4 bg-gray-500 text-white px-4 py-2 rounded-lg">
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default ProfileForm;
