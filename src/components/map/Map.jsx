import React, { useState, useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css';

const Map = ({ selectedProfile }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay for loading (e.g., fetching data or initializing the map)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust the timeout as needed

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="text-lg font-semibold text-gray-700">Loading...</div>
      </div>
    );
  }

  if (!selectedProfile || !selectedProfile.latitude || !selectedProfile.longitude) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="text-lg font-semibold text-red-600">Error: Invalid profile data</div>
      </div>
    );
  }

  return (
    <>
    <br /><br /><br />
    <h1>Adress on map</h1>
    <MapContainer
    className="h-screen"
    center={[selectedProfile.latitude, selectedProfile.longitude]}
    zoom={13}
    scrollWheelZoom={false}
  >
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={[selectedProfile.latitude, selectedProfile.longitude]}>
      <Popup>
        {selectedProfile.name} <br /> Lives here.
      </Popup>
    </Marker>
  </MapContainer></>
    
  );
};

export default Map;
