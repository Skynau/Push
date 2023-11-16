import React, { useEffect, useReducer } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchContainer from "./SearchContainer";
import Navigation from "./Navigation";
import reducer from "../reducer";
import Context from "../Context";
import state from "../../js/state";
import ResultsOfSearch from "./ResultsOfSearch";
import { buildUrl } from "../helpers";
const App = () => {
    const [contextValue, setContextValue] = useReducer(reducer, state);

    // useEffect(() => {
    //     // Build url dynamically based on user's filtering options
    //     const filterOptions = state.filterOptions;
    //     buildUrl(filterOptions);
    // }, [contextValue]);

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
