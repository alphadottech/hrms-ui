import React from 'react';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Alert, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
const Registerformik = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("response-token")
  const initialValues = {
    email: '',
    username: '',
    password: '',
    showPassword: false
  };

  const handleSubmit = (values, { setStatus, resetForm }) => {
    axios.post('api/auth/register', {
      email: values.email,
      username: values.username,
      password: values.password
    }, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }).then((response) => {
      setStatus(response.data.message);
      resetForm(initialValues)
      console.log(response.data);
      alert("register successful please verify your email");
      navigate('/Login');

    }).catch((errors) => {
      console.log(errors);
      alert('error!!')
    })
  }

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email address").required("Email is required"),
    username: Yup.string().required('old  password is required.'),
    password : Yup.string().required('New password is required.')
      .min(8, 'Password must be at least 8 characters long.')
  });
  return (
    <Container>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, errors, touched, status, values }) => (
          <Form className="changepassword-form">
            {errors.serverError && <Alert variant="danger">{errors.serverError}</Alert>}
            {status && <Alert variant="success">{status}</Alert>}
            <div className="form-group">
              <label htmlFor="oldPassword">E-mail</label>
              <Field type="password" name="oldPassword" className={`form-control ${touched.email && errors.email ? 'is-invalid' : ''}`} />
              <ErrorMessage name="oldPassword" component="div" className="invalid-feedback" />
            </div>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <Field type={values.showPassword ? "text" : "password"} name="username" className={`form-control ${touched.username && errors.username ? 'is-invalid' : ''}`} />
              <ErrorMessage name="username" component="div" className="invalid-feedback" />
            </div>
            <div className="form-group">
              <label htmlFor="newPassword">Password</label>
              <Field type={values.showPassword ? "text" : "password"} name="newPassword" className={`form-control ${touched.password && errors.password ? 'is-invalid' : ''}`} />
              <ErrorMessage name="newPassword" component="div" className="invalid-feedback" />
            </div>
            <div className="form-group">
              <Field type="checkbox" name="showPassword" className="form-check-input" />
              <label htmlFor="showPassword" className="form-check-label">Show password</label>
            </div>
            <Button variant="primary" type="submit" disabled={isSubmitting} style={{ marginTop: 20 }}>
              {isSubmitting ? 'Submitting...' : 'Change Password'}
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );

};

export default Registerformik;





