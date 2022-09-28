import React from "react";
import "./form.css";
import { useFormik } from "formik";

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

const onSubmit = (values) => {
  console.log(values);
};

const YoutubeForm = () => {
  const formik = useFormik({
    initialValues,
    validate,
    onSubmit,
  });

  return (
    <div className="container">
      <h1>Youtube Form</h1>

      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        {formik.errors.name ? (
          <span className="error">{formik.errors.name}</span>
        ) : null}

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />

        {formik.errors.email ? (
          <span className="error">{formik.errors.email}</span>
        ) : null}
        <label htmlFor="channel">Channel</label>
        <input
          type="text"
          id="channel"
          name="channel"
          value={formik.values.channel}
          onChange={formik.handleChange}
        />

        {formik.errors.channel ? (
          <span className="error">{formik.errors.channel}</span>
        ) : null}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default YoutubeForm;
