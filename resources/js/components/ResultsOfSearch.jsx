import React, { useEffect, useContext, useState } from "react";
import ResultMiniView from "./results_components/ResultMiniView";
import EditSearch from "./results_components/EditSearch";
import { getProperties } from "../helpers";
import { buildUrl } from "../helpers";
import Context from "../Context";
import "./ResultsOfSearch.scss";
import Sorting from "./results_components/Sorting";
import GoogleMapComponent from "./results_components/GoogleMap";

const ResultsOfSearch = () => {
    const { state, dispatch } = useContext(Context);
    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(false);
    const [sort, setSort] = useState('')
    const [multipleMarkers, setMultipleMarkers] = useState([]);

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
        fetchData(buildUrl(state.filterOptions) + sort);
        // console.log(sort);
    }, [state.fetchOnResultsPage, sort]);

    const openEdit = () => {
        dispatch({
            type: "showEditForm",
        });
    };

    const numberOfResults = properties?.length


//----------------ADDING multiple markers to the state----------
    
useEffect(() => {
  let array = []
      properties?.map((property)=>{
        array.push({
          position: {
            lat: Number(property.address?.latitude),
            lng: Number(property.address?.longitude)
          }
        })
      })
      
    //   console.log(array);
      // setMultipleMarkers(array);
     dispatch({
      type: "MAP_MARKER",
      payload: array
     })
      // console.log(multipleMarkers);

}, [properties])


    return (
        <>
            <div className="results-page">
                {/* Not to be used as of now, kept for future development:
             <div className="search-bar">
                <ResultsSearchBar />
            </div> */}
                <div className="results-header">
                    <div className="results-edit">
                        <EditSearch />
                    </div>
                    <button className="edit-button" onClick={openEdit}>
                        Edit the search
                    </button>
                    <div className="results-list_header">
                            <p>Results: {numberOfResults}</p>
                            <div className="results-list_sorting">
                                <Sorting setSort={setSort} />
                            </div>
                    </div>
                </div>

                <div className="over-view">
                    <div className="map">
                       
                              <GoogleMapComponent 
                              //  markers={state.markers} 
                               />
                    </div>
                    <div className="results-list">
                        <div className="results-list_listings">
                            {properties.length > 0 ? (
                                properties?.map((property) => (
                                    <ResultMiniView
                                        key={property.id}
                                        square_meters={property.square_meters}
                                        price_rent={property.price_rent}
                                        city={property.address?.city}
                                        street={property.address?.street}
                                        id={property.id}
                                        disposition={property.disposition_id}
                                        pictures={property.media}
                                        address={property.address}
                                    />
                                ))
                            ) : // If there are no properties, check if it's loading
                            loading ? (
                                <div className="loader"></div>
                            ) : (
                                // If no loading
                                <h2 className="no-results">
                                    {" "}
                                    <i>No Results </i>:
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
