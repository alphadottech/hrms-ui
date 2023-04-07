import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Form } from "reactstrap";
import { useNavigate } from "react-router-dom";
import './App.css'
import { Button } from "react-bootstrap";

export default function GetExpense() {

  const [expenseItems, setExpenseItems] = useState([]);
  let Navigate = useNavigate();
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  // const [id, setId] = useState('');
  // const [paymentDate, setPaymentDate] = useState('');
  // const [paymentMode, setPaymentMode] = useState('');
  // const [paidBy, setPaidBy] = useState('');
  // const [createdBy, setCreatedBy] = useState('');
  // const [amount, setAmount] = useState('');
  // const [description, setDescription] = useState('');
  // const [category, setCategory] = useState('');
  // const [gst, setGst] = useState('');
  // const [comments, setComments] = useState('');

  useEffect(() => {
    axios.get("/expenseManagement/getAllExpenses").then((response) => {
      console.log(response.data)
      setExpenseItems(response.data);
    })
  }, []);

  const setData = (data) => {
    let { id, paymentDate, paymentMode, paidBy, createdBy, amount, description, category, gst, comments } = data;
    localStorage.setItem('ID', id);
    localStorage.setItem('Payment_Date', paymentDate);
    localStorage.setItem('Payment_Mode', paymentMode);
    localStorage.setItem('Paid_By', paidBy)
    localStorage.setItem('Created_By', createdBy);
    localStorage.setItem('Amount', amount);
    localStorage.setItem('Description', description);
    localStorage.setItem('Category', category)
    localStorage.setItem('GST', gst);
    localStorage.setItem('Comments', comments)
    Navigate('/EditExpenses')
  }

  function routeCreateExpense() {
    Navigate('/CreateExpense')
  }

  function getExpenseByDate() {
    axios.get(`/expenseManagement/getExpenseByDateRange?startDate=${startDate}&endDate=${endDate}`)
      .then((response) => {
        console.log(response.data);
        expenseItems.length = 0;
        setExpenseItems(response.data);
        Navigate('/GetExpense')
      }).catch((error) => {
        console.log(error)
        alert(error.message)
      })
  }

  // function handleIdClick(id) {
  //   // navigate to the next page with the details of the expense item with the given ID
  //   axios.get(`/expenseManagement/getExpenseById/${id}`, {
  //     paymentDate,
  //     paymentMode,
  //     paidBy,
  //     createdBy,
  //     amount,
  //     description,
  //     category,
  //     gst,
  //     comments
  //   }).then((response) => {
  //     console.log(response.data)
  //     Navigate('/expenseById')
  //   }).catch((error) => { alert(error) })
  // }


  if (!expenseItems) return null;

  return (
    <div>
      <div className="row">
        <div className="col-lg-6 container p-2 my-1 border px-md-3" >
          <Button className="badge rounded-pill bg-primary" type='submit' onClick={routeCreateExpense}>
            Create Expense
          </Button>
        </div>
        <div class="col-lg-6 container pt-2">
          <Form>
            <Form.Field className="search-form">
              <label for="search-date"><b>From </b></label>
              <input type="date" value={startDate} name="start-date" onChange={(e) => setStartDate(e.target.value)} />
              <label for="search-date"><b>To</b></label>
              <input type="date" value={endDate} name="end-date" onChange={(e) => setEndDate(e.target.value)} />
              <Button type='submit' onClick={getExpenseByDate}>Search</Button>
            </Form.Field>
          </Form>
        </div>
      </div>
      <div>
        <table border='2' className="table table-striped">
          <thead className="head" style={{ backgroundColor: "lightblue", border: "red" }}>
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
            </tr>
          </thead>
          <tbody className="body">
            {/* map over the employees array */}
            {expenseItems.map((expenseItem) => (
              // display a <div> element with the employees.emailId and employees.designation
              // parent element needs to have a unique key
              <tr key={expenseItem.id}>
                <td className="expense-id" onClick={() => setData(expenseItem)}>{expenseItem.id}</td>
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
  );
}
 