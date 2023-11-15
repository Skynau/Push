import { useContext, React } from "react";
import Context from "../../Context";
import "./Dispositions.scss";

const Dispositions = () => {
    const { state, dispatch } = useContext(Context);

    const toggleFilter = (filterType) => {
        dispatch({
            type: `${filterType}_TOGGLE`,
        });
    };

    return (
        <div className="dispositons-btns">
            <button
                className={`btn ${state.filterOptions["1kk"] ? " active" : ""}`}
                onClick={() => toggleFilter("1kk")}
            >
                1kk
            </button>
            <button
                className={`btn ${
                    state.filterOptions["1plus1"] ? " active" : ""
                }`}
                onClick={() => toggleFilter("1plus1")}
            >
                1+1
            </button>
            <button
                className={`btn ${state.filterOptions["2kk"] ? " active" : ""}`}
                onClick={() => toggleFilter("2kk")}
            >
                2kk
            </button>
            <button
                className={`btn ${
                    state.filterOptions["2plus1"] ? " active" : ""
                }`}
                onClick={() => toggleFilter("2plus1")}
            >
                2+1
            </button>
            <button
                className={`btn ${state.filterOptions["3kk"] ? " active" : ""}`}
                onClick={() => toggleFilter("3kk")}
            >
                3kk
            </button>
            <button
                className={`btn ${
                    state.filterOptions["3plus1"] ? " active" : ""
                }`}
                onClick={() => toggleFilter("3plus1")}
            >
                3+1
            </button>
            <button
                className={`btn ${state.filterOptions["4kk"] ? " active" : ""}`}
                onClick={() => toggleFilter("4kk")}
            >
                4kk
            </button>
            <button
                className={`btn ${state.filterOptions.bigger ? " active" : ""}`}
                onClick={() => toggleFilter("bigger")}
            >
                Bigger
            </button>
        </div>
    );
};

export default Dispositions;
