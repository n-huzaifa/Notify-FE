import React from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { BsPencil, BsArrowRightShort } from "react-icons/bs";

function Home() {
  return (
    <div className='flex flex-col items-center justify-center h-screen font-poppins text-white bg-dark'>
      <div className='w-80 p-6 flex flex-col item-center justify-center mb-8 text-center  space-y-10'>
        <span className=' text-2xl font-extralight'>
          Welcome to <span className='font-medium'>Notify</span>
        </span>
        <div className='flex flex-col w-full space-y-3'>
          <Link
            to='new'
            className='btn text-white bg-primary hover:bg-opacity-20  border-0 justify-center space-x-3 flex'>
            <BsPencil className='text-xl' />
            <span> New Note</span>
          </Link>
          <Link
            to='browse'
            className='flex justify-center hover:text-blue-200 duration-200'>
            Browse other notes
            <BsArrowRightShort className='text-2xl' />
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
