import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import axios from "axios";

const serverURI = "http://localhost:8000/api/auth/login";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();

  const submitHandler = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setError({ message: "Fill all the required fields" });
      return;
    }
    const loginData = { email, password };
    axios
      .post(serverURI, loginData)
      .then((res) => {
        console.log(res.data);
        setError("");
      })
      .catch((error) => {
        setError({ message: error.response.data });
        console.log(error.response);
      });
  };

  return (
    <div className='flex flex-col items-center justify-center h-screen font-poppins text-white'>
      <form onSubmit={submitHandler}>
        <div className=' w-96 p-6'>
          <div className='flex item-center justify-center mb-8'>
            <span className=' text-2xl font-extralight'>
              Login to <span className='font-medium'>Notify</span>
            </span>
          </div>
          <label htmlFor='login-email' className='label'>
            Email
          </label>
          <input
            id='login-email'
            type='email'
            placeholder='foo@bar.com'
            className='input w-full max-w-xs'
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor='login-password' className='label'>
            Password
          </label>
          <input
            id='login-password'
            type='password'
            placeholder='foobar123'
            className='input w-full max-w-xs'
            onChange={(e) => setPassword(e.target.value)}
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
            <input
              type='submit'
              value='Submit'
              className='btn bg-primary bg-opacity-20 hover:bg-primary border-none text-white font-medium mt-8 w-2/6 '
            />
            <span className='text-sm font-light text-center'>
              Don't have an account ?
              <Link to='/signup' className='text-primary'>
                {" "}
                Signup
              </Link>
            </span>
          </div>
        </div>
      </form>
      <Footer />
    </div>
  );
}

export default Login;
