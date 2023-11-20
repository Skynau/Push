import React, { useState } from "react";
import { Link } from "react-router-dom";
import OwnerListing from "./OwnerListing";
import addIcon from "../../../../public/images/plus-icon.png";
import "./OwnerInterface.scss";
import Messages from "../messaging_components/Messages";

const OwnerInterface = () => {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal((prevValue) => !prevValue);
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
                            <Messages />
                            <Link to="/messages">
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
                                    <label htmlFor="fname">First name:</label>
                                    <br />
                                    <input type="text" name="fname" />
                                    <br />
                                    <label htmlFor="lname">Last name:</label>
                                    <br />
                                    <input type="text" name="lname" />
                                    <br />
                                    <label htmlFor="lname">Email</label>
                                    <br />
                                    <input type="text" name="lname" />
                                </form>
                            </div>
                            <div className="modal-btns">
                                <button type="button" onClick={toggleModal}>
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <OwnerListing />
                <OwnerListing />
                <OwnerListing />
                <OwnerListing />
                <OwnerListing />
            </div>
        </div>
    );
};

export default OwnerInterface;
