import React, { useState, useMemo } from "react";
import debounce from "lodash.debounce";
import Map from "../../components/map/Map";
import ProfileCard from "../../components/profilecard/ProfileCard";
import ProfileDetails from "../../components/profiledetails/ProfileDetails";

const ProfileList = ({ profiles }) => {
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterBy, setFilterBy] = useState("all");

  // Debounced search handler
  const debouncedSetSearchQuery = useMemo(
    () =>
      debounce((query) => {
        setSearchQuery(query);
      }, 300),
    []
  );

  const handleSearchChange = (e) => {
    const query = e.target.value;
    debouncedSetSearchQuery(query);
  };

  const handleSummaryClick = (profile) => {
    setSelectedProfile(profile);
  };

  const filteredProfiles = profiles.filter((profile) => {
    const query = searchQuery.toLowerCase();

    if (filterBy === "all") {
      return (
        profile.name.toLowerCase().includes(query) ||
        profile.location.toLowerCase().includes(query) ||
        profile.description.toLowerCase().includes(query)
      );
    } else if (filterBy === "name") {
      return profile.name.toLowerCase().includes(query);
    } else if (filterBy === "location") {
      return profile.location.toLowerCase().includes(query);
    } else if (filterBy === "description") {
      return profile.description.toLowerCase().includes(query);
    } else {
      return false;
    }
  });

  return (
    <>
    <h1 className="text-blue-700 text-5xl text-center">All Profiles</h1>
    <div className="flex flex-col min-h-screen">
    <div className="flex-grow container mx-auto p-4">
      <div className="flex justify-between mb-4">
        <div className="relative w-full mr-4">
          <input
            type="search"
            onChange={handleSearchChange}
            placeholder="Search profiles"
            className="w-full p-2 pl-10 text-sm text-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <select
          value={filterBy}
          onChange={(e) => setFilterBy(e.target.value)}
          className="w-1/2 p-2 text-sm text-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="all">All</option>
          <option value="name">Name</option>
          <option value="location">Location</option>
          <option value="description">Description</option>
        </select>
      </div>
      {selectedProfile ? (
        <div className="flex flex-col h-[calc(100vh-80px)]">
          <div className="flex justify-end mb-4">
            <button
              className="bg-white px-4 py-2 text-gray-600 hover:bg-gray-100"
              onClick={() => setSelectedProfile(null)}
            >
              Back
            </button>
          </div>
          <div className="flex-1 overflow-y-auto">
            <div className="flex flex-col h-full">
              <ProfileDetails profile={selectedProfile} />
              <Map selectedProfile={selectedProfile} />
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {filteredProfiles.map((profile) => (
            <ProfileCard
              key={profile.id}
              profile={profile}
              onSummaryClick={handleSummaryClick}
              isSelected={selectedProfile === profile}
            />
          ))}
        </div>
      )}
    </div>
  </div></>
    
  );
};

export default ProfileList;
