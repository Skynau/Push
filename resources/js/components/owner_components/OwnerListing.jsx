import React from "react";
import deleteIcon from "../../../../public/images/delete-icon.svg";
import editIcon from "../../../../public/images/edit-icon.svg";
import bathIcon from "../../../../public/images/bath-icon.svg";
import bedIcon from "../../../../public/images/bed-icon.svg";
import sizeIcon from "../../../../public/images/size-icon.svg";

import "./OwnerListing.scss";

const OwnerListing = () => {
    return (
        <div class="house-item">
            <div class="house-box">
                <div class="house-item-img">
                    <img
                        src="https://image.cnbcfm.com/api/v1/image/103500764-GettyImages-147205632-2.jpg?v=1691157601"
                        alt="house image"
                    />
                </div>

                <div class="house-item-detail">
                    <p class="house-item-detail-title">City</p>
                    <p class="house-item-detail-price">1.000.000.00 CZK</p>
                    <p class="house-item-detail-address">Address here</p>

                    <p class="house-item-detail-icons">
                        <span class="bed">
                            <img src={bedIcon} alt="bed" /> <strong>4</strong>
                        </span>
                        <span class="bath">
                            <img src={bathIcon} alt="bath" /> <strong>6</strong>
                        </span>
                        <span class="size">
                            <img src={sizeIcon} alt="size" />{" "}
                            <strong> 44m2</strong>
                        </span>
                    </p>
                </div>
            </div>
            <div class="house-item-edit" v-if="house.madeByMe">
                <span class="item-edit">
                    <img src={editIcon} alt="edit" />
                </span>
                <span class="item-delete">
                    <img src={deleteIcon} alt="delete" />
                </span>
            </div>
        </div>
    );
};

export default OwnerListing;
