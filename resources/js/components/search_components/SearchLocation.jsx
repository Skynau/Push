import { useContext, React } from "react";
import Context from "../../Context";
import "./SearchLocation.scss";

const SearchLocation = () => {
    const { dispatch } = useContext(Context);

    const setSearchQuery = (e) => {
        dispatch({
            type: "SEARCH_QUERY",
            payload: e.target.value,
        });
    };
    return (
        <div className="search">
            <input
                onInput={setSearchQuery}
                className="search-location"
                type="text"
                placeholder="Search"
            />
        </div>
    );
};

export default SearchLocation;
