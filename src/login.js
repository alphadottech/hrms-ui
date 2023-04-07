// import './Hrmscss/App.css'
// import React, { useState } from 'react';
// import axios from 'axios';
// import { Link, useNavigate } from 'react-router-dom';
// const Login = () => {
//     const navigate = useNavigate();
//     const [password, setPassword] = useState('');
//     const [email, setEmail] = useState('');

//     const handlepassword = (event) => {
//         setPassword(event.target.value);
//     }
//     const handleemail = (event) => {
//         setEmail(event.target.value);
//     }
//     const handlesubmit = (e) => {
//         e.preventDefault();
//         console.warn(email, password)
//         axios.post(`/api/auth/login`, {
//             password: password,
//             email: email,
//             deviceInfo: {
//                 deviceId: "D1",
//                 deviceType: "DEVICE_TYPE_ANDROID"
//             }
//         }).then(response => {
//             localStorage.setItem("response-token", response.data.jwtAuthenticationResponse.accessToken)
//             localStorage.setItem("refresh-token", response.data.jwtAuthenticationResponse.refreshToken)
//             localStorage.setItem("EmpID", response.data.employeeId)
//             console.log(response.data.jwtAuthenticationResponse.accessToken);
//             alert("login successfull")
//             navigate('/');
//         }).catch(error => {
//             console.log(error)
//             alert("server error Cannot Login!!")
//             console.log(error.response.data);
//             console.log(error.response.status);
//             console.log(error.response.headers);
//             alert(error.response.data.error.message);
//         })
//     }
//     return (
//         <div className='container mt-5 pt-5'>
//             <div className='row'>
//                 <div className="col-12 col-sm-8 col-md-6 m-auto">
//                     <div className='card border-0 shadow'>
//                         <div className='card-body'>
//                             <svg className='bi bi-align-center' id='svgimg' xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" viewBox="0 0 16 16">
//                                 <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
//                                 <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
//                             </svg>
//                             <form>
//                                 <input type="text" name="text" onChange={handleemail} required value={email} className='form-control my-4 py-2 border border-light' placeholder='Enter email' />
//                                 <input type="password" name="password" onChange={handlepassword} required value={password} autoComplete="on" className='form-control my-4 py-2 border border-light' placeholder='Enter password' />
//                                 <div className="text-center mt-3">
//                                     <button type='button' className=" btn btn-outline-danger" onClick={handlesubmit}>Login</button>
//                                     <Link to="/Forgotpassword" className="nav-link pt-2 fp">Forget passsword</Link>
//                                     <Link to="/ChangepasswordForm" className="nav-link pt-2 cp">Change passsword</Link>
//                                     <Link to="/RegisterUser" className="nav-link pt-2 ru">Register User</Link>
//                                 </div> 
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Login;
import React from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '@fortawesome/fontawesome-free/css/all.css';


const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required(' Email is Required'),
    password: Yup.string().required(' Password is Required'),
});

const Login = () => {
    const navigate = useNavigate();

    const handleSubmit = (values) => {
        axios
            .post(`/api/auth/login`, {
                password: values.password,
                email: values.email,
                deviceInfo: {
                    deviceId: 'D1',
                    deviceType: 'DEVICE_TYPE_ANDROID',
                },
            })
            .then((response) => {
                localStorage.setItem(
                    'response-token',
                    response.data.jwtAuthenticationResponse.accessToken
                );
                localStorage.setItem(
                    'refresh-token',
                    response.data.jwtAuthenticationResponse.refreshToken
                );
                localStorage.setItem('EmpID', response.data.employeeId);
                console.log(response.data.jwtAuthenticationResponse.accessToken);
                alert('login successfull');
                navigate('/');
            })
            .catch((error) => {
                console.log(error);
                alert('server error Cannot Login!!');
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
                alert(error.response.data.error.message);
            });
    };

    return (


        <div className='container mt-5 pt-5'>
            <div className='row'>
                <div className="col-12 col-sm-8 col-md-6 m-auto">
                    <div className='card border-0 shadow'>
                        <div className='card-body'>
                            <svg className='bi bi-align-center' id='svgimg' xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                            </svg>
                            <Formik
                                initialValues={{ email: '', password: '' }}
                                validationSchema={LoginSchema}
                                onSubmit={handleSubmit}
                            >
                                {({ isSubmitting }) => (
                                    <Form>
                                        <Field
                                            type="email"
                                            name="email"
                                            placeholder="Enter email"
                                            className="form-control my-4 py-2 border border-light"
                                        />
                                        <ErrorMessage name="email" component="div" className="text-danger" />
                                        <Field
                                            type="password"
                                            name="password"
                                            placeholder="Enter password"
                                            className="form-control my-4 py-2 border border-light"
                                        />
                                        <ErrorMessage name="password" component="div" className="text-danger" />
                                        <div className="text-center mt-3">
                                            <button
                                                type='submit'
                                                className=" btn btn-outline-danger"
                                                disabled={isSubmitting}
                                            >
                                                {isSubmitting ? 'Logging in...' : 'Login'}
                                            </button>
                                            <Link to="/Forgotpassword" className="nav-link pt-2 fp"><i className="fas fa-lock"></i> Forget password</Link>
                                            <Link to="/ChangepasswordForm" className="nav-link pt-2 cp"><i className="fas fa-key"></i> Change password</Link>
                                            <Link to="/RegisterUser" className="nav-link pt-2 ru"><i className="fas fa-user-plus"></i> Register User</Link>

                                        </div>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Login;