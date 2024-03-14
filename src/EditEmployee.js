// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams, useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';

// const EditEmployee = () => {
//     const { id } = useParams()
//     const navigate = useNavigate()
//     const token = localStorage.getItem("response-token");
//     const [data, setData] = useState({
//         firstName: "",
//         lastName: "",
//         salary: "",
//         maritalStatus: "",
//         mobileNo: "",
//         joinDate: "",
//         gender: "",
//         dob: "",
//         designation: "",
//         isActive: "",
//         bankName: "",
//         accountNumber: "",
//         ifscCode: ""
//     });
//     // "employeeId": 3,
//     // "isActive": true,
//     // "designation": "Senior Java Developer",
//     // "dob": "02-09-1987",
//     // "email": "mukeshchandalwar.adt@gmail.com",
//     // "firstName": "Mukesh",
//     // "lastName": "Chandalwar",
//     // "gender": "M",
//     // "isEmailVerified": true,
//     // "joinDate": "19-11-2022",
//     // "maritalStatus": "",
//     // "mobileNo": 9764552941,
//     // "username": "mukesh",
//     // "salary": 25000.0,
//     // "bankName": "SBI BANK",
//     // "accountNumber": "784896355",
//     // "ifscCode": "DIKE5D6E5F6DE"
//     useEffect(() => {
//         axios.get(`/apigateway/hrms/employee/getById/${id}`, {
//             headers: {
//                 'Authorization': `Bearer ${token}`
//             }
//         }).then(response => {
//             console.log(response.data)
//             setData(response.data)
//         }).catch(error =>
//             console.log(error.response.data)
//         )
//     }, [])
//     function handleSubmit(e) {
//         e.preventDefault();
//         axios.put(`/apigateway/hrms/employee/updateEmp/${id}`, {
//             firstName: data.firstName,
//             lastName: data.lastName,
//             salary: data.salary,
//             maritalStatus: data.maritalStatus,
//             mobileNo: data.mobileNo,
//             joinDate: data.joinDate,
//             gender: data.gender,
//             dob: data.dob,
//             designation: data.designation,
//             isActive: data.isActive,
//             bankName: data.bankName,
//             accountNumber: data.accountNumber,
//             ifscCode: data.ifscCode
//         }, {
//             headers: {
//                 'Authorization': `Bearer ${token}`
//             }
//         }).then(response => {
//             console.log(response.data);
//             toast.success("Candidate data has been updated successfully.", { position: 'top-center', theme: "colored" });
//             navigate('/empfunc');
//         }).catch(error => {
//             console.log(error.response.data);
//             toast.error("Something Bad happened try after sometime.", { position: 'top-center', theme: "colored" })
//         })
//     }
//     return (
//         <div className='container pt-3'>
//             <div className='row'>
//                 <div className='col-lg-8 col-md-10 mx-auto'>
//                     <div className='card border-0 shadow'style={{width:'700px',height:'1300px'}}>
//                         <div className='card-body'>
//                             <form className='container py-3  mb-3' onSubmit={handleSubmit}>
//                                 <div className="row mb-3">
//                                     <label htmlFor="inputPassword3" className="col-sm-2 col-form-label" name='id'>ID:</label>
//                                     <div className="col-sm-10">
//                                         <input disabled value={data.employeeId || ''}
//                                             type="text" className="form-control"
//                                             id="id" />
//                                     </div>
//                                 </div>
//                                 <div className="row mb-3">
//                                     <label htmlFor="inputPassword3" className="col-sm-2 col-form-label" name='isEmailVerified'>isEmailVerified</label>
//                                     <div className="col-sm-10">
//                                         <input disabled value={data.isEmailVerified || ''}
//                                             type="text" className="form-control"
//                                             id="isEmailVerified" />
//                                     </div>
//                                 </div>
//                                 <div className="row mb-3">
//                                     <label htmlFor="inputPassword3" className="col-sm-2 col-form-label" name='email'>Email</label>
//                                     <div className="col-sm-10">
//                                         <input disabled value={data.email || ''}
//                                             type="email" className="form-control"
//                                             id="email" />
//                                     </div>
//                                 </div>
//                                 <div className="row mb-3">
//                                     <label htmlFor="inputPassword3" className="col-sm-2 col-form-label" name='firstName'>First Name</label>
//                                     <div className="col-sm-10">
//                                         <input value={data.firstName || ''}
//                                             onChange={e => setData({ ...data, firstName: e.target.value })}
//                                             type="text" className="form-control"
//                                             id="firstName" />
//                                     </div>
//                                 </div>
//                                 <div className="row mb-3">
//                                     <label htmlFor="inputEmail3" className="col-sm-2 col-form-label" name='lastName'>Last Name</label>
//                                     <div className="col-sm-10">
//                                         <input value={data.lastName || ''}
//                                             onChange={e => setData({ ...data, lastName: e.target.value })}
//                                             type="text"
//                                             id="lastName"
//                                             step='0.1'
//                                             className="form-control" />
//                                     </div>
//                                 </div>
//                                 <div className="row mb-3">
//                                     <label htmlFor="inputPassword3" className="col-sm-2 col-form-label" name="dob">dob</label>
//                                     <div className="col-sm-10">
//                                         <input value={data.dob || ''}
//                                             onChange={e => setData({ ...data, dob: e.target.value })}
//                                             type="date" className="form-control"
//                                             id="dob" />
//                                     </div>
//                                 </div>
//                                 <div className="row mb-3">
//                                     <label htmlFor="inputPassword3" className="col-sm-2 col-form-label" name="highestQualification">Mobile No</label>
//                                     <div className="col-sm-10">
//                                         <input value={data.mobileNo || ''}
//                                             onChange={e => setData({ ...data, mobileNo: e.target.value })}
//                                             type="number" className="form-control"
//                                             placeholder='enter your highest Qualification.'
//                                             id="mobileNo" />
//                                     </div>
//                                 </div>
//                                 <div className="row mb-3">
//                                     <label htmlFor="inputPassword3" className="col-sm-2 col-form-label" name='salary'>Salary</label>
//                                     <div className="col-sm-10">
//                                         <input value={data.salary || ''}
//                                             onChange={e => setData({ ...data, salary: e.target.value })}
//                                             type="number" className="form-control"
//                                             id="salary" />
//                                     </div>
//                                 </div>
//                                 <div className="row mb-3">
//                                     <label htmlFor="inputPassword3" className="col-sm-2 col-form-label" name='maritalStatus'>MaritalStatus</label>
//                                     <div className="col-sm-10">
//                                         <input value={data.maritalStatus || ''}
//                                             onChange={e => setData({ ...data, maritalStatus: e.target.value })}
//                                             type="text" className="form-control"
//                                             id="maritalStatus" />
//                                     </div>
//                                 </div>

