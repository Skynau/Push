import React from "react";
import "./BudgetSelect.scss";

const Budget = () => {
    return (
        <div className="budget-size_btns">
            <div className="selectdiv">
                <select>
                    <option defaultChecked="FROM CZK">FROM CZK</option>
                    <option value="10.000.00">10.000.00</option>
                    <option value="12.000.00">12.000.00</option>
                    <option value="15.000.00">15.000.00</option>
                    <option value="20.000.00">20.000.00</option>
                    <option value="25.000.00">25.000.00</option>
                    <option value="30.000.00">30.000.00</option>
                    <option value="35.000.00">35.000.00</option>
                </select>
            </div>
            <div className="selectdiv">
                <select>
                    <option defaultChecked="TO CZK"> TO CZK</option>
                    <option value="15.000.00">15.000.00</option>
                    <option value="20.000.00">20.000.00</option>
                    <option value="25.000.00">25.000.00</option>
                    <option value="30.000.00">30.000.00</option>
                    <option value="35.000.00">35.000.00</option>
                    <option value="40.000.00">40.000.00</option>
                    <option value="50.000.00">50.000.00</option>
                    <option value="60.000.00">60.000.00</option>
                    <option value="40.000.00">40.000.00</option>
                    <option value="more">More</option>
                </select>
            </div>
        </div>
    );
};

export default Budget;
