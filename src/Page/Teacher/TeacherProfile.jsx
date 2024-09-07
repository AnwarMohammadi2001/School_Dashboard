import React from "react";
import { FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { BsAndroid2 } from "react-icons/bs";
import { RiLayoutFill } from "react-icons/ri";
import image from "../../assets/img.jpg";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { BsThreeDotsVertical } from "react-icons/bs";
const subitem = [
  {
    id: 1,
    title: "React.Js",
    icon: <FaReact size={30} />,
    link: "",
    hour: " 4 Houres",
  },
  {
    id: 2,
    title: "Html CSS",
    icon: <FaHtml5 size={30} />,
    link: "",
    hour: "2 Houres",
  },
  {
    id: 3,
    title: "JavaScript",
    icon: <IoLogoJavascript size={30} />,
    link: "",
    hour: "6 Houres",
  },
  {
    id: 4,
    title: "Node JS",
    icon: <FaNodeJs size={30} />,
    link: "",
    hour: "5 Houres",
  },
  {
    id: 5,
    title: "Tailwind CSS",
    icon: <RiTailwindCssFill size={30} />,
    link: "/",
    hour: "1.5 Houres",
  },
];
const TeacherProfile = () => {
  return (
    <div>
      <div className="px-10 py-5 text-center">
        <img src={image} alt="profile" className="rounded-full" />
        <h1 className="text-gray-900 font-bold mt-2 text-lg">Anwar Elham</h1>
        <h2 className="text-gray-600 text-md">Teacher</h2>
      </div>
      <div className="bg-gray-50 p-2 rounded-md">
        <ul className="flex flex-col gap-y-3">
          {subitem.map((item, index) => (
            <li className="rounded-md flex  justify-between items-center bg-gray-300 p-2">
              <div className="flex gap-x-2 items-center">
                <span className="rounded-full p-2 bg-gray-50">{item.icon}</span>
                <div>
                  <h1 className="text-gray-800 text-sm font-bold">
                    {item.title}
                  </h1>
                  <p className="text-gray-600 text-xs">{item.hour}</p>
                </div>
              </div>
              <button className="hover:text-gray-900">
                <BsThreeDotsVertical />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TeacherProfile;
