import React from "react";
import SearchContainer from "./SearchContainer";
import Navigation from "./Navigation";

const App = () => {
    return (
        <>
            <header>
                <Navigation />
            </header>
            <SearchContainer />
        </>
    );
};

export default App;