//                                 <div className="row mb-3">
//                                     <label htmlFor="inputPassword3" className="col-sm-2 col-form-label" name="joinDate">Join Date</label>
//                                     <div className="col-sm-10">
//                                         <input value={data.joinDate || ''}
//                                             onChange={e => setData({ ...data, joinDate: e.target.value })}
//                                             type="date" className="form-control"
//                                             placeholder='created By'
//                                             id="joinDate" />
//                                     </div>
//                                 </div>
//                                 <div className="row mb-3">
//                                     <label htmlFor="inputPassword3" className="col-sm-2 col-form-label" name="gender">Gender</label>
//                                     <div className="col-sm-10">
//                                         <input value={data.gender || ''}
//                                             onChange={e => setData({ ...data, gender: e.target.value })}
//                                             type="text" className="form-control"
//                                             id="gender" />
//                                     </div>
//                                 </div>
//                                 {/* <fieldset className="row mb-3">
//                                     <legend className="col-form-label col-sm-2 pt-0">IsActive</legend>
//                                     <div className="col-sm-10">
//                                         <div className="form-check form-check-inline">
//                                             <input checked={data.isActive} value={data.isActive} onChange={e => setData({ ...data, isActive: e.target.value })} className="form-check-input" type="radio" name="inlineRadioOptions" id="true" />
//                                             <label className="form-check-label" htmlFor="true">Yes</label>
//                                         </div>
//                                         <div className="form-check form-check-inline">
//                                             <input checked={data.isActive} value={data.isActive} onChange={e => setData({ ...data, isActive: e.target.value })} className="form-check-input" type="radio" name="inlineRadioOptions" id="false" />
//                                             <label className="form-check-label" htmlFor="false">No</label>
//                                         </div>
//                                     </div>
//                                 </fieldset> */}
//                                 {/* The first input element is a radio button for "Yes" and is checked if data.isActive is true. The value prop is also set to data.isActive so that the value of the radio button matches the value in the state. The onChange handler updates the isActive value in the state when this radio button is selected.*/}
//                                 <fieldset className="row mb-3">
//                                     <legend className="col-form-label col-sm-2 pt-0">IsActive</legend>
//                                     <div className="col-sm-10">
//                                         <div className="form-check form-check-inline">
//                                             <input checked={data.isActive === true} value={true || ''} onChange={e => setData({ ...data, isActive: true })} className="form-check-input" type="radio" name="inlineRadioOptions" id="true" />
//                                             <label className="form-check-label" htmlFor="true">Yes</label>
//                                         </div>
//                                         <div className="form-check form-check-inline">
//                                             <input checked={data.isActive === false} value={false || ''} onChange={e => setData({ ...data, isActive: false })} className="form-check-input" type="radio" name="inlineRadioOptions" id="false" />
//                                             <label className="form-check-label" htmlFor="false">No</label>
//                                         </div>
//                                     </div>
//                                 </fieldset>
//                                 <div className="row mb-3">
//                                     <label htmlFor="inputPassword3" className="col-sm-2 col-form-label" name="designation">Designation</label>
//                                     <div className="col-sm-10">
//                                         <input value={data.designation || ''}
//                                             onChange={e => setData({ ...data, designation: e.target.value })}
//                                             type="text" className="form-control"
//                                             id="designation" />
//                                     </div>
//                                 </div>
//                                 <div className="row mb-3">
//                                     <label htmlFor="inputPassword3" className="col-sm-2 col-form-label" name="bankName">Bank Name</label>
//                                     <div className="col-sm-10">
//                                         <input value={data.bankName || ''}
//                                             onChange={e => setData({ ...data, bankName: e.target.value })}
//                                             type="text" className="form-control"
//                                             id="bankName" />
//                                     </div>
//                                 </div>
//                                 <div className="row mb-3">
//                                     <label htmlFor="inputPassword3" className="col-sm-2 col-form-label" name="accountNumber">Account Number</label>
//                                     <div className="col-sm-10">
//                                         <input value={data.accountNumber || ''}
//                                             onChange={e => setData({ ...data, accountNumber: e.target.value })}
//                                             type="number" className="form-control"
//                                             id="accountNumber" />
//                                     </div>
//                                 </div>
//                                 <div className="row mb-3">
//                                     <label htmlFor="inputPassword3" className="col-sm-2 col-form-label" name="ifscCode">ifscCode</label>
//                                     <div className="col-sm-10">
//                                         <input value={data.ifscCode || ''}
//                                             onChange={e => setData({ ...data, ifscCode: e.target.value })}
//                                             type="text" className="form-control"
//                                             id="ifscCode" />
//                                     </div>
//                                 </div>
//                                 <div className="d-grid gap-2 col-6 mx-auto">
//                                     <button className="btn btn-outline-success" type="submit">Update Employeee</button>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default EditEmployee


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate, json } from 'react-router-dom';
import { toast } from 'react-toastify';
import handleAuthError from './CommonErrorHandling';

