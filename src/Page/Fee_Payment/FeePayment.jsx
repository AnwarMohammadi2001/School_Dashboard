import React, { useState } from "react";
import { FaSearch, FaMoneyBillWave, FaSave, FaHistory } from "react-icons/fa";

const FeePayment = () => {
  const [outstandingFees, setOutstandingFees] = useState([
    { id: 1, student: "John Doe", class: "Class 10 - A", amountDue: 500 },
    { id: 2, student: "Jane Smith", class: "Class 9 - B", amountDue: 300 },
    // More fee data...
  ]);

  const [paymentHistory, setPaymentHistory] = useState([
    { id: 1, student: "John Doe", amountPaid: 500, date: "2024-08-20" },
    { id: 2, student: "Jane Smith", amountPaid: 300, date: "2024-08-25" },
    // More payment history...
  ]);

  const [selectedStudent, setSelectedStudent] = useState("");
  const [amountToPay, setAmountToPay] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleMakePayment = () => {
    console.log("Make payment");
  };

  const filteredFees = outstandingFees.filter((fee) =>
    fee.student.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6">
      {/* Fee Payment Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Fee Payment</h1>

        {/* Search Bar */}
        <div className="flex items-center mb-4">
          <input
            type="text"
            placeholder="Search student..."
            className="p-2 border rounded-lg flex-grow"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="ml-4 bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700">
            <FaSearch />
          </button>
        </div>

        {/* Outstanding Fees Table */}
        <div className="overflow-auto rounded-lg shadow mb-6">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-100 border-b">
              <tr>
                <th className="text-left p-4">Student</th>
                <th className="text-left p-4">Class</th>
                <th className="text-left p-4">Amount Due</th>
                <th className="text-center p-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredFees.length > 0 ? (
                filteredFees.map((fee) => (
                  <tr key={fee.id} className="border-b">
                    <td className="p-4">{fee.student}</td>
                    <td className="p-4">{fee.class}</td>
                    <td className="p-4">${fee.amountDue}</td>
                    <td className="p-4 text-center">
                      <button
                        onClick={() => setSelectedStudent(fee.student)}
                        className="bg-green-600 text-white p-2 rounded-lg hover:bg-green-700"
                      >
                        Pay Fee
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="p-4 text-center">
                    No outstanding fees.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Payment Form */}
      {selectedStudent && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Payment for {selectedStudent}
          </h2>

          <div className="mb-4">
            <label className="block text-lg text-gray-600">
              Amount to Pay:
            </label>
            <input
              type="number"
              value={amountToPay}
              onChange={(e) => setAmountToPay(e.target.value)}
              className="p-2 border rounded-lg w-full"
              placeholder="Enter amount"
            />
          </div>

          <button
            onClick={handleMakePayment}
            className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700"
          >
            <FaMoneyBillWave /> Make Payment
          </button>
        </div>
      )}

      {/* Payment History Section */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Payment History
        </h2>

        {/* Payment History Table */}
        <div className="overflow-auto rounded-lg shadow">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-100 border-b">
              <tr>
                <th className="text-left p-4">Student</th>
                <th className="text-left p-4">Amount Paid</th>
                <th className="text-left p-4">Date</th>
              </tr>
            </thead>
            <tbody>
              {paymentHistory.length > 0 ? (
                paymentHistory.map((payment) => (
                  <tr key={payment.id} className="border-b">
                    <td className="p-4">{payment.student}</td>
                    <td className="p-4">${payment.amountPaid}</td>
                    <td className="p-4">{payment.date}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="p-4 text-center">
                    No payment history available.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FeePayment;
