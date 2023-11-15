import React, { useContext } from "react";
import Context from "../../Context";
import PropertyDetail from "../property_detail_components/PropertyDetail";
import "./ResultMiniView.scss";

const ResultMiniView = () => {
    const { state, dispatch } = useContext(Context);

    const openModal = () => {
        dispatch({
            type: "TOGGLE_MODAL",
        });
    };
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
            {state.showPropertyDetail ? <PropertyDetail /> : null}
        </>
    );
};

export default ResultMiniView;
