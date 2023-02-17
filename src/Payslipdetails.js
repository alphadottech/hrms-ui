import React, { useState } from 'react'
import axios from 'axios';
const Payslipdetails = () => {
    const empID = localStorage.getItem("EmpID");
    const token = localStorage.getItem("response-token")
    const [data, setData] = useState()
    const [month, setMonth] = useState({})
    console.log(month);
    console.log(data)
    const handleChange = (event) => {
        setData(event.target.value);
    }

    const handleSubmit = (event) => {
        alert("your month is" + data)
        event.preventDefault()
        axios.get(`/payroll/slip?empId=${empID}&month=${data}`, {
            data: data
        }, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => {
                console.log(response.data)
                alert("data found successfully.")
                setMonth(response.data)
            }).catch(error => {
                console.log("error occured", error)
                alert("error occured in getting details please try after sometime.")
            })


    }
    return (
        <div className=" mb-2 d-flex gap-2 d-md-flex justify-content-center pt-5">
            <form onSubmit={handleSubmit}>
                <label>
                    <select className="form-select mb-3" value={data} onChange={handleChange}>
                        <option defaultValue >select your month</option>
                        <option value="January">January</option>
                        <option value="February" >February</option>
                        <option value="March" >March</option>
                        <option value="April">April</option>
                        <option value="May">May</option>
                        <option value="June">June</option>
                        <option value="July">July</option>
                        <option value="August">August</option>
                        <option value="September">September</option>
                        <option value="October">October</option>
                        <option value="November">November </option>
                        <option value="December">December </option>
                    </select>
                </label>
                <input type="submit" value="Submit" className="btn btn-outline-dark btn-md" />
            </form>
            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-10">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div> <span className="fw-bolder">Employee Name :</span> <small className="ms-3">{month.name}</small> </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div> <span className="fw-bolder">Designation :</span> <small className="ms-3">{month.jobTitle}</small> </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div> <span className="fw-bolder">Present Date :</span> <small className="ms-3">{month.presentDate}</small> </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div> <span className="fw-bolder">Mob no:</span> <small className="ms-3">{month.mobileNo}</small> </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div> <span className="fw-bolder">Account No :</span> <small className="ms-3">{month.accountNumber}</small> </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div> <span className="fw-bolder">Bank Name :</span> <small className="ms-3">{month.bankName}</small> </div>
                                    </div>
                                </div>
                            </div>
                            <table className="mt-4 table table-bordered">
                                <tbody className="bg-white text-dark">
                                    <tr>
                                        <th scope ="row"> Pay Periods</th>
                                        <td>{month.payPeriods}</td>

                                    </tr>
                                    <tr>
                                        <th scope="row">Working Days</th>
                                        <td>{month.youWorkingDays}</td>

                                    </tr>
                                    <tr>
                                        <th scope="row">Leaves Taken</th>
                                        <td>{month.numberOfLeavesTaken}</td>

                                    </tr>
                                    <tr>
                                        <th scope="row">Amount Deducted for Leaves</th>
                                        <td>{month.amountDeductedForLeaves}</td>

                                    </tr>
                                    <tr>
                                        <th scope="row">Amount Payable Per Day</th>
                                        <td> {month.amountPayablePerDay}</td>

                                    </tr>
                                    <tr>
                                        <th scope="row">Gross Salary</th>
                                        <td>{month.grossSalary}</td>

                                    </tr>
                                    <tr>
                                        <th scope="row">Net Amount Payable</th>
                                        <td>{month.netAmountPayable}</td>

                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="d-flex justify-content-end">
                            <div className="d-flex flex-column mt-2"> <span className="mt-4">Authorised Signatory</span> </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Payslipdetails