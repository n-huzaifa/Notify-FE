import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import axios from "axios";

const serverURI = "http://localhost:8000/api/auth/login";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const loginData = { email, password };
    axios
      .post(serverURI, loginData)
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error.message));
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
            <input
              type='submit'
              value='Submit'
              className='btn bg-primary border-none text-white font-medium mt-8 w-2/6 '
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
