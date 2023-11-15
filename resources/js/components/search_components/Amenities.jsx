import React, { useContext } from "react";
import Context from "../../Context";

import "./Amenities.scss";

const Amenities = () => {
    const { state, dispatch } = useContext(Context);

    const toggleFilter = (filterType) => {
        dispatch({
            type: filterType,
        });
    };

    return (
        <div className="amenities-btns">
            <div className="amenities-btns__top">
                <button
                    className={`btn ${
                        state.filterOptions.balcony ? " active" : ""
                    }`}
                    onClick={() => toggleFilter("BALCONY")}
                >
                    Balcony/Terrace
                </button>
                <button
                    className={`btn ${
                        state.filterOptions.wheelchair ? " active" : ""
                    }`}
                    onClick={() => toggleFilter("WHEELCHAIR")}
                >
                    Wheelchair Accesible
                </button>
                <button
                    className={`btn ${
                        state.filterOptions.basement ? " active" : ""
                    }`}
                    onClick={() => toggleFilter("BASEMENT")}
                >
                    Basement
                </button>
            </div>
            <div className="amenities-btns__bottom">
                <button
                    className={`btn ${
                        state.filterOptions.parking ? " active" : ""
                    }`}
                    onClick={() => toggleFilter("PARKING")}
                >
                    Privete Parking
                </button>
                <button
                    className={`btn ${
                        state.filterOptions.garden ? " active" : ""
                    }`}
                    onClick={() => toggleFilter("GARDEN")}
                >
                    Garden
                </button>
            </div>
        </div>
    );
};

export default Amenities;
