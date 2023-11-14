import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./ListingDate.scss";

const ListingDate = () => {
    const [date, setDate] = useState(new Date());

    return (
        <div className="listings_date-datepicker">
            <h3>Listing date</h3>
            <DatePicker selected={date} onChange={(date) => setDate(date)} />
        </div>
    );
};

export default ListingDate;
