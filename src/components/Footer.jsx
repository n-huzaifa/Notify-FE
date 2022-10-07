import React from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className='absolute bottom-20 flex flex-col text-md space-y-2'>
      <span className='font-extralight text-sm'>
        developed by <span className='font-normal'>Noor ul Islam Huzaifa</span>
      </span>
      <div className='flex justify-center space-x-2'>
        <a href='https://twitter.com/Diple_me' className='text-2xl'>
          <FaTwitter />
        </a>
        <a href='https://github.com/n-huzaifa' className='text-2xl'>
          <FaGithub />
        </a>
        <a
          href='https://www.linkedin.com/in/noor-ul-islam-huzaifa-67505a201/'
          className='text-2xl'>
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
