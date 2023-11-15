import { React, useContext, useState } from "react";
import Context from "../../Context";
import "./Type.scss";

const Type = () => {
    const [addClassApartment, setAddClassApartment] = useState(false);
    const [addClassHouse, setAddClassHouse] = useState(false);

    const { state , dispatch } = useContext(Context);

    const toggleApartment = () => {
        dispatch({
            type: "APARTMENT_TOGGLE",
        });
        setAddClassApartment((prevVal) => !prevVal);
    };
    const toggleHouse = () => {
        dispatch({
            type: "HOUSE_TOGGLE",
        });
        setAddClassHouse((prevVal) => !prevVal);
    };

    return (
        <div className="type-btns">
            <button
                className={`btn ${state.filterOptions.apartment ? " active" : ""}`}
                onClick={toggleApartment}
            >
                Apartment
            </button>
            <button
                className={`btn ${addClassHouse ? " active" : ""}`}
                onClick={toggleHouse}
            >
                House
            </button>
        </div>
    );
};

export default Type;
