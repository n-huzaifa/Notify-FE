import React from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className='absolute bottom-10 flex flex-col text-md space-y-4'>
      <span className='font-extralight text-xs'>
        developed by <span className='font-normal'>Noor ul Islam Huzaifa</span>
      </span>
      <div className='flex justify-center space-x-4'>
        <a
          href='https://twitter.com/Diple_me'
          className='text-2xl hover:text-blue-400 transition duration-300'>
          <FaTwitter />
        </a>
        <a
          href='https://github.com/n-huzaifa'
          className='text-2xl hover:text-gray-400 transition duration-300'>
          <FaGithub />
        </a>
        <a
          href='https://www.linkedin.com/in/noor-ul-islam-huzaifa-67505a201/'
          className='text-2xl hover:text-blue-400 transition duration-300'>
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
