import React, { useContext, useState } from "react";
import Context from "../../Context";
import "./ConditionsApartment.scss";

const ConditionsApartment = () => {
    const [addClassFurnished, setAddClassFurnished] = useState(false);
    const [addClassUnfurnished, setAddClassUnfurnished] = useState(false);
    const [addClassPartialy, setAddClassPartialy] = useState(false);

    const { dispatch } = useContext(Context);

    const toggleFurnished = () => {
        dispatch({
            type: "FURNISHED_TOGGLE",
        });
        setAddClassFurnished((prevVal) => !prevVal);
    };

    const toggleUnfurnished = () => {
        dispatch({
            type: "UNFURNISHED_TOGGLE",
        });
        setAddClassUnfurnished((prevVal) => !prevVal);
    };

    const togglePartialy = () => {
        dispatch({
            type: "PARTIALY_TOGGLE",
        });
        setAddClassPartialy((prevVal) => !prevVal);
    };

    return (
        <div className="conditions-btns">
            <button
                className={`btn ${addClassFurnished ? " active" : ""}`}
                onClick={toggleFurnished}
            >
                Furnished
            </button>
            <button
                className={`btn ${addClassPartialy ? " active" : ""}`}
                onClick={togglePartialy}
            >
                Partialy Furnished
            </button>
            <button
                className={`btn ${addClassUnfurnished ? " active" : ""}`}
                onClick={toggleUnfurnished}
            >
                Unfurnished
            </button>
        </div>
    );
};

export default ConditionsApartment;
