import React from "react";

import "./Amenities.scss";

const Amenities = () => {
    return (
        <div className="amenities-btns">
            <div className="amenities-btns__top">
                <button className="btn">Balcony/Terrace</button>
                <button className="btn">Wheelchair Accesible</button>
                <button className="btn">Basement</button>
            </div>
            <div className="amenities-btns__bottom">
                <button className="btn">Privete Parking</button>
                <button className="btn">Garden</button>
            </div>
        </div>
    );
};

export default Amenities;
