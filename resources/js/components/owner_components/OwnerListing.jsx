import React from "react";
import deleteIcon from "../../../../public/images/delete-icon.svg";
import editIcon from "../../../../public/images/edit-icon.svg";
import bathIcon from "../../../../public/images/bath-icon.svg";
import bedIcon from "../../../../public/images/bed-icon.svg";
import sizeIcon from "../../../../public/images/size-icon.svg";

import "./OwnerListing.scss";

const OwnerListing = () => {
    return (
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
                    <p className="house-item-detail-price">1.000.000.00 CZK</p>
                    <p className="house-item-detail-address">Address here</p>

                    <p className="house-item-detail-icons">
                        <span className="bed">
                            <img src={bedIcon} alt="bed" /> <strong>4</strong>
                        </span>
                        <span className="bath">
                            <img src={bathIcon} alt="bath" /> <strong>6</strong>
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
                    <img src={deleteIcon} alt="delete" />
                </span>
            </div>
        </div>
    );
};

export default OwnerListing;
