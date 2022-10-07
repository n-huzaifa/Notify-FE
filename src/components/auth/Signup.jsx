import React from "react";
import Footer from "../Footer";

function Signup() {
  return (
    <div className='flex flex-col items-center justify-center h-screen font-poppins text-white'>
      <form>
        <div className=' w-96 p-6'>
          <div className='flex item-center justify-center mb-8'>
            <span className=' text-2xl font-extralight'>
              Signup to <span className='font-medium'>Notify</span>
            </span>
          </div>
          <div className='flex space-x-2'>
            <div className='flex flex-col'>
              <label htmlFor='firstname' className='label'>
                Firstname
              </label>
              <input
                id='firstname'
                type='text'
                placeholder='John'
                className='input w-full max-w-xs'
              />
            </div>
            <div className='flex flex-col'>
              <label htmlFor='lastname' className='label'>
                Lastname
              </label>
              <input
                id='lastname'
                type='text'
                placeholder='Doe'
                className='input w-full '
              />
            </div>
          </div>
          <label htmlFor='email' className='label'>
            Email
          </label>
          <input
            id='email'
            type='email'
            placeholder='JohnDoe@example.com'
            className='input w-full '
          />
          <label htmlFor='password' className='label'>
            Password
          </label>
          <input
            id='password'
            type='password'
            placeholder='foobar123'
            className='input w-full'
          />
          <div className='flex flex-col justify-center items-center space-y-2'>
            <input
              type='submit'
              value='Submit'
              className='btn bg-primary border-none text-white font-medium mt-8 w-2/6 '
            />
            <span className='text-sm font-light text-center'>
              Already have an account ?
              <a href='https://google.com' className='text-primary'>
                {" "}
                Login
              </a>
            </span>
          </div>
        </div>
      </form>
      <Footer />
    </div>
  );
}

export default Signup;
