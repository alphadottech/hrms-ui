// import axios from "axios";
// import React from "react";
// import { toast } from 'react-toastify';
// import handleAuthError from './CommonErrorHandling';

// export default function PositionDetails() {

//     const [positions, setPosition] = React.useState([]);
//     const token = localStorage.getItem("response-token")

//     React.useEffect(() => {
//         axios.get("/hrms/interview/getAllPositionNew", {
//             headers: {
//                 'Authorization': `Bearer ${token}`
//             }
//         }).then((response) => {
//             setPosition(response.data);
//             toast.success("data found successfully.", { position: "top-center", theme: "colored" })
//         }).catch(error => {
//             handleAuthError(error);
//             console.log("error occoured", error)
//             // toast.error("something went wrong please try after sometime.", { position: "top-center", theme: "colored" })
//         })
//     }, []);


//     if (!positions) return null;
//     //  {
//     //         "uiid": 1,
//     //         "positionName": "Java Developer",
//     //         "techStack": [
//     //             "Java",
//     //             "SpringBoot"
//     //         ],
//     //         "positionopendate": "2023-05-01",
//     //         "positionclosedate": "2023-05-31",
//     //         "status": "Available",
//     //         "experienceInYear": 1.5,
//     //         "remote": true,
//     //         "positionType": "Contractual",
//     //         "vacancy": 3
//     //     }
//     return (
//          <div  style={{ margin:'25px ', marginLeft:'50px',   width:'820px',height:'750px'}} >     
//         <div className="table-responsive-sm">
//         <h1  className='Heading1' >Employee  Position</h1>
//             <table border='2' className="table table-striped table-bordered">
         
//                 <thead className="head">
//                     <tr className="table-danger table-striped">
//                         <th>ID</th>
//                         <th>TECH STACK</th>
//                         <th>VACANCY</th>
//                         <th>POSITION OPEN DATE</th>
//                         <th>POSITION CLOSE DATE</th>
//                         <th>STATUS</th>
//                         <th>EXPERIENCE IN YEAR</th>
//                         <th>REMOTE</th>
//                         <th>POSITION TYPE</th>
//                     </tr>
//                 </thead>
//                 <tbody className="body">
//                     {/* map over the employees array */}
//                     {positions.map((position) => (
//                         // display a <div> element with the employees.emailId and employees.designation
//                         // parent element needs to have a unique key
//                         <tr key={position.uiid}>
//                             <td>{position.uiid}</td>
//                             <td>{position.techStack.join(",")}</td>
//                             <td>{position.vacancy}</td>
//                             <td>{position.positionopendate}</td>
//                             <td>{position.positionclosedate}</td>
//                             <td>{position.status}</td>
//                             <td>{position.experienceInYear}</td>
//                             <td>{String(position.remote)}</td>
//                             <td>{position.positionType}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//         </div>
//     );
// }




import axios from "axios";
import React from "react";
import { toast } from 'react-toastify';
import handleAuthError from './CommonErrorHandling';
import { Link } from "react-router-dom";
export default function PositionDetails() {

    const [positions, setPosition] = React.useState([]);
    const token = localStorage.getItem("response-token")

    React.useEffect(() => {
        axios.get("/apigateway/hrms/interview/getAllPositionNew", {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then((response) => {
            setPosition(response.data);
            toast.success("data found successfully.", { position: "top-center", theme: "colored" })
        }).catch(error => {
            handleAuthError(error);
            console.log("error occurred", error)
            // toast.error("something went wrong please try after sometime.", { position: "top-center", theme: "colored" })
        })
    }, []);

    if (!positions) return null;

    return (
        <div>   <nav aria-label="breadcrumb" style={{ "--bs-breadcrumb-divider": "'>>'" }}>
        <ol className="breadcrumb" style={{  color: "white" }}>
        
            <li className="breadcrumb-item"><Link to="/">Home</Link> </li>
            <li className="breadcrumb-item"><a href="">Employee Management</a></li>
            <li className="breadcrumb-item active" aria-current="page">Employee Position</li>
        </ol>
    </nav>
        <div style={{ margin: '25px ', marginLeft: '50px', width: '820px', height: '750px' }}>
         
            <div className="table-responsive-sm">
                <h1 className='Heading1'>Employee Position</h1>
                <table border='2' className="table table-striped table-bordered">
                    <thead className="head">
                        <tr className="table-danger table-striped">
                            <th>ID</th>
                            <th>TECH STACK</th>
                            <th>VACANCY</th>
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
                            <tr key={position.uiid}>
                                <td>{position.uiid}</td>
                                <td>{position.techStack.join(",")}</td>
                                <td>{position.vacancy}</td>
                                <td>{position.positionopendate}</td>
                                <td>{position.positionclosedate}</td>
                                <td>{position.status}</td>
                                <td>{position.experienceInYear}</td>
                                <td>{String(position.remote)}</td>
                                <td>{position.positionType}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        </div>
    );
}





