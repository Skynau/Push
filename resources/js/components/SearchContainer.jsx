import React, { useContext, useEffect } from "react";
import Type from "./search_components/Type";
import Dispositions from "./search_components/Dispositions";
import Budget from "./search_components/BudgetSelect";
import AreaSize from "./search_components/AreaSize";
import ConditionsApartment from "./search_components/ConditionsApartment";
import SearchLocation from "./search_components/SearchLocation";
import Amenities from "./search_components/Amenities";
import ListingDate from "./search_components/ListingDate";
import PetsWelcome from "./search_components/PetsWelcome";
import { Link } from "react-router-dom";
import Context from "../Context";
import "./SearchContainer.scss";

const SearchContainer = () => {
    const { state } = useContext(Context);
    const handleSubmit = () => {
        return state.filterOptions;
    };
    useEffect(() => {
        handleSubmit();
    }, [state.filterOptions]);

    return (
        <div className="search-container">
            <h2 className="search-container__title">Find your dream home</h2>
            <div className="search-container_filters">
                <Type />
                <Dispositions />
                <Budget />
                <SearchLocation />
                <AreaSize />
                <ListingDate />
                <ConditionsApartment />
                <Amenities />
                <PetsWelcome />
                <Link to="/search-results" className="search-form__btn">
                    Search
                </Link>
            </div>
        </div>
    );
};

export default SearchContainer;
