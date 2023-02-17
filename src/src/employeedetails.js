import axios from "axios";
import React, { useState } from "react";
import './App.css'

export default function Empfunc() {
  const [employees, setEmployees] = useState([]);
  
  const token = localStorage.getItem("response-token")
  React.useEffect(() => {
    
    axios.get("/employee/employee/getAllEmp",{
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }).then((response) => {
        setEmployees(response.data);
      }).catch(err => console.log(err))
  },[]);

  if (!employees) return null;

  return (
    <div className="table-responsive-sm">
      <table border='2' className="table table-striped table-bordered">
        <thead className="head">
          <tr className="table-danger table-striped">
            <th>EmpID</th>
            <th >Mobile No</th>
            <th >EmailID</th>
            <th>Designation</th>
            <th >JoinDate</th>
            <th >Gender</th>
            <th>DOB</th>
            <th >MaritalStatus</th>
            <th>LastName</th>
            <th>FirstName</th>
          </tr>
        </thead>
        <tbody className="body">
          {/* map over the employees array */}
          {employees.map((employee) => (
            // display a <div> element with the employees.emailId and employees.designation
            // parent element needs to have a unique key
            <tr key={employee.empId}>
              <td>{employee.empId}</td>
              <td>{employee.mobileNo}</td>
              <td>{employee.emailId}</td>
              <td>{employee.designation}</td>
              <td>{employee.joinDate}</td>
              <td>{employee.gender}</td>
              <td>{employee.dob}</td>
              <td>{employee.maritalStatus}</td>
              <td>{employee.lname}</td>
              <td>{employee.fname}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

  );
}