"use client"
import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
const login = () => {
  return (
    <div>

<div>
        <div id="contact" className="contact-us section">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 align-self-center wow fadeInLeft" data-wow-duration="0.5s" data-wow-delay="0.25s">
          <div className="section-heading">
            <h2>Enter your credentials to access your account.</h2>
                 <p> Welcome back! Please enter your credentials to log in</p>
            {/* <div className="phone-info">
              <h4>For any enquiry, Call Us: <span><i className="fa fa-phone"></i> <a href="#">010-020-0340</a></span></h4>
            </div> */}
          </div>
        </div>
        <div className="col-lg-6 wow fadeInRight" data-wow-duration="0.5s" data-wow-delay="0.25s">
        <Formik
      initialValues={{
        email: '',
        password: ''
      }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email('Invalid email address')
          .required('Email is required'),
        password: Yup.string()
          .required('Password is required')
      })}
      onSubmit={(values, { resetForm }) => {
        // Handle form submission here
        console.log(values);
        resetForm();
      }}
    >
      {formik => (
        <Form id="contact">
          <div classNameName="row">
            <div classNameName="col-lg-12">
              <label><b>Email</b></label>
              <fieldset>
                <Field type="email" name="email" id="email" placeholder="Johan@gmail.com" autoComplete="on" />
                <ErrorMessage name="email" component="div" classNameName="error-message" />
              </fieldset>
            </div>
            <div classNameName="col-lg-12">
              <label><b>Password</b></label>
              <fieldset>
                <Field type="password" name="password" id="password" placeholder="john@1234" autoComplete="on" />
                <ErrorMessage name="password" component="div" classNameName="error-message" />
              </fieldset>
            </div>
            <div classNameName="col-lg-12">
              <fieldset>
                <button type="submit" id="form-submit" classNameName="main-button" disabled={!formik.isValid}>Login</button>
              </fieldset>
            </div>
          </div>
          <div classNameName="contact-dec">
            {/* Content for contact-dec */}
          </div>
        </Form>
      )}
    </Formik>
        </div>
      </div>
    </div>
  </div>
    </div>
    </div>
  )
}

export default login