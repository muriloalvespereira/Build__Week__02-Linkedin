import React from 'react';
import { useFormik } from 'formik';

const validate = values => {
  const errors = {};

  if (!values.name) {
    errors.name = 'Required';
  } else if (values.name.length > 15) {
    errors.name = 'Must be 15 characters or less';
  }

  if (!values.surname) {
    errors.surname = 'Required';
  } else if (values.surname.length > 20) {
    errors.surname = 'Must be 20 characters or less';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length < 8) {
    errors.password = 'Password must have at least 8 characters';
  }

  if (!values.area) {
    errors.area = 'Required';
  } else if (values.area.length < 3) {
    errors.area = 'Area must have at least 3 characters';
  }

  if (!values.title) {
    errors.title = 'Required';
  } else if (values.title.length < 5) {
    errors.title = 'Title must have at least 5 characters';
  }

  return errors;
};

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      surname: '',
      email: '',
      username: '',
      title: '',
      password: '',
      bio: '',
      area: '',
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  // const createUser = async () => {
  //   try {
  //     let response = await fetch('https://striveschool-api.herokuapp.com/api/account/register', {
  //       method: 'POST',
  //       headers: {
  //         "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNWYwNmIzNTgxNzAwMTVjMjI3MDUiLCJpYXQiOjE2MjYyNzAyMjMsImV4cCI6MTYyNzQ3OTgyM30.0IcvG8-Zqf633mRWGCRlzG5yDVI6njZjZGZzJfuGulw",
  //         "Content-Type": "application/json"
  //       },
  //       body: JSON.stringify(body)

  //     })
  //     let dataRequested = await response.json()
  //     console.log(sent)
  //   } catch (e) {
  //     return e
  //   }
  // }

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="name">First Name</label>
      <input
        id="name"
        name="name"
        type="text"
        {...formik.getFieldProps('name')}

        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
      />
      {formik.touched.name && formik.errors.name ? (
        <div>{formik.errors.name}</div>
      ) : null}

      <label htmlFor="surname">Last Name</label>
      <input
        id="surname"
        name="surname"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.surname}
      />
      {formik.touched.surname && formik.errors.surname ? (
        <div>{formik.errors.surname}</div>
      ) : null}

      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}

      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
      />
      {formik.touched.password && formik.errors.password ? (
        <div>{formik.errors.password}</div>
      ) : null}

      <label htmlFor="area">Area</label>
      <input
        id="area"
        name="area"
        type="area"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.area}
      />
      {formik.touched.area && formik.errors.area ? (
        <div>{formik.errors.area}</div>
      ) : null}

      <label htmlFor="title">Job Title</label>
      <input
        id="title"
        name="title"
        type="title"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.title}
      />
      {formik.touched.title && formik.errors.title ? (
        <div>{formik.errors.title}</div>
      ) : null}

      {/* Btn */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default SignupForm


// bio: "I love breads"
// title: "wanna be a baker"
// username: "random"






//  area: "Breadland"
// password: "nope123"
// surname: "testtttt"
// email: "tesddft@gmail.com"
// name: "testt"