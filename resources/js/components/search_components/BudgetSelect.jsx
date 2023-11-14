import { useContext, React } from "react";
import Context from "../../Context";
import "./BudgetSelect.scss";

const Budget = () => {
    const { dispatch } = useContext(Context);

    const budgetRangeFrom = (e) => {
        dispatch({
            type: "BUDGET_FROM",
            payload: e.target.value,
        });
    };
    const budgetRangeTo = (e) => {
        dispatch({
            type: "BUDGET_TO",
            payload: e.target.value,
        });
    };

    return (
        <div className="budget-size_btns">
            <div className="selectdiv">
                <select onChange={budgetRangeFrom}>
                    <option defaultValue="FROM CZK">FROM CZK</option>
                    <option value="10000">10.000.00</option>
                    <option value="12000">12.000.00</option>
                    <option value="15000">15.000.00</option>
                    <option value="20000">20.000.00</option>
                    <option value="25000">25.000.00</option>
                    <option value="30000">30.000.00</option>
                    <option value="35000">35.000.00</option>
                </select>
            </div>
            <div className="selectdiv">
                <select onChange={budgetRangeTo}>
                    <option defaultValue="TO CZK"> TO CZK</option>
                    <option value="15000">15.000.00</option>
                    <option value="20000">20.000.00</option>
                    <option value="25000">25.000.00</option>
                    <option value="30000">30.000.00</option>
                    <option value="35000">35.000.00</option>
                    <option value="40000">40.000.00</option>
                    <option value="50000">50.000.00</option>
                    <option value="60000">60.000.00</option>
                    <option value="40000">40.000.00</option>
                    <option value="more">More</option>
                </select>
            </div>
        </div>
    );
};

export default Budget;
