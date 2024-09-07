import React, { useState } from "react";
import { FaEdit, FaTrashAlt, FaSearch } from "react-icons/fa";

const SubjectPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Sample subject data (can be fetched from API)
  const subjects = [
    { id: 1, name: "Mathematics", teacher: "Mr. Smith", time: "08:00 - 09:00", room: "101" },
    { id: 2, name: "English", teacher: "Ms. Johnson", time: "09:00 - 10:00", room: "102" },
    { id: 3, name: "Science", teacher: "Dr. Brown", time: "10:00 - 11:00", room: "103" },
    { id: 4, name: "History", teacher: "Ms. Clark", time: "11:00 - 12:00", room: "104" },
    // More subjects here
  ];

  // Filter subjects by search query
  const filteredSubjects = subjects.filter(
    (subject) =>
      subject.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      subject.teacher.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleEdit = (id) => {
    console.log("Edit subject", id);
  };

  const handleDelete = (id) => {
    console.log("Delete subject", id);
  };

  const handleAddNewSubject = () => {
    console.log("Add new subject");
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Subject Management</h1>

      {/* Search bar */}
      <div className="flex mb-4">
        <input
          type="text"
          className="w-full p-2 border rounded-lg"
          placeholder="Search by subject or teacher..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="ml-2 bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700">
          <FaSearch />
        </button>
      </div>

      {/* Add New Subject */}
      <button
        onClick={handleAddNewSubject}
        className="mb-4 bg-green-600 text-white p-2 rounded-lg hover:bg-green-700"
      >
        Add New Subject
      </button>

      {/* Subjects Table */}
      <div className="overflow-auto rounded-lg shadow">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="text-left p-4">Subject</th>
              <th className="text-left p-4">Teacher</th>
              <th className="text-left p-4">Time</th>
              <th className="text-left p-4">Room</th>
              <th className="text-center p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredSubjects.map((subject) => (
              <tr key={subject.id} className="border-b">
                <td className="p-4">{subject.name}</td>
                <td className="p-4">{subject.teacher}</td>
                <td className="p-4">{subject.time}</td>
                <td className="p-4">{subject.room}</td>
                <td className="p-4 text-center flex justify-center space-x-4">
                  <button
                    className="text-blue-600 hover:text-blue-800"
                    onClick={() => handleEdit(subject.id)}
                  >
                    <FaEdit />
                  </button>
                  <button
                    className="text-red-600 hover:text-red-800"
                    onClick={() => handleDelete(subject.id)}
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SubjectPage;
