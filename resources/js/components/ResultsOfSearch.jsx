import React, { useEffect, useContext, useState } from "react";
import ResultMiniView from "./results_components/ResultMiniView";
import EditSearch from "./results_components/EditSearch";
import MapContainer from "./results_components/MapContainer";
import { getProperties } from "../helpers";
import { buildUrl } from "../helpers";
import Context from "../Context";
import "./ResultsOfSearch.scss";
import Sorting from "./results_components/Sorting";

const ResultsOfSearch = () => {
    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(false);
    const { state, dispatch } = useContext(Context);

    // Api call based on user's filtering options
    const fetchData = async (url) => {
        try {
            setProperties([]);
            setLoading(true);
            const data = await getProperties(url);
            setLoading(false);
            setProperties(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData(buildUrl(state.filterOptions));
    }, [state.fetchOnResultsPage]);

    const openEdit = () => {
        dispatch({
            type: "showEditForm",
        });
    };

    return (
        <>
            <div className="results-page">
                {/* Not to be used as of now, kept for future development:
             <div className="search-bar">
                <ResultsSearchBar />
            </div> */}
                <div className="results-edit">
                    <EditSearch />
                </div>

                <div className="over-view">
                    <div className="map">
                        <MapContainer />
                    </div>
                    <div className="results-list">
                        <div className="results-list_header">
                            <h2>Rental Listings</h2>
                            <button className="edit-button" onClick={openEdit}>
                                Edit the search
                            </button>
                            <div className="results-list_data-manipulation">
                                <span>no. of results</span>
                                <div className="results-list_sorting">
                                    <Sorting />
                                </div>
                            </div>
                        </div>
                        <div className="results-list_listings">
                            {properties.length > 0 ? (
                                properties?.map((property) => (
                                    <ResultMiniView
                                        key={property.id}
                                        square_meters={property.square_meters}
                                        price_rent={property.price_rent}
                                        city={property.address?.city}
                                        id={property.id}
                                    />
                                ))
                            ) : // If there are no properties, check if it's loading
                            loading ? (
                                <div className="loader"></div>
                            ) : (
                                // If no loading
                                <h2 className="no-results">
                                    {" "}
                                    <i>No Results </i>:)
                                </h2>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ResultsOfSearch;
