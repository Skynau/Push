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
        // <Redire />;
    };

    return (
        <div className="navbar">
            <ul className="navbar__menu">

                <li className="navbar__item">
                    <Link to="/" className="navbar__link">
                        {/* <img src="resources\img\logo 3.jpg" alt="Logo" className="logo" /> */}
                        <span className="navbar_buttons">
                            Go Home
                        </span>
                    </Link>
                </li>
                <li className="navbar__item">
                    <Link to="/about-us" className="navbar__link">
                        <span className="navbar_buttons">
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
                                <span className="navbar_buttons">
                                    Register
                                </span>
                            </Link>
                        </li>
                        <li className="navbar__item">
                            <Link to="/login" className="navbar__link">
                                <span className="navbar_buttons">
                                    Login
                                </span>
                            </Link>
                        </li>
                    </>
                    ) : user === false ? (
                        <li>Loading user...</li>
                    ) : (

                    <>
                        
                            <li className="navbar__item">
                                <Link to="/create-property" className="navbar__link">
                                    <span className="navbar_buttons">
                                        Rent my property
                                    </span>
                                </Link>
                            </li>
                            <li className="navbar__item">
                                <Link to="/owner-interface" className="navbar__link">
                                    <span className="navbar_buttons">
                                        Your Account
                                    </span>
                                </Link>
                            </li>
                            <li className="navbar__item">
                                <button className="navbar__link" onClick={handleLogout}>
                                    <span className="navbar_buttons">
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
