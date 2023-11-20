import React, { useContext, useEffect, useState } from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';
import Context from '../../Context';
import "./GoogleMap.scss";


const containerStyle = {
  width: '100%',
  height: '600px',
};

const GoogleMapComponent = ({ markers, centerMap, onCenterChange, onZoomChange }) => {

  const [center, setCenter] = useState(centerMap ?? { lat: 50.0755, lng: 14.4378 });

  const [zoom, setZoom] = useState(13);
   
  const { state, dispatch } = useContext(Context);

  // zoom and center on propertty detail

    const handleCenterChange = () => {
      onCenterChange && onCenterChange(center);
    };

    const handleZoomChange = () => {
      onZoomChange && onZoomChange(zoom);
    };

    useEffect(() => {
      handleCenterChange();
    }, [center]);

    useEffect(() => {
      handleZoomChange();
    }, [zoom]);
//-----------------------------------------------------------------

  const renderMap = () => {

    if (Array.from(state.markers)?.length > 0) {
    
      setCenter(state.markers[0]?.position);
    };
    // console.log(markers);

    return (
          <GoogleMap
            googleMapsApiKey="AIzaSyAbDifRoGhtEzTiYwEPBWc0roSxzhRUqvU"
            mapContainerStyle={containerStyle}
            onCenterChanged={handleCenterChange}
            onZoomChanged={handleZoomChange}
            center={center}
            zoom={zoom}
          >
            {markers.map((marker, index) => (
              <Marker key={index} position={marker.position} />
            ))}
          </GoogleMap>
    );
  };

  return (
    <div>
      
      {React.createElement(renderMap)}
    
    </div>
  );
};

export default GoogleMapComponent;