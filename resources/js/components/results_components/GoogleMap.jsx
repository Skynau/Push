import React, { useContext, useEffect, useState } from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';
import Context from '../../Context';
import "./GoogleMap.scss";


const containerStyle = {
    width: "100%",
    height: "600px",
};



const GoogleMapComponent = ({
    markers,
    centerMap,
    onCenterChange,
    onZoomChange,
}) => {
    const [center, setCenter] = useState(
        centerMap ?? { lat: 50.0755, lng: 14.4378 }
    );

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
        }
        // console.log(center);

        return (
            <GoogleMap
            options={{
        styles:
    [
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#444444"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f2f2f2"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#46bcec"
            },
            {
                "visibility": "on"
            }
        ]
    }
    ]
    }}

                
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



    return <div>{React.createElement(renderMap)}</div>;
};

export default GoogleMapComponent;


//{lat: 50.106904, lng: 14.3954366},{lat: 50.0791686, lng: 14.4570205}