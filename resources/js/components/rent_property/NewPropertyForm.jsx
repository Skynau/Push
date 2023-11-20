import React, { useContext, useEffect, useRef, useState } from "react";
import "./NewPropertyForm.scss";
import UserContext from "../../UserContext";
import axios from "axios";
import { Link } from "react-router-dom";
import AmenitySelector from "./AmenitySelector";

const NewPropertyForm = () => {
    const { user } = useContext(UserContext);

    const [message, setMessage] = useState(null);
    const inputRef = useRef(null);

    const [formData, setFormData] = useState({
        user_id: user?.id,
        title: "",
        address: "",
        street: "",
        streetNumber: "",
        district: "",
        city: "",
        postalCode: "",
        country: "",
        placeId: "",
        latitude: "",
        longtitude: "",
        description: "",
        price: "",
        availableFrom: "",
        amenities: [],
        squareMeters: "",
        disposition: "",
        petsWelcome: "",
        type: "",
        condition: "",
        furnishing: "",
        heating: "",
        numberOfBathroom: "",
        // photoAttachment: "",
        media: [],
    });

    useEffect(() => {
        const googleAutocomplete = new window.google.maps.places.Autocomplete(
            inputRef.current
        );

        googleAutocomplete.addListener("place_changed", () => {
            const place = googleAutocomplete.getPlace();
            setFormData({
                ...formData,
                address: place.formatted_address,
                street: place.address_components[2].long_name,
                streetNumber: place.address_components[0].long_name,
                district: place.address_components[3].long_name,
                city: place.address_components[4].long_name,
                postalCode: place.address_components[7].long_name,
                country: place.address_components[6].long_name,
                placeId: place.place_id,
                latitude: place.geometry.location.lat(),
                longtitude: place.geometry.location.lng(),
            });
        });
    });


    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // const handleAmenitiesChange = (e) => {
    //     const selectedOptions = Array.from(
    //         e.target.selectedOptions,
    //         (option) => option.value
    //     );
    //     setFormData({
    //         ...formData,
    //         amenities: [...formData.amenities, ...selectedOptions],
    //     });
    // };

    const handlePetsWelcomeChange = (e) => {
        setFormData({
            ...formData,
            petsWelcome: e.target.value,
        });
    };

    // Handle image selection
    const handleImage = (e) => {
        console.log("media", formData.media);
        const mediaArray = [...formData.media];
        // Add the selected file to the array
        mediaArray.push(e.target.files[0]);

        setFormData({
            ...formData,
            media: mediaArray,
        });
    };
    const handleSubmit = async (e) => {
        // send data to server
        e.preventDefault();

        const formDataSend = new FormData();
        // Append all form data from state
        for (const key in formData) {
            if (key === "media") {
                // Append each image separately
                formData[key].forEach((image, index) => {
                    formDataSend.append(`${key}[${index}]`, image);
                });
            } else {
                formDataSend.append(key, formData[key]);
            }
        }
        try {
            const response = await axios.post(
                "api/property/store",
                formDataSend,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
            setMessage(response.data["message"]);
            console.log("Server Response:", response.data);
        } catch (error) {
            console.log("Error:", error);
        }
    };

    // console.log(formData);
    return (
        <div className="form">
            <form
                className="form"
                action="#"
                method="post"
                onSubmit={handleSubmit}
            >
                <label>
                    <br />
                    Address:
                    <input
                        ref={inputRef}
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                    />
                </label>

                {formData.streetNumber ?
                (
                <>
                <label>
                    <br />
                    Street:
                    <input
                        type="text"
                        name="street"
                        value={formData.street}
                        onChange={handleInputChange}
                    />
                </label>

                <label>
                    <br />
                    Street number:
                    <input
                        type="text"
                        name="streetNumber"
                        value={formData.streetNumber}
                        onChange={handleInputChange}
                    />
                </label>

                <label>
                    <br />
                    District:
                    <input
                        type="text"
                        name="district"
                        value={formData.district}
                        onChange={handleInputChange}
                    />
                </label>

                <label>
                    <br />
                    City:
                    <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                    />
                </label>

                <label>
                    <br />
                    Postal code:
                    <input
                        type="text"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleInputChange}
                    />
                </label>

                <label>
                    <br />
                    Country:
                    <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                    />
                </label>
                <br />
                </>
                ):
                ""}

                <label>
                    <br />
                    Title:
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        required
                    />
                </label>
                <br />

                <label>
                    <br />
                    Description:
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        required
                    />
                </label>
                <br />

                <label>
                    <br />
                    Type:
                    <select
                        name="type"
                        value={formData.type}
                        onChange={handleInputChange}
                        required
                    >
                        <option value="" disabled defaultValue={""}>
                            Select your option
                        </option>
                        <option value="1">House</option>
                        <option value="2">Apartment</option>
                    </select>
                </label>
                <br />

                <label>
                    <br />
                    Price:
                    <input
                        type="text"
                        name="price"
                        value={formData.price}
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
                        name="availableFrom"
                        value={formData.availableFrom}
                        onChange={handleInputChange}
                        required
                    />
                </label>
                <br />
                <AmenitySelector />
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
                </label> */}
                <br />

                <label>
                    <br />
                    Apartment area:
                    <input
                        type="text"
                        name="squareMeters"
                        value={formData.squareMeters}
                        onChange={handleInputChange}
                        required
                    />{" "}
                    m²
                </label>
                <br />

                <label>
                    <br />
                    Disposition:
                    <select
                        name="disposition"
                        value={formData.disposition}
                        onChange={handleInputChange}
                        required
                    >
                        <option value="" disabled defaultValue={""}>
                            Select your option
                        </option>
                        <option value="1">1kk</option>
                        <option value="2">1+1</option>
                        <option value="3">2kk</option>
                        <option value="4">2+1</option>
                        <option value="5">3kk</option>
                        <option value="6">3+1</option>
                        <option value="7">4kk</option>
                        <option value="8">4+1</option>
                        <option value="9">5kk</option>
                        <option value="10">5+1</option>
                        <option value="11">6kk</option>
                        <option value="12">6+1</option>
                        <option value="13">7kk</option>
                        <option value="14">7+1</option>
                        <option value="15">other</option>
                    </select>
                </label>
                <br />

                <label>
                    <br />
                    Number of bathroom:
                    <select
                        name="numberOfBathroom"
                        value={formData.numberOfBathroom}
                        onChange={handleInputChange}
                        required
                    >
                        <option value="" disabled defaultValue={""}>
                            Select your option
                        </option>
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
                        name="petsWelcome"
                        value={formData.petsWelcome}
                        onChange={handlePetsWelcomeChange}
                        required
                    >
                        <option value="" disabled defaultValue={""}>
                            Select your option
                        </option>
                        <option value="1">Yes</option>
                        <option value="0">No</option>
                    </select>
                </label>
                <br />

                <label>
                    <br />
                    Condition:
                    <select
                        name="condition"
                        value={formData.condition}
                        onChange={handleInputChange}
                        required
                    >
                        <option value="" disabled defaultValue={""}>
                            Select your option
                        </option>
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
                        name="furnishing"
                        value={formData.furnishing}
                        onChange={handleInputChange}
                        required
                    >
                        <option value="" disabled defaultValue={""}>
                            Select your option
                        </option>
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
                        name="heating"
                        value={formData.heating}
                        onChange={handleInputChange}
                        required
                    >
                        <option value="" disabled defaultValue={""}>
                            Select your option
                        </option>
                        <option value="1">Gas</option>
                        <option value="2">Electrical</option>
                        <option value="3">Central</option>
                    </select>
                </label>
                <br />
                <label>
                    <br />
                    Photo Attachment:
                    <input
                        type="file"
                        name="photoAttachment"
                        accept="image/*"
                        multiple
                        onChange={handleImage}
                        required
                    />
                </label>
                <br />
                {message ? (
                    <>
                        <h2 className="success-message">{message}</h2>
                        <Link to="/owner-interface">
                            <button>See my listing</button>
                        </Link>
                    </>
                ) : (
                    <>
                        <button type="submit">Submit</button>
                        <br />
                    </>
                )}
            </form>
        </div>
    );
};

export default NewPropertyForm;
