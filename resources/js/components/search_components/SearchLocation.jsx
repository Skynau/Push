import React from "react";
import "./SearchLocation.scss";

const SearchLocation = () => {
    return (
        <div className="search">
            <input
                className="search-location"
                type="text"
                placeholder="Search"
            />
        </div>
    );
};

export default SearchLocation;
