import React, { useState, useContext, useEffect } from "react";
import EmptyHeartIcon from "../../../../public/images/heart-empty.svg";
import HeartIcon from "../../../../public/images/heart-liked.svg";
import ShowInterestIcon from "../../../../public/images/show-interest.svg";
import ExportVariant from "../../../../public/images/export-variant.svg";
import PhotoToCome from "../../../../public/images/photo-to-come.svg";
import Context from "../../Context";
import { formatCurrency, getProperties } from "../../helpers";
import "./PropertyDetail.scss";
import GoogleMapComponent from "../results_components/GoogleMap";
import imageFooter from "../../../../public/images/footer-real-estate.svg";
import UserContext from "../../UserContext";
import axios from "axios";
import Pano from "./Pano";
import { useParams } from "react-router-dom";
import { ShareModal } from "./ShareModal";
import ImageGallery from "./ImageGallery";
import SendFirstMessage from "./SendFirstMessage";

const PropertyDetail = ({ propertyId }) => {
    const { user } = useContext(UserContext);
    const { state, dispatch } = useContext(Context);
    const [liked, setLiked] = useState(false);
    const [house, setHouse] = useState(null);
    const [loading, setLoadding] = useState(false);
    const [shareOpen, setShareOpen] = useState(false);
    const [galleryOpen, setGalleryOpen] = useState(false);

    if (propertyId === undefined) {
        propertyId = useParams().id;
    }

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
        // console.log("New Center:", newCenter);
    };

    const handleZoomChange = (newZoom) => {
        // console.log("New Zoom:", newZoom);
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
            const response = await axios.post(
                "api/property/" + user.id + "/store",
                {
                    propertyId: propertyId,
                }
            );
        } catch (error) {
            console.log(error);
        }
    };

    const toggleShare = () => {
        setShareOpen((prevValue) => !prevValue);
    };

    const toggleGallery = () => {
        setGalleryOpen(!galleryOpen);
    };

    const hideOnBackdropShare = (e) => {
        const modal = e.target;

        if (modal.classList.contains("active")) {
            modal.classList.remove("active");
            toggleShare();
        }
    };

    const hideOnBackdropGallery = (e) => {
        const modal = e.target;

        if (modal.classList.contains("active")) {
            modal.classList.remove("active");
            toggleGallery();
        }
    };

    // console.log(house)

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
                        <div className="interest" onClick={toggleShare}>
                            <button className="icon">
                                <img src={ExportVariant} alt="share" />
                            </button>
                            <p>Share</p>
                        </div>
                        <div className="save" onClick={toggleLiked}>
                            <form action="" onSubmit={sendData}>
                                <button className="icon" type="submit">
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
                            <p>Send a Message</p>
                            <SendFirstMessage user_id={house?.user_id} />
                        </div>
                    </div>
                </div>

                <div
                    className={`modal  ${shareOpen ? " active" : ""}`}
                    onClick={hideOnBackdropShare}
                >
                    <ShareModal
                        propertyId={propertyId}
                        toggleShare={toggleShare}
                    />
                </div>

                <div
                    className={`modalPicGallery  ${
                        galleryOpen ? " active" : ""
                    }`}
                    onClick={hideOnBackdropGallery}
                >
                    <ImageGallery
                        media={house?.media}
                        toggleGallery={toggleGallery}
                    />
                </div>

                {loading ? (
                    <div className="loader"></div>
                ) : (
                    <>
                        <div className="propery-images">
                            <div className="main-image" onClick={toggleGallery}>
                                {/* <div
                                    style={
                                        house?.media[0]?.url
                                            ? {
                                                  backgroundImage:
                                                      "/" +
                                                      house?.media[0]?.url,
                                              }
                                            : {
                                                  backgroundImage: PhotoToCome,
                                              }
                                    }
                                > */}
                                <img
                                    //NEED TO FIX this to the loop
                                    src={
                                        house?.media[0]?.url
                                            ? "/" + house?.media[0]?.url
                                            : PhotoToCome
                                    }
                                    alt="Image"
                                />
                                {/* </div> */}
                            </div>
                            <div className="small-images">
                                <div
                                    className="image-col"
                                    onClick={toggleGallery}
                                >
                                    <img
                                        src={
                                            house?.media[1]?.url
                                                ? "/" + house?.media[1]?.url
                                                : PhotoToCome
                                        }
                                        // alt="Image"
                                    />

                                    <img
                                        src={
                                            house?.media[2]?.url
                                                ? "/" + house?.media[2]?.url
                                                : PhotoToCome
                                        }
                                        // src="https://image.cnbcfm.com/api/v1/image/103500764-GettyImages-147205632-2.jpg?v=1691157601"
                                        // alt="Image"
                                    />
                                </div>
                                <div
                                    className="image-col"
                                    onClick={toggleGallery}
                                >
                                    <img
                                        src={
                                            house?.media[3]?.url
                                                ? "/" + house?.media[3]?.url
                                                : PhotoToCome
                                        }
                                        // src="https://image.cnbcfm.com/api/v1/image/103500764-GettyImages-147205632-2.jpg?v=1691157601"
                                        // alt="Image"
                                    />
                                    <img
                                        src={
                                            house?.media[4]?.url
                                                ? "/" + house?.media[4]?.url
                                                : PhotoToCome
                                        }
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
                                        {house?.address?.city}
                                        {", "}
                                        {house?.address?.street}{" "}
                                        {house?.address?.street_number}
                                        {", "}
                                        {house?.address?.postal_code}
                                    </p>
                                </div>
                                <div className="beds-baths">
                                    <p>
                                        <span className="type">
                                            {house?.type?.type}
                                        </span>
                                        <span>property type</span>
                                    </p>
                                    <p>
                                        <span className="disposition">
                                            {house?.disposition?.disposition}
                                        </span>
                                        <span>disposition</span>
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
                                <div className="property-info_left">
                                    <p>
                                        Condition:{" "}
                                        <strong>
                                            {house?.condition?.condition}
                                        </strong>
                                    </p>
                                    {/* created_At is null now */}
                                    <p>
                                        Furnishing:{" "}
                                        <strong>
                                            {house?.furnishing?.furnishing}
                                        </strong>
                                    </p>

                                    <p>
                                        Heating type:{" "}
                                        <strong>{house?.heating?.type}</strong>
                                    </p>
                                    {/* <p>Amenities: </p> */}
                                </div>
                                <div className="property-info_right">
                                    <p>
                                        Available form:{" "}
                                        <strong>{house?.available_from}</strong>
                                    </p>
                                    {/* created_At is null now */}
                                    <p>
                                        Listing Date:{" "}
                                        <strong>
                                            {house?.created_at.slice(0, 10)}
                                        </strong>
                                    </p>

                                    <p>
                                        Pets Welcome:{" "}
                                        {house?.pets_welcome ? (
                                            <strong>Yes</strong>
                                        ) : (
                                            <strong>No</strong>
                                        )}
                                    </p>
                                </div>
                            </div>
                            {/* <div className="property-info_amenities">
                                <p>Amenities: </p>
                            </div> */}

                            <div className="property-description">
                                <h2>Description</h2>
                                <p>{house?.description}</p>
                            </div>
                            <div className="property-detail_map">
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
                                    centerMap={{
                                        lat: Number(house?.address?.latitude),
                                        lng: Number(house?.address?.longitude),
                                    }}
                                />
                            </div>

                            {/* <Pano /> */}
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
