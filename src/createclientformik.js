import React from 'react';
import axios from 'axios';
import { useFormik } from 'formik';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { clientInfoSchema } from './Validations/createclientyup'
export default function SaveClientFormik() {
    const token = localStorage.getItem("response-token")
    const formik = useFormik({
        initialValues: {
            Companyname: '',
            Address: '',
            number: '',
            Email: '',
            Cperson: '',
            GST: '',
        },
        validationSchema: clientInfoSchema,
        onSubmit: (values, action) => {
            console.log(values)
            axios.post(`/expenseManagement/clientInfo/saveClientInfo`, {
                companyName: values.Companyname,
                address: values.Address,
                phone: values.number,
                email: values.Email,
                contactPerson: values.Cperson,
                gstin: values.GST
            },{
                headers: {
                    'Authorization': `Bearer ${token}`
                }
              }  )
                .then((response) => {
                    console.log(response);
                    alert("clientInfo created Successfully !!");
                }).catch((err) => {
                    console.log(err);
                    alert("Cannot create client !!");
                })
            action.resetForm();
        },

    });

    return (
        <>
            <div className='container pt-3'>
                <div className='row'>
                    <div className='col-lg-8 col-md-10 mx-auto'>
                        <div className='card border-0 shadow'>
                            <div className='card-body'>
                                <form className='container py-3  mb-3' onSubmit={formik.handleSubmit}>
                                    <div className="row mb-3">
                                        <label htmlFor="Company Name " className="col-sm-2 col-form-label" name='Companyname'>Company Name </label>
                                        <div className="col-sm-10">
                                            <input
                                                id="Companyname"
                                                name="Companyname"
                                                type="text "
                                                step='0.1'
                                                placeholder='Enter Your Company Name'
                                                className={`form-control ${formik.touched.Companyname && formik.errors.Companyname ? 'is-invalid' : ''}`}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.Companyname}
                                            />
                                            {formik.touched.Companyname && formik.errors.Companyname ? (
                                                <div className="invalid-feedback">{formik.errors.Companyname}</div>
                                            ) : null}
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label htmlFor="Address" className="col-sm-2 col-form-label" name='Address'>Address</label>
                                        <div className="col-sm-10">
                                            <input
                                                id="Address"
                                                name="Address"
                                                type="text"
                                                className={`form-control ${formik.touched.Address && formik.errors.Address ? 'is-invalid' : ''}`}
                                                placeholder='Enter Address..'
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.Address}
                                            />
                                            {formik.touched.Address && formik.errors.Address ? (
                                                <div className="invalid-feedback">{formik.errors.Address}</div>
                                            ) : null}
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label htmlFor="Phone" className="col-sm-2 col-form-label" name='number'>Number</label>
                                        <div className="col-sm-10">
                                            <input
                                                type="number"
                                                name='number'
                                                className={`form-control ${formik.touched.number && formik.errors.number ? 'is-invalid' : ''}`}
                                                id="number"
                                                placeholder='Enter phone number...'
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.number}
                                            />
                                            {formik.touched.number && formik.errors.number ? (
                                                <div className="invalid-feedback">{formik.errors.number}</div>
                                            ) : null}
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label htmlFor="Email" className="col-sm-2 col-form-label" name="Email">Email</label>
                                        <div className="col-sm-10">
                                            <input
                                                type="Email"
                                                name='Email'
                                                className={`form-control ${formik.touched.Email && formik.errors.Email ? 'is-invalid' : ''}`}
                                                placeholder='Enter email...'
                                                id="Email"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.Email}
                                            />
                                            {formik.touched.Email && formik.errors.Email ? (
                                                <div className="invalid-feedback">{formik.errors.Email}</div>
                                            ) : null}
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label htmlFor="Contact Person  " className="col-sm-2 col-form-label" name='Cperson'>Contact Person </label>
                                        <div className="col-sm-10">
                                            <input
                                                type="text "
                                                name='Cperson'
                                                id="Cperson"
                                                step='0.1'
                                                placeholder='Contact person'
                                                className={`form-control ${formik.touched.Cperson && formik.errors.Cperson ? 'is-invalid' : ''}`}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.Cperson}
                                            />
                                            {formik.touched.Cperson && formik.errors.Cperson ? (
                                                <div className="invalid-feedback">{formik.errors.Cperson}</div>
                                            ) : null}
                                        </div>

                                    </div>
                                    <div className="row mb-3">
                                        <label htmlFor="GST  " className="col-sm-2 col-form-label" name='GST'>GST-IN </label>
                                        <div className="col-sm-10">
                                            <input
                                                type="text "
                                                name='GST'
                                                id="GST"
                                                step='0.1'
                                                placeholder='Enter GST number...'
                                                className={`form-control ${formik.touched.GST && formik.errors.GST ? 'is-invalid' : ''}`}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.GST}
                                            />
                                            {formik.touched.GST && formik.errors.GST ? (
                                                <div className="invalid-feedback">{formik.errors.GST}</div>
                                            ) : null}
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
        </>
    )
}

