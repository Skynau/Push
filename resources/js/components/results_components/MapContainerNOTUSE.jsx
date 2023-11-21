import React, { useContext, useState } from 'react';
import GoogleMapComponent from './GoogleMap';
import Context from "../../Context";
// import _debounce from 'lodash/debounce';

const MapContainer = () => {
//   const [selectedLocation, setSelectedLocation] = useState(null);
  const { state } = useContext(Context);

//   const handleSearchLocationChange = (newLocation) => {
//     setSelectedLocation(newLocation);
//   };

  // const handleMapClick = (mapEvent) => {
  //   console.log('Map clicked!', mapEvent);
  //   // Handle map click and add a marker
  //   // const newMarker = { position: mapEvent.latLng.toJSON() };
  //   // setMarkers([...markers, newMarker]);
  // };

//   const debouncedMapClick = _debounce(handleMapClick, 1000);

  // console.log('Rendering MapContainer:', { state });

  return (
    <div>
      <GoogleMapComponent 
      markers={state.markers} 
      />
    </div>
  );
};

export default MapContainer;
// onMapClick={handleMapClick} 
//   onInput={debouncedMapClick}
//   selectedLocation={selectedLocation} 