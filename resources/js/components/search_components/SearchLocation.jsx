import React, { useEffect, useState } from "react";

const SearchLocation = () => {

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
        
        <form>
            
            <label htmlFor="address">Address:</label>
            <input
                id="address"
                type="text"
                value={address}
                onChange={handleAddressChange}
                placeholder="Enter your address"
            />

            {/* Display the Google Places Autocomplete */}
            <div id="autocomplete-container"></div>

        </form>
    );
};

export default SearchLocation;
