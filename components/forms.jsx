import React from 'react'

function forms() {

    function messsage(){
        return alert("This feature does not work for the moment")
    }



  return (
    <div className='h-full w-full bg-gradient-to-r from-cyan-200 to-blue-600'>
        <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 static md:static group'>
            <div className='w-full max-w-xs mx-auto my-auto'>
                <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
                    <div className='mb-4'>
                        <label className='block text-gray-700 texts-sm font-bold mb-2' for='username'>
                            Student ID
                        </label>
                        <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none' id='username' type='text' placeholder='Enter Student ID'></input>
                    </div>
                    <div className='mb-6'>
                        <label className='block text-gray-700 text-sm font-bold mb-2' for='password'>
                            Password
                        </label>
                        <input className='shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline' id='password' type='password' placeholder='Password'></input>
                        <p className='text-red-500 text-xs italic'>Please enter your password</p>
                    </div>
                    <div className='flex items-center justify-between'>
                        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type='button' onClick={messsage}>
                            Log in
                        </button>
                        <a className='inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800' href='#'>
                            Forgot Password?
                        </a>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default forms