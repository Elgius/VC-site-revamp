import React from 'react'
import Image from 'next/image'
import sample from '../public/assets/logo.png'

function courses() {

    const tech = [
        {
          id:1,
          src: sample,
          title: 'UWE courses',
          style: 'shadow-white',
        },
    ]

    return (
        <div className='bg-gradient-to-r from-cyan-200 to-blue-600 w-full md:h-screen'>
    
          <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-black'>
              <div>
    
                  <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>
                    Our Courses
                  </p>
    
                  <p className='py-6'>The Courses we offer here!</p>
                </div>
    
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                {
                  tech.map(({id, src,title,style})=>(
                    <div key={id}  className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                    <Image src={src} alt='' className='w-20 mx-auto' />
                    <p className='mt-4'>{title}</p>
                    </div>
                  ))}
    
              
            </div>
    
    
          </div>
    
    
        </div>
      )
}

export default courses