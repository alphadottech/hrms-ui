import axios from "axios";
import React from "react";
import './App.css'
export default function Getinterviewdetails() {

    const [positions, setPosition] = React.useState([]);
    const token = localStorage.getItem("response-token")
    React.useEffect(() => {
        axios.get("/employee/Interview/getAllEmpIP",{
            headers: {
                'Authorization': `Bearer ${token}`
              }
        }).then((response) => {
            setPosition(response.data);
        });
    });


    if (!positions) return null;

    return (
        <div className="table-responsive-sm">
            <table border='2' className="table table-striped table-bordered">
                <thead className="head">
                    <tr className="table-danger table-striped">
                        <th>ID</th>
                        <th>TECHID</th>
                        <th>MARKS</th>
                        <th>COMMUNICATION</th>
                        <th>ENTHUSIASM</th>
                        <th>NOTES</th>
                        <th>OFFER RELEASED</th>
                        <th>WORK EXP IN YEARS</th>
                        <th>INTERVIEWER NAME</th>
                        <th>CANDIDATE NAME</th>
                        <th>SOURCE</th>
                        <th>OFFER ACCEPTED</th>
                        <th>POSITION ID</th>
                    </tr>
                </thead>
                <tbody className="body">
                    {/* map over the employees array */}
                    {positions.map((position) => (
                        // display a <div> element with the employees.emailId and employees.designation
                        // parent element needs to have a unique key
                        <tr key={position.id}>
                            <td>{position.id}</td>
                            <td>{position.techId}</td>
                            <td>{position.marks}</td>
                            <td>{position.communication}</td>
                            <td>{position.enthusiasm}</td>
                            <td>{position.notes}</td>
                            <td>{position.offerReleased}</td>
                            <td>{position.workExInYears}</td>
                            <td>{position.interviewerName}</td>
                            <td>{position.candidateName}</td>
                            <td>{position.source}</td>
                            <td>{position.offerAccepted}</td>
                            <td>{position.positionId}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    );
}