import React from "react";

import "./Amenities.scss";

const Amenities = () => {
    return (
        <div className="amenities-btns">
            <button className="btn">Balcony/Terrace</button>
            <button className="btn">Wheelchair Accesible</button>
            <button className="btn">Basement</button>
            <button className="btn">Privete Parking</button>
            <button className="btn">Garden</button>
        </div>
    );
};

export default Amenities;
