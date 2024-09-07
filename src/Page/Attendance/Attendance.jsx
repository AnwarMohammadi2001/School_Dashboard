import React, { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";

const Attendance = () => {
  const [attendanceDate, setAttendanceDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [students, setStudents] = useState([
    { id: 1, name: "John Doe", status: "Present" },
    { id: 2, name: "Jane Smith", status: "Absent" },
    { id: 3, name: "Robert Brown", status: "Late" },
    // more students...
  ]);

  const handleStatusChange = (id, status) => {
    setStudents((prev) =>
      prev.map((student) =>
        student.id === id ? { ...student, status } : student
      )
    );
  };

  const handleDateChange = (e) => {
    setAttendanceDate(e.target.value);
  };

  const handleSaveAttendance = () => {
    console.log("Attendance saved:", students);
  };

  const getStatusStyle = (status) => {
    switch (status) {
      case "Present":
        return "text-green-600";
      case "Absent":
        return "text-red-600";
      case "Late":
        return "text-yellow-600";
      default:
        return "";
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Attendance Management
      </h1>

      {/* Attendance Date Picker */}
      <div className="mb-4 flex items-center space-x-4">
        <label className="text-lg text-gray-600">Date:</label>
        <div className="flex items-center space-x-2">
          <FaCalendarAlt className="text-gray-600" />
          <input
            type="date"
            className="p-2 border rounded-lg"
            value={attendanceDate}
            onChange={handleDateChange}
          />
        </div>
      </div>

      {/* Class/Section Filter */}
      <div className="mb-4">
        <label className="text-lg text-gray-600">Select Class/Section:</label>
        <select className="w-full p-2 border rounded-lg">
          <option value="">Class 10 - Section A</option>
          <option value="">Class 10 - Section B</option>
          <option value="">Class 9 - Section A</option>
          {/* More classes/sections */}
        </select>
      </div>

      {/* Students Attendance List */}
      <div className="overflow-auto rounded-lg shadow mb-6">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="text-left p-4">Student Name</th>
              <th className="text-left p-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id} className="border-b">
                <td className="p-4">{student.name}</td>
                <td className="p-4">
                  <select
                    className={`p-2 rounded-lg border ${getStatusStyle(
                      student.status
                    )}`}
                    value={student.status}
                    onChange={(e) =>
                      handleStatusChange(student.id, e.target.value)
                    }
                  >
                    <option value="Present">Present</option>
                    <option value="Absent">Absent</option>
                    <option value="Late">Late</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Attendance Summary */}
      <div className="flex justify-between items-center mb-4">
        <div className="text-lg text-gray-600">
          <p>Total Students: {students.length}</p>
          <p>
            Present: {students.filter((s) => s.status === "Present").length}
          </p>
          <p>Absent: {students.filter((s) => s.status === "Absent").length}</p>
          <p>Late: {students.filter((s) => s.status === "Late").length}</p>
        </div>
        <button
          onClick={handleSaveAttendance}
          className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700"
        >
          Save Attendance
        </button>
      </div>
    </div>
  );
};

export default Attendance;
