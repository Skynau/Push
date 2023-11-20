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
        <div className="navbar">
            <ul className="navbar__menu">

                <li className="navbar__item">
                    <Link to="/" className="navbar__link">
                        {/* <img src="resources\img\logo 3.jpg" alt="Logo" className="logo" /> */}
                        <span>
                            Go Home
                        </span>
                    </Link>
                </li>
                <li className="navbar__item">
                    <Link to="/about-us" className="navbar__link">
                        <span>
                            About us
                        </span>
                    </Link>
                </li>

                {/* <div className="profile-image">Image here</div> */}
                
                {/* <div className="navbar__menu"> */}
               

                {user === false ? (
                    <>
                        <li className="navbar__item">
                            <Link to="/register" className="navbar__link">
                                <span>
                                    Register
                                </span>
                            </Link>
                        </li>
                        <li className="navbar__item">
                            <Link to="/login" className="navbar__link">
                                <span>
                                    Login
                                </span>
                            </Link>
                        </li>
                    </>
                    ) : user === false ? (
                        <li>Loading user...</li>
                    ) : (

                    <>
                        <div className="nav-action__btn">
                            <li className="navbar__item">
                                <Link to="/create-property" className="navbar__link">
                                    <span>
                                        Rent my property
                                    </span>
                                </Link>
                            </li>
                            <li className="navbar__item">
                                <Link to="/owner-interface" className="navbar__link">
                                    <span>
                                        Owner Interface
                                    </span>
                                </Link>
                            </li>
                        </div>
                        
                        <li className="navbar__item">
                            <button className="navbar__link" onClick={handleLogout}>
                                <span>
                                    Logout
                                </span>
                            </button>
                        </li>

                        <div className="navbar__item">
                            <h3>Logged in as {user?.first_name}</h3>
                        </div>
                    </>
                
                )}
                {/* </div> */}
            </ul>
        </div>  
    );
};

export default Navigation;
