import React, { useReducer, useState } from "react";
import SearchContainer from "./SearchContainer";
import Navigation from "./Navigation";
import reducer from "../reducer";
import Context from "../Context";

const App = () => {
    const contextState = {
        filterOptions: {
            apartment: false,
            house: false,
            "1kk": false,
            "1+1": false,
            "2kk": false,
            "2+1": false,
            "3kk": false,
            "3+1": false,
            "4kk": false,
            bigger: false,
            amountFrom: null,
            amountTo: null,
            searchFieldValue: "",
            sizeFrom: null,
            sizeTo: null,
            furnished: false,
            partialyFurnished: false,
            unfurnished: false,
            balconyOrTerrace: false,
            wheelchairAccessible: false,
            basement: false,
            privateParking: false,
            garden: false,
            petsWelcome: false,
            datePicker: null,
        },
    };

    const [contextValue, setContextValue] = useReducer(reducer, contextState);

    const url = `/api/search?type%${
        contextState.filterOptions.apartment ? "apartment" : ""
    }&disposition%2kk${
        contextState.filterOptions["1+1"] ? "1kk" : ""
    }&petsWelcome%true`;
    console.log(url);
    const filterOptions = contextState.filterOptions;

    const urlTest = `/api/search?${Object.entries(filterOptions)
        .filter(([key, value]) => value) // only truthy values
        .map(
            ([key, value]) =>
                `${encodeURIComponent(key)}=${encodeURIComponent(value)}` // key=value biuld here
        )
        .join("&")}`;
    console.log(urlTest);

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
