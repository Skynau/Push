import React, { useState, useContext, useEffect } from "react";
import EmptyHeartIcon from "../../../../public/images/heart-empty.svg";
import HeartIcon from "../../../../public/images/heart-liked.svg";
import ShowInterestIcon from "../../../../public/images/show-interest.svg";
import Context from "../../Context";
import { formatCurrency, getProperties } from "../../helpers";
import "./PropertyDetail.scss";
import GoogleMapComponent from "../results_components/GoogleMap";
import imageFooter from "../../../../public/images/footer-real-estate.svg";
import UserContext from "../../UserContext";
import axios from "axios";


const PropertyDetail = ({ propertyId }) => {
    const [liked, setLiked] = useState(false);
    const [house, setHouse] = useState(null);
    const [loading, setLoadding] = useState(false);
    const { state, dispatch } = useContext(Context);
    const { user } = useContext(UserContext);

    const fetchHouse = async (url) => {
        try {
            setLoadding(true);
            const data = await getProperties(url);
            setLoadding(false);
            setHouse(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    useEffect(() => {
        fetchHouse(`/api/property/${propertyId}`);
    }, []);

    const toggleLiked = () => {
        setLiked((prevValue) => !prevValue);
    };

    //property detail zoom and center

    // const handleMapClick = (e) => {
    //     
    //   };
    
      const handleCenterChange = (newCenter) => {
        
        console.log("New Center:", newCenter);
      };
    
      const handleZoomChange = (newZoom) => {
        
        console.log("New Zoom:", newZoom);
      };
      /////////////////////////////////////////
    const hideModal = (e) => {
        if (
            e.target.className === "property-container" ||
            e.target.className === "back-link"
        ) {
            dispatch({
                type: "TOGGLE_MODAL",
            });
        }
    };

        const sendData = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('api/property/'+ user.id +'/store', {
              propertyId: propertyId
            });
        } catch (error) {
            console.log(error)
        }
        }

        console.log(house?.photo_attachment)
  

    return (
        <div className="property-container" onClick={hideModal}>
            <div className="property-container_modal">
                <div className="property-nav">
                    <div className="back-link" onClick={hideModal}>
                        {" "}
                        &larr; Back to search
                    </div>
                    <div className="nav-brand">PUSH!</div>
                    <div className="nav-links">
                        <div className="save" onClick={toggleLiked}>
                          <form action="" onSubmit={sendData}>
                            <button type="submit" >
                            <img
                                src={liked ? HeartIcon : EmptyHeartIcon}
                                alt="Heart"
                            />
                            </button>
                            </form>
                            <p>Save</p>
                        </div>
                        <div className="interest">
                            <img src={ShowInterestIcon} alt="Interest" />
                            <p>Inquire Interest</p>
                        </div>
                    </div>
                </div>

                {loading ? (
                    <div className="loader"></div>
                ) : (
                    <>
                        <div className="propery-images">
                            <div className="main-image">
                                <img
                                src={house?.photo_attachment}
                                alt="Image"
                                />
                            </div>
                            <div className="small-images">
                                <div className="image-col">
                                    <img
                                    // src="https://image.cnbcfm.com/api/v1/image/103500764-GettyImages-147205632-2.jpg?v=1691157601"
                                    // alt="Image"
                                    />
                                    <img
                                    // src="https://image.cnbcfm.com/api/v1/image/103500764-GettyImages-147205632-2.jpg?v=1691157601"
                                    // alt="Image"
                                    />
                                </div>
                                <div className="image-col">
                                    <img
                                    // src="https://image.cnbcfm.com/api/v1/image/103500764-GettyImages-147205632-2.jpg?v=1691157601"
                                    // alt="Image"
                                    />
                                    <img
                                    // src="https://image.cnbcfm.com/api/v1/image/103500764-GettyImages-147205632-2.jpg?v=1691157601"
                                    // alt="Image"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="property-stats">
                            <div className="stats-top">
                                <div className="price-street">
                                    <h2 className="stats-price">
                                        {formatCurrency(house?.price_rent)} CZK
                                    </h2>
                                    <p className="stats-street">
                                        {house?.address?.city}{" "}
                                        {house?.address?.street}{" "}
                                        {house?.address?.street_number}{" "}
                                        {house?.address?.postal_code}
                                    </p>
                                </div>
                                <div className="beds-baths">
                                    <p>
                                        <span className="beds">3</span>
                                        <span>beds</span>
                                    </p>
                                    <p>
                                        <span className="baths">
                                            {house?.number_of_bathrooms}
                                        </span>
                                        <span>baths</span>
                                    </p>
                                    <p>
                                        <span className="size">
                                            {house?.square_meters} m2
                                        </span>
                                        <span>size</span>
                                    </p>
                                </div>
                            </div>
                            <div className="property-info">
                                <p>
                                    Available form{" "}
                                    <strong>{house?.available_from}</strong>
                                </p>
                                {/* created_At is null now */}
                                <p>Listing Date </p>

                                <p>
                                    Pets Welcome{" "}
                                    {house?.pets_welcome ? (
                                        <strong>Yes</strong>
                                    ) : (
                                        <strong>No</strong>
                                    )}
                                </p>
                            </div>

                            <GoogleMapComponent
                                // center={state.center}
                                // zoom={state.zoom}
                                markers={[
                                    {
                                        position: {
                                            lat: Number(
                                                house?.address?.latitude
                                            ),
                                            lng: Number(
                                                house?.address?.longitude
                                            ),
                                        },
                                    },
                                ]}
                                // onMapClick={handleMapClick}
                                onCenterChange={handleCenterChange}
                                onZoomChange={handleZoomChange}
                                centerMap={{lat: Number(
                                    house?.address?.latitude
                                ),
                                lng: Number(
                                    house?.address?.longitude
                                )}}
                            />

                            <div className="property-description">
                                <h2>Description</h2>
                                <p>{house?.description}</p>
                            </div>
                            <img
                                src={imageFooter}
                                className="bottom-image"
                                alt="Image"
                            />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default PropertyDetail;
