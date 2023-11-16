import React from "react";
import Type from "./search_components/Type";
import Dispositions from "./search_components/Dispositions";
import Budget from "./search_components/BudgetSelect";
import AreaSize from "./search_components/AreaSize";
import ConditionsApartment from "./search_components/ConditionsApartment";
import SearchLocation from "./search_components/SearchLocation";
import Amenities from "./search_components/Amenities";
import ListingDate from "./search_components/ListingDate";
import "./SearchContainer.scss";
import PetsWelcome from "./search_components/PetsWelcome";
import { Link } from "react-router-dom";

const SearchContainer = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="search-container">
            <h2 className="search-container__title">Find your dream home</h2>
            <form onSubmit={handleSubmit}>
                <div className="search-container_filters">
                    <Type />
                    <Dispositions />
                    <Budget />
                    <SearchLocation />
                    <AreaSize />
                    <ConditionsApartment />
                    <Amenities />
                    <PetsWelcome />
                    <ListingDate />
                    <Link to="/search-results">
                        {" "}
                        <input
                            type="submit"
                            className="search-form__btn"
                            value="Search"
                        />
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default SearchContainer;
