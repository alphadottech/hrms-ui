import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const GetAllAttendance = () => {
    const token = localStorage.getItem("response-token")
    const empid = localStorage.getItem("EmpID")
    const [getAttendence, setAttendence] = useState({
        fromDate: "",
        toDate: ""
    })
    const [getData, setData] = useState([])
    const submit = (e) => {
        e.preventDefault();
        axios.get(`/apigateway/payroll/timeSheet/empAttendence?empId=${empid}&fromDate=${getAttendence.fromDate}&toDate=${getAttendence.toDate}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => {
                console.log(response.data);
                setData(response.data);
                toast.success("data found succesfully.", { position: 'top-center', theme: "colored" })
            }).catch(error => {
                toast.error("error occured data not found.", { position: 'top-center', theme: "colored" })
                console.log("error happend", error)
            })

    }
    const handle = (e) => {
        const newDate = { ...getAttendence };
        newDate[e.target.id] = e.target.value;
        setAttendence(newDate);
        console.log(newDate)
    }



 
    return (
        <div  style={{margin:'25px 25px 25px 50px',width:'820px',height: '750px'}}  >
               <nav aria-label="breadcrumb" style={{ "--bs-breadcrumb-divider": "'>>'" }}>
                <ol className="breadcrumb" style={{  color: "white" }}> 
                

                    <li className="breadcrumb-item"><Link to="/">Home</Link> </li>
                    <li className="breadcrumb-item"><a href="">Employee Management</a></li>
                    <li className="breadcrumb-item active" aria-current="page"> Attendance</li>
                </ol>
            </nav>
            <form onSubmit={(e) => { submit(e) }} className="mb-3 row">

                <div className=" mb-2 gap-2 d-md-flex justify-content-center pt-5 px-5">

                    <label htmlFor="fromdate">fromDate</label>

                    <input onChange={(e) => { handle(e) }} value={getAttendence.fromDate}
                        type="date" className="form-control"
                        id="fromDate" />

                    <label htmlFor="todate">toDate</label>

                    <input onChange={(e) => { handle(e) }} value={getAttendence.toDate}
                        type="date" className="form-control"
                        id="toDate" />

                    <button className=" btn btn-primary">Get</button>
                </div>
            </form>
            <div className="table-responsive-sm" >
                <table border='2' className="table table-striped table-bordered">
                    <thead className="head">
                        <tr className="table-danger table-striped">
                            <th>TIMESHEET ID</th>
                            <th>EMPLOYEE ID</th>
                            <th>CHECK OUT</th>
                            <th>CHECK IN</th>
                            <th>WORKING HOUR</th>
                            <th>DATE</th>
                            <th>STATUS</th>
                            <th>MONTH</th>
                            <th>YEAR</th>
                        </tr>
                    </thead>
                    <tbody className="body">
                        {/* map over the employees array */}
                        {getData.map((getDataa) => (
                            // display a <div> element with the employees.emailId and employees.designation
                            // parent element needs to have a unique key
                            <tr key={getDataa.timeSheetId}>
                                <td>{getDataa.timeSheetId}</td>
                                <td>{getDataa.employeeId}</td>
                                <td>{getDataa.checkOut}</td>
                                <td>{getDataa.checkIn}</td>
                                <td>{getDataa.workingHour}</td>
                                <td>{getDataa.date}</td>
                                <td>{getDataa.status}</td>
                                <td>{getDataa.month}</td>
                                <td>{getDataa.year}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default GetAllAttendance