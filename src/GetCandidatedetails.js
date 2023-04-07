import axios from "axios";
import React from "react";
import './Hrmscss/App.css'

export default function CandidateDetails() {

    const [Candidates, setCandidate] = React.useState([]);
    const token = localStorage.getItem("response-token")

    React.useEffect(() => {
        axios.get("/hrms/interviewCandidate/allInterviewCandidate", {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then((response) => {
            setCandidate(response.data);
        }).catch(error => {
            console.log("error occoured", error)
            alert("something went wrong please try after sometime.")
        })
    }, []);

    // {
    //     "candidateId": 1,
    //     "candidateName": "Ankit",
    //     "emailId": "ankit@gmail.com",
    //     "contactNo": "9575255565",
    //     "address": "Indore, MP",
    //     "highestQualification": "BE",
    //     "workExperience": "1.5 Year",
    //     "technicalStack": "Java, React",
    //     "cvShortlisted": true,
    //     "lastCTC": 3.0,
    //     "noticePeriod": 90
    // }

    if (!Candidates) return null;

    return (
        <div className="table-responsive-sm">
            <table border='2' className="table table-striped table-bordered">
                <thead className="head">
                    <tr className="table-danger table-striped">
                        <th>CandidateId</th>
                        <th>Candidate Name</th>
                        <th>Email Id</th>
                        <th>Contact No</th>
                        <th>Address</th>
                        <th>Highest Qualification</th>
                        <th>Work Experience</th>
                        <th>Technical Stack</th>
                        <th>CV Shortlisted</th>
                        <th>Last CTC</th>
                        <th>Notice Period</th>
                    </tr>
                </thead>
                <tbody className="body">
                    {/* map over the employees array */}
                    {Candidates.map((Candidate) => (
                        // display a <div> element with the employees.emailId and employees.designation
                        // parent element needs to have a unique key
                        <tr key={Candidate.candidateId}>
                            <td>{Candidate.candidateId}</td>
                            <td>{Candidate.candidateName}</td>
                            <td>{Candidate.emailId}</td>
                            <td>{Candidate.contactNo}</td>
                            <td>{Candidate.address}</td>
                            <td>{Candidate.highestQualification}</td>
                            <td>{Candidate.workExperience}</td>
                            <td>{Candidate.technicalStack}</td>
                            <td>{String(Candidate.cvShortlisted)}</td>
                            <td>{Candidate.lastCTC}</td>
                            <td>{Candidate.noticePeriod}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    );
}