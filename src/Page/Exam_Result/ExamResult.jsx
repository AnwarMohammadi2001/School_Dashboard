import React, { useState } from "react";
import { FaEdit, FaTrashAlt, FaPlus, FaSave, FaSearch } from "react-icons/fa";

const ExamResult = () => {
  // Exam state
  const [exams, setExams] = useState([
    { id: 1, name: "Math Midterm", date: "2024-09-15", class: "Class 10 - A" },
    { id: 2, name: "Science Final", date: "2024-10-10", class: "Class 9 - B" },
  ]);

  const [selectedExam, setSelectedExam] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([
    { id: 1, student: "John Doe", score: 85 },
    { id: 2, student: "Jane Smith", score: 90 },
    { id: 3, student: "Robert Brown", score: 78 },
  ]);

  const handleAddExam = () => {
    console.log("Add new exam");
  };

  const handleEditExam = (examId) => {
    console.log("Edit exam", examId);
  };

  const handleDeleteExam = (examId) => {
    console.log("Delete exam", examId);
  };

  const handleSelectExam = (examId) => {
    setSelectedExam(examId);
  };

  const handleSaveResults = () => {
    console.log("Results saved:", results);
  };

  const filteredResults = results.filter((result) =>
    result.student.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6">
      {/* Exam Management Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Exam and Result Management
        </h1>

        {/* Add Exam Button */}
        <button
          onClick={handleAddExam}
          className="mb-4 bg-green-600 text-white p-2 rounded-lg hover:bg-green-700"
        >
          <FaPlus /> Add Exam
        </button>

        {/* Exams List */}
        <div className="overflow-auto rounded-lg shadow mb-6">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-100 border-b">
              <tr>
                <th className="text-left p-4">Exam Name</th>
                <th className="text-left p-4">Date</th>
                <th className="text-left p-4">Class</th>
                <th className="text-center p-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {exams.map((exam) => (
                <tr key={exam.id} className="border-b">
                  <td className="p-4">{exam.name}</td>
                  <td className="p-4">{exam.date}</td>
                  <td className="p-4">{exam.class}</td>
                  <td className="p-4 text-center flex justify-center space-x-4">
                    <button
                      className="text-blue-600 hover:text-blue-800"
                      onClick={() => handleEditExam(exam.id)}
                    >
                      <FaEdit />
                    </button>
                    <button
                      className="text-red-600 hover:text-red-800"
                      onClick={() => handleDeleteExam(exam.id)}
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

      {/* Result Management Section */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Manage Results
        </h2>

        {/* Select Exam */}
        <div className="mb-4">
          <label className="text-lg text-gray-600">Select Exam:</label>
          <select
            className="w-full p-2 border rounded-lg"
            onChange={(e) => handleSelectExam(e.target.value)}
          >
            <option value="">-- Select Exam --</option>
            {exams.map((exam) => (
              <option key={exam.id} value={exam.id}>
                {exam.name} - {exam.class}
              </option>
            ))}
          </select>
        </div>

        {/* Search Bar */}
        {selectedExam && (
          <>
            <div className="flex justify-between items-center mb-4">
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

            {/* Results Table */}
            <div className="overflow-auto rounded-lg shadow mb-6">
              <table className="min-w-full bg-white">
                <thead className="bg-gray-100 border-b">
                  <tr>
                    <th className="text-left p-4">Student Name</th>
                    <th className="text-left p-4">Score</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredResults.length > 0 ? (
                    filteredResults.map((result) => (
                      <tr key={result.id} className="border-b">
                        <td className="p-4">{result.student}</td>
                        <td className="p-4">
                          <input
                            type="number"
                            value={result.score}
                            onChange={(e) =>
                              setResults((prevResults) =>
                                prevResults.map((res) =>
                                  res.id === result.id
                                    ? { ...res, score: e.target.value }
                                    : res
                                )
                              )
                            }
                            className="p-2 border rounded-lg"
                          />
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="2" className="p-4 text-center">
                        No students found for this exam.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Save Button */}
            <div className="flex justify-end">
              <button
                onClick={handleSaveResults}
                className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700"
              >
                <FaSave /> Save Results
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ExamResult;
