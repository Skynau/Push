import React, { useState, useContext, useEffect } from "react";
import DatePicker from "react-datepicker";
import Context from "../../Context";
import "react-datepicker/dist/react-datepicker.css";
import "./ListingDate.scss";

const ListingDate = () => {
    const [date, setDate] = useState(new Date());
    const { dispatch } = useContext(Context);

    return (
        <div className="listings_date-datepicker">
            <h3>Listing date</h3>
            <DatePicker
                selected={date}
                onChange={(date) => {
                    setDate(date);
                    dispatch({
                        type: "datePicker",
                        payload: date,
                    });
                }}
            />
        </div>
    );
};

export default ListingDate;
