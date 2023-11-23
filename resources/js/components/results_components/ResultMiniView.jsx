import React, { useContext, useEffect, useRef, useState } from "react";
import Context from "../../Context";
import PropertyDetail from "../property_detail_components/PropertyDetail";
import "./ResultMiniView.scss";
import ImageSlider from "./ImageSlider";
import { formatCurrency } from "../../helpers";
import areaIcon from "../../../../public/images/area-icon.svg";
import floorplan from "../../../../public/images/floorplan.svg";

const ResultMiniView = ({ square_meters, price_rent, city, id, disposition, pictures, address, street, }) => {
    const { state, dispatch } = useContext(Context);

    const openModal = () => {
        dispatch({
            type: "TOGGLE_MODAL",
            payload: id,
        });
    };

  //   const [prePins, setPrePins] = useState(state.markers);

  //   const preState = useRef(state.markers);

  //   useEffect(() => {
  //     preState.current = prePins;
  // }, [prePins]);
    // setPrePins(state.markers)

    let displayDisposition = ''

    switch (disposition) {
        case 1:
            displayDisposition = '1kk'
            break;
        case 2:
            displayDisposition = '1+1'
            break;
        case 3:
            displayDisposition = '2kk'
            break;
        case 4:
            displayDisposition = '2+1'
            break;
        case 5:
            displayDisposition = '3kk'
            break;
        case 6:
            displayDisposition = '3+1'
            break;
        case 7:
            displayDisposition = '4kk'
            break;
        case 8:
            displayDisposition = '4+1'
            break;
        case 9:
            displayDisposition = '5kk'
            break;
        case 10:
            displayDisposition = '5+1'
            break;
        case 11:
            displayDisposition = '6kk'
            break;
        case 12:
            displayDisposition = '6+1'
            break;
        case 13:
            displayDisposition = '7kk'
            break;
        case 14:
            displayDisposition = '7+1'
            break;
        case 15:
            displayDisposition = "larger than 7+1"
            break;

        default:
            displayDisposition = 2+1
            break;
    }

    // console.log(preState);
    //-------------change pins on map
    function changePin(e) {
    // e.target.style.background = 'red';
    dispatch({
                type: "MAP_MARKER",
                payload: [
                    {
                        position: {
                            lat: Number(address?.latitude),
                            lng: Number(address?.longitude)
                        },
                    },
                ],
            });
  } 

    // console.log(address.longitude);onMouseLeave={}

    return (
        <>
            <div onMouseEnter={changePin}  className="mini-view">
                <div className="slider-container">
                    <ImageSlider pictures={pictures} />
                    {/* <img src="/uploads/images/1700404364_flatio8ptefg.avif" alt="" /> */}
                </div>
                <div className="mini-view_details" onClick={openModal}>
                    {/* <h4>{formatCurrency(price_rent)} CZK </h4> */}
                    <div className="mini-view-details_top">
                        <h4>{price_rent} CZK </h4>
                        <span>
                            <img
                                className="disposition-icon"
                                src={floorplan}
                                alt="property disposition icon"
                            />
                        </span>
                        <span>{displayDisposition}</span>
                        <span>
                            <img
                                className="area-icon"
                                src={areaIcon}
                                alt="property area icon"
                            />
                        </span>
                        <span>{square_meters} m2</span>
                    </div>
                    <div className="mini-view-details_bottom">
                        <p>{street}</p>
                        <p>{city}</p>
                    </div>
                </div>
            </div>
            {state.showPropertyDetail === id ? (
                <PropertyDetail propertyId={id} />
            ) : null}
        </>
    );
};

export default ResultMiniView;
