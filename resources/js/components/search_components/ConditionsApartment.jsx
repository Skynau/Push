import React, { useContext } from "react";
import Context from "../../Context";
import "./ConditionsApartment.scss";

const ConditionsApartment = () => {
    const { state, dispatch } = useContext(Context);

    const toggleFilter = (filterType) => {
        dispatch({
            type: `${filterType}_TOGGLE`,
        });
    };

    return (
        <div className="conditions-btns">
            <button
                className={`btn ${
                    state.filterOptions.furnished ? " active" : ""
                }`}
                onClick={() => toggleFilter("FURNISHED")}
            >
                Furnished
            </button>
            <button
                className={`btn ${
                    state.filterOptions.unfurnished ? " active" : ""
                }`}
                onClick={() => toggleFilter("UNFURNISHED")}
            >
                Partialy Furnished
            </button>
            <button
                className={`btn ${
                    state.filterOptions.partialy ? " active" : ""
                }`}
                onClick={() => toggleFilter("PARTIALY")}
            >
                Unfurnished
            </button>
        </div>
    );
};

export default ConditionsApartment;
