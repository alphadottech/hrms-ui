import axios from "axios";
import { useState } from "react";
const TimeSheet = () => {
    const [checkindisable, setcheckinDisable] = useState(false);
    const [checkoutdisable, setcheckoutDisable] = useState(false);
    const [date, setDate] = useState({
        fromDate: "",
        toDate: ""
    })
    const [getDate, setNewDate] = useState([])

    const token = localStorage.getItem("response-token");
    const empId = localStorage.getItem("EmpID");
    const checkIn = (e) => {
        e.preventDefault()
        axios.post(`payroll/timeSheet/checkIn/${empId}`, {},
            {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }).then(response => {
                console.log(response.data)
                alert("checkin successfull")
                setcheckinDisable(true);
            }).catch(error => console.log(error))
    }

    const checkOut = (e) => {
        e.preventDefault()
        axios.put(`payroll/timeSheet/checkOut/${empId}`, {}, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(response => {
            console.log(response.data)
            alert("checkout successfull")
            setcheckoutDisable(true)
        }).catch(error => console.log(error))
    }
    function submit(e) {
        e.preventDefault()
        axios.get(`/payroll/timeSheet/empAttendence?fromDate=${date.fromDate}&toDate=${date.toDate}&empId=${2}`, {
            fromDate: date.fromDate,
            toDate: date.toDate
        }).then((response) => {
            setNewDate(response.data)
            console.log(response.data)
        }).catch(error => {
            console.log(error)
            alert("error found")
        })
    }

    function handle(e) {
        const newdate = { ...date };
        newdate[e.target.id] = e.target.value;
        setDate(newdate);
        console.log(newdate);
    }
    return (
        <>
            <div className=" mb-2 d-grid gap-2 d-md-flex justify-content-center pt-5">
                <button disabled={checkindisable} onClick={checkIn} type="button" className="btn btn-outline-dark btn-lg">CHECK IN</button>
                <button disabled={checkoutdisable} onClick={checkOut} type="button" className="btn btn-outline-dark btn-lg">CHECK OUT</button>
            </div>


            <form onSubmit={(e) => { submit(e) }} className="mb-3 row">
                <div className=" mb-2 gap-2 d-md-flex justify-content-center pt-5 px-5">
                    <label htmlFor="fromdate">fromDate</label>
                    <input onChange={(e) => { handle(e) }} value={date.fromDate}
                        type="date" className="form-control"
                        id="fromDate" />
                    <label htmlFor="todate">toDate</label>
                    <input onChange={(e) => { handle(e) }} value={date.toDate}
                        type="date" className="form-control"
                        id="toDate" />
                    <button className=" btn btn-primary">Get</button>
                </div>
            </form>


            <div className="table-responsive-sm">
                <table border='2' className="table table-striped table-bordered">
                    <thead className="head">
                        <tr className="table-danger table-striped">
                            <th>TimeSheet ID</th>
                            <th >Employee ID</th>
                            <th >CheckOut</th>
                            <th>CheckIn</th>
                            <th >workingHour</th>
                            <th >date</th>
                            <th>status</th>
                            <th >month</th>
                            <th >year</th>
                        </tr>
                    </thead>
                    <tbody className="body">
                        {/* map over the dates array */}
                        {getDate.map((date) => (
                            // display a <div> element with the dates.checkout and dates.checkin
                            // parent element needs to have a unique key
                            <tr key={date.timeSheetId}>
                                <td>{date.timeSheetId}</td>
                                <td>{date.employeeId}</td>
                                <td>{date.checkOut}</td>
                                <td>{date.checkIn}</td>
                                <td>{date.workingHour}</td>
                                <td>{date.date}</td>
                                <td>{date.status}</td>
                                <td>{date.month}</td>
                                <td>{date.year}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>

    )
}
export default TimeSheet;