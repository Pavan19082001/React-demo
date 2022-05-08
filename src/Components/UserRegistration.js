import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";

function UserRegistration() {
    const signUpSchema = Yup.object().shape({
        fname: Yup.string().required("First name is required"),
        lname: Yup.string(),
        dob: Yup.date().required("Date of Birth is required"),
        email: Yup.string().email("invalid email").required("email can't be empty"),
        password: Yup.string().required("Password can't be empty").min(8, "password week").max(16, "password too long"),
        confirmPassword: Yup.string().oneOf([Yup.ref("password")], "password should match").required("Confirm Password cant be empty"),
    });

    let handleSubmit = (values)=>{
        console.log(values);
        alert("Do you really want to register in this website");
    }
  return (
    <div>
       <h1> UserRegistration </h1>
       <Formik initialValues={{fname: "", lname: "", dob: "", email: "", password: "", confirmPassword: ""}}
        onSubmit = {(e)=>handleSubmit(e)}
        validationSchema = {(signUpSchema)}
        >
            {(props)=>(
                <Form>
                    <div>
                    <label>FirstName</label>
                        <Field type="text" name="fname"/>
                        <ErrorMessage name="fname">{(error)=><p>{error}</p>}</ErrorMessage>
                    </div>
                    <div>
                    <label>LastName</label>
                        <Field type="text" name="lname"/>
                        <ErrorMessage name="lname">{(error)=><p>{error}</p>}</ErrorMessage>
                    </div>
                    <div>
                    <label>Date of Birth</label>
                        <Field type="calender" name="dob"/>
                        <ErrorMessage name="dob">{(error)=><p>{error}</p>}</ErrorMessage>
                    </div>
                    <div>
                        <label>Email Id</label>
                        <Field type="email" name="email"/>
                        <ErrorMessage name="email">{(error)=><p>{error}</p>}</ErrorMessage>
                    </div>
                    <div>
                        <label>Password</label>
                        <Field type="password" name="password"/>
                        <ErrorMessage name="password">{(error)=><p>{error}</p>}</ErrorMessage>
                    </div>
                    <div>
                        <label>Confirm Password</label>
                        <Field type="password" name="confirmPassword"/>
                        <ErrorMessage name="confirmPassword">{(error)=><p>{error}</p>}</ErrorMessage>
                    </div>
                    <br/>
                    <br/>
                    <button type="submit">Register</button>
                </Form>
            )}
        </Formik>
    </div>
  )
}

export default UserRegistration