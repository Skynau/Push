import React, { useEffect, useReducer, useState } from "react";
import SearchContainer from "./SearchContainer";
import Navigation from "./Navigation";
import reducer from "../reducer";
import Context from "../Context";
import state from "../../js/state";

const App = () => {
    const [contextValue, setContextValue] = useReducer(reducer, state);

    useEffect(() => {
        const filterOptions = state.filterOptions;
        const urlTest = `/api/search?${Object.entries(filterOptions)
            .filter(([key, value]) => value) // only truthy values
            .map(([key, value]) => {
                return `${encodeURIComponent(key)}=${encodeURIComponent(
                    value
                )}`; // key=value biuld here
            })
            .join("&")}`;
    }, [contextValue]);

    return (
        <>
            <Context.Provider
                value={{ state: contextValue, dispatch: setContextValue }}
            >
                <header>
                    <Navigation />
                </header>
                <SearchContainer />
            </Context.Provider>
        </>
    );
};

export default App;
