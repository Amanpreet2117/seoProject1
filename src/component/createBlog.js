"use client"
import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
const createBlog = () => {
  return (
    <div>
      <div>
        <div>
          <div id="contact" class="contact-us section">
            <div class="container">
              <div class="row">
                <div
                  class="col-lg-6 align-self-center wow fadeInLeft"
                  data-wow-duration="0.5s"
                  data-wow-delay="0.25s"
                >
                  <div class="section-heading">
                    <h2>Add a new blog post</h2>
                    <p>
                      Welcome! Please fill out the form below to add a new blog
                      post.
                    </p>
                    {/* <!-- <div class="phone-info">
                                <h4>For any enquiry, Call Us: <span><i class="fa fa-phone"></i> <a href="#">010-020-0340</a></span></h4>
                            </div> --> */}
                  </div>
                </div>
                <div
                  class="col-lg-6 wow fadeInRight"
                  data-wow-duration="0.5s"
                  data-wow-delay="0.25s"
                >
                   <Formik
      initialValues={{
        title: '',
        author: '',
        content: '',
        image: null
      }}
      validationSchema={Yup.object({
        title: Yup.string()
          .required('Title is required'),
        author: Yup.string()
          .required('Author is required'),
        content: Yup.string()
          .required('Content is required')
      })}
      onSubmit={(values, { resetForm }) => {
        // Handle form submission here
        console.log(values);
        resetForm();
      }}
    >
      {formik => (
        <Form id="contact">
          <div className="row">
            <div className="col-lg-6">
              <label>
                <b>Blog Title</b>
              </label>
              <fieldset>
                <Field type="text" name="title" id="title" placeholder="Enter blog title" autoComplete="on" />
                <ErrorMessage name="title" component="div" className="error-message" />
              </fieldset>
            </div>
            <div className="col-lg-6">
              <label>
                <b>Author</b>
              </label>
              <fieldset>
                <Field type="text" name="author" id="author" placeholder="Enter author name" autoComplete="on" />
                <ErrorMessage name="author" component="div" className="error-message" />
              </fieldset>
            </div>
            <div className="col-lg-12">
              <label>
                <b>Content</b>
              </label>
              <fieldset>
                <Field as="textarea" name="content" id="content" placeholder="Enter blog content" />
                <ErrorMessage name="content" component="div" className="error-message" />
              </fieldset>
            </div>
            <div>
              <label>
                <b>Add image</b>
                <input type="file" className="hide-element" onChange={(event) => formik.setFieldValue("image", event.currentTarget.files[0])} />
              </label>
            </div>
            <div className="col-lg-12">
              <label>
                <b></b>
              </label>
              <fieldset>
                <button type="submit" id="form-submit" className="main-button" disabled={!formik.isValid}>Add Blog</button>
              </fieldset>
            </div>
          </div>
          <div className="contact-dec">
            {/* <!-- <Image src={contactDecoration} alt=""/> --> */}
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
    </div>
  );
};

export default createBlog;
