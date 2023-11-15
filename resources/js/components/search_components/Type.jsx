import { React, useContext } from "react";
import Context from "../../Context";
import "./Type.scss";

const Type = () => {
    const { state, dispatch } = useContext(Context);

    const toggleApartment = () => {
        dispatch({
            type: "APARTMENT_TOGGLE",
        });
    };
    const toggleHouse = () => {
        dispatch({
            type: "HOUSE_TOGGLE",
        });
    };

    return (
        <div className="type-btns">
            <button
                className={`btn ${
                    state.filterOptions.apartment ? " active" : ""
                }`}
                onClick={toggleApartment}
            >
                Apartment
            </button>
            <button
                className={`btn ${state.filterOptions.house ? " active" : ""}`}
                onClick={toggleHouse}
            >
                House
            </button>
        </div>
    );
};

export default Type;
