import React from "react";
import { Link } from "react-router-dom";
import "./OwnerInterface.scss";
import OwnerListing from "./OwnerListing";

const OwnerInterface = () => {
    return (
        <div className="owner-container">
            <div className="owner-header">
                <div className="owner-header_create">
                    <Link to="/create-property">
                        <button> +New Listing</button>
                    </Link>
                </div>
                <div className="owner-header_listings">
                    <button> My Listings</button>
                </div>
                <div className="owner-header_message">
                    <button>Messages</button>
                </div>
            </div>
            <OwnerListing />
            <OwnerListing />
            <OwnerListing />
            <OwnerListing />
            <OwnerListing />
        </div>
    );
};

export default OwnerInterface;
