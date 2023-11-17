import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import UserContext from "../UserContext";

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
            <div>
            <Link to="/">Go Home</Link>
            </div>
            <div>
            <Link to="/about-us">About us</Link>
            </div>
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
                            <Link to="/create-property">
                                <button>Rent my property</button>
                            </Link>
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
