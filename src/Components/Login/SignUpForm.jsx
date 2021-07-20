import React from 'react';
import { useFormik } from 'formik';
import { useState, useEffect } from 'react';

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

  if (!values.username) {
    errors.username = 'Required';
    // } else if (values.username.length < ) {
    //   errors.username = 'Username must have at least 5 characters';
  }

  if (!values.bio) {
    errors.bio = 'Required';
  } else if (values.bio.length < 30) {
    errors.bio = 'Your bio must have at least 30 characters';
  }

  return errors;
};

const SignupForm = () => {
  const [newUserToken, setNewToken] = useState('')
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
      createUser(values, ' <<<<<< inside Signupform on submit')
    },
  });

  const createUser = async (values) => {
    try {
      let response = await fetch('https://striveschool-api.herokuapp.com/api/account/register', {
        method: 'POST',
        headers: {
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNWYwNmIzNTgxNzAwMTVjMjI3MDUiLCJpYXQiOjE2MjYyNzAyMjMsImV4cCI6MTYyNzQ3OTgyM30.0IcvG8-Zqf633mRWGCRlzG5yDVI6njZjZGZzJfuGulw",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(values)

      })
      if (response.ok) {
        let dataRequested = await response.json()
        setNewToken(dataRequested.access_token)
        alert('userCreated')

      } else {
        alert('User not created')
      }
    } catch (e) {
      return e
    }
  }

  const getLoggedUser = async () => {
    try {
      let response = await fetch('https://striveschool-api.herokuapp.com/api/profile/me', {
        method: 'Get',
        headers: {
          "Authorization": "Bearer" + newUserToken,
        }
      })
      let dataRequested = await response.json()
      console.log(dataRequested, 'Meeeeeeeeeee')
    } catch (e) {
      return e
    }
  }
  useEffect(()=> getLoggedUser,[newUserToken])
  


  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">First Name</label>
        <input
          id="name"
          className="form-control"
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
      </div>
      <div className="form-group">
        <label htmlFor="surname">Last Name</label>
        <input
          id="surname"
          className="form-control"
          name="surname"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.surname}
        />
        {formik.touched.surname && formik.errors.surname ? (
          <div>{formik.errors.surname}</div>
        ) : null}
      </div>

      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          className="form-control"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          className="form-control"
          name="password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <div>{formik.errors.password}</div>
        ) : null}
      </div>

      <div className="form-group">
        <label htmlFor="area">City, Country</label>
        <input
          id="area"
          className="form-control"
          name="area"
          type="area"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.area}
        />
        {formik.touched.area && formik.errors.area ? (
          <div>{formik.errors.area}</div>
        ) : null}
      </div>

      <div className="form-group">
        <label htmlFor="title">Job Title</label>
        <input
          id="title"
          className="form-control"
          name="title"
          type="title"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.title}
        />
        {formik.touched.title && formik.errors.title ? (
          <div>{formik.errors.title}</div>
        ) : null}
      </div>

      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          id="username"
          className="form-control"
          name="username"
          type="username"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.username}
        />
        {formik.touched.username && formik.errors.username ? (
          <div>{formik.errors.username}</div>
        ) : null}
      </div>

      <div className="form-group">
        <label htmlFor="bio">Bio</label>
        <textarea
          id="bio"
          className="form-control"
          name="bio"
          type="bio"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.bio}
        />
        {formik.touched.bio && formik.errors.bio ? (
          <div>{formik.errors.bio}</div>
        ) : null}
      </div>




      <button type="submit" className="btn btn-success my-5 btn-large w-100">Submit</button>
    </form>
  );
};

export default SignupForm