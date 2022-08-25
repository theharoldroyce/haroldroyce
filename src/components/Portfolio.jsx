import React from 'react'
import One from '../assests/one.png'
import Two from '../assests/two.png'
import Three from '../assests/three.png'



const Portfolio = () => {
   
    const Portfolios = [
        {
            id: 1,
            src: One,
            link1: 'http://haroldroyce.ml/?i=1',
            title: 'Resume Website',
            
        },
        {
            id: 2,
            src: Two,
            link1: 'https://responsive-navigation-8cd10.web.app/',
            link2: 'https://github.com/theharoldroyce/responsive-navigation/tree/main/src',
            title: 'Responsive Navigation bar',
        },
        {
            id: 3,
            src: Three,
            link1: 'https://signin-sigup-form.web.app/',
            link2: 'https://github.com/theharoldroyce/signin-signup-form/tree/main/src',
            title: 'Sign In & Sign Up Responsive form',
        },

    ]


  return (
    <div name='portfolio' className='bg-[#09070A] text-[#EDECEC] w-full  h-full md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center h-full w-full'>
            <div>
                <p className='text-xl md:text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className="py-6 ">My Example Projects</p>
            </div>



            <div className='grid w-full sm:grid-cols-2 md:grid-cols-3 gap-8 py-8 px-12 sm:px-0 '>
            {
                Portfolios.map(({id,src,link1,link2,title}) => (
                 <div key={id} className='shadow-md shadow-[#9C897B] rounded-lg duration-200 hover:scale-105'>
                     <div className=''>
                        <img src={src} alt='/' className='rounded-md ' />
                     </div>
                      <div className='flex items-center justify-center'>
                        <p className='mt-4 font-semibold text-[#9B5642]'>{title}</p>
                      </div>
                      <div className='flex items-center justify-center'>
                      <a href={link1} target="_blank" rel="noopener noreferrer">
                        <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:text-[#9B5642]'>Demo</button>
                      </a>
                      <a href={link2} target="_blank" rel="noopener noreferrer">
                        <button className='w-1/2 px-6 py-2 m-4 duration-200 hover:scale-105 hover:text-[#9B5642]'>Code</button>
                      </a>
                      </div>
                 </div>                   
                ))
            }
            </div>
        </div>
    </div>
  )
}

export default Portfolio