import React, { useContext } from "react";
import Context from "../../Context";
import PropertyDetail from "../property_detail_components/PropertyDetail";
import "./ResultMiniView.scss";
import ImageSlider from "./ImageSlider";

const ResultMiniView = ({ square_meters, price_rent, city }) => {
    const { state, dispatch } = useContext(Context);

    const openModal = () => {
        dispatch({
            type: "TOGGLE_MODAL",
        });
    };
    return (
        <>
            <div className="mini-view">
                <div className="slider-container">
                    <ImageSlider />
                </div>
                <div className="mini-view_details" onClick={openModal}>
                    <h4>{price_rent}</h4>
                    <p>disposition</p>
                    <p>{square_meters}</p>
                    <p>{city}</p>
                </div>
            </div>
            {state.showPropertyDetail ? <PropertyDetail /> : null}
        </>
    );
};

export default ResultMiniView;
