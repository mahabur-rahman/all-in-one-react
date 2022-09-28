import React from "react";
import "./form.css";
import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
  name: "",
  email: "",
  channel: "",
};

const validate = (values) => {
  let errors = {};

  if (!values.name) {
    errors.name = "Required";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email format";
  }

  if (!values.channel) {
    errors.channel = "Required";
  }

  return errors;
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email format").required("Required"),
  channel: Yup.string().required("Required"),
});

const onSubmit = (values) => {
  console.log(values);
};

const YoutubeForm = () => {
  const formik = useFormik({
    initialValues,
    // validate,
    validationSchema,
    onSubmit,
  });

  return (
    <div className="container">
      <h1>Youtube Form</h1>

      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          onBlur={formik.handleBlur}
          type="text"
          id="name"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        {formik.touched.name && formik.errors.name ? (
          <span className="error">{formik.errors.name}</span>
        ) : null}

        <label htmlFor="email">Email</label>
        <input
          onBlur={formik.handleBlur}
          type="email"
          id="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />

        {formik.touched.email && formik.errors.email ? (
          <span className="error">{formik.errors.email}</span>
        ) : null}
        <label htmlFor="channel">Channel</label>
        <input
          onBlur={formik.handleBlur}
          type="text"
          id="channel"
          name="channel"
          value={formik.values.channel}
          onChange={formik.handleChange}
        />

        {formik.touched.channel && formik.errors.channel ? (
          <span className="error">{formik.errors.channel}</span>
        ) : null}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default YoutubeForm;
