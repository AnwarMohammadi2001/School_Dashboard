import React from "react";
import SelectTeacher from "./SelectTeacher";

const TeacherTable = () => {
  const data = [
    { id: 1, name: "John Doe", age: 28, occupation: "Developer" },
    { id: 2, name: "Jane Smith", age: 32, occupation: "Designer" },
    { id: 3, name: "Mark Johnson", age: 25, occupation: "Manager" },
  ];

  return (
    <div className=" py-5">
      <div className="flex justify-between py-2">
        <div>
          <h2 className="text-2xl font-bold text-gray-700">Teachers</h2>
        </div>
        <div>
          <SelectTeacher />
        </div>
      </div>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b text-left">ID</th>
            <th className="px-4 py-2 border-b text-left">Name</th>
            <th className="px-4 py-2 border-b text-left">Age</th>
            <th className="px-4 py-2 border-b text-left">Occupation</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td className="px-4 py-2 border-b">{item.id}</td>
              <td className="px-4 py-2 border-b">{item.name}</td>
              <td className="px-4 py-2 border-b">{item.age}</td>
              <td className="px-4 py-2 border-b">{item.occupation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeacherTable;
