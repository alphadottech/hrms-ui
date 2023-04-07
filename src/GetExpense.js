import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
const GetExpense = () => {
    const empid = localStorage.getItem("EmpID");
    const token = localStorage.getItem("response-token")
    const [expdata, setExpData] = useState([])
    useEffect(() => {
        axios.get(`/expenseManagement/getExpenseById/${empid}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(response => {
            console.log(response.data)
            setExpData(response.data)
        }).catch(error => {
            console.log(error);
            alert("cannot fetch data try after sometime.")
        })
    }, [])
    
    // {
    //     "id": 38,
    //     "amount": 200,
    //     "description": "Desktop Repair",
    //     "paymentMode": "PhonePay",
    //     "paymentDate": "2023-02-09",
    //     "createdBy": "Vialp",
    //     "category": "Office",
    //     "gst": true,
    //     "paidBy": "SR",
    //     "comments": "decortion"
    // }
    
    if (!expdata) return null;
    return (
        <div className="table-responsive-sm">
            <table className="mt-4 table table-bordered">
                <tbody className="bg-white text-dark">
                    <tr>
                        <th scope="row">ID</th>
                        <td>{expdata.id}</td>
                    </tr>
                    <tr>
                        <th scope="row">AMOUNT</th>
                        <td>{expdata.amount}</td>
                    </tr>
                    <tr>
                        <th scope="row">DESCRIPTION</th>
                        <td>{expdata.description}</td>
                    </tr>
                    <tr>
                        <th scope="row">PAYMENT MODE</th>
                        <td>{expdata.paymentMode}</td>
                    </tr>
                    <tr>
                        <th scope="row">PAYMENT DATE</th>
                        <td>{expdata.paymentDate}</td>
                    </tr>
                    <tr>
                        <th scope="row">CREATED BY</th>
                        <td>{expdata.createdBy}</td>
                    </tr>
                    <tr>
                        <th scope="row">CATEGORY</th>
                        <td>{expdata.category}</td>
                    </tr>
                    <tr>
                        <th scope="row">GST</th>
                        <td>{String(expdata.gst)}</td>
                    </tr>
                    <tr>
                        <th scope="row">Paid By</th>
                        <td>{expdata.paidBy}</td>
                    </tr>
                    <tr>
                        <th scope="row">Comments</th>
                        <td>{expdata.comments}</td>
                    </tr>
                </tbody>
            </table>
            <Link to={`/editexpenses/${expdata.id}`} className="btn  btn-md btn-success">Update</Link>
        </div>
    )
}

export default GetExpense