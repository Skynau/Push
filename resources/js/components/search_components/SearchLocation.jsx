import React, { useEffect, useState, useContext } from "react";
import Context from "../../Context";
import './SearchLocation.scss';

const SearchLocation = () => {
    const { dispatch } = useContext(Context);

    const setSearchQuery = (e) => {
        dispatch({
            type: "SEARCH_QUERY",
            payload: e.target.value,
        });
    };

    const [address, setAddress] = useState("");

    const handleAddressChange = (event) => {
        setAddress(event.target.value);
    };

    const handlePlaceSelect = (place) => {
        // Handle the selected place data, e.g., set form values
        console.log("Selected Place:", place);
    };

    useEffect(() => {
        const autocomplete = new window.google.maps.places.Autocomplete(
            document.getElementById("address"),
            { types: ["geocode"] } // Specify the type of place data to retrieve
        );

        autocomplete.addListener("place_changed", () => {
            const selectedPlace = autocomplete.getPlace();
            handlePlaceSelect(selectedPlace);
        });
    }, []);

    return (

        <div className="search">
            <input
                onInput={setSearchQuery}
                className="search-location"
                id="address"
                type="text"
                value={address}
                onChange={handleAddressChange}
                placeholder="Enter your address"
            />

            {/* Display the Google Places Autocomplete */}
            <div id="autocomplete-container"></div>


        </div>

    );
};

export default SearchLocation;
