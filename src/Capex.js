import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { toast } from 'react-toastify';
import handleAuthError from './CommonErrorHandling';
import { Link } from 'react-router-dom';
const Capex = () => {
    const token = localStorage.getItem("response-token");
    const [data, setData] = useState({
        date: "",
        expenseDetails: "",
        gstBill: "",
        amount: '',
        paidBy: "",
        comment: "",
        mode: "",
        invoice:[]
    });

    // function submit(e) {
    //     e.preventDefault();
    //     axios.post(`/apigateway/expensemanagement/capExDetails/createCapExDetails`, {
    //         date: data.date,
    //         expenseDetails: data.expenseDetails,
    //         gstBill: data.gstBill,
    //         amount: parseInt(data.amount),
    //         paidBy: data.paidBy,
    //         comment: data.comment,
    //         mode: data.mode
    //     }, {
    //         headers: {
    //             'Authorization': `Bearer ${token}`
    //         }
    //     }).then(response => {
    //         console.log(response.data);
    //         toast.success("Data has been created successfully.", { position: 'top-center', theme: "colored" })
    //     }).catch((error) => {
    //         handleAuthError(error);
    //         console.log(error);
    //         // toast.error("error happend try after sometime.", { position: "top-center", theme: 'colored' })
    //     });
    // };

    function submit(e) {
        e.preventDefault();
        const formData = new FormData();
        // Append data fields to FormData
        // formData.append("date", data.date);
        // formData.append("expenseDetails", data.expenseDetails);
        // formData.append("gstBill", data.gstBill);
        // formData.append("amount",parseFloat(data.amount));
        // formData.append("paidBy", data.paidBy);
        // formData.append("comment", data.comment);
        // formData.append("mode", data.mode);

        const body = {
            "date": data.date,
            "expenseDetails": data.expenseDetails,
            "gstBill": data.gstBill,
            "amount": parseInt(data.amount),
            "paidBy": data.paidBy,
            "comment": data.comment,
            "mode": data.mode
        };
        //Append "invoice" file(s) to FormData
        for (let i = 0; i < data.invoice.length; i++) {
            formData.append("invoice", data.invoice[i]);
        }
        formData.append("body", JSON.stringify(body));
        axios.post(`/apigateway/expensemanagement/capExDetails/createCapExDetails`, formData, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'multipart/form-data' // Ensure proper content type for file uploads
            }
        }).then(response => {
            console.log(response.data);
            toast.success("Data has been created successfully.", { position: 'top-center', theme: "colored" })
        }).catch((error) => {
            handleAuthError(error);
            console.log(error);
            // toast.error("error happend try after sometime.", { position: "top-center", theme: 'colored' })
        });
    };
    
    function handle(e) {
        const newdata = { ...data };
        newdata[e.target.id] = e.target.value;
        setData(newdata);
        console.log(newdata);
    }
    //   {
    //     "date":"2023-05-16",
    //     "expenseDetails":"Desktop repair",
    //     "gstBill":"29GYFUDG1314R9Z7",
    //     "amount":808888,
    //     "paidBy":"jyoti",
    //     "comment":"decortion",
    //     "mode":"PhonePay"
    // }
    return (
        <div>     <nav aria-label="breadcrumb" style={{ "--bs-breadcrumb-divider": "'>>'" }}>
        <ol className="breadcrumb" style={{  color: "white" }}>
        
            <li className="breadcrumb-item"><Link to="/">Home</Link> </li>
            <li className="breadcrumb-item"><a href="">Expense</a></li>
            <li className="breadcrumb-item active" aria-current="page">Capital Expense</li>
        </ol>
    </nav>
        <div className='container pt-3'>
            <div className='row'>
                <div className=' col-md-9 mx-auto'>
                    <div className='card border-0 shadow' style={{  marginLeft:'100px',width:'700px',height:'750PX'}}>
                        <div className='card-body'>
                            <form className='container py-3  mb-3' onSubmit={(e) => { submit(e) }}>
                                <div className="row mb-3">
                                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label" name='date'>date</label>
                                    <div className="col-sm-10">
                                        <input onChange={(e) => { handle(e) }} value={data.date}
                                            type="date"
                                            id="date"
                                            className="form-control" />
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label" name='expenseDetails'>ExpenseDetails</label>
                                    <div className="col-sm-10">
                                        <input onChange={(e) => { handle(e) }} value={data.expenseDetails}
                                            type="text" className="form-control"
                                            id="expenseDetails" />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label" name="gstBill">GstBill</label>
                                    <div className="col-sm-10">
                                        <input onChange={(e) => { handle(e) }} value={data.gstBill}
                                            type="text" className="form-control"
                                            placeholder='enter your gstBill'
                                            id="gstBill" />
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label" name="amount">Amount</label>
                                    <div className="col-sm-10">
                                        <input onChange={(e) => { handle(e) }} value={data.amount}
                                            type="number" step='0.1' className="form-control"
                                            id="amount" />
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label" name="paidBy">PaidBy</label>
                                    <div className="col-sm-10">
                                        <input onChange={(e) => { handle(e) }} value={data.paidBy}
                                            type="text" className="form-control"
                                            placeholder='enter your paidBy'
                                            id="paidBy" />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label" name="comment">Comment</label>
                                    <div className="col-sm-10">
                                        <input onChange={(e) => { handle(e) }} value={data.comment}
                                            type="text" className="form-control"
                                            placeholder='enter your comment'
                                            id="comment" />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label" name="mode">Mode</label>
                                    <div className="col-sm-10">
                                        <input onChange={(e) => { handle(e) }} value={data.mode}
                                            type="text" className="form-control"
                                            placeholder='enter your mode'
                                            id="mode" />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Invoice</label>
                                    <div className="col-sm-10">
                                        <input
                                        onChange={e => setData({ ...data, invoice: e.target.files })}
                                            type="file" multiple className="form-control" id="resume" />
                                    </div>
                                </div>
                                <div className="d-grid gap-2 col-6 mx-auto">
                                    <button className="btn btn-outline-danger" type="submit">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Capex