const EditEmployee = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const token = localStorage.getItem("response-token");
    const [data, setData] = useState({
        employeeId:"",
        firstName: "",
        lastName: "",
        salary: "",
        maritalStatus: "",
        mobileNo: "",
        joinDate: "",
        gender: "",
        dob: "",
        designation: "",
        isActive: "",
        bankName: "",
        accountNumber: "",
        ifscCode: "",
        email:"",
        isEmailVerified:"",
        userName:"",
        resume:[],
        aadharCard:[],
        panCard:[]

    });
    // const [resume, setResume] = useState([]);
    // const [aadhaar, setAadhar] = useState([]);
    // const [pan, setPan] = useState([]);

    //     "employeeId": 25,
    //     "isActive": true,
    //     "designation": "JAVA DEVELOPER",
    //     "dob": "23/08/1999",
    //     "email": "mailto:akashraskar.adt@gmail.com",
    //     "firstName": "Akash",
    //     "gender": "M",
    //     "isEmailVerified": true,
    //     "joinDate": "18/07/2022",
    //     "lastName": "Raskar",
    //     "maritalStatus": "Unmarried",
    //     "mobileNo": 8975663255,
    //     "salary": 15000.0,
    //     "userName":"Aakash2", 
    //     "bankName": "ICICI_a",
    //     "accountNumber": "345698756",
    //     "ifscCode": "SBINO89756"

    useEffect(() => {
        axios.get(`/apigateway/hrms/employee/getById/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(response => {
            console.log(response.data)
            
            setData(response.data)
        }).catch((error) => {
            handleAuthError(error);
            console.log(error)
        })
    }, [])
    function handleSubmit(e) {
        e.preventDefault();
        //creating form data object to wrap the file and object together.
        const empData = new FormData();
        //looping over the files we are uploading and storing them in resume state 
        for (let i = 0; i < data.resume.length; i++) {
            empData.append("file", data.resume[i]);
        }

        for (let i = 0; i < data.aadharCard.length; i++) {
            empData.append("image", data.aadharCard[i]);
        }

        for (let i = 0; i < data.panCard.length; i++) {
            empData.append("image1", data.panCard[i])
        }
        // appending the whole data together with resume into empdata.
        empData.append("emp", JSON.stringify(data));

        axios.put(`/apigateway/hrms/employee/updateEmp`, empData, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(response => {
            console.log(response.data);
            toast.success("Candidate data has been updated successfully.", { position: 'top-center', theme: "colored" });
            navigate('/empfunc');
        }).catch((error) => {
            // handleAuthError(error);
            console.log(error.response.data);
            toast.error("Error, try after sometime.", { position: 'top-center', theme: "colored" })
        })
    }
    // const handleResumeUpload = (e) => {
    //     const resList = e.target.files;
    //     setResume(resList);
    //     console.log(resList);

    // }
    // const handleAadharUpload = (e) => {
    //     const aadhar = e.target.files;
    //     setAadhar(aadhar);
    //     console.log(aadhar);

    // }
    // const handlePanUpload = (e) => {
    //     const pan = e.target.files;
    //     setPan(pan);
    //     console.log(pan);

    // }
   
    return (
        <div className='container pt-3'>
            <div className='row'>
                <div className='col-lg-8 col-md-10 mx-auto'>
                    <div className='card border-0 shadow' style={{width:'700px',height:'1500px'}}>
                        <div className='card-body'>
                            <form className='container py-3  mb-3' onSubmit={handleSubmit}>
                                <div className="row mb-3">
                                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label" name='id'>ID:</label>
                                    <div className="col-sm-10">
                                        <input disabled value={data.employeeId || ''}
                                            type="text" className="form-control"
                                            id="id" />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label" name='isEmailVerified'>Email Verified</label>
                                    <div className="col-sm-10">
                                        <input disabled value={data.isEmailVerified || ''}
                                            type="text" className="form-control"
                                            id="isEmailVerified" />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label" name='email'>Email</label>
                                    <div className="col-sm-10">
                                        <input disabled value={data.email || ''}
                                            type="email" className="form-control"
                                            id="email" />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label" name='firstName'>First Name</label>
                                    <div className="col-sm-10">
                                        <input value={data.firstName || ''}
                                            onChange={e => setData({ ...data, firstName: e.target.value })}
                                            type="text" className="form-control"
                                            id="firstName" />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label" name='lastName'>Last Name</label>
                                    <div className="col-sm-10">
                                        <input value={data.lastName || ''}
                                            onChange={e => setData({ ...data, lastName: e.target.value })}
                                            type="text"
                                            id="lastName"
                                            step='0.1'
                                            className="form-control" />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label" name="dob">DOB</label>
                                    <div className="col-sm-10">
                                        <input value={data.dob || ''}
                                            onChange={e => setData({ ...data, dob: e.target.value })}
                                            type="date" className="form-control"
                                            id="dob" />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label" name="highestQualification">Mobile No</label>
                                    <div className="col-sm-10">
                                        <input value={data.mobileNo || ''}
                                            onChange={e => setData({ ...data, mobileNo: e.target.value })}
                                            type="number" className="form-control"
                                            placeholder='enter your mobile number. .'
                                            id="mobileNo" />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label" name='salary'>Salary</label>
                                    <div className="col-sm-10">
                                        <input value={data.salary || ''}
                                            onChange={e => setData({ ...data, salary: e.target.value })}
                                            type="number" className="form-control"
                                            id="salary" />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label" name='maritalStatus'>Marital Status</label>
                                    <div className="col-sm-10">
                                        <input value={data.maritalStatus || ''}
                                            onChange={e => setData({ ...data, maritalStatus: e.target.value })}
                                            type="text" className="form-control"
                                            id="maritalStatus" />
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label" name="joinDate">Join Date</label>
                                    <div className="col-sm-10">
                                        <input value={data.joinDate || ''}
                                            onChange={e => setData({ ...data, joinDate: e.target.value })}
                                            type="date" className="form-control"
                                            placeholder='created By'
                                            id="joinDate" />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label" name="gender">Gender</label>
                                    <div className="col-sm-10">
                                        <input value={data.gender || ''}
                                            onChange={e => setData({ ...data, gender: e.target.value })}
                                            type="text" className="form-control"
                                            id="gender" />
                                    </div>
                                </div>
                                {/* <fieldset className="row mb-3">
                                    <legend className="col-form-label col-sm-2 pt-0">IsActive</legend>
                                    <div className="col-sm-10">
                                        <div className="form-check form-check-inline">
                                            <input checked={data.isActive} value={data.isActive} onChange={e => setData({ ...data, isActive: e.target.value })} className="form-check-input" type="radio" name="inlineRadioOptions" id="true" />
                                            <label className="form-check-label" htmlFor="true">Yes</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input checked={data.isActive} value={data.isActive} onChange={e => setData({ ...data, isActive: e.target.value })} className="form-check-input" type="radio" name="inlineRadioOptions" id="false" />
                                            <label className="form-check-label" htmlFor="false">No</label>
                                        </div>
                                    </div>
                                </fieldset> */}
                                {/* The first input element is a radio button for "Yes" and is checked if data.isActive is true. The value prop is also set to data.isActive so that the value of the radio button matches the value in the state. The onChange handler updates the isActive value in the state when this radio button is selected.*/}
                                <fieldset className="row mb-3">
                                    <legend className="col-form-label col-sm-2 pt-0">Active</legend>
                                    <div className="col-sm-10">
                                        <div className="form-check form-check-inline">
                                            <input checked={data.isActive === true} value={true || ''} onChange={e => setData({ ...data, isActive: true })} className="form-check-input" type="radio" name="inlineRadioOptions" id="true" />
                                            <label className="form-check-label" htmlFor="true">Yes</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input checked={data.isActive === false} value={false || ''} onChange={e => setData({ ...data, isActive: false })} className="form-check-input" type="radio" name="inlineRadioOptions" id="false" />
                                            <label className="form-check-label" htmlFor="false">No</label>
                                        </div>
                                    </div>
                                </fieldset>
                                <div className="row mb-3">
                                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label" name="designation">Designation</label>
                                    <div className="col-sm-10">
                                        <input value={data.designation || ''}
                                            onChange={e => setData({ ...data, designation: e.target.value })}
                                            type="text" className="form-control"
                                            id="designation" />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label" name="bankName">Bank Name</label>
                                    <div className="col-sm-10">
                                        <input value={data.bankName || ''}
                                            onChange={e => setData({ ...data, bankName: e.target.value })}
                                            type="text" className="form-control"
                                            id="bankName" />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label" name="accountNumber">Account Number</label>
                                    <div className="col-sm-10">
                                        <input value={data.accountNumber || ''}
                                            onChange={e => setData({ ...data, accountNumber: e.target.value })}
                                            type="number" className="form-control"
                                            id="accountNumber" />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label" name="ifscCode">IFSC Code</label>
                                    <div className="col-sm-10">
                                        <input value={data.ifscCode || ''}
                                            onChange={e => setData({ ...data, ifscCode: e.target.value })}
                                            type="text" className="form-control"
                                            id="ifscCode" />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Upload Resume</label>
                                    <div className="col-sm-10">
                                        <input
                                        onChange={e => setData({ ...data, resume: e.target.files })}
                                            type="file" multiple className="form-control" id="resume" />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Upload Aadhar </label>
                                    <div className="col-sm-10">
                                        <input 
                                       onChange={e => setData({ ...data, aadharCard: e.target.files })}
                                            type="file" multiple className="form-control" id="aadhar" />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Upload PAN</label>
                                    <div className="col-sm-10">
                                        <input
                                         onChange={e => setData({ ...data, panCard: e.target.files })}
                                            type="file" multiple className="form-control" id="pan" />
                                    </div>
                                </div>
                                <div className="d-grid gap-2 col-6 mx-auto">
                                    <button className="btn btn-outline-success" type="submit">Update Employeee</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditEmployee