import React, { useContext, useState } from "react";
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
    const [openMore, setOpenMore] = useState(false);

    const fetchOnResultsPage = () => {
        // If component is rendered on 'results' page
        // dispatch on click to fetch data
        dispatch({
            type: "fetchOnResultsPage",
        });
        // Hide edit form
        dispatch({
            type: "showEditForm",
        });
    };

    const toggleOptions = () => {
        setOpenMore(!openMore);
    };

    return (
        
        <div className="search-container" style={{ backgroundImage: 'url(https://i.pinimg.com/564x/23/44/8a/23448a090c84440f092078e2cb0f1e72.jpg)', backgroundRepeat: "no-repeat", backgroundSize: "cover", height: "100vh" }}>
            <h2 className="search-container__title">Find your dream home</h2>
            <div className="search-container_filters">
                <Type />
                <Dispositions />
                <SearchLocation />
                <button onClick={toggleOptions} className="more_options_btn">More Options</button>
                    <div className={`more_options ${openMore? ' active': ''}`}>
                        <Budget />
                        <AreaSize />
                        <ListingDate />
                        <ConditionsApartment />
                        <Amenities />
                        <PetsWelcome />
                    </div>
                   
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
