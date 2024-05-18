"use client"
import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
const signup = () => {
  return (
    <div>
      <div>
        <div id="contact" className="contact-us section">
          <div className="container">
            <div className="row">
              <div
                className="col-lg-6 align-self-center wow fadeInLeft"
                data-wow-duration="0.5s"
                data-wow-delay="0.25s"
              >
                <div className="section-heading">
                  <h2>Create a new account</h2>
                  <p>Welcome! Please fill out the form below to sign up.</p>
                  {/* <!-- <div className="phone-info">
                            <h4>For any enquiry, Call Us: <span><i className="fa fa-phone"></i> <a href="#">010-020-0340</a></span></h4>
                        </div> --> */}
                </div>
              </div>
              <div
                className="col-lg-6 wow fadeInRight"
                data-wow-duration="0.5s"
                data-wow-delay="0.25s"
              >
           <Formik
      initialValues={{
        fname: '',
        lname: '',
        email: '',
        contact: '',
        password: '',
        role:2
      }}
      validationSchema={Yup.object({
        fname: Yup.string()
          .required('First name is required'),
        lname: Yup.string()
          .required('Last name is required'),
        email: Yup.string()
          .email('Invalid email address')
          .required('Email is required'),
        contact: Yup.string()
          .required('Contact number is required'),
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
            <div classNameName="col-lg-6">
              <label><b>First Name</b></label>
              <fieldset>
                <Field type="text" name="fname" id="fname" placeholder="Rocky" autoComplete="on" />
                <ErrorMessage name="fname" component="div" classNameName="error-message" />
              </fieldset>
            </div>
            <div classNameName="col-lg-6">
              <label><b>Last Name</b></label>
              <fieldset>
                <Field type="text" name="lname" id="lname" placeholder="David" autoComplete="on" />
                <ErrorMessage name="lname" component="div" classNameName="error-message" />
              </fieldset>
            </div>
            <div classNameName="col-lg-12">
              <label><b>Email</b></label>
              <fieldset>
                <Field type="email" name="email" id="email" placeholder="Rocky@gmail.com" autoComplete="on" />
                <ErrorMessage name="email" component="div" classNameName="error-message" />
              </fieldset>
            </div>
            <div classNameName="col-lg-12">
              <label><b>Contact Number</b></label>
              <fieldset>
                <Field type="text" name="contact" id="contact" placeholder="+1 55555555" autoComplete="on" />
                <ErrorMessage name="contact" component="div" classNameName="error-message" />
              </fieldset>
            </div>
            <div classNameName="col-lg-12">
              <label><b>Password</b></label>
              <fieldset>
                <Field type="password" name="password" id="password" placeholder="Rocky@1234" autoComplete="on" />
                <ErrorMessage name="password" component="div" classNameName="error-message" />
              </fieldset>
            </div>
            <div classNameName="col-lg-12">
              <label><b></b></label>
              <fieldset>
                <button type="submit" id="form-submit" classNameName="main-button" disabled={!formik.isValid}>Sign up</button>
              </fieldset>
            </div>
          </div>
          <div classNameName="contact-dec">
            {/* <Image src={contactDecoration} alt=""/> */}
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
  );
};

export default signup;
