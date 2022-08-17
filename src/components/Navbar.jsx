import React, { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-scroll';
const Navbar = () => {

const [nav, setNav] = useState(false);

const links = [
  {
    id: 1,
    link:'about'
  },
  {
    id: 2,
    link:'portfolio'
  },
  {
    id: 3,
    link:'experience'
  },
  {
    id: 4,
    link:'contact'
  },

]

const tohome = [
  {
    id: 1,
    link:'home'
  },
]

  return (
    <div className='flex justify-between items-center w-full h-20 px-4 bg-[#09070A] text-[#EDECEC] fixed top-0'>
        <div className='bg-[#09070A]'>
          {
            tohome.map(({id, link}) => (

            <Link to={link} smooth duration={500}> <h1 key={id} className='text-3xl text-[#EDECEC] text-bold font-right ml-2 cursor-pointer'>theharoldroyce.</h1> </Link>

            ))
          }
            
        </div>
        <ul className='hidden  md:flex'>
          {links.map(({id,link}) => (            
            <li key={id} className='px-4 cursor-pointer capitalize font-medium hover:scale-105 duration-200 text-[#9B5642] hover:text-[#EDECEC]'>
              <Link to={link} smooth duration={500}>{link}</Link>
            </li>
          ))}
        </ul>

        <div onClick={() => setNav(!nav)} 
        className='cursor-pointer pr-4 z-10 text-[#EDECEC] md:hidden'>
           {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

         {nav && (
          
        <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-[#09070A]'>
        {links.map(({id,link}) => (            
            <li key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl hover:text-[#9B5642]'>
              <Link onClick={() => setNav(!nav)} to={link} smooth duration={300}>{link}</Link>
            </li>
          ))}
        </ul>
 
         )}
    </div>
  )
}

export default Navbar