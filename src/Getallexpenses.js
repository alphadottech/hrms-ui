import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Hrmscss/App.css'
import { Button } from "react-bootstrap";

const Getallexpenses = () => {
  const token = localStorage.getItem("response-token")
  const [expenseItems, setExpenseItems] = useState([]);
  let Navigate = useNavigate();
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');


  useEffect(() => {
    axios.get("/expenseManagement/getAllExpenses", {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }).then((response) => {
      console.log(response.data)
      setExpenseItems(response.data);
    }).catch(error => {
      console.log(error);
      alert('error occured try after sometime')
    })
  }, []);


  const routeCreateExpense = () => {
    Navigate('/CreateExpense')
  }

  const getExpenseByDate = (e) => {
    e.preventDefault();
    axios.get(`/expenseManagement/getExpenseByDateRange?startDate=${startDate}&endDate=${endDate}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }
    ).then((response) => {
      console.log(response.data);
      expenseItems.length = 0;
      setExpenseItems(response.data);
      Navigate('/Getallexpenses')
    }).catch((error) => { alert(error.message) })
  }

  if (!expenseItems) return null;

  return (
    <div>
      <div className="row">
        <div className=" col-lg-12 container pt-2">
          <form onSubmit={getExpenseByDate} >
            <div className="mb-2 d-grid gap-1 d-md-flex justify-content-center ">
              <label className="pt-3" htmlFor="startDate">startDate:</label>

              <input onChange={(e) => setStartDate(e.target.value)} value={startDate}

                type="date" className="form-control" name="start-date"
                id="startDate" />

              <label className="pt-3" htmlFor="endDate">endDate:</label>

              <input onChange={(e) => setEndDate(e.target.value)} value={endDate}

                type="date" name="end-date" className="form-control"
                id="endDate" />
              <button className="btn btn-primary pb-1">Search</button>
            </div>
          </form>
        </div>
      </div>
      <div>
        <table border='2' className="table table-striped table-bordered">
          <thead className="table-danger table-striped">
            <tr styles={{ width: '50%' }}>
              <th styles={{ width: '50%' }}>ID</th>
              <th styles={{ width: '50%' }}>Payment_Date</th>
              <th styles={{ width: '50%' }}>Payment_Mode</th>
              <th styles={{ width: '50%' }}>Paid_By</th>
              <th styles={{ width: '50%' }}>Created_By</th>
              <th styles={{ width: '50%' }}>Amount</th>
              <th styles={{ width: '50%' }}>Description</th>
              <th styles={{ width: '50%' }}>Category</th>
              <th styles={{ width: '50%' }}>GST</th>
              <th styles={{ width: '50%' }}>Comments</th>
              <th><Button className="btn btn-primary" type='submit' onClick={routeCreateExpense}>
                Create exp
              </Button></th>
            </tr>
          </thead>
          <tbody className="body">
            {/* map over the employees array */}
            {expenseItems.map((expenseItem) => (
              // display a <div> element with the employees.emailId and employees.designation
              // parent element needs to have a unique key
              <tr key={expenseItem.id}>
                <td><Link to={`/editexpenses/${expenseItem.id}`} className="expense-id">{expenseItem.id}</Link></td>
                <td>{expenseItem.paymentDate}</td>
                <td>{expenseItem.paymentMode}</td>
                <td>{expenseItem.paidBy}</td>
                <td>{expenseItem.createdBy}</td>
                <td>{expenseItem.amount}</td>
                <td>{expenseItem.description}</td>
                <td>{expenseItem.category}</td>
                <td>{String(expenseItem.gst)}</td>
                <td>{expenseItem.comments}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default Getallexpenses;