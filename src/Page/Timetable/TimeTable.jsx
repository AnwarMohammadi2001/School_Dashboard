import React, { useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const TimeTable = () => {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const periods = [
    "08:00 - 09:00",
    "09:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
  ];

  // Sample data for timetables (could come from a database)
  const [timetable, setTimetable] = useState({
    Monday: {
      "08:00 - 09:00": { subject: "Math", teacher: "Mr. Smith", room: "101" },
      "09:00 - 10:00": {
        subject: "English",
        teacher: "Ms. Johnson",
        room: "102",
      },
      "10:00 - 11:00": {
        subject: "Science",
        teacher: "Dr. Brown",
        room: "103",
      },
    },
    Tuesday: {
      "08:00 - 09:00": { subject: "Math", teacher: "Mr. Smith", room: "101" },
      "09:00 - 10:00": {
        subject: "History",
        teacher: "Ms. Clark",
        room: "104",
      },
    },
    // More data for other days
  });

  const handleEdit = (day, time) => {
    // Handle editing the timetable entry
    console.log(`Edit class on ${day} at ${time}`);
  };

  const handleDelete = (day, time) => {
    // Handle deleting the timetable entry
    console.log(`Delete class on ${day} at ${time}`);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Timetable Management
      </h1>
      <div className="grid grid-cols-6 gap-4">
        <div className="col-span-1 text-center font-bold text-gray-600">
          Time
        </div>
        {days.map((day) => (
          <div
            key={day}
            className="col-span-1 text-center font-bold text-gray-600"
          >
            {day}
          </div>
        ))}
      </div>

      {periods.map((period) => (
        <div className="grid grid-cols-6 gap-4 mt-4" key={period}>
          <div className="col-span-1 text-center font-bold text-gray-800">
            {period}
          </div>
          {days.map((day) => (
            <div
              key={day}
              className="col-span-1 bg-gray-100 p-4 rounded-lg text-center shadow-sm"
            >
              {timetable[day] && timetable[day][period] ? (
                <div>
                  <p className="font-semibold">
                    {timetable[day][period].subject}
                  </p>
                  <p className="text-sm text-gray-500">
                    {timetable[day][period].teacher}
                  </p>
                  <p className="text-sm text-gray-500">
                    Room: {timetable[day][period].room}
                  </p>
                  <div className="mt-2 flex justify-center space-x-2">
                    <button
                      className="text-blue-600 hover:text-blue-800"
                      onClick={() => handleEdit(day, period)}
                    >
                      <FaEdit />
                    </button>
                    <button
                      className="text-red-600 hover:text-red-800"
                      onClick={() => handleDelete(day, period)}
                    >
                      <FaTrashAlt />
                    </button>
                  </div>
                </div>
              ) : (
                <p className="text-gray-500">No Class</p>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default TimeTable;
