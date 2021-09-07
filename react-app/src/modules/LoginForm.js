import React, { useState } from 'react'
import { BrowserRouter, Redirect, Link } from 'react-router-dom'
import { Form } from 'react-bootstrap'
import './RegistForm.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import TodoImage from '../assets/img/undraw_To_do_list_re_9nt7.svg'
import validate from './validateLogin'

const RegistForm = () => {
  const [values, setValue] = useState({
    email: '',
    password: ''
  })
  const [errors, setErrors] = useState({})
  const [redirected, setRedirected] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setValue({
      ...values,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setErrors(validate(values))
    // if (Object.keys(errors).length === 0) {
    //   console.log('berjalan');
    //   setRedirected(true)
    // }
  }

  if (redirected) {
    return (
      <BrowserRouter>
        <Redirect to="/dashboard" />
      </BrowserRouter>
    )
  }

  return (
    <BrowserRouter>
      <div className="container-local">
        <div className="wrapping">
          <Form className="form" onSubmit={handleSubmit}>
            <div className="form-title">
              <h3>TODO List App</h3>
              <h3>Sign In</h3>
            </div>
            <div className="form-wrap mb-2">
              <label className="mb-1" htmlFor="email">Email address</label>
              <input 
                className="form-input" 
                type="text" 
                name="email" 
                placeholder="Enter email address" 
                value={values.email}
                onChange={handleChange}
              />
              { errors.email && <small className="text-error">{errors.email}</small> }
            </div>
            <div className="form-wrap mb-3">
              <label className="mb-1" htmlFor="password">Password</label>
              <input 
                className="form-input" 
                type="password" 
                name="password" 
                placeholder="Type your password" 
                value={values.password}
                onChange={handleChange}
              />
              { errors.password && <small className="text-error">{errors.password}</small> }
            </div>
            <Link to="/forgot-password">Forgot password?</Link>
            <button className="btn1 mt-3 mb-3" type="submit">Sign Up</button>
            <p className="text-center">Don't have account? <Link to="/register">Sign Up</Link></p>
          </Form>
          <div className="information">
            <img src={TodoImage} alt="todo list" />
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default RegistForm;