import React from 'react'

const Experience = () => {

    const experi = [
        {
            id: 1,
            title:'2023 - Graduation',
            sub: 'City Colege of Calpan',
            style: 'shadow-[#5F5654]',
            desc: 'Bachelor`s degree in Information System.'
        },
        {
          id: 2,
          title:'2022 - Internship',
          sub: 'MvSoftech',
          style: 'shadow-[#5F5654]',
          desc:'Performed software development tasks, assisted in the design and architecture of software applications, and communicated closely with senior software engineers.'
      },

    ]
   
  return (
    <div name="experience" className="bg-[#09070A] text-[#EDECEC] w-full h-screen ">
    <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center h-full w-full">
      <div className="pb-8">
        <p className="text-xl md:text-4xl font-bold inline border-b-4 border-gray-500 ">
           Experience
        </p>
        <p className="py-6 "></p>
      </div>

      <div className='w-full grid grid-cols-1  md:grid-cols-2 gap-8 text-center py-8 px-12 sm:px-0'>

        {experi.map(({id, title, sub, style, desc}) => (
            <div key={id} className={`shadow-lg hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
              <p className='mt-4 font-semibold text-xl'>{title}</p>
              <p className='mt-4 font-semibold text-xl'>{sub}</p>
              <p className='mt-4'>{desc}</p>              
            </div>
         ))}
      </div>
    </div>
  </div>
  )
}

export default Experience