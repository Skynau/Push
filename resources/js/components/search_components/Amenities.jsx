import React, { useState, useContext } from "react";
import Context from "../../Context";

import "./Amenities.scss";

const Amenities = () => {
    const [classBalcony, setClassBalcony] = useState(false);
    const [classWheelchair, setClassWheelchair] = useState(false);
    const [classBasement, setClassBasement] = useState(false);
    const [classParking, setClassParking] = useState(false);
    const [classGarden, setClassGarden] = useState(false);

    const { dispatch } = useContext(Context);

    const toggleBalcony = () => {
        console.log(classBalcony);
        dispatch({
            type: "BALCONY",
        });
        setClassBalcony((prevVal) => !prevVal);
    };

    const toggleWheelchair = () => {
        dispatch({
            type: "WHEELCHAIR",
        });
        setClassWheelchair((prevVal) => !prevVal);
    };

    const toggleBasement = () => {
        dispatch({
            type: "BASEMENT",
        });
        setClassBasement((prevVal) => !prevVal);
    };

    const toggleParking = () => {
        dispatch({
            type: "PARKING",
        });
        setClassParking((prevVal) => !prevVal);
    };

    const toggleGarden = () => {
        dispatch({
            type: "GARDEN",
        });
        setClassGarden((prevVal) => !prevVal);
    };

    return (
        <div className="amenities-btns">
            <div className="amenities-btns__top">
                <button
                    className={`btn ${classBalcony ? " active" : ""}`}
                    onClick={toggleBalcony}
                >
                    Balcony/Terrace
                </button>
                <button
                    className={`btn ${classWheelchair ? " active" : ""}`}
                    onClick={toggleWheelchair}
                >
                    Wheelchair Accesible
                </button>
                <button
                    className={`btn ${classBasement ? " active" : ""}`}
                    onClick={toggleBasement}
                >
                    Basement
                </button>
            </div>
            <div className="amenities-btns__bottom">
                <button
                    className={`btn ${classParking ? " active" : ""}`}
                    onClick={toggleParking}
                >
                    Privete Parking
                </button>
                <button
                    className={`btn ${classGarden ? " active" : ""}`}
                    onClick={toggleGarden}
                >
                    Garden
                </button>
            </div>
        </div>
    );
};

export default Amenities;
