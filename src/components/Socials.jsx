import React from 'react'
import Instagram from '../socialicons/instagram.png'
import Twitter from '../socialicons/twitter.png'
import LinkIn from '../socialicons/linkedin.png'
import GitHub from '../socialicons/github.png'

const Socials = () => {

    const social = [

        {
            id: 1,
            src: Instagram,
            title: 'Instagram',
            style: 'shadow-yellow-400',
            link: 'https://www.instagram.com/theharoldroyce/'

        },
        {
            id: 2,
            src: Twitter,
            title: 'Twitter',
            style: 'shadow-green-500',
            link: 'https://twitter.com/theharoldroyce'

        },
        {
            id: 3,
            src: LinkIn,
            title: 'LinkedIn',
            style: 'shadow-blue-500',
            link: 'https://www.linkedin.com/in/harold-royce-anonuevo-9929bb229/'

        },
        {
            id: 4,
            src: GitHub ,
            title: 'GitHub',
            style: 'shadow-gray-400',
            link: 'https://github.com/theharoldroyce'
        }
   
    ]
  return (
    <div
    name="socials"
    className="bg-[#09070A] text-[#EDECEC] w-full md:h-4/5"
  >
    <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-items-start h-4/5 w-full">
      <div className="pb-8">
        <p className="text-xl md:text-4xl font-bold inline border-b-4 border-gray-500">Social Media</p>
        <p className="py-6 ">Let's be Connected</p>
      </div>

      <div className='w-full grid grid-cols-2  md:grid-cols-4 lg:grid-cols-6 gap-8 text-center py-8 px-12 sm:px-0'>

      {
            social.map(({id, src, title, style, link}) => (
                <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                  <a href={link} target="_blank" rel="noopener noreferrer">
                     <img src={src} alt="/" className="w-10 mx-auto"/>
                     <p className='mt-4'>{title}</p>
                  </a>               
              </div>
            )
            )
         }


      </div>
    </div>
  </div>
  )
}

export default Socials