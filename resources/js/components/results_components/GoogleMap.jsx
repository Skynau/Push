import React, { useContext, useEffect, useState } from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';
import Context from '../../Context';


const containerStyle = {
  width: '100%',
  height: '600px',
};

const GoogleMapComponent = ({ markers, onMapClick }) => {

  const [center, setCenter] = useState({ lat: 50.0755, lng: 14.4378 });

  const [zoom, setZoom] = useState(13);
   
  const { state, dispatch } = useContext(Context);

  const renderMap = () => {

    if (Array.from(state.markers)?.length > 0) {
    
      setCenter(state.markers[0]?.position);

    };
    // console.log(markers);

    return (
          <GoogleMap
            googleMapsApiKey="AIzaSyCMpzXAKNYGF17gXZAf_NHmcSTOKCrQZnE"
            mapContainerStyle={containerStyle}
            center={center}
            zoom={zoom}
          >
            {markers.map((marker, index) => (
              <Marker key={index} position={marker.position} />
            ))}
          </GoogleMap>
    );
  };

  
  useEffect(() => {
    // Check if markers are available and set the center and zoom accordingly
    if (state.markers?.length > 0) {
      setCenter(state.markers[0]?.position);
      setZoom(16); // Assuming you have a state for zoom level
    }
  }, [state.markers]);

  return (
    <div>
      
      {React.createElement(renderMap)}
    
    </div>
  );
};

export default GoogleMapComponent;