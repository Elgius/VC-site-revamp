import React from 'react'
import Image from 'next/image'
import logo from '../public/assets/logo.png'
import { BiMenu } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'
import { useState } from 'react'

function navbar() {

    const [nav, setNav] = useState(false)

  return (
    <nav className='p-5 bg-white shadow md:flex md:items-center md:justify-between '>
        <div className='flex justify-between items-center'>
            <span className='text-2xl font-sans cursor-pointer'>
                <Image className='h-10 inline w-12' src={logo} alt="logo" />
            </span>

            <span className='text-3xl cursor-pointer md:hidden block'>
                <BiMenu name='menu' onClick={Menu(this)} />
            </span>

        </div>

        

        <ul className='md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500'>
            <li className='mx-4 my-6 md:my-0  '>
                <a href='#' className='text-xl capitalize hover:text-cyan-400 duration-500'>About Us</a>
            </li>
            <li className='mx-4 my-6 md:my-0 '>
                <a href='#' className='text-xl capitalize hover:text-cyan-400 duration-500'>Programmes</a>
            </li>
            <li className='mx-4 my-6 md:my-0 '>
                <a href='#' className='text-xl capitalize hover:text-cyan-400 duration-500'>Students</a>
            </li>

            <li className='mx-4 my-6 md:my-0 '>
                <a href='#' className='text-xl capitalize hover:text-cyan-400 duration-500'>Research</a>
            </li>
            <li className='mx-4 my-6 md:my-0 '>
                <a href='#' className='text-xl capitalize hover:text-cyan-400 duration-500'>Community</a>
            </li>
            <li className='mx-4 my-6 md:my-0 '>
                <a href='#' className='text-xl capitalize hover:text-cyan-400 duration-500'>Media</a>
            </li>
            <li className='mx-4 my-6 md:my-0 '>
                <a href='#' className='text-xl capitalize hover:text-cyan-400 duration-500'>Careers</a>
            </li>

            <button className='bg-blue-400 text-white font-sans duration-500 px-6 py-2 mx-4 hover:bg-cyan-400 rounded'>
                Login
            </button>


        </ul>
    </nav>
  )
}

export default navbar