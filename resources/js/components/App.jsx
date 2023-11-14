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
        const filterOptions = state.filterOptions;
        const urlTest = `/api/search?${Object.entries(filterOptions)
            .filter(([key, value]) => value) // only truthy values
            .map(([key, value]) => {
                // Date formating here, wait to see which format is needed for backend
                if (key === "datePicker") {
                    const year = value.getFullYear();
                    const month = value.getMonth() + 1;
                    const day = value.getDate();
                    const hour = value.getHours();
                    const minutes = value.getMinutes();
                    console.log(
                        day,
                        "/",
                        month,
                        "/",
                        year,
                        "/ ",
                        hour,
                        ":",
                        minutes
                    );
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
