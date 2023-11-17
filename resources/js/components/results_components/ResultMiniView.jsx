import React, { useContext } from "react";
import Context from "../../Context";
import PropertyDetail from "../property_detail_components/PropertyDetail";
import "./ResultMiniView.scss";
import ImageSlider from "./ImageSlider";
import { formatCurrency } from "../../helpers";

const ResultMiniView = ({ square_meters, price_rent, city, id }) => {
    const { state, dispatch } = useContext(Context);

    const openModal = () => {
        dispatch({
            type: "TOGGLE_MODAL",
            payload: id,
        });
    };

    return (
        <>
            <div className="mini-view">
                <div className="slider-container">
                    <ImageSlider />
                </div>
                <div className="mini-view_details" onClick={openModal}>
                    <h4>{formatCurrency(price_rent)} CZK </h4>
                    <p>disposition</p>
                    <p>{square_meters}</p>
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
