import React from "react";

const Certificate = () => {
  const certifi = [
    {
      id: 1,
      title: " Firebase Cloud Store",
      date: "August 01, 2022",
      sub: "Department of Information and Communications Technology",
      link: "https://drive.google.com/file/d/1NJdyotsZiZ0o_A8zknUfqDrb2kqg2IEx/view?usp=sharing",
      style: "shadow-[#5F5654]",
    },
    {
      id: 2,
      title: "In-depth Cybersecurity Training",
      date: "June 27-29, 2022",
      sub: "Department of Information and Communications Technology",
      link: "https://drive.google.com/file/d/1YGQpI0GY26JlceoyB8f5hgTdlJsYMrer/view?usp=sharing",
      style: "shadow-[#5F5654]",
    },
    {
      id: 3,
      title: "Introduction to Computer Networking",
      date: "June 30, 2022",
      sub: "Department of Information and Communications Technology",
      link: "https://drive.google.com/file/d/1PzNQO1sdDzpxvJMxyf6lzVvp-uzsfAYz/view?usp=sharing",
      style: "shadow-[#5F5654]",
    },
    {
      id: 4,
      title: "Introduction to HTML & CSS",
      date: "June 06, 2022",
      sub: "Department of Information and Communications Technology",
      link: "https://drive.google.com/file/d/12XuuX2kAZhbyXd2LD5wfVG1OH-0kORPo/view?usp=sharing",
      style: "shadow-[#5F5654]",
    },
    {
      id: 5,
      title: "UI/UX Fundamentals",
      date: "June 22, 2022",
      sub: "Department of Information and Communications Technology",
      link: "https://drive.google.com/file/d/1VwJA5e33ibHj_W7UwRh-53bKEnf4n9XZ/view?usp=sharing",
      style: "shadow-[#5F5654]",
    },
    {
      id: 6,
      title: "Web Development using WordPress",
      date: "April 27, 2022",
      sub: "Department of Information and Communications Technology",
      link: "https://drive.google.com/file/d/1vkbZl3_B4MTEVo8FVO5e_1P57DqDcVD7/view?usp=sharing",
      style: "shadow-[#5F5654]",
    },
    {
      id: 7,
      title:
        "Accelerate Application Development & Deployment with Flutter and AWS Amplify",
      date: "May 05, 2022",
      sub: "Edukasyon.ph Co-presented by AWS Siklab Pilipinas ",
      link: "https://drive.google.com/file/d/1TGGMRRWD3XR8_RjFCGMXRRXk159Ayi0d/view?usp=sharing",
      style: "shadow-[#5F5654]",
    },
    {
      id: 8,
      title: "Game Development Backend Database using AWS",
      date: "May 06, 2022",
      sub: "CyberCraft Ph Edukasyon.ph  AWS Siklab Pilipinas",
      link: "https://drive.google.com/file/d/1urb7y7c8hOzF48tsO5R8YxLolnKv8GEa/view?usp=sharing",
      style: "shadow-[#5F5654]",
    },
    {
      id: 9,
      title: "Hacking And Penetration Testing",
      date: "May 11, 2022",
      sub: "sixDELTA Division of MVSoftech",
      link: "https://drive.google.com/file/d/1SP3d7EpQAGWxjgm6Zl6FU8npAYnt-F6A/view?usp=sharing",
      style: "shadow-[#5F5654]",
    },
    {
      id: 10,
      title: "Serverless All The Things",
      date: "May 19, 2022",
      sub: "Edukasyon.ph AWS Siklab Pilipinas",
      link: "https://drive.google.com/file/d/17efmVsuhzjLpQj2ZLbyOLvsezGOq0Vi-/view?usp=sharing",
      style: "shadow-[#5F5654]",
    },
    {
      id: 11,
      title: "Foundation of Computer Emergency Response Team (CERT) Operatrion",
      date: "May 20, 2022",
      sub: "Department of Information and Communications Technology",
      link: "https://drive.google.com/file/d/1iIPno-hPNNRcJFZktngelPnB8L5Ftmf4/view?usp=sharing",
      style: "shadow-[#5F5654]",
    },
  ];
  return (

    <div
      name="certificates"
      className="w-full h-full bg-[#09070A] text-[#EDECEC]"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Certificates
          </p>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {certifi.map(({ id, title, date, sub, style, link }) => (
            <div
              key={id}
              className={`shadow-lg hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <p className="mt-2 font-semibold text-xs">{title}</p>
              <p className="mt-2 font-semibold text-xs">{date}</p>
              <p className="mt-2 font-semibold text-xs">{sub}</p>
              <a href={link} target="_blank" rel="noopener noreferrer">
                <button className="mt-2 p-2 rounded-md text-xs duration-200 hover:scale-105 hover:text-[#9B5642] bg-[#9B5642] hover:bg-[#EDECEC]">
                  View Certificate
                </button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificate;
