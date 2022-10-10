import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <>
      <div className=' text-white h-screen flex flex-col items-center justify-center font-poppins space-y-7'>
        <span className='text-2xl'>This page doesn't exist</span>
        <span className='text-4xl font-medium'>404</span>
        <Link
          to='/'
          className='absolute bottom-10 text-primary text-sm font-semibold'>
          Go back.
        </Link>
      </div>
    </>
  );
}

export default PageNotFound;
