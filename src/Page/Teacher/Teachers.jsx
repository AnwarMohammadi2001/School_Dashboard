import React from "react";
import { FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { BsAndroid2 } from "react-icons/bs";
import { RiLayoutFill } from "react-icons/ri";
import image from "../../assets/img.jpg";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { BsThreeDotsVertical } from "react-icons/bs";
import TeacherProfile from "./TeacherProfile";
import TeacherTable from "./TeacherTable";

const Teachers = () => {
  return (
    <div className="pb-5">
      {/* header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Teachers</h1>
      </div>
      {/* subject Card */}
      <div className="grid grid-cols-5 gap-x-5 ">
        <div className="col-span-4 gap-5 h-fit ">
          <div className="col-span-4 grid grid-cols-3 gap-5 h-fit ">
            <div className="bg-gray-300 col-span-1 flex px-5 flex-col items-center gap-5 justify-center rounded-md py-5 ">
              <div className="bg-gray-50 p-5 rounded-md">
                <FaHtml5 size={40} />
              </div>
              <div className="rounded-md text-center w-full bg-gray-50">
                <h1 className="px-8 py-1 text-xl font-semibold text-gray-700">
                  Web Development
                </h1>
              </div>
            </div>
            <div className="bg-gray-300 col-span-1 flex px-5 flex-col items-center gap-5 justify-center rounded-md py-5 ">
              <div className="bg-gray-50 p-5 rounded-md">
                <BsAndroid2 size={40} />
              </div>
              <div className="rounded-md w-full text-center bg-gray-50">
                <h1 className="px-8 py-1 text-xl font-semibold text-gray-700">
                  Android Development
                </h1>
              </div>
            </div>
            <div className="bg-gray-300 col-span-1 flex px-5 flex-col items-center gap-5 justify-center rounded-md py-5 ">
              <div className="bg-gray-50 p-5 rounded-md">
                <RiLayoutFill size={40} />
              </div>
              <div className="rounded-md w-full text-center bg-gray-50">
                <h1 className="px-8 py-1 text-xl font-semibold text-gray-700">
                  UI & UX
                </h1>
              </div>
            </div>
          </div>
          <TeacherTable />
        </div>

        <div className="col-span-1 bg-gray-300 rounded-md p-3 ">
          <TeacherProfile />
        </div>
      </div>
    </div>
  );
};

export default Teachers;
