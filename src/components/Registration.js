

import React from 'react';
import { useFormik } from 'formik';
import { validationSchema } from '../components/UserSchema';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Registration = () => {
    const navigate = useNavigate();

    const { handleChange, handleSubmit, handleBlur, touched, values, errors } = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema,
        onSubmit: (values, action) => {
            console.log(values);

            // Instead of Firebase authentication, you can store the user locally
            const users = JSON.parse(localStorage.getItem('users')) || [];
            
            // Check if the user with the same email already exists
            const existingUser = users.find(u => u.email === values.email);

            if (existingUser) {
                toast.error('User with this email already exists. Please use a different email.');
            } else {
                // Save the new user to local storage
                users.push({ email: values.email, password: values.password });
                localStorage.setItem('users', JSON.stringify(users));

                navigate('/login');
                toast.success('User Registration Successfully!');
                console.log('User Registration successful:', values.email);
            }

            action.resetForm();
        },
    });

    return (
        <div>
            <h2 className="text-center App">Register User</h2>
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-8 ">
                        {/* form   */}
                        <Form className="mb-5 border border-primary p-4 m-3 rounded" onSubmit={handleSubmit}>

                            {/* email */}
                            <div className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="text"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    placeholder="Enter Your Email"
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isInvalid={touched.email && errors.email}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.email}
                                </Form.Control.Feedback>
                            </div>

                            {/* password */}
                            <div className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"  
                                    className="form-control"
                                    id="password"
                                    name="password"
                                    placeholder="Enter Your Password"
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isInvalid={touched.password && errors.password}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.password}
                                </Form.Control.Feedback>
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary mb-5"
                            >
                                Register
                            </button>
                        </Form>
                        <hr />
                        <Link
                            to="/login"
                            className="py-2 ps-3 pe-4 fw-semibold text-center text-decoration-none"
                        >
                            Login
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Registration;
