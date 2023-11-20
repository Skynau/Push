import React, { useContext } from "react";
import Context from "../../Context";
import PropertyDetail from "../property_detail_components/PropertyDetail";
import "./ResultMiniView.scss";
import ImageSlider from "./ImageSlider";
import { formatCurrency } from "../../helpers";

const ResultMiniView = ({ square_meters, price_rent, city, id, disposition, pictures }) => {
    const { state, dispatch } = useContext(Context);

    const openModal = () => {
        dispatch({
            type: "TOGGLE_MODAL",
            payload: id,
        });
    };

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

    
    return (
        <>
            <div className="mini-view">
                <div className="slider-container">
                    <ImageSlider pictures={pictures}/>
                    {/* <img src="/uploads/images/1700404364_flatio8ptefg.avif" alt="" /> */}
                </div>
                <div className="mini-view_details" onClick={openModal}>
                    <h4>{formatCurrency(price_rent)} CZK </h4>
                    <p>{displayDisposition}</p>
                    <p>{square_meters} m2</p>
                    <p>{city}</p>
                </div>
            </div>
            {state.showPropertyDetail === id ? (
                <PropertyDetail propertyId={id} />
            ) : null}
        </>
    );
};

export default ResultMiniView;
