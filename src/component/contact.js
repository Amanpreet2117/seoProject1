"use client"
import React from 'react'
import Image from "next/image";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import contactDecoration from "../assets/contact-decoration.png"
import { postData } from '../services/client/apiMethods';
const contact = () => {
  return (
    <div>
        <div id="contact" class="contact-us section">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 align-self-center wow fadeInLeft" data-wow-duration="0.5s" data-wow-delay="0.25s">
          <div class="section-heading">
            <h2>Feel Free To Send Us a Message About Your Website Needs</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doer ket eismod tempor incididunt ut labore et dolores</p>
            <div class="phone-info">
              <h4>For any enquiry, Call Us: <span><i class="fa fa-phone"></i> <a href="#">010-020-0340</a></span></h4>
            </div>
          </div>
        </div>
        <div class="col-lg-6 wow fadeInRight" data-wow-duration="0.5s" data-wow-delay="0.25s">
        <Formik
      initialValues={{
        name: '',
        surname: '',
        email: '',
        message: ''
      }}
      validationSchema={Yup.object({
        name: Yup.string()
          .required('Name is required'),
        surname: Yup.string()
          .required('Surname is required'),
        email: Yup.string()
          .email('Invalid email address')
          .required('Email is required'),
        message: Yup.string()
          .required('Message is required')
      })}
      onSubmit={async(values, { resetForm }) => {
        // Handle form submission here
        console.log("formik values",values);
        let data={
          fname:values.name,
          lname:values.surname,
          email:values.email,
          message:values.message
        }
        debugger
        try {
          // setSubmitting(true)
          const result = await postData('/user/contact', data);

          console.log("result",result)
          if(result.data.success){
            resetForm();
            toast.success(result.data.message)
          } else {
            toast.info(result.data.message)
          }
        } catch (error) {
          setSubmitting(false)
          toast.error(error.response.data.message)
        }
        // setSubmitting(false)
      
        
      }}
    >
      {formik => (
        <Form id="contact">
          <div className="row">
            <div className="col-lg-6">
            <label><b>Name</b></label>
              <fieldset>
                <Field type="text" name="name" id="name" placeholder="Name" autoComplete="on" />
                <ErrorMessage name="name" component="div" className="error-message" />
              </fieldset>
            </div>
            <div className="col-lg-6">
            <label><b>Surname</b></label>
              <fieldset>
                <Field type="text" name="surname" id="surname" placeholder="Surname" autoComplete="on" />
                <ErrorMessage name="surname" component="div" className="error-message" />
              </fieldset>
            </div>
            <div className="col-lg-12">
            <label><b>Email</b></label>
              <fieldset>
                <Field type="email" name="email" id="email" placeholder="Your Email" autoComplete="on" />
                <ErrorMessage name="email" component="div" className="error-message" />
              </fieldset>
            </div>
            <div className="col-lg-12">
            <label><b>Message</b></label>
              <fieldset>
                <Field as="textarea" name="message" id="message" placeholder="Message" />
                <ErrorMessage name="message" component="div" className="error-message" />
              </fieldset>
            </div>
            <div className="col-lg-12">
            {/* <label><b>Password</b></label> */}
              <fieldset>
                <button type="submit" id="form-submit" className="main-button" disabled={!formik.isValid}>Send Message</button>
              </fieldset>
            </div>
          </div>
          <div className="contact-dec">
            <img src={contactDecoration} alt="" />
          </div>
        </Form>
      )}
    </Formik>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default contact