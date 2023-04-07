import axios from "axios";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const LeaveRequestForm = () => {
    const Empid = localStorage.getItem('EmpID')
    const [leavedate, setLeavedate] = useState([]);

    const handleDateChange = (date) => {
        // Create a new array with the selected dates
        const updatedDates = [...leavedate, date.toISOString().substr(0, 10)];

        // Update the state with the new array of selected dates
        setLeavedate(updatedDates);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`/payroll/leave/leaveRequest`, {
            Empid:Empid,

        })
    }


    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="empid">Employee ID:</label>
            <label htmlFor="leavedate">Leave Dates:</label>
            <DatePicker
                id="leavedate"
                name="leavedate"
                selected={null}
                onChange={handleDateChange}
                inline
                monthsShown={1}
                includeDates={leavedate.map((date) => new Date(date))}
                highlightDates={leavedate.map((date) => new Date(date))}
                dateFormat="yyyy/MM/dd"
                placeholderText="Select leave dates"
                isClearable={true}
                showWeekNumbers={true}
                minDate={new Date()}
            />

            <button type="submit">Submit</button>
        </form>
    );
};

export default LeaveRequestForm;
