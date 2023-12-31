import React, { useEffect, useContext, useState } from "react";
import Context from "../../Context";
import "./SearchLocation.scss";

const SearchLocation = (onLocationChange) => {
    const { state, dispatch } = useContext(Context);

    const handleAddressChange = (event) => {
        dispatch({
            type: "SEARCH_QUERY",
            payload: event.target.value,
        });
    };

    const hideEditSearch = (event) => {
        // Check if the component is not on the home page and the Enter or Escape key is pressed
        if (
            window.location.pathname !== "/" &&
            (event.key === "Enter" || event.key === "Escape")
        ) {
            // Hide the edit form
            dispatch({ type: "showEditForm" });
            // Fetch data
            dispatch({ type: "fetchOnResultsPage" });
        }
    };

    useEffect(() => {
        const autocomplete = new window.google.maps.places.Autocomplete(
            document.getElementById("address"),
            { types: ["geocode"] } // Specify the type of place data to retrieve
        );

        autocomplete.addListener("place_changed", () => {
            const selectedPlace = autocomplete.getPlace();
            // Send the selected place to the main state
            dispatch({
                type: "SEARCH_QUERY",
                payload: selectedPlace.vicinity,
            });
            dispatch({
                type: "MAP_MARKER",
                payload: [
                    {
                        position: {
                            lat: selectedPlace.geometry.location.lat(),
                            lng: selectedPlace.geometry.location.lng(),
                        },
                    },
                ],
            });
        });
    }, [onLocationChange]);

    return (
        <div className="search">
            <input
                className="search-location"
                id="address"
                type="text"
                value={state.filterOptions.searchFieldValue}
                onChange={handleAddressChange}
                onKeyUp={hideEditSearch}
                placeholder="Enter your address"
            />
            {/* Display the Google Places Autocomplete */}
            <div id="autocomplete-container"></div>
        </div>
    );
};

export default SearchLocation;
