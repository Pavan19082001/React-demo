import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";

function SignUp() {
    const signUpSchema = Yup.object().shape({
        email: Yup.string().email("invalid email").required("email can't be empty"),
        password: Yup.string().required("Password can't be empty").min(8, "password week").max(16, "password too long"),
        confirmPassword: Yup.string().oneOf([Yup.ref("password")], "password should match"),
    });

    let handleSubmit = (values)=>{
        console.log(values);
    }
  return (
    <div>
        <h1>SignUp</h1>
        <Formik initialValues={{email: "", password: "", confirmPassword: ""}}
        onSubmit = {(e)=>handleSubmit(e)}
        validationSchema = {(signUpSchema)}
        >
            {(props)=>(
                <Form>
                    <div>
                        <label>Email</label>
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
                    <button type="submit">Submit</button>
                </Form>
            )}
        </Formik>
    </div>
  )
}

export default SignUp