import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import UserContext from "../UserContext";
import './Navigation.scss'

const Navigation = () => {
    const { user, setUser } = useContext(UserContext);

    const handleLogout = async (ev) => {
        ev.preventDefault();

        const response = await axios.post("/logout");

        setUser(null);
    };

    return (
        <div className="nav">
            <div className="nav-brand"></div>
            <div className="nav-action__btn">
                <Link to="/create-property" className="nav-link">
                    <button>Rent my property</button>
                </Link>
                <Link to="/owner-interface" className="nav-link">
                    <button>Owner Interface</button>
                </Link>
            </div>

            <div className="nav-profile">
                <div className="profile-message__icon"></div>
                {/* <div className="profile-image">Image here</div> */}
                <Link to="/" className="nav-link">Go Home</Link>

                <Link to="/about-us" className="nav-link">About us</Link>

                {user === false ? (
                    <>
                        <div>
                            <Link to="/register" className="nav-link">Register</Link>
                        </div>
                        <div>
                            <Link to="/login" className="nav-link">Login</Link>
                        </div>
                    </>
                ) : user === false ? (
                    <li>Loading user...</li>
                ) : (
                    <>
                        <div className="nav-brand"></div>
                        <div className="nav-action__btn">
                            <Link to="/create-property" className="nav-link">
                                <button>Rent my property</button>
                            </Link>
                        </div>
                        <h3>Logged in as {user?.first_name}</h3>
                        <button className="btn" onClick={handleLogout}>
                            Logout
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default Navigation;
