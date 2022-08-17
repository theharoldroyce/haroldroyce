import React from 'react'
import HomeIcon from '../assests/code.jpg'



const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-[#09070A] text-[#EDECEC] mt-2">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
      <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
            <div className='flex flex-col justify-center p-4'>
                <h1 className='text-xl md:text-4xl font-bold font-popin'>Hi I'm Harold Royce</h1>
                <p className='text-base md:text-2xl font-semibold font-popin py-3'>Web Developer</p>
                <p className='text-base md:text-xl font-semibold font-popin'>Building Vision.<span className='text-[#9B5642]'> Creating Reality.</span></p>
            </div>
            <img className='w-[500px] p-4 mx-auto my-4 rounded-2xl' src={HomeIcon} alt='/' />
        </div>
      </div>
  </div>
  )
}

export default Home