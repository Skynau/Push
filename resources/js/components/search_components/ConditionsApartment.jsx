import React from "react";
import "./ConditionsApartment.scss";

const ConditionsApartment = () => {
    return (
        <div className="conditions-btns">
            <button className="btn">Furnished</button>
            <button className="btn">Partialy Furnished</button>
            <button className="btn">Unfurnished</button>
        </div>
    );
};

export default ConditionsApartment;
