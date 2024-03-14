import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { useNavigate, useParams } from 'react-router-dom';

const EditProjectEngagement = () => {
    const token = localStorage.getItem("response-token")
    const { projectId } = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState({
        projectId:'',
        projectName: '',
        projectDescription: '',
        engagedEmployee: '',
        startDate: '',
        endDate: '',
        status: ''
    });
    useEffect(() => {

        axios.get(`/apigateway/hrms/engagement/ProjectEngagementDetailById/${projectId}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then((response) => {
            console.log(response.data)
            setData(response.data)
        }).catch((error) => {
            console.log(error.response.data)
        })
    }, []);
    var str2bool = (value) => {
        if (value && typeof value === "string") {
            if (value.toLowerCase() === "true") return true;
            if (value.toLowerCase() === "false") return false;
        }
    }
    var radiobut = (e) => {
        console.log(e.target.value);
        data.status = str2bool(e.target.value);
    }
    //       "projectName": "mki",
    // 		"projectDescription": "Online villa booking site",
    // 		"engagedEmployee": "vikash",
    // 		"startDate": "01/05/2023",
    // 		"endDate": "20/06/2023",
    // 		"status": false
    function handleSubmit(e) {
        e.preventDefault();
        axios.put(`/hrms/engagement/updateProjectEngagement/${projectId}`, {
            projectId:data.projectId,
            projectName: data.projectName,
            projectDescription: data.projectDescription,
            engagedEmployee: data.engagedEmployee,
            startDate: data.startDate,
            endDate: data.endDate,
            status: data.status
        },{
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(response => {
            console.log(response);
            toast.success(response.data, { position: "top-center", theme: 'colored' });
        }).catch(error => {
            console.log(error);
            toast.error(error.response.data, { position: "top-center", theme: 'colored' });
        })
    }
    function handle(e) {
        const newdata = { ...data };
        newdata[e.target.id] = e.target.value;
        setData(newdata);
        console.log(newdata);
    }
    return (
        <div className='container pt-3'>
            <div className='row'>
                <div className='col-md-8 mx-auto'>
                    <div className='card border-0 shadow' style={{ marginRight: '100px', width: '700px', height: '650px' }}>
                        <div className='card-body'>
                            <form className='container py-3 mb-3' onSubmit={handleSubmit}>
                                <div className="row mb-3">
                                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label" name='projectId'>ID:</label>
                                    <div className="col-sm-10">
                                        <input disabled value={data.projectId || ''}
                                            type="text" className="form-control"
                                            id="projectId" />
                                    </div>
                                </div>
                                <div className='row mb-3 '>
                                    <label className='col-sm-2 col-form-label' name='projectName' >Project Name:</label>
                                    <div className='col-sm-10'>
                                        <input className='form-control' onChange={(e) => { handle(e) }}
                                            value={data.projectName}
                                            type='text' id='projectName'
                                            placeholder='Enter Project Name' >
                                        </input>
                                    </div>
                                </div>
                                <div className='row mb-3 '>
                                    <label className='col-sm-2 col-form-label' name='projectDescription' >Project Description:</label>
                                    <div className='col-sm-10'>
                                        <input className='form-control' onChange={(e) => { handle(e) }}
                                            value={data.projectDescription}
                                            type='text' id='projectDescription'
                                            placeholder='Enter project Description'>
                                        </input>
                                    </div>
                                </div>
                                <div className='row mb-3 '>
                                    <label className='col-sm-2 col-form-label' name='engagedEmployee' >Engaged Employee:</label>
                                    <div className='col-sm-10'>
                                        <input className='form-control' onChange={(e) => { handle(e) }}
                                            value={data.engagedEmployee}
                                            type='text' id='engagedEmployee'
                                            placeholder='Enter Engaged Employee.'
                                        >

                                        </input>
                                    </div>
                                </div>
                                <div className='row mb-3 '>
                                    <label className='col-sm-2 col-form-label' name='startDate' >Start Date:</label>
                                    <div className='col-sm-10'>
                                        <input className='form-control' onChange={(e) => { handle(e) }}
                                            value={data.startDate}
                                            type='date' id='startDate'>
                                        </input>
                                    </div>
                                </div>
                                <div className='row mb-3 '>
                                    <label className='col-sm-2 col-form-label' name='endDate' >End Date:</label>
                                    <div className='col-sm-10'>
                                        <input className='form-control' onChange={(e) => { handle(e) }} value={data.endDate}
                                            type='date' id='endDate' >

                                        </input>
                                    </div>
                                </div>
                                <fieldset className="row mb-3">
                                    <legend className="col-form-label col-sm-2 pt-0">IsActive</legend>
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
                                <div className="d-grid gap-2 col-6 mx-auto">
                                    <button className="btn btn-outline-danger" type="submit">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditProjectEngagement