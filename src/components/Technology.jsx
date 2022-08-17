import React from "react";
import Html from "../icons/html.png";
import Css from "../icons/css.png";
import JavaS from "../icons/javascript.png";
import ReactIcon from "../icons/react.png";
import Tail from "../icons/tailwind.png";
import Boot from "../icons/bootstrap.png";
import Wordp from "../icons/wordpress.png";
import FireB from "../icons/firebase.png";
import GitH from "../icons/github.png";
import Figma from "../icons/figma.png";
import AdobeXd from "../icons/xd.png";
import PhpIcon from "../icons/php.png";
import Cshrap from "../icons/csharp.png";
import Mysql from "../icons/mysql.png";

const Technology = () => {

    const techs = [
        {
            id: 1,
            src: Html,
            title: 'Html',
            style: 'shadow-orange-500'

        },
        {
            id: 2,
            src: Css,
            title: 'Css',
            style: 'shadow-blue-500'

        },
        {
            id: 3,
            src: JavaS,
            title: 'JavaScript',
            style: 'shadow-yellow-500'

        },
        {
            id: 4,
            src: ReactIcon,
            title: 'React.js',
            style: 'shadow-blue-500'

        },
        {
            id: 5,
            src: Tail,
            title: 'Tailwind',
            style: 'shadow-blue-500'

        },
        {
            id: 6,
            src: Boot,
            title: 'Bootstrap',
            style: 'shadow-indigo-500'

        },
        {
            id: 7,
            src: Wordp,
            title: 'WordPress',
            style: 'shadow-blue-500'

        },
        {
            id: 8,
            src: FireB,
            title: 'Firebase',
            style: 'shadow-yellow-500'

        },
        {
            id: 9,
            src: GitH,
            title: 'GitHub',
            style: 'shadow-gray-500'

        },
        {
            id: 10,
            src: PhpIcon,
            title: 'Php',
            style: 'shadow-indigo-500'

        },
        {
            id: 11,
            src: Cshrap,
            title: 'Cshrap',
            style: 'shadow-indigo-100'

        },
        {
            id: 12,
            src: Mysql,
            title: 'Mysql',
            style: 'shadow-green-200'

        },
        {
            id: 13,
            src: AdobeXd,
            title: 'Adobe XD',
            style: 'shadow-indigo-700'

        },
        {
            id: 14,
            src: Figma,
            title: 'Figma',
            style: 'shadow-orange-500'

        },
    ]
  return (
    <div
      name="tech"
      className="bg-[#09070A] text-[#EDECEC] w-full md:h-full"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-items-start h-full w-full">
        <div className="pb-8">
          <p className="text-xl md:text-4xl font-bold inline border-b-4 border-gray-500">
            Technology Stack
          </p>
          <p className="py-6 ">Most Technology i been using</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 text-center py-8 px-12 sm:px-0'>

         {
            techs.map(({id, src, title, style}) => (
                <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                <img src={src} alt="/" className="w-20 mx-auto"/>
                <p className='mt-4'>{title}</p>
              </div>
            )
            )
         }


        </div>
      </div>
    </div>
  );
};

export default Technology;
