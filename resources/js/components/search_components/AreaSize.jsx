import React from "react";

const AreaSize = () => {
    return (
        <div className="area-size_btns">
            <section>
                <option defaultChecked="FROM m2"></option>
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
            </section>
            <section>
                <option defaultChecked="FROM m2"></option>
                    <option value="60">60m2</option>
                    <option value="70">70m2</option>
                    <option value="80">80m2</option>
                    <option value="90">90m2</option>
                    <option value="100">100m2</option>
                    <option value="more">More</option>
            </section>
        </div>
    );
};

export default AreaSize;
