import React, { useEffect, useReducer, useState, useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchContainer from "./SearchContainer";
import Navigation from "./Navigation";
import reducer from "../reducer";
import Context from "../Context";
import state from "../state";
import ResultsOfSearch from "./ResultsOfSearch";
import Register from "./Register";
import Login from "./Login";
import axios from "axios";
import AboutUs from "./AboutUs";
import UserContext from "../UserContext";
import NewPropertyForm from "./rent_property/NewPropertyForm";
import OwnerInterface from "./owner_components/OwnerInterface";

const App = () => {
    const [contextValue, setContextValue] = useReducer(reducer, state);

    const [user, setUser] = useState(null);

    // const { dispatch, state } = useContext(Context);

    const loadUserStatus = async () => {
        try {
            const response = await axios.get("/api/user");
            const response_data = response.data;
            setUser(response_data);
            // setContextValue({
            //         type: "user",
            //         payload: response_data,
            //          });
        } catch (error) {
            setUser(false);
        }
    };

    useEffect(() => {
        if (user === null) {
            loadUserStatus();
        }
    }, [user]);

    return (
        <>
            <Context.Provider
                value={{ state: contextValue, dispatch: setContextValue }}
            >
                <UserContext.Provider value={{ user, setUser }}>
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
                            <Route path="/register" element={<Register />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/about-us" element={<AboutUs />} />
                            <Route
                                path="/create-property"
                                element={<NewPropertyForm />}
                            />
                            <Route
                                path="/owner-interface"
                                element={<OwnerInterface />}
                            />
                        </Routes>
                    </BrowserRouter>
                </UserContext.Provider>
            </Context.Provider>
        </>
    );
};

export default App;
