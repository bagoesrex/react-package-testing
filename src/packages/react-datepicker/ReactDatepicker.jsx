import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default function ReactDatepicker() {
    const [selectedDate, setSelectedDate] = useState(null);

    return (
        <>
            <div className="flex flex-col items-center">
                <h1 className="pb-10 font-extrabold font-sans">React Datepicker</h1>
                <DatePicker
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    placeholderText="Select a date"
                    dateFormat="dd/MM/yyyy"
                    className="border px-3 py-2 rounded mb-5"
                />
                {selectedDate && (
                    <p>
                        Selected Date:{" "}
                        <strong>{selectedDate.toLocaleDateString("en-GB")}</strong>
                    </p>
                )}

            </div>
        </>
    )
}