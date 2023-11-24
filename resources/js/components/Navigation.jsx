import React, { useContext, useState } from "react";
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
        // <Redire />;
    };

    const [openMenu, setOpenMenu] = useState(false)

    const toggleMenu = () => {
        setOpenMenu(!openMenu)
    }

    return (
        <>
            <div className="navbar">
                <ul className="navbar__menu">
                    <li className="navbar__item">
                        <Link to="/" className="navbar__link">
                            {/* <img src="resources\img\logo 3.jpg" alt="Logo" className="logo" /> */}
                            <span className="navbar_buttons">Home</span>
                        </Link>
                    </li>
                    <li className="navbar__item">
                        <Link to="/about-us" className="navbar__link">
                            <span className="navbar_buttons">About</span>
                        </Link>
                    </li>
    
                    {/* <div className="profile-image">Image here</div> */}
    
                    {/* <div className="navbar__menu"> */}
    
                    {user === false ? (
                        <>
                            <li className="navbar__item">
                                <Link to="/register" className="navbar__link">
                                    <span className="navbar_buttons">Register</span>
                                </Link>
                            </li>
                            <li className="navbar__item">
                                <Link to="/login" className="navbar__link">
                                    <span className="navbar_buttons">Login</span>
                                </Link>
                            </li>
                        </>
                    ) : user === false ? (
                        <li>Loading user...</li>
                    ) : (
                        <>
                            <li className="navbar__item">
                                <Link
                                    to="/create-property"
                                    className="navbar__link"
                                >
                                    <span className="navbar_buttons">
                                        Rent my property
                                    </span>
                                </Link>
                            </li>
                            <li className="navbar__item">
                                <Link
                                    to="/owner-interface"
                                    className="navbar__link"
                                >
                                    <span className="navbar_buttons">
                                        Your Account
                                    </span>
                                </Link>
                            </li>
                            <li className="navbar__item">
                                {/* <button
                                    className="navbar__link"
                                    onClick={handleLogout}
                                > */}
                                <span
                                    className="navbar_buttons navbar__link"
                                    onClick={handleLogout}
                                >
                                    Logout
                                </span>
                                {/* </button> */}
                            </li>
    
                            <div className="navbar_buttons navbar__link logged-in-as">
                                <span style={{}}>
                                    Logged in as {user?.first_name}
                                </span>
                            </div>
                        </>
                    )}
                </ul>
                <div className="menu-for-mobile" onClick={toggleMenu}>
                    <span>MENU</span>
                </div>
                    <div className="mobile-menu">
                        <div className="mobile-menu_item">
                            <Link to="/" className="mobile_menu-link">
                                <span className="mobile_menu-button">Home</span>
                            </Link>
                        </div>
                        <div className="mobile-menu_item">
                            <Link to="/login" className="mobile_menu-link">
                                <span className="mobile_menu-button">Login</span>
                            </Link>
                        </div>
                        {user === false ? (
                            <>
                                <div className="mobile-menu_item">
                                    <Link to="/register" className="mobile_menu-link">
                                        <span className="mobile_menu-button">
                                            Register
                                        </span>
                                    </Link>
                                </div>
                                <div className="mobile-menu_item">
                                    <Link to="/login" className="mobile_menu-link">
                                        <span className="mobile_menu-button">
                                            Login
                                        </span>
                                    </Link>
                                </div>
                            </>
                        ) : user === false ? (
                            <li>Loading user...</li>
                        ) : (
                            <>
                                <div className="mobile-menu_item">
                                    <Link
                                        to="/create-property"
                                        className="mobile_menu-link"
                                    >
                                        <span className="mobile_menu-button">
                                            Rent my property
                                        </span>
                                    </Link>
                                </div>
                                <div className="mobile-menu_item">
                                    <Link
                                        to="/owner-interface"
                                        className="mobile_menu-link"
                                    >
                                        <span className="mobile_menu-button">
                                            Your Account
                                        </span>
                                    </Link>
                                </div>
                                <div className="mobile-menu_item">
                                    <div
                                        className="mobile_menu-link"
                                        onClick={handleLogout}
                                    >
                                        <span className="mobile_menu-button">
                                            Logout
                                        </span>
                                    </div>
                                </div>
    
                                <div className="mobile-menu_item logged-in-as">
                                    <span style={{}}>
                                        Logged in as {user?.first_name}
                                    </span>
                                </div>
                            </>
                        )}
                    </div>
            </div>
        </>
    );
};

export default Navigation;
