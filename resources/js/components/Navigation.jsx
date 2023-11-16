import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Context from "../Context";

const Navigation = () => {
    const { dispatch, state } = useContext(Context);

    const set = () => {
        dispatch({
            type: "test",
            payload: "marcle",
        });
    };
    return (
        <div className="nav">
            <div className="nav-brand"></div>
            <div className="nav-action__btn">
                <button>Rent my property</button>
            </div>
            <h2>{state.user}</h2>
            <button onClick={set}></button>
            <div className="nav-profile">
                <div className="profile-message__icon"></div>
                <div className="profile-image">Image here</div>
                <Link to="/">Go Home</Link>
            </div>
        </div>
    );
};

export default Navigation;
