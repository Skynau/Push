import React, { useContext, useState } from 'react';
import GoogleMapComponent from './GoogleMap';
import Context from "../../Context";

const MapContainer = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const { state, dispatch } = useContext(Context);

//   const handleSearchLocationChange = (newLocation) => {
//     setSelectedLocation(newLocation);
//   };

  const handleMapClick = (mapEvent) => {
    // Handle map click and add a marker
    // const newMarker = { position: mapEvent.latLng.toJSON() };
    // setMarkers([...markers, newMarker]);
  };

  return (
    <div>
      {/* <SearchLocation onLocationChange={handleSearchLocationChange} /> */}
      <GoogleMapComponent markers={state.markers} selectedLocation={selectedLocation} onMapClick={handleMapClick} />
    </div>
  );
};

export default MapContainer;