import React, { useState, useContext } from "react";
import Context from "../../Context";
import "./PetsWelcome.scss";

const PetsWelcome = () => {
    const [petClass, setPetClass] = useState(false);
    const { dispatch } = useContext(Context);

    const togglePets = () => {
        dispatch({
            type: "PETS",
        });
        setPetClass((prevVal) => !prevVal);
    };
    return (
        <div className="pets-welcome">
            <button
                className={`btn ${petClass ? " active" : ""}`}
                onClick={togglePets}
            >
                Pets Welcome
            </button>
        </div>
    );
};

export default PetsWelcome;
