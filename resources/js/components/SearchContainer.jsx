import React, { useContext } from "react";
import Context from "../Context";
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
import "./SearchContainer.scss";

const SearchContainer = () => {
    const { dispatch } = useContext(Context);

    const fetchOnResultsPage = () => {
        dispatch({
            type: "fetchOnResultsPage",
        });
    };

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
                {/* Render buttons based on page url */}
                {window.location.href === "http://www.push.test/" ? (
                    <Link to="/search-results" className="search-form__btn">
                        Search
                    </Link>
                ) : (
                    <button
                        className="search-form__btn"
                        onClick={fetchOnResultsPage}
                    >
                        Search
                    </button>
                )}
            </div>
        </div>
    );
};

export default SearchContainer;
