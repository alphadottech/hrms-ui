import axios from "axios";
import React from "react";
import './App.css'
export default function PositionDetails() {

    const [positions, setPosition] = React.useState([]);
    const token = localStorage.getItem("response-token")
    
    React.useEffect(() => {
        axios.get("/employee/intervPosition/getAllPosition",{
            headers: {
                'Authorization': `Bearer ${token}`
              }
        }).then((response) => {
            setPosition(response.data);
        });
    },[]);


    if (!positions) return null;

    return (
        <div className="table-responsive-sm">
            <table border='2' className="table table-striped table-bordered">
                <thead className="head">
                    <tr className="table-danger table-striped">
                        <th>ID</th>
                        <th>TECHID</th>
                        <th>POSITION OPEN DATE</th>
                        <th>POSITION CLOSE DATE</th>
                        <th>STATUS</th>
                        <th>EXPERIENCE IN YEAR</th>
                        <th>REMOTE</th>
                        <th>POSITION TYPE</th>
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
                            <td>{position.positionOpenDate}</td>
                            <td>{position.positionCloseDate}</td>
                            <td>{position.status}</td>
                            <td>{position.experienceInYear}</td>
                            <td>{position.remote}</td>
                            <td>{position.positionType}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    );
}