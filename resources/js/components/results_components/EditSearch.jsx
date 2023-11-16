import React, { useContext } from "react";
import SearchContainer from "../SearchContainer";
import Context from "../../Context";
import "./EditSearch.scss";

const EditSearch = () => {
    const { state, dispatch } = useContext(Context);
    const closeEdit = () => {
        dispatch({
            type: "showEditForm",
        });
    };

    return (
        <>
            <div
                className={`dynamic-div${state.showEditForm ? "_active" : ""}`}
            >
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
