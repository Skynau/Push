import React, { useContext, useEffect, useState } from "react";
import UserContext from "../../UserContext";
import axios from "axios";
import "./EditPropertyForm.scss";
import { Link, useLocation } from "react-router-dom";

import backIcon from "../../../../public/images/back-icon.svg";

const EditPropertyForm = () => {
    const [house, setHouse] = useState(null);
    const location = useLocation();
    const listingId = location.state?.listingId;
    const [message, setMessage] = useState(null);
    const [image, setImage] = useState(null);

    // console.log(listingId);

    const fetchHouse = async () => {
        try {
            const data = await axios(`/api/property/${listingId}`);
            setHouse(data.data);
            console.log(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchHouse();
    }, []);

    const handleInputChange = (e) => {
        setHouse((previousValues) => {
            return { ...previousValues, [e.target.name]: e.target.value };
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                "api/property/" + listingId + "/update",
                house
            );
            setMessage(response.data["message"]);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="edit-form_container">
            <div className="back-link">
                <Link to="/owner-interface">
                    <img src={backIcon} alt="Back" />
                    <p>back</p>
                </Link>
            </div>

            <h2>Edit property</h2>
            <form
                className="edit-form form"
                action="#"
                method="post"
                onSubmit={handleSubmit}
            >
                <label>
                    <br />
                    Title:
                    <input
                        type="text"
                        name="title"
                        value={house?.title}
                        onChange={handleInputChange}
                        required
                    />
                </label>
                <br />

                {/* <label>
                    <br />
                    Address:
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                    />
                </label>
                <br /> */}

                <label>
                    <br />
                    Description:
                    <textarea
                        name="description"
                        value={house?.description}
                        onChange={handleInputChange}
                        required
                    />
                </label>
                <br />

                <label>
                    <br />
                    Price:
                    <input
                        type="text"
                        name="price_rent"
                        value={house?.price_rent}
                        onChange={handleInputChange}
                        required
                    />
                </label>
                <br />

                <label>
                    <br />
                    Available From (Date):
                    <input
                        type="date"
                        name="available_from"
                        value={house?.available_from}
                        onChange={handleInputChange}
                        required
                    />
                </label>
                <br />

                {/* <label>
                    <br />
                    Amenities:
                    <select
                        multiple
                        name="amenities"
                        value={formData.amenities}
                        onChange={handleAmenitiesChange}
                    >
                        <option value="1">Balcony/Terrace</option>
                        <option value="3">Basement</option>
                        <option value="2">Wheelchair Access</option>
                        <option value="4">Parking</option>
                        <option value="5">Garden</option>
                    </select>
                </label>
                <br /> */}

                <label>
                    <br />
                    Apartment area:
                    <input
                        type="text"
                        name="square_meters"
                        value={house?.square_meters}
                        onChange={handleInputChange}
                    />{" "}
                    m²
                </label>
                <br />

                <label>
                    <br />
                    Disposition:
                    <select
                        name="disposition_id"
                        value={house?.disposition_id}
                        onChange={handleInputChange}
                    >
                        <option value="1">1kk</option>
                        <option value="2">1+1</option>
                        <option value="3">2kk</option>
                        <option value="4">2+1</option>
                        <option value="5">3kk</option>
                        <option value="6">3+1</option>
                        <option value="7">4kk</option>
                        <option value="8">4+1</option>
                        <option value="9">4kk</option>
                        <option value="10">4kk</option>
                        <option value="11">4kk</option>
                        <option value="12">4kk</option>
                        <option value="13">4kk</option>
                        <option value="14">4kk</option>
                        <option value="15">other</option>
                    </select>
                </label>
                <br />

                <label>
                    <br />
                    Number of bathroom:
                    <select
                        name="number_of_bathrooms"
                        value={house?.number_of_bathrooms}
                        onChange={handleInputChange}
                    >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">more</option>
                    </select>
                </label>
                <br />

                <label>
                    <br />
                    Pets Welcome:
                    <select
                        name="pets_welcome"
                        value={house?.pets_welcome}
                        onChange={handleInputChange}
                    >
                        <option value="1">Yes</option>
                        <option value="0">No</option>
                    </select>
                </label>
                <br />

                <label>
                    <br />
                    Type:
                    <select
                        name="type_id"
                        value={house?.type_id}
                        onChange={handleInputChange}
                    >
                        <option value="1">House</option>
                        <option value="2">Apartment</option>
                    </select>
                </label>
                <br />

                <label>
                    <br />
                    Condition:
                    <select
                        name="condition_id"
                        value={house?.condition_id}
                        onChange={handleInputChange}
                    >
                        <option value="1">New</option>
                        <option value="2">Very Good</option>
                        <option value="3">Good</option>
                        <option value="4">Bad</option>
                    </select>
                </label>
                <br />

                <label>
                    <br />
                    Furnishing:
                    <select
                        name="furnishing_id"
                        value={house?.furnishing_id}
                        onChange={handleInputChange}
                    >
                        <option value="1">None</option>
                        <option value="2">Partly</option>
                        <option value="3">Fully</option>
                    </select>
                </label>
                <br />

                <label>
                    <br />
                    Heating:
                    <select
                        name="heating_id"
                        value={house?.heating_id}
                        onChange={handleInputChange}
                    >
                        <option value="1">Gas</option>
                        <option value="2">Electrical</option>
                        <option value="3">Central</option>
                    </select>
                </label>
                <br />

                <label>
                    <br />
                    Photo Attachment:
                    <img
                        src={house?.photo_attachment}
                        alt="Current Photo"
                        style={{ maxWidth: "200px", maxHeight: "200px" }}
                    />
                    <input
                        type="file"
                        name="photoAttachment"
                        accept="image/*"
                        onChange={handleInputChange}
                    />
                </label>

                <br />

                {message ? (
                    <span className="success-message">{message}</span>
                ) : (
                    <button type="submit">Update</button>
                )}
                <br />
            </form>
        </div>
    );
};

export default EditPropertyForm;
