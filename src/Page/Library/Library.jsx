import React, { useState } from "react";
import {
  FaBook,
  FaEdit,
  FaTrash,
  FaArrowRight,
  FaArrowLeft,
} from "react-icons/fa";

const Library = () => {
  // Example book data
  const books = [
    {
      id: 1,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      genre: "Fiction",
      available: true,
      borrower: null,
      dueDate: null,
    },
    {
      id: 2,
      title: "1984",
      author: "George Orwell",
      genre: "Dystopian",
      available: false,
      borrower: "John Doe",
      dueDate: "2024-09-10",
    },
    // Add more books here
  ];

  const [activeBook, setActiveBook] = useState(null);

  const handleBorrow = (bookId) => {
    // Logic to borrow a book
    console.log(`Borrow book with ID: ${bookId}`);
  };

  const handleReturn = (bookId) => {
    // Logic to return a book
    console.log(`Return book with ID: ${bookId}`);
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Library</h1>
      </div>

      {/* Add New Book Button */}
      <div className="mb-6">
        <button className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700">
          Add New Book
        </button>
      </div>

      {/* Books Table */}
      <div className="bg-white shadow rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Title
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Author
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Genre
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Availability
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Borrower
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Due Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {books.map((book) => (
              <tr key={book.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {book.title}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {book.author}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {book.genre}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {book.available ? "Available" : "Borrowed"}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {book.borrower || "N/A"}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {book.dueDate || "N/A"}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {book.available ? (
                    <button
                      className="text-blue-600 hover:text-blue-900"
                      onClick={() => handleBorrow(book.id)}
                    >
                      Borrow <FaArrowRight className="inline ml-1" />
                    </button>
                  ) : (
                    <button
                      className="text-green-600 hover:text-green-900"
                      onClick={() => handleReturn(book.id)}
                    >
                      Return <FaArrowLeft className="inline ml-1" />
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Library;
