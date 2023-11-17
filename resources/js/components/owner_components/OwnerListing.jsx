import React, { useState } from "react";
import deleteIcon from "../../../../public/images/delete-icon.svg";
import editIcon from "../../../../public/images/edit-icon.svg";
import bathIcon from "../../../../public/images/bath-icon.svg";
import bedIcon from "../../../../public/images/bed-icon.svg";
import sizeIcon from "../../../../public/images/size-icon.svg";
import toApproveIcon from "../../../../public/images/not-approved-icon.svg";
import approvedIcon from "../../../../public/images/approved-icon.svg";

import "./OwnerListing.scss";

const OwnerListing = () => {
    const [showModal, setShowModal] = useState(false);
    const [approved, setApproved] = useState(false);

    const toggleModal = () => {
        setShowModal((prevValue) => !prevValue);
    };
    const toggleApprove = () => {
        setApproved((prevValue) => !prevValue);
    };

    return (
        <>
            <div className="house-item">
                <div className="house-box">
                    <div className="house-item-img">
                        <img
                            src="https://image.cnbcfm.com/api/v1/image/103500764-GettyImages-147205632-2.jpg?v=1691157601"
                            alt="house image"
                        />
                    </div>

                    <div className="house-item-detail">
                        <p className="house-item-detail-title">City</p>
                        <p className="house-item-detail-price">
                            1.000.000.00 CZK
                        </p>
                        <p className="house-item-detail-address">
                            Address here
                        </p>

                        <p className="house-item-detail-icons">
                            <span className="bed">
                                <img src={bedIcon} alt="bed" />{" "}
                                <strong>4</strong>
                            </span>
                            <span className="bath">
                                <img src={bathIcon} alt="bath" />{" "}
                                <strong>6</strong>
                            </span>
                            <span className="size">
                                <img src={sizeIcon} alt="size" />{" "}
                                <strong> 44m2</strong>
                            </span>
                        </p>
                    </div>
                </div>
                <div className="house-item-edit">
                    <span className="item-edit">
                        <img src={editIcon} alt="edit" />
                    </span>
                    <span className="item-delete">
                        <img
                            src={deleteIcon}
                            alt="delete"
                            onClick={toggleModal}
                        />
                    </span>
                    <h3>
                        Likes <strong className="likes">342</strong>
                    </h3>
                    {/* Confiramtion delete Modal */}
                    <div className={`modal ${showModal ? " active" : ""}`}>
                        <div className="modal-content">
                            <div className="modal-text">
                                <h2>Delete Listing</h2>
                                <p>
                                    Are you sure you want to delete this
                                    listing?
                                </p>
                                <p>This action cannot be undone.</p>
                            </div>
                            <div className="modal-btns">
                                <button type="button" onClick={toggleModal}>
                                    Go Back
                                </button>
                                <button type="button">Yes, Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="house-item-stats">
                <h3>Interested tenants:</h3>

                <ul>
                    <li>
                        <div className="col">
                            <p>First Name: Test</p>
                            <p>Last Name: Testing </p>
                        </div>
                        <div className="col">
                            <p>Email: blackrock@info.com</p>
                            <p>Phone: 12345678</p>
                        </div>
                        <div className="col">
                            <img
                                src={approved ? approvedIcon : toApproveIcon}
                                alt="Approve"
                                onClick={toggleApprove}
                            />
                            <p onClick={toggleApprove}>Approve</p>
                        </div>
                    </li>
                    <li>
                        <div className="col">
                            <p>First Name: Test</p>
                            <p>Last Name: Testing </p>
                        </div>
                        <div className="col">
                            <p>Email: blackrock@info.com</p>
                            <p>Phone: 12345678</p>
                        </div>
                        <div className="col">
                            <img
                                src={approved ? approvedIcon : toApproveIcon}
                                alt="Approve"
                                onClick={toggleApprove}
                            />
                            <p onClick={toggleApprove}>Approve</p>
                        </div>
                    </li>
                    <li>
                        <div className="col">
                            <p>First Name: Test</p>
                            <p>Last Name: Testing </p>
                        </div>
                        <div className="col">
                            <p>Email: blackrock@info.com</p>
                            <p>Phone: 12345678</p>
                        </div>
                        <div className="col">
                            <img
                                onClick={toggleApprove}
                                src={toApproveIcon}
                                alt="Approve"
                            />
                            <p onClick={toggleApprove}>Approve</p>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default OwnerListing;
