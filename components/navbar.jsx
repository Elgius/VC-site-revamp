import React from 'react'
import { FaBars, FaTimes} from "react-icons/fa"
import { HiOutlineMail } from 'react-icons/hi'
import {AiOutlineLogin} from 'react-icons/ai'
import { useState } from 'react';
import {Link} from 'react-scroll'
import Image from 'next/image';
import logo from '../public/assets/logo.png'


function navbar2() {
  const [nav, setNav] = useState(false);
  const links = [
      {
        id: 1,
        link: "About us",
      },
      {
        id: 2,
        link: "Programmes",
      },
      {
        id: 2,
        link: "Student life",
      },
      {
        id: 2,
        link: "Research",
      },
      {
        id: 2,
        link: "Community",
      },
      {
        id: 2,
        link: "Media",
      },
      {
        id: 2,
        link: "Careers",
      },

    ];



  return (
    
    <div className='flex justify-between items-center w-full h-20 shadow  text-black bg-gradient-to-r from-cyan-400 to-blue-600 px-4'>{/* temporarily removed position: fixed */}
        <div className='text-2xl font-sans cursor-pointer'>
        <Image className='h-10 inline w-12' src={logo} alt="logo" />
        </div>

        <ul className='hidden md:flex'>
        {links.map(({id, link})=> (
          <li
          key={id}
          className='px-4 cursor-pointer capitalize font-medium text-black hover:scale-105 duration-200'>
              <Link to={link} smooth duration={500}>
                  {link}
              </Link>
          </li>
        ))}
        </ul>

        <div onClick={()=> setNav(!nav)} className='cursor-pointer pr-4 z-10 text-cyan-100 md:hidden'>
            {nav ? <FaTimes size = {30}/> : <FaBars size={30}/>}
        </div>

        {nav && (
        <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-blue-300 text-black'>
          {links.map(({id,link})=>(
              <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl">
                  <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>
                      {link}
                  </Link>
              </li>
          ))}
        </ul>

        )}

<div className='hidden lg:flex flex-col top-[35%] left-0 fixed '>
      <ul>
          <li className='flex justify-between items-centcker w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] bg-cyan-300 hover:rounded-md duration-300'>
              <a href=''
              target="_blank"
              rel='noreferrer'
              className='flex justify-between items-center w-full text-white'>
                  <>
                  Contact us? <HiOutlineMail size={30} />
                  </>
              </a>
          </li>
          <li className='flex justify-between items-centcker w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] bg-cyan-300 hover:rounded-md duration-300'>
              <a href=''

              rel='noreferrer'
              className='flex justify-between items-center w-full text-white'>
                  <>
                  Log in?<AiOutlineLogin size={30} />
                  </>
              </a>
          </li>
      </ul>
  </div>



    </div>
  );
}

export default navbar2