import React from "react";
import './ConditionsApartment.scss';

const ConditionsApartment = () => {
    return (
        <div className="conditions-btns">
            <button className="conditions-btn">Furnished</button>
            <button className="conditions-btn">Partialy Furnished</button>
            <button className="conditions-btn">Unfurnished</button>
        </div>
    );
};

export default ConditionsApartment;
