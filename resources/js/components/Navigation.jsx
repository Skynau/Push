import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import UserContext from "../UserContext";
import "./Navigation.scss";

const Navigation = () => {
    const { user, setUser } = useContext(UserContext);
    const history = useNavigate();

    const handleLogout = async (ev) => {
        ev.preventDefault();

        const response = await axios.post("/logout");

        setUser(null);
        // Redirect to home page
        history("/");
        <Redire />;
    };

    return (
        <div className="nav">
            <div className="nav-brand">
                <Link to="/">Go Home</Link>
            </div>
            <div className="nav-about">
                <Link to="/about-us">About us</Link>
            </div>
            <Link to="/create-property">
                <button>Rent my property</button>
            </Link>
            <div className="nav-profile">
                <div className="profile-image">Image here</div>

                {user === false ? (
                    <>
                        <div>
                            <Link to="/register">Register</Link>
                        </div>
                        <div>
                            <Link to="/login">Login</Link>
                        </div>
                    </>
                ) : user === false ? (
                    <li>Loading user...</li>
                ) : (
                    <>
                        <div className="profile-message__icon">
                            <h3>Logged in as {user?.first_name}</h3>
                        </div>
                        <div className="nav-action__btn">
                            <Link to="/owner-interface">
                                <button>Owner Interface</button>
                            </Link>
                        </div>

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
