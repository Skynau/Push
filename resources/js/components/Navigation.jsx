import React from "react";

const Navigation = () => {
    return (
        <div className="nav">
            <div className="nav-brand"></div>
            <div className="nav-action__btn">
                <button>Rent my property</button>
            </div>
            <div className="nav-profile">
                <div className="profile-message__icon"></div>
                <div className="profile-image">Image here</div>
            </div>
        </div>
    );
};

export default Navigation;
