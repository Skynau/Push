import React, { useContext } from "react";
import Context from "../../Context";
import "./AreSize.scss";

const AreaSize = () => {
    const { dispatch } = useContext(Context);

    const sizeRangeFrom = (e) => {
        dispatch({
            type: "SIZE_FROM",
            payload: e.target.value,
        });
    };
    const sizeRangeTo = (e) => {
        dispatch({
            type: "SIZE_TO",
            payload: e.target.value,
        });
    };

    return (
        <div className="area-size__btns">
            <div className="selectdiv">
                <select onChange={sizeRangeFrom}>
                    <option defaultValue="FROM m2">FROM m2</option>
                    <option value="15">15m2</option>
                    <option value="20">20m2</option>
                    <option value="30">30m2</option>
                    <option value="40">40m2</option>
                    <option value="50">50m2</option>
                    <option value="60">60m2</option>
                    <option value="70">70m2</option>
                    <option value="80">80m2</option>
                    <option value="90">90m2</option>
                    <option value="100">100m2</option>
                </select>
            </div>
            <div className="selectdiv">
                <select onChange={sizeRangeTo}>
                    <option defaultValue="TO m2">TO m2 </option>
                    <option value="60">60m2</option>
                    <option value="70">70m2</option>
                    <option value="80">80m2</option>
                    <option value="90">90m2</option>
                    <option value="100">100m2</option>
                    <option value="more">More</option>
                </select>
            </div>
        </div>
    );
};

export default AreaSize;
