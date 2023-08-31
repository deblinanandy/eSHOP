import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup"; // Import Yup for validation

const ValidationSchema = Yup.object().shape({
  fullname: Yup.string().required("Full name is required"),
  email: Yup.string().email("Invalid email address").required("Email is required"),
  phone: Yup.string().matches(/^\d+$/, "Invalid phone number"),
  website: Yup.string().url("Invalid website URL"),
  message: Yup.string().required("Message is required"),
});

function Contact() {
  const {
    handleSubmit,
    values,
    handleChange,
    errors,
    touched,
    handleBlur,
    resetForm,
  } = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      message: "",
      phone: "",
      website: "",
    },
    onSubmit: (values) => {
      console.log(values);
      alert("Message successfully sent!");
      resetForm();
    },
    validationSchema: ValidationSchema, // Attach the validation schema
  });

  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <h1 className="display-4">Contact us</h1>
        <div className="row">
          <div className="col">
            <div className="form-group my-2">
              <label className="">
                Name<span className="text-danger">*</span>
              </label>
              <input
                className="form-control"
                name="fullname"
                placeholder="Enter your name"
                value={values.fullname}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.fullname && touched.fullname ? (
                <div className="text-danger">{errors.fullname}</div>
              ) : null}
            </div>
          </div>
          <div className="col">
            <div className="form-group my-2">
              <label className="">
                Email<span className="text-danger">*</span>
              </label>
              <input
                autoComplete="none"
                className="form-control"
                name="email"
                placeholder="Enter your email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email ? (
                <div className="text-danger">{errors.email}</div>
              ) : null}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="form-group my-2">
              <label className="">Phone</label>
              <input
                autoComplete="none"
                type="tel"
                className="form-control"
                name="phone"
                placeholder="Enter your phone"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.phone && touched.phone ? (
                <div className="text-danger">{errors.phone}</div>
              ) : null}
            </div>
          </div>
          <div className="col">
            <div className="form-group my-2">
              <label className="">Website</label>
              <input
                autoComplete="none"
                className="form-control"
                name="website"
                placeholder="Enter your website"
                value={values.website}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.website && touched.website ? (
                <div className="text-danger">{errors.website}</div>
              ) : null}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label className="">
              Message<span className="text-danger">*</span>
            </label>
            <textarea
              cols="4"
              rows="5"
              className="form-control"
              name="message"
              placeholder="Enter your message"
              onChange={handleChange}
              value={values.message}
              onBlur={handleBlur}
            ></textarea>
            {errors.message && touched.message ? (
              <div className="text-danger">{errors.message}</div>
            ) : null}
          </div>
        </div>
        <div className="row">
          <small className="">* Required Field</small>
        </div>
        <div className="row">
          <div className="col">
            <button className="btn btn-dark my-2 w-25" type="submit">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Contact;
