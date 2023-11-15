import React from "react";
import "./ResultMiniView.scss";
import PropertyDetail from "../property_detail_components/PropertyDetail";

const ResultMiniView = () => {
    const openModal = () => {};
    return (
        <>
            <div className="mini-view" onClick={openModal}>
                <img className="mini-view_img" src="" alt="" />
                <div className="mini-view_details">
                    <h4>Price</h4>
                    <p>disposition</p>
                    <p>size</p>
                    <p>location</p>
                </div>
            </div>
            <PropertyDetail />
        </>
    );
};

export default ResultMiniView;
