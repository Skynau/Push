import React, { useState } from "react";
import SearchContainer from "../SearchContainer";
import "./EditSearch.scss";
import PropertyDetail from "../property_detail_components/PropertyDetail";

const EditSearch = () => {
    const [editVisible, setEditVisible] = useState(false);

    const openEdit = () => {
        setEditVisible(!editVisible);
    };

    const closeEdit = () => {
        setEditVisible(false);
    };

    return (
        <>
            <button className="edit-button" onClick={openEdit}>
                Edit the search
            </button>
            <div className={`dynamic-div${editVisible ? "_active" : ""}`}>
                <div className="edit_container">
                    <div className="edit_search-container">
                        <SearchContainer />
                    </div>
                    <button className="closing-tab" onClick={closeEdit}>
                        &#10005;
                    </button>
                </div>
            </div>
        </>
    );
};

export default EditSearch;
