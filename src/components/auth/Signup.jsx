import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import axios from "axios";

const serverURI = "http://localhost:8000/api/auth/signup";

function Signup() {
  const [error, setError] = useState();
  const [success, setSuccess] = useState("");
  const [signupForm, setSignupForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    setSignupForm({ ...signupForm, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      signupForm.first_name === "" ||
      signupForm.password === "" ||
      signupForm.email === "" ||
      signupForm.password === ""
    ) {
      setError({ message: "Fill all the fields" });
      return;
    }

    axios
      .post(serverURI, signupForm)
      .then((res) => {
        console.log(res.data);
        setSuccess("User Created Successfully");
        setError("");
      })
      .catch((error) => {
        setError({ message: error.response.data });
        console.log(error);
      });
  };

  return (
    <div className='flex flex-col items-center justify-center h-screen font-poppins text-white'>
      <form onSubmit={submitHandler}>
        <div className=' w-96 p-6'>
          <div className='flex item-center justify-center mb-8'>
            <span className=' text-2xl font-extralight'>
              Signup to <span className='font-medium'>Notify</span>
            </span>
          </div>
          <div className='flex space-x-2'>
            <div className='flex flex-col'>
              <label htmlFor='first_name' className='label'>
                Firstname
              </label>
              <input
                id='first_name'
                name='first_name'
                type='text'
                placeholder='John'
                className='input w-full max-w-xs'
                onChange={changeHandler}
              />
            </div>
            <div className='flex flex-col'>
              <label htmlFor='last_name' className='label'>
                Lastname
              </label>
              <input
                id='last_name'
                name='last_name'
                type='text'
                placeholder='Doe'
                className='input w-full '
                onChange={changeHandler}
              />
            </div>
          </div>
          <label htmlFor='email' className='label'>
            Email
          </label>
          <input
            id='email'
            name='email'
            type='email'
            placeholder='JohnDoe@example.com'
            className='input w-full '
            onChange={changeHandler}
          />
          <label htmlFor='password' className='label'>
            Password
          </label>
          <input
            id='password'
            name='password'
            type='password'
            placeholder='foobar123'
            className='input w-full'
            onChange={changeHandler}
          />
          <div className='flex flex-col justify-center items-center space-y-2'>
            {error ? (
              <div className='alert alert-error shadow-lg mt-4'>
                <div>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='stroke-current flex-shrink-0 h-6 w-6'
                    fill='none'
                    viewBox='0 0 24 24'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
                    />
                  </svg>
                  <span>{error.message}</span>
                </div>
              </div>
            ) : (
              ""
            )}
            {success ? (
              <div className='alert alert-success shadow-lg mt-4'>
                <div>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='stroke-current flex-shrink-0 h-6 w-6'
                    fill='none'
                    viewBox='0 0 24 24'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
                    />
                  </svg>
                  <span>{success}</span>
                </div>
              </div>
            ) : (
              ""
            )}
            <input
              type='submit'
              value='Submit'
              className='btn bg-primary bg-opacity-20 hover:bg-primary border-none text-white font-medium mt-8 w-2/6 '
            />
            <span className='text-sm font-light text-center'>
              Already have an account ?
              <Link to='/login' className='text-primary'>
                {" "}
                Login
              </Link>
            </span>
          </div>
        </div>
      </form>
      <Footer />
    </div>
  );
}

export default Signup;
