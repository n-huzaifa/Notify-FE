import React from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { FiUserCheck, FiUserPlus } from "react-icons/fi";

function home() {
  return (
    <div className='flex flex-col items-center justify-center h-screen font-poppins text-white'>
      <form>
        <div className=' w-80 p-6'>
          <div className='flex flex-col item-center justify-center mb-8 text-center  space-y-10'>
            <span className=' text-2xl font-extralight'>
              Welcome to <span className='font-medium'>Notify</span>
            </span>
            <div className='flex flex-col w-full space-y-3'>
              <Link
                to='login'
                className='btn text-white bg-primary border-0 justify-center space-x-3 flex'>
                <FiUserCheck className='text-xl' />
                <span>Login</span>
              </Link>
              <Link
                to='signup'
                className='btn text-white bg-primary border-0 justify-center space-x-3 flex'>
                <FiUserPlus className='text-xl' />
                <span> Signup</span>
              </Link>
            </div>
          </div>
        </div>
      </form>
      <Footer />
    </div>
  );
}

export default home;
