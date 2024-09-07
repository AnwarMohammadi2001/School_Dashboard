import React, { useState } from "react";
import { FaUserEdit, FaTrashAlt, FaSearch, FaPlus } from "react-icons/fa";

const Student = () => {
  const [selectedClass, setSelectedClass] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Sample class and student data
  const classes = [
    { id: 1, name: "Class 10 - Section A" },
    { id: 2, name: "Class 10 - Section B" },
    { id: 3, name: "Class 9 - Section A" },
    { id: 4, name: "Class 9 - Section B" },
    // More classes here
  ];

  const students = {
    1: [
      { id: 1, name: "John Doe", age: 15 },
      { id: 2, name: "Jane Smith", age: 16 },
      { id: 3, name: "Robert Brown", age: 15 },
      // More students for Class 10 - Section A
    ],
    2: [
      { id: 4, name: "Emily Davis", age: 15 },
      { id: 5, name: "Michael Lee", age: 16 },
      // More students for Class 10 - Section B
    ],
    // More students for other classes
  };

  // Filter students by search query
  const filteredStudents = selectedClass
    ? students[selectedClass]?.filter((student) =>
        student.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const handleSelectClass = (classId) => {
    setSelectedClass(classId);
    setSearchQuery("");
  };

  const handleAddStudent = () => {
    console.log("Add new student");
  };

  const handleEditStudent = (studentId) => {
    console.log("Edit student", studentId);
  };

  const handleDeleteStudent = (studentId) => {
    console.log("Delete student", studentId);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Students Management
      </h1>

      {/* Classes List */}
      <div className="mb-6">
        <h2 className="text-2xl text-gray-700 mb-4">Classes</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {classes.map((cls) => (
            <button
              key={cls.id}
              onClick={() => handleSelectClass(cls.id)}
              className={`p-4 border rounded-lg ${
                selectedClass === cls.id
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              {cls.name}
            </button>
          ))}
        </div>
      </div>

      {/* Students Search */}
      {selectedClass && (
        <>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl text-gray-700">
              Students in{" "}
              {classes.find((cls) => cls.id === selectedClass)?.name}
            </h2>

            {/* Search Bar */}
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Search student..."
                className="p-2 border rounded-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700">
                <FaSearch />
              </button>
            </div>

            {/* Add Student Button */}
            <button
              onClick={handleAddStudent}
              className="ml-4 bg-green-600 text-white p-2 rounded-lg hover:bg-green-700"
            >
              <FaPlus /> Add Student
            </button>
          </div>

          {/* Students List */}
          <div className="overflow-auto rounded-lg shadow mb-6">
            <table className="min-w-full bg-white">
              <thead className="bg-gray-100 border-b">
                <tr>
                  <th className="text-left p-4">Name</th>
                  <th className="text-left p-4">Age</th>
                  <th className="text-center p-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredStudents.length > 0 ? (
                  filteredStudents.map((student) => (
                    <tr key={student.id} className="border-b">
                      <td className="p-4">{student.name}</td>
                      <td className="p-4">{student.age}</td>
                      <td className="p-4 text-center flex justify-center space-x-4">
                        <button
                          className="text-blue-600 hover:text-blue-800"
                          onClick={() => handleEditStudent(student.id)}
                        >
                          <FaUserEdit />
                        </button>
                        <button
                          className="text-red-600 hover:text-red-800"
                          onClick={() => handleDeleteStudent(student.id)}
                        >
                          <FaTrashAlt />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3" className="p-4 text-center">
                      No students found for this class.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default Student;
