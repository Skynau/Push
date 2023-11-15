import React, { useEffect, useReducer, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchContainer from "./SearchContainer";
import Navigation from "./Navigation";
import reducer from "../reducer";
import Context from "../Context";
import state from "../../js/state";
import ResultsOfSearch from "./ResultsOfSearch";

const App = () => {
    const [contextValue, setContextValue] = useReducer(reducer, state);

    useEffect(() => {
        // Bould url dynamically based on user's filtering options
        const filterOptions = state.filterOptions;
        const urlTest = `/api/search?${Object.entries(filterOptions)
            .filter(([key, value]) => value) // only truthy values
            .map(([key, value]) => {
                // Format the date object to YYYY-MM-DD
                if (key === "datePicker") {
                    const year = value.getFullYear().toString();
                    const month = value.getMonth() + 1;
                    const day = value.getDate().toString();
                    const formattedDate = `${year}-${month}-${day}`;
                    return `${encodeURIComponent(key)}=${encodeURIComponent(
                        formattedDate
                    )}`;
                }
                return `${encodeURIComponent(key)}=${encodeURIComponent(
                    value
                )}`; // key=value biuld here
            })
            .join("&")}`;
        console.log(urlTest);
    }, [contextValue]);

    return (
        <>
            <Context.Provider
                value={{ state: contextValue, dispatch: setContextValue }}
            >
                <BrowserRouter>
                    <header>
                        <Navigation />
                    </header>
                    <Routes>
                        <Route path="/" element={<SearchContainer />} />
                        <Route
                            path="/search-results"
                            element={<ResultsOfSearch />}
                        />
                    </Routes>
                </BrowserRouter>
            </Context.Provider>
        </>
    );
};

export default App;
