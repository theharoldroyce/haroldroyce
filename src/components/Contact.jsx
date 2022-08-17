import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-full bg-[#09070A] p-4 text-[#EDECEC]'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-items-start h-full w-full'>
            <div className='pb-8'>
                <p className="text-xl md:text-4xl font-bold inline border-b-4 border-gray-500">Contact</p>
                <p className="py-6">Get in touch with me</p>
            </div>

            <div className='flex justify-center items-center'>
                <form action='https://getform.io/f/75c75c46-f99c-4bec-805d-0170c2bff6d4'method="POST" className='flex flex-col w-full md:w-1/2'>
                    <input type='text' name='name' placeholder='Enter your Name' className='p-2 bg-transparent border-2 rounded-md text-[#EDECEC] focus:outline-none' />
                    <input type='text' name='email' placeholder='Enter your Email' className='my-4 p-2 bg-transparent border-2 rounded-md text-[#EDECEC] focus:outline-none' />
                    <textarea name='massage' rows='10' placeholder='Enter your Message' className='p-2 bg-transparent border-2 rounded-md text-[#EDECEC] focus:outline-none'></textarea>
                    <button className='text-[#EDECEC] bg-[#9B5642] px-6 py-3 my-8 mr-auto flex items-center rounded-md hover:scale-110 duration-300'>Let's talk</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact