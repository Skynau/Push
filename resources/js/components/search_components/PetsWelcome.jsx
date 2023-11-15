import React, { useContext } from "react";
import Context from "../../Context";
import "./PetsWelcome.scss";

const PetsWelcome = () => {
    const { state, dispatch } = useContext(Context);

    const togglePets = () => {
        dispatch({
            type: "PETS",
        });
    };
    return (
        <div className="pets-welcome">
            <button
                className={`btn ${state.filterOptions.pets ? " active" : ""}`}
                onClick={togglePets}
            >
                Pets Welcome
            </button>
        </div>
    );
};

export default PetsWelcome;
