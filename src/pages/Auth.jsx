import React from "react";
import Footer from "../components/Footer";

function Auth() {
  return (
    <div className='flex flex-col items-center justify-center h-screen font-poppins text-white'>
      <form>
        <div className=' w-96 p-6'>
          <div className='flex item-center justify-center mb-8'>
            <span className=' text-2xl font-extralight'>
              Welcome to <span className='font-medium'>Notify</span>
            </span>
          </div>
        </div>
      </form>
      <Footer />
    </div>
  );
}

export default Auth;
