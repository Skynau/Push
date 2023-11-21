import React, { useEffect, useState } from "react";
import deleteIcon from "../../../../public/images/delete-icon.svg";
import editIcon from "../../../../public/images/edit-icon.svg";
import bathIcon from "../../../../public/images/bath-icon.svg";
import bedIcon from "../../../../public/images/bed-icon.svg";
import sizeIcon from "../../../../public/images/size-icon.svg";
import toApproveIcon from "../../../../public/images/not-approved-icon.svg";
import approvedIcon from "../../../../public/images/approved-icon.svg";

import "./OwnerListing.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import DeleteListing from "./DeleteListing";
import NumberOfLikes from "./NumberOfLikes";

const OwnerListing = () => {
    const [showModal, setShowModal] = useState(null);
    const [approved, setApproved] = useState(false);
    const [listings, setListings] = useState([]);
   


  const loadData = async () => {
      try{
        const response = await axios('api/user-listings');
        setListings(response.data)
      }catch (error) {
            console.log(error)
        }
    }





  useEffect(() => {
        loadData()
    }, [])

    const toggleModal = () => {
        setShowModal((prevValue) => !prevValue);
    };
    const toggleApprove = () => {
        setApproved((prevValue) => !prevValue);
    };

    // console.log(listings)
    return (
        <>
        {listings.map((listing)=>{
          return <div key={listing.id} className="house-item">
                <div className="house-box">
                    <div className="house-item-img">
                        <img
                            src={listing.media[0]?.url}
                            alt="house image"
                        />
                    </div>

                    <div className="house-item-detail">
                        <p className="house-item-detail-title">{listing.title}</p>
                        <p className="house-item-detail-price">
                            {listing.price_rent} CZK
                        </p>
                        <p className="house-item-detail-address">
                            {listing.address?.street},
                            {listing.address?.city}
                        </p>

                        <p className="house-item-detail-icons">
                            <span className="bed">
                                <img src={bedIcon} alt="bed" />{" "}
                                <strong>{listing.disposition_id}</strong>
                            </span>
                            <span className="bath">
                                <img src={bathIcon} alt="bath" />{" "}
                                <strong>{listing.number_of_bathrooms}</strong>
                            </span>
                            <span className="size">
                                <img src={sizeIcon} alt="size" />{" "}
                                <strong>{listing.square_meters}m2</strong>
                            </span>
                        </p>
                    </div>
                </div>
                <div className="house-item-edit">
                    <span className="item-edit">
                        <Link to="/edit-property" state={{listingId: listing.id}} >
                            <img src={editIcon} alt="edit" />
                        </Link>
                    </span>
                    <span className="item-delete">
                        <img
                            src={deleteIcon}
                            alt="delete"
                            onClick={() => {
                                  setShowModal(listing.id)
                              }}
                        />
                    </span>
                    <h3>
                        Likes <strong className="likes">
                          <NumberOfLikes propertyId = {listing.id} />
                          </strong>
                    </h3>
                    {/* Confiramtion delete Modal */}
                    <div className={`modal ${showModal == listing.id ? " active" : ""}`}>
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
                                <button type="button" onClick={() => {
                                  setShowModal(null)
                                }}>
                                    Go Back
                                </button>
                                <DeleteListing listingId={listing.id} loadData={loadData}/>
                                {/* <button type="button">Yes, Delete</button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            })}

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
