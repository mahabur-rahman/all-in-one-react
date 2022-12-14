import React from "react";
import "./form.css";
import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
  name: "",
  email: "",
  channel: "",
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
          {...formik.getFieldProps("name")}
        />
        {formik.touched.name && formik.errors.name ? (
          <span className="error">{formik.errors.name}</span>
        ) : null}

        <label htmlFor="email">Email</label>
        <input
          onBlur={formik.handleBlur}
          type="email"
          id="email"
          {...formik.getFieldProps("email")}
        />

        {formik.touched.email && formik.errors.email ? (
          <span className="error">{formik.errors.email}</span>
        ) : null}
        <label htmlFor="channel">Channel</label>
        <input
          onBlur={formik.handleBlur}
          type="text"
          id="channel"
          {...formik.getFieldProps("channel")}
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
