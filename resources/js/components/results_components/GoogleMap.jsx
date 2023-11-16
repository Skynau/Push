import React from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '500px',
};

const center = {
  lat: 50.0755,
  lng: 14.4378,
};

const GoogleMapComponent = ({ markers, onMapClick }) => {
  return (
    <>
        <GoogleMap
            googleMapsApiKey="AIzaSyCMpzXAKNYGF17gXZAf_NHmcSTOKCrQZnE"
            mapContainerStyle={containerStyle}
            center={center}
            zoom={13}
            onClick={onMapClick}
            >
            {markers.map((marker, index) => (
            <Marker key={index} position={marker.position} />
            ))}
        </GoogleMap>
    </>
  );
};

export default GoogleMapComponent;