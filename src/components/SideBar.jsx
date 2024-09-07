import React, { useState } from "react";
import { IoSchool } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { MdClass } from "react-icons/md";
import { FaClipboardList } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";
import { AiOutlinePieChart } from "react-icons/ai";
import { AiOutlineCalendar } from "react-icons/ai";
import { PiChalkboardTeacher } from "react-icons/pi";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { Link } from "react-router-dom";
const navItems = [
  { id: 1, name: "Dashboard", path: "/", icon: <MdDashboard /> },
  { id: 1, name: "Students ", path: "/students", icon: <PiStudentBold /> },
  {
    id: 2,
    name: "Teachers ",
    path: "/teachers",
    icon: <PiChalkboardTeacher />,
  },
  { id: 3, name: "Classes ", path: "/classes", icon: <MdClass /> },
  {
    id: 4,
    name: "Attendance ",
    path: "/attendance",
    icon: <FaClipboardList />,
  },
  { id: 5, name: "Subjects", path: "/subjects", icon: <FaFileAlt /> },
  { id: 6, name: "Exams & Results", path: "/examresult", icon: <FaFileAlt /> },
  {
    id: 7,
    name: "Time Table ",
    path: "/timetable",
    icon: <AiOutlineCalendar />,
  },
  {
    id: 8,
    name: "Fees & Payments ",
    path: "/feepayment",
    icon: <FaMoneyCheckAlt />,
  },
  { id: 9, name: "Library  ", path: "/library", icon: <FaBook /> },
  { id: 10, name: "Setting", path: "/setting", icon: <IoMdSettings /> },
];

const SideBar = () => {
  const [activeLink, setAcitveLink] = useState(0);
  const onChangeHandler = (index) => {
    setAcitveLink(index);
  };

  return (
    <div className="px-5 bg-blue-600 h-screen">
      <div className="md:py-5 py-2">
        {/* logo image */}
        <div className="flex items-center justify-center  gap-x-2">
          <IoSchool className=" text-white text-3xl  md:text-3xl" />
          <h1 className="text-black hidden md:flex text-2xl font-bold">
            Noor Danish
          </h1>
        </div>
        <div className="mt-4 md:mt-5">
          <ul className="space-y-3">
            {navItems.map((item, index) => (
              <li
                key={index}
                className={` py-2   rounded-md md:pl-4 hover:bg-gray-300 hover:text-black ${
                  activeLink === index ? "bg-gray-300 " : "hover:text-black"
                }`}
                onClick={() => onChangeHandler(index)}
              >
                <Link
                  to={item.path}
                  className="flex  justify-center md:justify-start"
                >
                  <p
                    className={`flex gap-x-4 items-center hover:text-black font-medium  ${
                      activeLink === index ? "text-black" : "text-white"
                    }  `}
                  >
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-md hidden md:flex">{item.name}</span>
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
