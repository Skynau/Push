import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import OwnerListing from "./OwnerListing";
import UserContext from "../../UserContext";

import addIcon from "../../../../public/images/plus-icon.png";
import "./OwnerInterface.scss";
import Messages from "../messaging_components/Messages";
import axios from "axios";

const OwnerInterface = () => {
    const { user, setUser } = useContext(UserContext);
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal((prevValue) => !prevValue);
    };

    const handleFormChange = (e, fieldName) => {
        console.log(user);
        setUser((prevUser) => ({
            ...prevUser,
            [fieldName]: e.target.value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setShowModal((prevValue) => !prevValue);
        console.log(user);
        try {
            const response = await axios.put("/user/profile-information", user);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="owner-container">
            <div className="owner-container_content">
                <div className="owner-header">
                    <div className="action-buttons">
                        <div className="owner-header_create">
                            <Link to="/create-property">
                                <button>
                                    <img
                                        className="add-icon"
                                        src={addIcon}
                                        alt="Add Listing"
                                    />
                                    New Listing
                                </button>
                            </Link>
                        </div>
                        <div className="owner-header_listings">
                            <button> My Listings</button>
                        </div>
                        <div className="owner-header_message">
                            {/* <Messages /> */}
                            <Link to="/chats">
                                <button>Messages</button>
                            </Link>
                        </div>
                    </div>
                    <div className="owner-header_message">
                        <button onClick={toggleModal}>Profile</button>
                    </div>
                    {/* Profile Modal */}
                    <div className={`modal ${showModal ? " active" : ""}`}>
                        <div className="modal-content">
                            <span className="close" onClick={toggleModal}>
                                &#10005;
                            </span>
                            <div className="modal-text">
                                <h2>Edit Profile</h2>
                                <form className="form">
                                    <label htmlFor="fname">
                                        First name:
                                        <span className="required-filed">
                                            *
                                        </span>
                                    </label>
                                    <br />
                                    <input
                                        type="text"
                                        value={user?.first_name || ""}
                                        onChange={(e) =>
                                            handleFormChange(e, "first_name")
                                        }
                                        name="first_name"
                                    />
                                    <br />
                                    <label htmlFor="lname">
                                        Last name:
                                        <span className="required-filed">
                                            *
                                        </span>
                                    </label>
                                    <br />
                                    <input
                                        type="text"
                                        name="last_name"
                                        value={user?.last_name || ""}
                                        onChange={(e) =>
                                            handleFormChange(e, "last_name")
                                        }
                                    />
                                    <br />
                                    <label htmlFor="email">
                                        Email
                                        <span className="required-filed">
                                            *
                                        </span>
                                    </label>
                                    <br />
                                    <input
                                        type="text"
                                        name="email"
                                        value={user?.email || ""}
                                        onChange={(e) =>
                                            handleFormChange(e, "email")
                                        }
                                    />
                                    <br />
                                    <label htmlFor="phone">
                                        Phone number
                                        <span className="required-filed">
                                            *
                                        </span>
                                    </label>
                                    <br />
                                    <input
                                        type="text"
                                        name="phone_number"
                                        value={user?.phone_number || ""}
                                        onChange={(e) =>
                                            handleFormChange(e, "phone_number")
                                        }
                                    />
                                </form>
                            </div>
                            <div className="modal-btns">
                                <button type="submit" onClick={handleSubmit}>
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <OwnerListing />
                {/* <OwnerListing />
                <OwnerListing />
                <OwnerListing />
                <OwnerListing /> */}
            </div>
        </div>
    );
};

export default OwnerInterface;
