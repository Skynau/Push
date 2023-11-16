import React, { useEffect, useContext, useState } from "react";
import ResultMiniView from "./results_components/ResultMiniView";
import EditSearch from "./results_components/EditSearch";
import { getProperties } from "../helpers";
import { buildUrl } from "../helpers";
import Context from "../Context";
import "./ResultsOfSearch.scss";
import Sorting from "./results_components/Sorting";


const ResultsOfSearch = () => {

  const [properties, setProperties] = useState([]);
    const [editVisible, setEditVisible] = useState(false);
    const { state } = useContext(Context);
    // Api call based on user's filtering options
    const fetchData = async (url) => {
        try {
            const data = await getProperties(url);
            console.log(data);
            setProperties(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData(buildUrl(state.filterOptions));
    }, []);

    const openEdit = () => {
        setEditVisible(!editVisible);
    };

  return (
    <>
        <div className="results-page">
                {/* Not to be used as of now, kept for future development:
               <div className="search-bar">
                  <ResultsSearchBar />
              </div> */}
                <div className="results-edit">
                    <EditSearch
                        editVisible={editVisible}
                        setEditVisible={setEditVisible}
                    />
                </div>

                <div className="over-view">
                    <div className="map">
                        {/* to be replaced: */}
                        <img
                            className="map_image"
                            src="https://media.maptiler.com/old/img/maps/streets/map-preview.png"
                            alt="New York map"
                        />
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
                            {properties?.map((property) => (
                                <ResultMiniView
                                    key={property.id}
                                    square_meters={property.square_meters}
                                    price_rent={property.price_rent}
                                    city={property.address?.city}
                                />
                            ))}
                            {/* <ResultMiniView />
                            <ResultMiniView />
                            <ResultMiniView />
                            <ResultMiniView />
                            <ResultMiniView /> */}
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default ResultsOfSearch